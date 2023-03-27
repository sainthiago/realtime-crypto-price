import { ChainSymbols } from "../types/symbols";
export declare const getCryptoPrice: (symbol: ChainSymbols) => Promise<{
    price?: string;
    error?: string;
}>;
