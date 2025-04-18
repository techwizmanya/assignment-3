/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

const dayElements = document.querySelectorAll('.day-selector li');
const fullButton = document.querySelector('.small-button:first-of-type'); // Select the first small-button
const halfButton = document.querySelector('.small-button:last-of-type'); // Select the last small-button
const clearButton = document.querySelector('#clear-button');
const calculatedCostDisplay = document.getElementById('calculated-cost');

const FULL_DAY_RATE = 35;
const HALF_DAY_RATE = 20;

let selectedDays = [];
let dailyRate = FULL_DAY_RATE; // Default to full-day rate

// --- Helper Functions ---
function logState() {
    console.log('Selected Days:', selectedDays);
    console.log('Daily Rate:', dailyRate);
    console.log('Calculated Cost Display:', calculatedCostDisplay.textContent);
}

function updateDayClasses() {
    dayElements.forEach(day => {
        const dayId = day.id;
        if (selectedDays.includes(dayId)) {
            day.classList.add('clicked');
        } else {
            day.classList.remove('clicked');
        }
    });
}

function updateRateButtons() {
    if (dailyRate === FULL_DAY_RATE) {
        fullButton.classList.add('clicked');
        halfButton.classList.remove('clicked');
    } else {
        halfButton.classList.add('clicked');
        fullButton.classList.remove('clicked');
    }
}

function displayCalculatedCost() {
    const totalCost = selectedDays.length * dailyRate;
    calculatedCostDisplay.textContent = totalCost.toFixed(2);
}

// --- Event Listeners ---

/********* colour change days of week *********/
dayElements.forEach(day => {
    day.addEventListener('click', () => {
        const dayId = day.id;
        if (selectedDays.includes(dayId)) {
            selectedDays = selectedDays.filter(item => item !== dayId);
        } else {
            selectedDays.push(dayId);
        }
        updateDayClasses();
        displayCalculatedCost();
        logState();
    });
});

/********* clear days *********/
clearButton.addEventListener('click', () => {
    selectedDays = [];
    dailyRate = FULL_DAY_RATE;
    updateDayClasses();
    updateRateButtons();
    displayCalculatedCost();
    logState();
});

/********* change rate *********/
halfButton.addEventListener('click', () => {
    dailyRate = HALF_DAY_RATE;
    updateRateButtons();
    displayCalculatedCost();
    logState();
});

fullButton.addEventListener('click', () => {
    dailyRate = FULL_DAY_RATE;
    updateRateButtons();
    displayCalculatedCost();
    logState();
});

// --- Initialization ---
updateDayClasses();
updateRateButtons();
displayCalculatedCost();
logState();