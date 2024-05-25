const apiUrl = "https://api.frankfurter.app/latest?from=USD";
// Function to fetch data from API
let exchangeRate;
async function fetchExchangeRate() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    exchangeRate = data.rates.INR;
    console.log("Exchangerate is",exchangeRate);
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

const options = {
  headers: {
    'x-access-token': 'coinrankingcefebfe99352bc00f637a12ffa1dfa67f2420b578c110d62',
  },
};

let bitcoinpriceinusd;
async function getbitcoinprice() {
  try {
    const response = await fetch("https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price", options);
    const data = await response.json();
    bitcoinpriceinusd = data.data.price;
    // console.log("Bitcoinpriceinusd is" ,bitcoinpriceinusd);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function formatToIndianNumberingSystem(number) {
  let [integerPart, decimalPart] = number.split('.');
  let lastThreeDigits = integerPart.slice(-3);
  let otherDigits = integerPart.slice(0, -3);

  if (otherDigits !== '') {
    lastThreeDigits = ',' + lastThreeDigits;
  }

  let formattedIntegerPart = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThreeDigits;

  return decimalPart ? formattedIntegerPart + '.' + decimalPart : formattedIntegerPart;
}

let bitcoinpriceinInr;
async function displaybitcoinprice() {
  await getbitcoinprice();
  await fetchExchangeRate();
  if (bitcoinpriceinusd && exchangeRate) {
    bitcoinpriceinInr = formatToIndianNumberingSystem(parseFloat(bitcoinpriceinusd * exchangeRate).toFixed(2));
    console.log("Bitcoinpriceininr is ",bitcoinpriceinInr);
    const bitcoinpricetext = document.getElementsByClassName("bitcoinpricetext")[0];
    bitcoinpricetext.innerHTML = `₹${bitcoinpriceinInr}`;
  } else {
    console.error('Failed to fetch Bitcoin price or exchange rate.');
  }
}
let ethereumpriceininr;
let ethereumpriceusd;
async function getethereumprice() {
  try {
    const response = await fetch("https://api.coinranking.com/v2/coin/razxDUgYGNAdQ/price", options);
    const data = await response.json();
    ethereumpriceusd = data.data.price;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function displayetherumprice() {
  await getethereumprice();
  await fetchExchangeRate();
  if (ethereumpriceusd && exchangeRate) {
    ethereumpriceininr = formatToIndianNumberingSystem(parseFloat(ethereumpriceusd * exchangeRate).toFixed(2));
    const ethereumpricetext = document.getElementsByClassName("ethereumpricetext")[0];
    ethereumpricetext.innerHTML = `₹${ethereumpriceininr}`;
   console.log("Ethereumpriceininr is ", ethereumpriceininr);
  } else {
    console.error('Failed to fetch Etherum price or exchange rate.');
  }
}
const bitcoinpricebtn = document.getElementsByClassName("bitcoinpricebtn")[0];

displayetherumprice()
// Initialize display on load
displaybitcoinprice();

// // Other elements for future use
// const ethereumpricetext = document.getElementsByClassName("ethereumpricetext")[0];
// const dogecoinpricetext = document.getElementsByClassName("dogecoinpricetext")[0];
// const solanapricetext = document.getElementsByClassName("solanapricetext")[0];
// const binancepricetext = document.getElementsByClassName("binancepricetext")[0];
// const tetherpricetext = document.getElementsByClassName("tetherpricetext")[0];

// console.log(bitcoinpricetext, ethereumpricetext, dogecoinpricetext, solanapricetext, binancepricetext, tetherpricetext);
