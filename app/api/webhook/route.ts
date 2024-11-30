import { NextResponse } from 'next/server';
import { ErrorResponse, SolanaSwap, SwapResponse } from '@solxtence/solana-swap';
import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import { privateKeyToAccount } from 'viem/accounts';
import { Chain, createPublicClient, createWalletClient, http, parseAbi, PrivateKeyAccount, PublicClient, WalletClient } from 'viem';
import { base, mainnet, polygon } from 'viem/chains';
import { headers } from 'next/headers';

export const POST = async (req: Request) => {
	try {
		switch (req.method) {
			case 'POST':
				console.log((await headers()).get('x-forwarded-for'));
				console.log(req.headers.get('x-forwarded-for'));
				//console.log(req.headers.get('host'));
				//if (!['3.227.95.35', '34.199.138.158'].includes(req.headers.get('host'))) throw new Error('Unauthorized Call');

				const body:
					| {
							type: string;
							message: string;
							currency: string;
							exchange: string;
					  }
					| {
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
				console.log(body);

				if (!body.currency) throw new Error(`Missing required fields`);

				let tokenAddress: `0x${string}` | string;

				if ('currency_address' in body && 'blockchain' in body) {
					tokenAddress = body.currency_address.toLowerCase();

					console.log('Token Address:', tokenAddress);

					//await buyTokenEVM(tokenAddress, body.blockchain.toLowerCase());
				} else {
					tokenAddress = await getTokenAddress(body.currency);

					console.log('Token Address:', tokenAddress);

					await buyTokenSolana('');
				}

				return NextResponse.json({ message: 'Success' }, { status: 200 });
			default:
				return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
		}
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 200 });
	}
};

const getTokenAddress = async (ticker: string) => {
	try {
		const response = await fetch(`https://api.dexscreener.com/latest/dex/search?q=${ticker}/SOL`);
		const data = await response.json();

		const filtered = data.pairs.filter(
			(pair: any) => pair.chainId === 'solana' && pair.dexId === 'raydium' && pair.baseToken.symbol === ticker,
		);
		const sorted = filtered.sort((a: any, b: any) => b.marketCap - a.marketCap);
		console.log(data, filtered, sorted);

		if (!sorted.length) throw new Error(`No solana token found for ticker: ${ticker}`);

		const token = sorted[0].baseToken.address;
		return token;
	} catch (error: any) {
		console.error('Error while getting the token address:', error.message);
	}
};

// const buyTokenEVM = async (tokenAddress: string, network: string) => {
// 	try {
// 		const networks: Record<string, Chain> = {
// 			base: base,
// 			ethereum: mainnet,
// 			polygon: polygon,
// 		} as const;

// 		const privateKey: `0x${string}` = process.env.EVM_PK as `0x${string}`;
// 		const account: PrivateKeyAccount = privateKeyToAccount(privateKey);
// 		const publicClient: PublicClient = createPublicClient({ chain: networks[network], transport: http() });
// 		const walletClient: WalletClient = createWalletClient({ account: account, chain: networks[network], transport: http() });

// 		// 	const { request } = await publicClient.simulateContract({
// 		// 		account,
// 		// 		address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
// 		// 		abi: parseAbi(['function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
// 		// ]),
// 		// 		functionName: 'swapExactTokensForTokens',
// 		// 		args: [
// 		// 			'1000000000000000000',
// 		// 			'0',
// 		// 			[tokenAddress, '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2'],
// 		// 			account.address,
// 		// 			'9999999999999',
// 		// 		],
// 		// 	});

// 		const txid: `0x${string}` = await walletClient.writeContract(request);

// 		console.log('TX Hash:', txid);
// 		console.log('TX on Explorer:', `${networks[network].blockExplorers?.default.url}/tx/${txid}`);
// 	} catch (error: any) {
// 		console.error('Error while performing the swap:', error.message);
// 	}
// };

// {
// 	type: 'new_coin',
// 	listing_type: 'listing',
// 	message: 'ALL.ME (ME) has been listed on Gate.io!',
// 	currency: 'ME',
// 	currency_name: 'ALL.ME',
// 	trading_pair_url: 'https://www.gate.io/en/trade/ME_USDT',
// 	exchange: 'Gate.io',
// 	alert_condition_id: 2035534,
// 	currency_address: '0x47140a767a861f7a1f3b0dd22a2f463421c28814',
// 	blockchain: 'Ethereum'
//   }

