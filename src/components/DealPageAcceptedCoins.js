import React from 'react';
import uuid from 'uuid';

const DealPageAcceptedCoins = ({ coins, dealCoins }) => {
  let coinsAndLogos = coins.filter((coin) => Object.keys(dealCoins).includes(coin.coin));
  return (
    <div className="content-container">
      <div className="dealpage-container-info">
        <h2 className="dealpage-header__subtitle">Accepted here:</h2>
        <div className="acceptedCoins-container">
        {coinsAndLogos.map(coinAndlogo => 
          <div className="coin-container" key={uuid()}>
            <img className="coin__logo" src={coinAndlogo.logo} />
            <p className="coin__name">{coinAndlogo.coin}</p>
          </div>  
        )}
        </div>
      </div>
    </div>
  );

};

export default DealPageAcceptedCoins;