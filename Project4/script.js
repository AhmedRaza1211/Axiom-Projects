// function calculate() {
//     // fetch ke zaria request bejdi ke items.json chahia aur is ke bad bhol jye ga jub response aye ga tub jage ga ke ab kia karna he jub Data ajye ga to hum kare use (then) ke ab ap ye karo
//     // fetch('items.json').then(res => console.log(res));
//     fetch('items.json')                                   // promise kerta he ke me data bejo ga
//     .then(res => res.json())                      // promise aye ga data hoga us se deal kare ga
//     .then(data => document.body.innerHTML = data[0].text);    // phir receive ke bad data show kare ga
// };

// calculate();


// Get DOM elements
const currencyOne = document.getElementById('currency-one');
const amountCurrencyOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountCurrencyTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch Exchange Rates and update the DOM
function calculate() {
    console.log('success');
    // Get the Currency code for currency 1 and 2
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;
    // console.log(currencyOneCode, currencyTwoCode);

    // Send Request to ExchangeRate-Api for conversion rates for Currency One
    // fetch(`https://v6.exchangerate-api.com/v6/27e3895300fb0118b7acad46/pair/${currencyOneCode}/${currencyTwoCode}`)
    // .then(res => res.json())
    // .then(data => console.log(data));

    fetch(`https://v6.exchangerate-api.com/v6/27e3895300fb0118b7acad46/pair/${currencyOneCode}/${currencyTwoCode}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.conversion_rate);
        // Get the conversion rate from Currency One to Currency Two
        const conversionRate = data.conversion_rate;

        // Update the DOM to display the conversion rate
        rate.innerText = `1 ${currencyOneCode} = ${conversionRate} ${currencyTwoCode}`; 

        // Update the currency two amount 
        amountCurrencyTwo.value = (amountCurrencyOne.value * conversionRate).toFixed(2);

        // // Formatting Currency Two Amount
        // const amount2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyTwoCode }).format((amountCurrencyOne.value * conversionRate).toFixed(2));
        // // Updating DOM
        // amountCurrencyTwo.value = amount2;
    });

       
};

// Event Listeners

// Recalculate exchange rate when currency 1 changes
currencyOne.addEventListener('change', calculate);
// Recalculate exchange amount when currency 1 amount changes
amountCurrencyOne.addEventListener('input', calculate);

// Recalculate exchange rate when currency 2 changes
currencyTwo.addEventListener('change', calculate);
// Recalculate exchange amount when currency 2 amount changes
amountCurrencyTwo.addEventListener('input', calculate);

// swap.addEventListener('click', () => {
//     // Save value of currency one code to temp variable
//     const temp = currencyOne.value;
//     // Copy currency Two code to Currency One
//     currencyOne.value = currencyTwo.value;
//     // Copy currency one code from temp to Currency Two
//     currencyTwo.value = temp;
// });

swap.addEventListener('click', () => {
    // Save Value of Currency One Code to temp variable
    const temp = currencyOne.value;
    // Copy Currency Two Code to Currency One
    currencyOne.value = currencyTwo.value;
    // Copy Currency One Code from temp variable to Currency Two
    currencyTwo.value = temp;
    // Recalculate exchange rate after swap
    calculate();
})



// Execute function on page load
calculate();
