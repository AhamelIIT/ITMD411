const billTotalInput = document.getElementById("billTotal");
const tipPercentageInput = document.getElementById("tipPercentage");
const tipAmountInput = document.getElementById("tipAmount");
const totalWithTipInput = document.getElementById("totalWithTip");
const tipRangeInput = document.getElementById("tipRange");
const errorDiv = document.getElementById("error");

function tipValues() {
    
}

billTotalInput.addEventListener("input", tipValues);
tipRangeInput.addEventListener("input", tipValues);
