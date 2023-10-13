function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const unitSelect = document.getElementById('unit');
    const resultElement = document.getElementById('result');

    if (temperatureInput.value === '') {
        resultElement.textContent = 'Please enter a temperature.';
        return;
    }

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    let result = '';

    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        result = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
    } else if (unit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        result = `${temperature}°F is equal to ${celsius.toFixed(2)}°C.`;
    }

    resultElement.textContent = result;
}