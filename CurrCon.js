const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const fromAmountInput = document.getElementById('fromAmount');
const toAmountInput = document.getElementById('toAmount');

fetch('https://api.exchangerate-api.com/v4/latest/USD')
  .then(response => response.json())
  .then(data => {
    const currencies = Object.keys(data.rates);
    currencies.forEach(currency => {
      const option1 = document.createElement('option');
      option1.text = currency;
      option1.value = currency;
      const option2 = document.createElement('option');
      option2.text = currency;
      option2.value = currency;
      fromCurrencySelect.add(option1);
      toCurrencySelect.add(option2);
    });
  });

function convert() {
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const amount = parseFloat(fromAmountInput.value);

  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[toCurrency];
      toAmountInput.value = (amount * rate).toFixed(2);
    });
}
