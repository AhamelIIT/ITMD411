const billTotalInput = document.getElementById("billTotal");
const tipPercentageInput = document.getElementById("tipPercentage");
const tipAmountInput = document.getElementById("tipAmount");
const totalWithTipInput = document.getElementById("totalWithTip");
const tipRangeInput = document.getElementById("tipRange");
const errorDiv = document.getElementById("error");

function tipValues() {
    const billTotal = parseFloat(billTotalInput.value);
    const tipPercentage = tipRangeInput.value;
    
    if (isNaN(billTotal)) {
        errorDiv.textContent = "Please enter a valid number for Bill Total.";
        tipPercentageInput.value = "";
        tipAmountInput.value = "";
        totalWithTipInput.value = "";
    } else {
        errorDiv.textContent = "";
        tipPercentageInput.value = tipPercentage + "%";
        const tipAmount = (billTotal * tipPercentage) / 100;
        tipAmountInput.value = "$" +  tipAmount.toFixed(2);
        totalWithTipInput.value = "$" + (billTotal + tipAmount).toFixed(2); // Add the "$" here
    }
}

billTotalInput.addEventListener("input", tipValues);
tipRangeInput.addEventListener("input", tipValues);
