![Licence](https://img.shields.io/badge/license-MIT-blue.svg) [![npm version](https://img.shields.io/npm/v/realtime-crypto-price.svg?style=flat)](https://www.npmjs.com/package/realtime-crypto-price)
[![Downloads](https://img.shields.io/npm/dt/realtime-crypto-price.svg)](https://www.npmjs.com/package/realtime-crypto-price)

# realtime-crypto-price

Fetchs the price of crypto in USDT from Binance API.

## Installation

`npm i realtime-crypto-price`

## Live Demo

https://codesandbox.io/s/realtime-crypto-price-example-3r2lyo

## Example

```javascript
import "./styles.css";
import { ChainSymbols, getCryptoPrice } from "realtime-crypto-price";
import { useEffect, useState } from "react";

export default function App() {
  const [nearPrice, setNearPrice] = useState(false);
  const getNearPrice = async () => {
    const res = await getCryptoPrice(ChainSymbols.NEAR);
    setNearPrice(res);
  };

  useEffect(() => {
    getNearPrice();
  }, []);

  return (
    <div className="App">
      <h1>realtime-crypto-price</h1>
      <p>Current NEAR Price: {nearPrice} $</p>
    </div>
  );
}
```

## API

| Property | Type    | Description         |
| :------- | :------ | :------------------ |
| wallet   | string  | Wallet name.        |
| rpc      | NearRPC | TESTNET or MAINNET. |
