/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const mainInputNumber = document.getElementById("main-input")


//Obtains data from calculation and organizes it with the appropritate units and factors


const mainInput = document.getElementById('main-input');
const warningText = document.getElementById('warning-text');
const convertedLength = document.getElementById('length-convert');
const convertedVolume = document.getElementById('volume-convert');
const convertedMass = document.getElementById('mass-convert');

function formatConversion(value, unit1, unit2, factor, decimals = 3) {
  return `
    ${value} ${unit1} = ${(value * factor).toFixed(decimals)} ${unit2} | 
    ${value} ${unit2} = ${(value / factor).toFixed(decimals)} ${unit1}
  `.trim();
}

/*  
Performs conversion when user clicks convert
Validates input
shows warning if invalid, otherwise updates conversion outputs
*/

function dNDLength() {
  const value = Number(mainInput.value);

  // Validate input: must be positive number
  if (isNaN(value) || value <= 0) {
    warningText.textContent = "Please insert a valid value!";
    return;
  }

  warningText.textContent = "";

  //updates the conversion and sends results to the helper fx
  convertedLength.textContent = formatConversion(value, "meters", "feet", 3.281);
  convertedVolume.textContent = formatConversion(value, "liters", "gallons", 0.264);
  convertedMass.textContent = formatConversion(value, "kilos", "lbs", 2.204);
}

//Converts the number after running it through the function
document.getElementById('convert-btn').addEventListener("click", dNDLength);


/*toggle button*/
const toggleBtn = document.getElementById("toggle-button")
const mainContainer= document.querySelector(".main-container")
const headerContainer= document.querySelector(".header-container")
const sectionContainers = document.querySelectorAll(".section-container")
const updated = document.querySelectorAll(".updated")
const metricInput = document.querySelector(".metric-input")
const measure= document.querySelectorAll(".measure")

function toggleDarkMode(isDark) {
  // Toggle dark-mode class on body (for global styles)
  document.body.classList.toggle('dark-mode', isDark);

  // Selectors of elements to toggle dark mode on
  const selectors = [
    '.main',
    '.main-container',
    '.section-container',
    '.updated',
    '.measure',
    '.metric-input',
    '.header-container' // harmless if missing
  ];

  // For each selector, toggle dark-mode on all matching elements
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el =>
      el.classList.toggle('dark-mode', isDark)
    );
  });
}



toggleBtn.addEventListener('change', () => {
  toggleDarkMode(toggleBtn.checked);
});