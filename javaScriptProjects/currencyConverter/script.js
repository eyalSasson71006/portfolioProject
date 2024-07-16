const fromCurrency = document.getElementById("fromCurrency")
const toCurrency = document.getElementById("toCurrency")
const amountInput = document.getElementById("amountInput")
const convert = document.getElementById("convert")
const swap = document.getElementById("swap")
const result = document.getElementById("result")

const apiKey = "00f09fed5df6e53bdbc21789"


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

async function exchange(amount, from, to) {
    try {
        let data = await (await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`)).json();
        if (data.conversion_result) {
            result.innerText = data.conversion_result;
        } else {
            result.innerText = "Please fill all fields";
        }
    } catch (error) {
        alert("Error, please check your internet connection and try again.")
    }
    

}
convert.addEventListener("click", ()=>{
    exchange(amountInput.value, fromCurrency.value, toCurrency.value)
})

swap.addEventListener("click", ()=>{
    let temp
    temp = fromCurrency.value
    fromCurrency.value = toCurrency.value
    toCurrency.value = temp
    exchange(amountInput.value, fromCurrency.value, toCurrency.value);
})


getCurrencyCodes();
