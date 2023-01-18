import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectAxios = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log("this is my then function", res.data);
      })
      .catch((err) => {
        console.log("This is my catch function", err);
      });
  }, []); // [] dependancy array which will tell the hook to stop fetching data
  return (
    <div className="row justify-content-center">
      <h1>Axios USE EFFECT</h1>
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

export default UseEffectAxios;
