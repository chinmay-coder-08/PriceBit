// Function to fetch exchangerate from API
const apiUrlexchangerate = "https://api.frankfurter.app/latest?from=USD";
let exchangeRate;
async function fetchExchangeRate() {
  try {
    const response = await fetch(apiUrlexchangerate);
    const data = await response.json();
    exchangeRate = data.rates.INR;
    console.log("1 USD = ₹", exchangeRate, );
  } catch (error) {
    console.error('Error fetching exchangerate:', error);
    return null;
  }
}

// Function to convert a number into Indian numbering system

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


// Fetching CryptoData

const options = {
  headers: {
    'x-access-token': 'coinrankingcefebfe99352bc00f637a12ffa1dfa67f2420b578c110d62',
  },
};
// Function to fetch Bitcoin Price

let bitcoinpriceinusd;
let bitcoinpriceinInr;
async function getbitcoinprice() {
  try {
    const response = await fetch("https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price", options);
    const data = await response.json();
    bitcoinpriceinusd = data.data.price;
  } catch (error) {
    console.error('Error fetching only Bitcoin price:', error);
  }
}

async function displaybitcoinprice() {
  await getbitcoinprice();
  await fetchExchangeRate();
  if (bitcoinpriceinusd && exchangeRate) {
    bitcoinpriceinInr = formatToIndianNumberingSystem(parseFloat(bitcoinpriceinusd * exchangeRate).toFixed(2));
    const bitcoinpricetext = document.getElementsByClassName("bitcoinpricetext")[0];
    bitcoinpricetext.innerHTML = `₹${bitcoinpriceinInr}`;
  } else {
    console.error('Failed to fetch Bitcoin price or exchange rate.');
  }
}

// Function to fetch Etherum Price

let ethereumpriceininr;
let ethereumpriceusd;
async function getethereumprice() {
  try {
    const response = await fetch("https://api.coinranking.com/v2/coin/razxDUgYGNAdQ/price", options);
    const data = await response.json();
    ethereumpriceusd = data.data.price;
  } catch (error) {
    console.error('Error fetching only Etherum price:', error);
  }
}

async function displayetherumprice() {
  await getethereumprice();
  await fetchExchangeRate();
  if (ethereumpriceusd && exchangeRate) {
    ethereumpriceininr = formatToIndianNumberingSystem(parseFloat(ethereumpriceusd * exchangeRate).toFixed(2));
    const ethereumpricetext = document.getElementsByClassName("ethereumpricetext")[0];
    ethereumpricetext.innerHTML = `₹${ethereumpriceininr}`;
  } else {
    console.error('Failed to fetch Etherum price or exchange rate.');
  }
}

// Function to fetch Dogecoin Price

let dogecoinpriceininr;
let dogecoinpriceusd;
async function getdogecoinprice() {
  try {
    const response = await fetch("https://api.coinranking.com/v2/coin/a91GCGd_u96cF/price", options);
    const data = await response.json();
    dogecoinpriceusd = data.data.price;
  } catch (error) {
    console.error('Error fetching only Dogecoin price:', error);
  }
}

async function displaydogecoinprice() {
  await getdogecoinprice();
  await fetchExchangeRate();
  if (dogecoinpriceusd && exchangeRate) {
    dogecoinpriceininr = formatToIndianNumberingSystem(parseFloat(dogecoinpriceusd * exchangeRate).toFixed(2));
    const dogecoinpricetext = document.getElementsByClassName("dogecoinpricetext")[0];
    dogecoinpricetext.innerHTML = `₹${dogecoinpriceininr}`;
  } else {
    console.error('Failed to fetch Dogecoin price or exchange rate.');
  }
}

// Function to fetch Solana Price

let solanapriceininr;
let solanapriceusd;
async function getsolanaprice() {
  try {
    const response = await fetch("https://api.coinranking.com/v2/coin/zNZHO_Sjf/price", options);
    const data = await response.json();
    solanapriceusd = data.data.price;
  } catch (error) {
    console.error('Error fetching only Solana price', error);
  }
}

async function displaysolanaprice() {
  await getsolanaprice();
  await fetchExchangeRate();
  if (solanapriceusd && exchangeRate) {
    solanapriceininr = formatToIndianNumberingSystem(parseFloat(solanapriceusd * exchangeRate).toFixed(2));
    const solanapricetext = document.getElementsByClassName("solanapricetext")[0];
    solanapricetext.innerHTML = `₹${solanapriceininr}`;
  } else {
    console.error('Failed to fetch Solana price or exchange rate.');
  }
}

// Function to fetch Avalanche Price

let avalanchepriceininr;
let avalanchepriceusd;
async function getavalancheprice() {
  try {
    const response = await fetch("https://api.coinranking.com/v2/coin/dvUj0CzDZ/price", options);
    const data = await response.json();
    avalanchepriceusd = data.data.price;
  } catch (error) {
    console.error('Error fetching only Avalanche price:', error);
  }
}

async function displayavalancheprice() {
  await getavalancheprice();
  await fetchExchangeRate();
  if (avalanchepriceusd && exchangeRate) {
    avalanchepriceininr = formatToIndianNumberingSystem(parseFloat(avalanchepriceusd * exchangeRate).toFixed(2));
    const avalanchepricetext = document.getElementsByClassName("avalanchepricetext")[0];
    avalanchepricetext.innerHTML = `₹${avalanchepriceininr}`;
  } else {
    console.error('Failed to fetch Avalanche price or exchange rate.');
  }
}

// Function to fetch Tether Price

let tetherpriceininr;
let tetherpriceusd;
async function gettetherprice() {
  try {
    const response = await fetch("https://api.coinranking.com/v2/coin/HIVsRcGKkPFtW/price", options);
    const data = await response.json();
    tetherpriceusd = data.data.price;
  } catch (error) {
    console.error('Error fetching only Tether price:', error);
  }
}

async function displaytetherprice() {
  await gettetherprice();
  await fetchExchangeRate();
  if (tetherpriceusd && exchangeRate) {
    tetherpriceininr = formatToIndianNumberingSystem(parseFloat(tetherpriceusd * exchangeRate).toFixed(2));
    const tetherpricetext = document.getElementsByClassName("tetherpricetext")[0];
    tetherpricetext.innerHTML = `₹${tetherpriceininr}`;
  } else {
    console.error('Failed to fetch Tether price or exchange rate.');
  }
}

// Call all the display functions

displayetherumprice()
displaybitcoinprice();
displaydogecoinprice()
displaysolanaprice()
displayavalancheprice()
displaytetherprice()