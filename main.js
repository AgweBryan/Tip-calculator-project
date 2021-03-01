// Getting all input fields by their class names
let billAmount = document.querySelector(".billAmount");
let tipPercentage = document.querySelector(".tipPercentage");
let tipAmount = document.querySelector(".tipAmount");
let totalBill = document.querySelector(".totalBill");
let form = document.querySelector("form");

// Adding event listener for the form
form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Calculating tip amount
	tipAmount.value = billAmount.value / tipPercentage.value;

	// Calculating total BillAmount
	totalBill.value = parseFloat(tipAmount.value) + parseFloat(billAmount.value);
});