const buyTokenSolana = async (tokenAddress: string) => {
	try {
		const privateKey: string = process.env.SOL_PK || '';
		const keypair: Keypair = Keypair.fromSecretKey(bs58.decode(privateKey));
		const solanaSwap: SolanaSwap = new SolanaSwap(keypair, 'https://api.mainnet-beta.solana.com');

		const swapResponse: SwapResponse | ErrorResponse = await solanaSwap.getSwapInstructions(
			'So11111111111111111111111111111111111111112', // Sol Token
			tokenAddress, // Other Token
			Number(process.env.SOL_AMOUNT), // Sol Amount
			50, // Slippage
			keypair.publicKey.toBase58(), // Trader Address
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

		console.log('TX Hash:', txid);
		console.log('TX on Solscan:', `https://solscan.io/tx/${txid}`);
	} catch (error: any) {
		console.error('Error while performing the swap:', error.message);
	}
};

const a = [
	{
		chainId: 'ethereum',
		dexId: 'uniswap',
		url: 'https://dexscreener.com/ethereum/0xf12533a96712133d9bb97c24de5bcf52f48851bd',
		pairAddress: '0xF12533a96712133d9Bb97C24de5BCf52F48851BD',
		labels: ['v3'],
		baseToken: { address: '0xdd3B11eF34cd511a2DA159034a05fcb94D806686', name: 'Rekt', symbol: 'REKT' },
		quoteToken: { address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', name: 'Wrapped Ether', symbol: 'WETH' },
		priceNative: '0.00000000004093',
		priceUsd: '0.0000001352',
		txns: {
			m5: { buys: 11, sells: 3 },
			h1: { buys: 111, sells: 106 },
			h6: { buys: 1255, sells: 958 },
			h24: { buys: 1334, sells: 972 },
		},
		volume: { h24: 4473489.27, h6: 3905896.51, h1: 519320.36, m5: 22658.03 },
		priceChange: { m5: 1.07, h1: 0.51, h6: -39.89, h24: 0.57 },
		liquidity: { usd: 1791162.58, base: 4027788923121, quote: 377.2097 },
		fdv: 56898502,
		marketCap: 56898502,
		pairCreatedAt: 1732269647000,
		info: {
			imageUrl: 'https://dd.dexscreener.com/ds-data/tokens/ethereum/0xdd3b11ef34cd511a2da159034a05fcb94d806686.png?key=f5f72e',
			header: 'https://dd.dexscreener.com/ds-data/tokens/ethereum/0xdd3b11ef34cd511a2da159034a05fcb94d806686/header.png?key=f5f72e',
			openGraph:
				'https://cdn.dexscreener.com/token-images/og/ethereum/0xdd3b11ef34cd511a2da159034a05fcb94d806686?timestamp=1732291500000',
			websites: [{ label: 'Website', url: 'https://rektcoin.com' }],
			socials: [
				{ type: 'twitter', url: 'https://x.com/rektcoin' },
				{ type: 'telegram', url: 'https://t.me/rektbrands' },
				{ type: 'discord', url: 'https://discord.com/invite/rektguynft' },
			],
		},
	},
	{
		chainId: 'ethereum',
		dexId: 'uniswap',
		url: 'https://dexscreener.com/ethereum/0x38518c3faed1b856cf8acfe84a367468832ec3cf',
		pairAddress: '0x38518C3fAeD1b856CF8acfe84A367468832eC3CF',
		labels: ['v3'],
		baseToken: { address: '0xdd3B11eF34cd511a2DA159034a05fcb94D806686', name: 'Rekt', symbol: 'REKT' },
		quoteToken: { address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', name: 'Wrapped Ether', symbol: 'WETH' },
		priceNative: '340256786540651493917091211303512565200.8163',
		priceUsd: '1145186883319460269868631023614142801491982.0035',
		txns: { m5: { buys: 0, sells: 0 }, h1: { buys: 0, sells: 0 }, h6: { buys: 0, sells: 0 }, h24: { buys: 1, sells: 0 } },
		volume: { h24: 80659.4, h6: 0, h1: 0, m5: 0 },
		priceChange: { m5: 0, h1: 0, h6: 0, h24: 0 },
		pairCreatedAt: 1732269419000,
		info: {
			imageUrl: 'https://dd.dexscreener.com/ds-data/tokens/ethereum/0xdd3b11ef34cd511a2da159034a05fcb94d806686.png?key=f5f72e',
			header: 'https://dd.dexscreener.com/ds-data/tokens/ethereum/0xdd3b11ef34cd511a2da159034a05fcb94d806686/header.png?key=f5f72e',
			openGraph:
				'https://cdn.dexscreener.com/token-images/og/ethereum/0xdd3b11ef34cd511a2da159034a05fcb94d806686?timestamp=1732291500000',
			websites: [{ label: 'Website', url: 'https://rektcoin.com' }],
			socials: [
				{ type: 'twitter', url: 'https://x.com/rektcoin' },
				{ type: 'telegram', url: 'https://t.me/rektbrands' },
				{ type: 'discord', url: 'https://discord.com/invite/rektguynft' },
			],
		},
	},
];
