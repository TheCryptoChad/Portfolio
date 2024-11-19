import { NextResponse } from 'next/server';
import { SolanaSwap, SwapResponse } from '@solxtence/solana-swap';
import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';

export const POST = async (req: Request) => {
	try {
		switch (req.method) {
			case 'POST':
				console.log(req.url)
				const body = await req.json();
				//console.log(body);

				// if (!body.type || !body.currency || !body.exchange)
				// 	throw new Error(`Missing required fields: ${body.alert} - ${body.message}`);

				// const token = body?.token_address ?? (await getTokenAddress(body.currency));
				// console.log('Token Address:', token);

				// await buyToken(token);

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

		if (!sorted.length) throw new Error(`No solana token found for ticker: ${ticker}`);

		const token = sorted[0].baseToken.address;
		return token;
	} catch (error: any) {
		console.error('Error while getting the token address:', error.message);
	}
};

const buyToken = async (token: string) => {
	try {
		const privateKey = process.env.PK ?? '';
		const keypair = Keypair.fromSecretKey(bs58.decode(privateKey));
		const solanaSwap = new SolanaSwap(keypair, 'https://api.mainnet-beta.solana.com');

		const swapResponse = await solanaSwap.getSwapInstructions(
			'So11111111111111111111111111111111111111112', // Sol Token
			token, // Other Token
			Number(process.env.SOL_AMOUNT), // Sol Amount
			50, // Slippage
			keypair.publicKey.toBase58(), // Trader Address
			0.0025, // Priority fee
			0.0025, // Jito Tip
		);

		const txid = await solanaSwap.performSwap(swapResponse as SwapResponse, {
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
