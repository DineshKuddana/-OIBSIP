const temperatureInput = document.getElementById('temperature-input');
		const celsiusRadio = document.getElementById('celsius-radio');
		const fahrenheitRadio = document.getElementById('fahrenheit-radio');
		const convertButton = document.getElementById('btn');
		const resultOutput = document.getElementById('result');

		convertButton.addEventListener('click', function() {
			const temperature = parseFloat(temperatureInput.value);
			if (isNaN(temperature)) {
				alert('Please enter a valid number for the temperature.');
				return;
			}

			// Convert temperature
			let convertedTemperature;
			if (celsiusRadio.checked) {
				// Convert from Celsius to Fahrenheit
				convertedTemperature = (temperature * 9/5) + 32;
				resultOutput.textContent = `${convertedTemperature.toFixed(2)}°F`;
			} else {
				// Convert from Fahrenheit to Celsius
				convertedTemperature = (temperature - 32) * 5/9;
				resultOutput.textContent = `${convertedTemperature.toFixed(2)}°C`;
			}
		});