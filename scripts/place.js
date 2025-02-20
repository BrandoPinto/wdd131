document.addEventListener("DOMContentLoaded", function () {
    // Updated values for Arequipa, Peru
    const temperature = 22; // in °C
    const windSpeed = 15; // in km/h

    // Function to calculate wind chill factor
    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    // Function to check if wind chill calculation is applicable
    function isWindChillApplicable(temp, wind) {
        return temp <= 10 && wind > 4.8;
    }

    // Display wind chill if applicable
    const windChillElement = document.createElement("tr");
    const windChillLabel = document.createElement("td");
    windChillLabel.className = "label";
    windChillLabel.innerHTML = "<b>Wind Chill:</b>";

    const windChillValue = document.createElement("td");
    if (isWindChillApplicable(temperature, windSpeed)) {
        const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
        windChillValue.textContent = `${windChill} °C`;
    } else {
        windChillValue.textContent = "N/A";
    }

    windChillElement.appendChild(windChillLabel);
    windChillElement.appendChild(windChillValue);

    document.querySelector(".weather table").appendChild(windChillElement);
});

// Footer information
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = `Last updated: ${lastModified}`;
