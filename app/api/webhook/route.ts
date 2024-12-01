import { NextResponse } from 'next/server';

import { ErrorResponse, SolanaSwap, SwapResponse } from '@solxtence/solana-swap';
import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';

import {
	Chain,
	createPublicClient,
	createWalletClient,
	http,
	parseAbi,
	parseEther,
	PrivateKeyAccount,
	PublicClient,
	WalletClient,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { mainnet } from 'viem/chains';

export const POST = async (req: Request) => {
	try {
		switch (req.method) {
			case 'POST':
				console.log('IP: ' + req.headers.get('x-forwarded-for'));

				if (!['3.227.95.35', '34.199.138.158'].includes(req.headers.get('x-forwarded-for') || ''))
					throw new Error('Unauthorized Call');

				const body: {
					type: string;
					listing_type: string;
					message: string;
					currency: string;
					currency_name: string;
					trading_pair_url: string;
					exchange: string;
					alert_condition_id: number;
					currency_address: `0x${string}` | string;
					blockchain: string;
				} = await req.json();

				console.log(
					`Token: ${body.currency_name} (${body.currency})\nAddress: ${body.currency_address}\nBlockchain: ${body.blockchain}`,
				);

				if (!body.currency_address || !body.blockchain) throw new Error(`Missing required fields`);

				const tokenAddress: `0x${string}` | string = body.currency_address;
				const blockchain: string = body.blockchain.toLowerCase();

				switch (blockchain) {
					case 'solana':
						await buyTokenSolana(tokenAddress);
						break;
					case 'ethereum':
						await buyTokenEVM(tokenAddress as `0x${string}`, 'ethereum');
						break;
				}

				return NextResponse.json({ message: 'Success' }, { status: 200 });
			default:
				return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
		}
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 200 });
	}
};

const buyTokenSolana = async (tokenAddress: string) => {
	try {
		const privateKey: string = process.env.SOL_PK || '';
		const keypair: Keypair = Keypair.fromSecretKey(bs58.decode(privateKey));
		const solanaSwap: SolanaSwap = new SolanaSwap(keypair, 'https://api.mainnet-beta.solana.com');

		const swapResponse: SwapResponse | ErrorResponse = await solanaSwap.getSwapInstructions(
			'So11111111111111111111111111111111111111112',
			tokenAddress,
			Number(process.env.SOL_AMOUNT),
			Number(process.env.SOL_SLIPPAGE || '1'),
			keypair.publicKey.toBase58(),
			0.0025, // Priority fee
			0.0025, // Jito Tip
		);

		const txid: string = await solanaSwap.performSwap(swapResponse as SwapResponse, {
			sendConfig: { skipPreflight: true },
			maxConfirmationAttempts: 30,
			confirmationTimeout: 500,
			commitmentLevel: 'processed',
			useJito: true,
		});

		console.log('TX on Solscan:', `https://solscan.io/tx/${txid}`);
	} catch (error: any) {
		console.error('Error while performing the swap:', error.message);
	}
};

const buyTokenEVM = async (tokenAddress: `0x${string}`, network: string) => {
	try {
		const networks: Record<string, { chain: Chain; weth: `0x${string}`; uniswap: `0x${string}` }> = {
			ethereum: {
				chain: mainnet,
				weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
				uniswap: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
			},
		} as const;

		const privateKey: `0x${string}` = process.env.EVM_PK as `0x${string}`;
		const account: PrivateKeyAccount = privateKeyToAccount(privateKey);
		const publicClient: PublicClient = createPublicClient({ chain: networks[network].chain, transport: http() });
		const walletClient: WalletClient = createWalletClient({ account: account, chain: networks[network].chain, transport: http() });

		const evmAmount: bigint = parseEther(process.env.EVM_AMOUNT || '0');

		const expectedAmountOut: readonly bigint[] = await publicClient.readContract({
			address: networks[network].uniswap,
			abi: parseAbi(['function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)']),
			functionName: 'getAmountsOut',
			args: [evmAmount, [networks[network].weth, tokenAddress]],
		});

		const amountOutMin: bigint =
			(expectedAmountOut[1] * BigInt(100) * (BigInt(100) - BigInt(process.env.EVM_SLIPPAGE || '1'))) / BigInt(10000);

		const { request: swap } = await publicClient.simulateContract({
			account,
			address: networks[network].uniswap,
			abi: parseAbi([
				'function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)',
			]),
			functionName: 'swapExactETHForTokens',
			args: [amountOutMin, [networks[network].weth, tokenAddress], account.address, BigInt(Math.floor(Date.now() / 1000) + 60)],
			value: evmAmount,
			gasPrice: await publicClient.getGasPrice(),
			gas: BigInt(300000),
		});

		const txid: `0x${string}` = await walletClient.writeContract(swap);

		console.log('TX on Explorer:', `${networks[network].chain.blockExplorers?.default.url}/tx/${txid}`);
	} catch (error: any) {
		console.error('Error while performing the swap:', error.message);
	}
};
