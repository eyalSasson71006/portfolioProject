// Get elements from the DOM
const fromCurrency = document.getElementById("fromCurrency")
const toCurrency = document.getElementById("toCurrency")
const amountInput = document.getElementById("amountInput")
const convert = document.getElementById("convert")
const swap = document.getElementById("swap")
const result = document.getElementById("result")

const apiKey = "00f09fed5df6e53bdbc21789"

// fill in all the currencies codes
async function getCurrencyCodes() {
    try {
        let data = await (await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)).json();
        let codes = (data.supported_codes);
        let codsArr = codes.map(code => code[0]);
        codsArr.forEach(code => {
            fromCurrency.innerHTML += `<option value="${code}">${code}</option>`;
            toCurrency.innerHTML += `<option value="${code}">${code}</option>`;
        });
    } catch (error) {
        alert("Error, please check your internet connection and try again.")
    }
    
}

// exchange the given amount between the currencies provides and display the result 
async function exchange(amount, from, to) {
    try {
        let data = await (await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`)).json();
        if (data.conversion_result) {
            result.innerText = `${data.conversion_result} ${getCurrencySymbol(to)}`;
        } else {
            result.innerText = "Please fill all fields";
        }
    } catch (error) {
        alert("Error, please check your internet connection and try again.")
    }
    

}

// provide currency symbol 
function getCurrencySymbol(currency) {
    return (0).toLocaleString(
        'en-US',
        {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }
    ).replace(/\d/g, '').trim();
}


convert.addEventListener("click", ()=>{
    exchange(amountInput.value, fromCurrency.value, toCurrency.value)
})

// swap from and to inputs
swap.addEventListener("click", ()=>{
    let temp
    temp = fromCurrency.value
    fromCurrency.value = toCurrency.value
    toCurrency.value = temp
    exchange(amountInput.value, fromCurrency.value, toCurrency.value);
})

// convert with a click on the enter key
document.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("convert").click();
    }
});

getCurrencyCodes();
