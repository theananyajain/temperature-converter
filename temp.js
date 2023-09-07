function convertCelsiusToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsiusInput').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('result').innerHTML = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        alert("Please enter a valid number for Celsius.");
    }
}

function convertFahrenheitToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('celsiusInput').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('result').innerHTML = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
    } else {
        alert("Please enter a valid number for Fahrenheit.");
    }
}