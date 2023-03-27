import { ChainSymbols } from "../types/symbols";

export const getCryptoPrice = async (
  symbol: ChainSymbols
): Promise<{ price?: string; error?: string }> => {
  const priceData = await fetch(
    `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`
  );

  const priceError = { error: "Error fetching price." };

  try {
    const response = await priceData.json();
    if (response?.error) {
      return priceError;
    }
    return { price: response.price };
  } catch (error) {
    return priceError;
  }
};
