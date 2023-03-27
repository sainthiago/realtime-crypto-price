import { getCryptoPrice, ChainSymbols } from "./../index";

describe("getCryptoPrice", () => {
  jest.spyOn(console, "error").mockImplementation(() => null);
  test("returns price", async () => {
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve({ price: "1490000" }),
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetch);

    const priceData = await getCryptoPrice(ChainSymbols.NEAR);

    expect(priceData?.price).toEqual("1490000");
  });

  test("returns error", async () => {
    const mockFetch = Promise.resolve({
      json: () => Promise.resolve({ error: "Error fetching price." }),
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetch);

    const priceData = await getCryptoPrice(ChainSymbols.NEAR);

    expect(priceData).toEqual({ error: "Error fetching price." });
  });
});
