// Dynamically set the current year
const yearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Dynamically set the last modified date
const lastModified = document.lastModified;
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
