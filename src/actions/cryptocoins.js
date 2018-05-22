import database from '../firebase/firebase';

// SET_CRYPTOCOINS
export const setCryptocoins = (coins) => ({
  type: 'SET_CRYPTOCOINS',
  coins
});

export const startSetCryptocoins = () => {
  return (dispatch) => {
    return database.ref('cryptocurrencies')
      .once('value')
      .then((snapshot) => {
        const coins = [];

        snapshot.forEach((childSnapshot) => {
          coins.push({
            coin: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setCryptocoins(coins));
      });
  };
};