import React, { useState } from "react";

const FetchAPI = () => {
  const [coins, setCoins] = useState([]);

  const fetchData = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      // how we handle the data being pulled from API
      .then((response) => {
        return response.json();
      }) // after getting data, this function turns it into JSON
      .then((response) => {
        console.log(response);
        setCoins(response);
      })

      //What happens if the call is rejected
      .catch((error) => {
        console.log("This is a catch error: ", error);
      });
    console.log("waiting but doing another task");
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

export default FetchAPI;
