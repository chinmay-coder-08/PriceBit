const options = {
    headers: {
      'x-access-token': 'coinrankingcefebfe99352bc00f637a12ffa1dfa67f2420b578c110d62',
    },
  };
  
  fetch('https://api.coinranking.com/v2/coins', options)
    .then((response) => response.json())
    .then((result) => console.log(result));