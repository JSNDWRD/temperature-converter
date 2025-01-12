const converterButton = document.getElementById("convertButton");
const degree = document.getElementById("degree");
const initial = document.getElementById("initial");
const final = document.getElementById("final");

function checkFilled() {
    converterButton.disabled = !(degree.value.trim() && initial.value !== "-" && final.value !== "-");
}

checkFilled();

degree.addEventListener('input', checkFilled);
initial.addEventListener('change', checkFilled);
final.addEventListener('change', checkFilled);

const converted = document.getElementById("converted");

function convertTemp() {
    const fromTemp = parseFloat(degree.value.trim());
    if (initial.value == "0" && final.value == "1") {
        converted.innerHTML = `${fromTemp} Fahrenheit is ${((fromTemp - 32) * 5 / 9).toFixed(2)} Celsius`;
    } else if (initial.value == "0" && final.value == "2") {
        converted.innerHTML = `${fromTemp} Fahrenheit is ${((fromTemp - 32) * 5 / 9 + 273.15).toFixed(2)} Kelvin`;
    } else if (initial.value == "0") {
        converted.innerHTML = `${fromTemp} Fahrenheit is ${fromTemp} Fahrenheit`;
    } else if (initial.value == "1" && final.value == "0") {
        converted.innerHTML = `${fromTemp} Celsius is ${(fromTemp * 9 / 5 + 32).toFixed(2)} Fahrenheit`;
    } else if (initial.value == "1" && final.value == "2") {
        converted.innerHTML = `${fromTemp} Celsius is ${(fromTemp + 273.15).toFixed(2)} Kelvin`;
    } else if (initial.value == "1") {
        converted.innerHTML = `${fromTemp} Celsius is ${fromTemp} Celsius`;
    } else if (initial.value == "2" && final.value == "0") {
        converted.innerHTML = `${fromTemp} Kelvin is ${((fromTemp - 273.15) * 9 / 5 + 32).toFixed(2)} Fahrenheit`;
    } else if (initial.value == "2" && final.value == "1") {
        converted.innerHTML = `${fromTemp} Kelvin is ${(fromTemp - 273.15).toFixed(2)} Celsius`;
    } else if (initial.value == "2") {
        converted.innerHTML = `${fromTemp} Kelvin is ${fromTemp} Kelvin`;
    }
}