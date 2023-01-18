import React from "react";
import { useState } from "react";
import axios from "axios";

const AxiosCrypto = () => {
  const [coins, setCoins] = useState([]);
  const fetchData = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log("This is my .then function", res.data);
        setCoins(res.data);
      })
      .catch((err) => {
        console.log("This is my .catch function", err);
      });
    console.log("running before promise recieves data");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-5">
        <h1>FetchAPI</h1>
        <button onClick={fetchData}>Get data</button>
      </div>
      {coins.map((c, i) => {
        return (
          <div key={i}>
            <div className="row justify-content-center">
              <div className="col-5 m-3">
                <br />
                <img src={c.image} alt="symbol" width="100px" />
                <h1>{c.name}</h1>
                <h2>Symbol: {c.symbol.toUpperCase()}</h2>
                <h3>Current Price: ${c.current_price}</h3>
                <br />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AxiosCrypto;
