/*
 * Zomato Authorization
*/

const zomatoAuth = {
  method: 'get',
  headers: new Headers({
    accept: 'application/json',
    'user-key': process.env.ZOMATO_API_KEY 
  })
};

export default zomatoAuth; 