import React from 'react';
import uuid from 'uuid';

const DealPageAcceptedCoins = ({ coins, dealCoins }) => {
  let coinsAndLogos = coins.filter((coin) => Object.keys(dealCoins).includes(coin.coin));
  return (
    <div>
      <h2>Accepted here:</h2>
      {coinsAndLogos.map(coinAndlogo => 
        <div key={uuid()}>
          <img  src={coinAndlogo.logo} />
          <p>{coinAndlogo.coin}</p>
        </div>  
      )}
    </div>
  );

};

export default DealPageAcceptedCoins;