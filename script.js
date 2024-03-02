const convertButton = document.getElementById("convert-button");
const resetButton = document.getElementById("reset-button");
const celciusEl = document.getElementById("Celcius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");
const resultEl = document.getElementById("result");

convertButton.addEventListener("click", function() {
    const inputValues = [
    parseFloat(celciusEl.value),
    parseFloat(fahrenheitEl.value),
    parseFloat(kelvinEl.value)
    ];

    const [celcius, fahrenheit, kelvin] = inputValues;

    if (!isNaN(celcius)) {
    fahrenheitEl.value = (celcius * 9 / 5) + 32;
    kelvinEl.value = parseFloat(celcius) + 273.15;
    } 
    else if (!isNaN(fahrenheit)) {
    celciusEl.value = (fahrenheit - 32) * 5 / 9;
    kelvinEl.value = (fahrenheit - 32) * 5 / 9 + 273.15;
    } 
    else if (!isNaN(kelvin)) {
    celciusEl.value = kelvin - 273.15;
    fahrenheitEl.value = (kelvin - 273.15) * 9 / 5 + 32;
    } 
    else {
    resultEl.textContent = "Please enter a valid temperature.";
    }
});

resetButton.addEventListener("click", function() {
    celciusEl.value = "";
    fahrenheitEl.value = "";
    kelvinEl.value = "";
    resultEl.textContent = "";
});
