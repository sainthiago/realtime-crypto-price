import fetchMock from "fetch-mock";
import { getCryptoPrice, ChainSymbols } from "./../index";

describe("getCryptoPrice", () => {
  it("returns data", async () => {
    const { price } = await getCryptoPrice(ChainSymbols.NEAR);
    expect(price).toBeDefined();
  });

  it("returns errors", async () => {
    const { error } = await getCryptoPrice(ChainSymbols.NEAR);
    expect(error).toBeDefined();
  });
});
