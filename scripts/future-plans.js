"use strict"

// selectedLanguage = localStorage.getItem("languageVariable");

// Alert message translations
const emptyTaskAlert = {
    sv: `Lägg till uppgift först d.,.`,
    en: `Please add todos before editing.`,
    }

const copyAlreadyExists = {
    sv: `Aktuell todo finns redan.`,
    en: `Current todo already exists.`,
    }

const recurringMonthDateAlert = {
    sv: `Kan inte lägga till återkommande månads(-datum) efter den 28:e.`,
    en: `Can´t add recurring month (dates) after the 28th.`,
    }

const copyExistsInInterval = {
    sv: `Todo-kopia finns redan på intervallet.`,
    en: `Todo duplicate exists in the interval.`,
}

const durationDayNumberLargerThanFourteen = {
    sv: `Maximalt antal dagar för återkommande uppgifter är satt till 14 (lägg till fler datum för fler repetitioner). `,
    en: `Maximum duration day number set to 14 (Add multiple dates if duration > 14 days).`,
}

const cantPlanThePast = {
    sv: `Gårdagen kan inte planeras :|. `,
    en: `You can't make plans for yesterdays :).`,
}

const selectRecurringDaysOrDuration = {
    sv: `Gör ett val (välj dagar eller varaktighet)`,
    en: `Please make a selection (Select days or duration).`,
}

const selectRecurringNumberOfWeeks = {
    sv: `Gör ett val (välj vecko-intervall)`,
    en: `Please make a selection (Number of weeks).`,
}

const alertAddBeforeEdit = {
    sv: `Lägg till uppgift (innan ändringar görs).`,
    en: `Add tasks before editing.`,
}

const alertCheckValidDate = {
    sv: `Ogiltigt (otillåtet) värde. Föregående inlagt datum läggs in i stället.`,
    en: `Invalid date. Assigning default date.`,
}

const alertEnterFileName = {
    sv: `Vänligen välj ett filnamn.`,
    en: `Please enter a file name.`,
}

const alertFileNameElementNotFound = {
    sv: `Filnamn saknas.`,
    en: `File name element not found.`,
}

const alertEnterFileName2 = {
    sv: `Vänligen välj ett filnamn.`,
    en: `Please enter a file name.`,
}

if (selectedLanguage === undefined) {
selectedLanguage = 'sv';
} else if (typeof(selectedLanguage) === string && typeof(languageVariable) === string) {
    selectedLanguage = localStorage.getItem("languageVariable");
}

// Toggle info-div (week schedule)
const toggleLinkWeek = document.getElementById("toggle-link-week");
const contentWeek = document.getElementById("content-week");

toggleLinkWeek.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the anchor from navigating or refreshing the page
    if (contentWeek.style.display === "none") {
        contentWeek.style.display = "flex"; // Show the content as flex
    } else {
        contentWeek.style.display = "none"; // Hide the content
    }
});

// Toggle info-div (future plans)
const toggleLinkFuture = document.getElementById("toggle-link-future");
const contentFuture = document.getElementById("content-future");

toggleLinkFuture.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the anchor from navigating or refreshing the page
    if (contentFuture.style.display === "none") {
        contentFuture.style.display = "flex"; // Show the content as flex
    } else {
        contentFuture.style.display = "none"; // Hide the content
    }
});

let fileHandle;
const dateInput = document.getElementById('date-input');

// Ska todo-objekt-array ("plannedTodos") innehålla några objekt från början (exempelvis 3 till 9 objekt/dag*365 dagar = 3285 objekt/år) eller ska den vara tom?

var plannedTodos = [];

// _ _ _

let currentTodoContainerRowLength;

function returnCurrentTodoContainerRowLength(plannedTodos) {

    if (plannedTodos.length <= 3) {
        currentTodoContainerRowLength = 3
        } else if (plannedTodos.length > 3) {
        currentTodoContainerRowLength = plannedTodos.length
        }

    return currentTodoContainerRowLength;

}

var plannedTodosStart = [];
var plannedTodosEdit = [];
var dayArrayObjectToRemove = [];

var currentMondayTodos = [];
var currentTuesdayTodos = [];
var currentWednesdayTodos = [];
var currentThursdayTodos = [];
var currentFridayTodos = [];
var currentSaturdayTodos = [];
var currentSundayTodos = [];

var currentDynamicDayArray = [];
var currentDynamicDayArrayEdit = [];

// Current Plan-div:ar
var todoContainer = document.getElementById('todo-container');
var todoElements = todoContainer.querySelectorAll('[data-id]');
var specificRecDiv;

var firstDateDiv = document.getElementById("todo-0-date");
var secondDateDiv = document.getElementById("todo-0-date");
var thirdDateDiv = document.getElementById("todo-0-date");

let dateInputValue = document.getElementById('date-input');
var textInputValue = document.getElementById('add-todo-text');
let isRecurringCheckbox = document.getElementById("todo-recurring-input");

// _ _ _

var defaultDate; // Variable to store default date
var defaultTodoText; // Variable to store default todo text

// _ _ _

// Recurring Task Menu
let recUnderline = document.getElementById("rec-text-span");

// Day Choices (Selections)
let isRecurringDayRadioButton = document.getElementById('day');

let isRecurringWeekDayNameRadioButton = document.getElementById('day-name');
let isRecurringDayMonCheckbox = document.getElementById('rec-mon');
let isRecurringDayTueCheckbox = document.getElementById('rec-tue');
let isRecurringDayWedCheckbox = document.getElementById('rec-wed');
let isRecurringDayThuCheckbox = document.getElementById('rec-thu');
let isRecurringDayFriCheckbox = document.getElementById('rec-fri');
let isRecurringDaySatCheckbox = document.getElementById('rec-sat');
let isRecurringDaySunCheckbox = document.getElementById('rec-sun');
var recurringDayEveryWeekCheckBox = document.getElementById('every-week');

let isRecurringWeekDayNumberRadioButton = document.getElementById('day-count');

// Week Choices (Selections)
let isRecurringWeekRadioButton = document.getElementById('week');

let isRecurringWeekNrOneRadioButton = document.getElementById('rec-1-week');
let isRecurringWeekNrTwoRadioButton = document.getElementById('rec-2-week');
let isRecurringWeekNrThreeRadioButton = document.getElementById('rec-3-week');
let isRecurringWeekNrFourRadioButton = document.getElementById('rec-4-week');

let recurringWeekDayDurationInput = document.getElementById('#rec-week-days');

// Month Choices (Selections)
let isRecurringMonthRadioButton = document.getElementById('month');
let recurringMonthDayDurationInput = document.getElementById('#rec-month-days');

// Year Choices (Selections)
let isRecurringYearRadioButton = document.getElementById('year');
let recurringYearDayDurationInput = document.getElementById('rec-year-days');

let periodicityMenu = document.getElementById('periodicity');
let PeriodicityDayMenu = document.getElementById('per-weekday');
let PeriodicityWeekMenu = document.getElementById('per-week');
let PeriodicityMonthMenu = document.getElementById('per-month');
let PeriodicityYearMenu = document.getElementById('per-year');

// Duration input fields
const dayInput = document.getElementById('rec-day-days');
const weekInput = document.getElementById('rec-week-days');
const monthInput = document.getElementById('rec-month-days');
const yearInput = document.getElementById('rec-year-days');

// If old plannedTodos exists (in plannedTodos)
var pastTasksSet = new Set();

// _ _ _

var dynamicContainerToken;
var dynamicContainerDataId;
var newId;

// _ _ _

// Get the fieldset element by its ID (days/week/month/year)
// Get all radio buttons within the fieldset
class PeriodicityManager {
    constructor(fieldsetId) {
        this.fieldset = document.getElementById(fieldsetId);
        this.radioButtons = this.fieldset.querySelectorAll('input[type="radio"]');
    }

    // Find the selected radio button and return its value
    getSelectedValue() {
        const selectedRadio = Array.from(this.radioButtons).find(radio => radio.checked);
        return selectedRadio ? selectedRadio.value : null;
    }

    // Set the radio button with the specified value to checked
    setSelectedValue(value) {
        this.radioButtons.forEach(radio => {
            radio.checked = radio.value === value;
        });
    }

    // Add event listener to all radio buttons
    addEventListenerToAll(event, callback) {
        this.radioButtons.forEach(radio => {
            radio.addEventListener(event, callback);
        });
    }
}

// Simplified ChoiceManager class
// Get the fieldset element by its ID (days/week/month/year)
// Determine the mode (day/week/month/year) based on fieldset ID
// Initialize mode-specific elements
// Get the event duration input element
// Initialize state and add listeners

class ChoiceManager {
    constructor(fieldsetId) {
        this.fieldset = document.getElementById(fieldsetId);
        if (!this.fieldset) {
            return;
        }

        this.mode = this.determineMode(fieldsetId);
        this.initModeSpecificElements();

        this.eventDurationInput = this.getElement('input[type="number"]', 'Event duration input');
        this.updateState();
        this.addListeners();
    }

    // Helper method to safely query elements
    getElement(selector, description) {
        const element = this.fieldset.querySelector(selector);
        if (!element) {
            console.warn(`Element "${description}" with selector "${selector}" not found in fieldset.`);
        }
        return element;
    }

    // Helper method to query multiple elements safely
    getElements(selector, description) {
        const elements = this.fieldset.querySelectorAll(selector);
        if (!elements || elements.length === 0) {
            console.warn(`Elements "${description}" with selector "${selector}" not found in fieldset.`);
        }
        return elements;
    }

    // Determine the mode based on the fieldset ID (days/week/month/year)
    determineMode(fieldsetId) {
        if (fieldsetId.includes('day')) return 'day';
        if (fieldsetId.includes('week')) return 'week';
        if (fieldsetId.includes('month')) return 'month';
        if (fieldsetId.includes('year')) return 'year';
        return null;
    }

    // Initialize elements based on the mode
    initModeSpecificElements() {
        if (this.mode === 'day') {
            this.initDayModeElements();
        } else if (this.mode === 'week') {
            this.weekRadioButtons = this.getElements('input[type="radio"][name="select-week-periodicity"]', 'Week radio buttons');
        }
    }

    // Initialize elements specific to day mode
    initDayModeElements() {
        this.radioSelect = this.getElement('input[type="radio"][value="select"]', 'Day mode select radio');
        this.radioDuration = this.getElement('input[type="radio"][value="duration"]', 'Day mode duration radio');
        this.dayCheckboxes = this.getElements('input[type="checkbox"][id^="rec-"]', 'Day mode checkboxes');
        this.everyWeekCheckbox = this.getElement('#every-week', 'Every week checkbox');
    }

    // Update the state based on the selected mode and elements
    updateState() {
        if (this.mode === 'day') {
            if (this.radioSelect && this.eventDurationInput) {
                this.toggleDayCheckboxes(this.radioSelect.checked);
                this.eventDurationInput.disabled = this.radioSelect.checked;
            }
        } else if (this.mode === 'week') {
            // Handle week-specific state updates
        } else if (this.mode === 'month' || this.mode === 'year') {
            if (this.eventDurationInput) {
                this.eventDurationInput.disabled = false;
            }
        }
    }

    // Enable or disable day checkboxes
    toggleDayCheckboxes(enabled) {
        if (!this.dayCheckboxes) return;
        this.dayCheckboxes.forEach(checkbox => {
            checkbox.disabled = !enabled;
        });
    }

    // Add event listeners based on the mode
    addListeners() {
        if (this.mode === 'day') {
            if (this.radioSelect) {
                this.radioSelect.addEventListener('change', () => this.updateState());
            }
            if (this.radioDuration) {
                this.radioDuration.addEventListener('change', () => this.updateState());
            }
            if (this.dayCheckboxes) {
                this.dayCheckboxes.forEach(checkbox => {
                    checkbox.addEventListener('change', (event) => {
                        console.log(`Day ${event.target.id} selected: ${event.target.checked}`);
                    });
                });
            }
            if (this.everyWeekCheckbox) {
                this.everyWeekCheckbox.addEventListener('change', (event) => {
                });
            }
        } else if (this.mode === 'week') {
            if (this.weekRadioButtons) {
                this.weekRadioButtons.forEach(radio => {
                    radio.addEventListener('change', () => {
                        console.log(`Selected weeks: ${radio.value}`);
                        this.updateState();
                    });
                });
            }
        }

        if (this.eventDurationInput) {
            this.eventDurationInput.addEventListener('input', (event) => {
                console.log(`Event duration (${this.mode}): ${event.target.value}`);
            });
        }
    }

    // Get the selected days (for day mode)
    getSelectedDays() {
        return this.mode === 'day' && this.dayCheckboxes
            ? Array.from(this.dayCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.id.replace('rec-', ''))
            : null;
    }

    // Get the selected week (for week mode)
    getSelectedWeeks() {
        if (this.mode === 'week' && this.weekRadioButtons) {
            const selectedRadio = Array.from(this.weekRadioButtons).find(radio => radio.checked);
            return selectedRadio ? selectedRadio.value : null;
        }
        return null;
    }

    // Get the event duration input value
    getEventDuration() {
        return this.eventDurationInput ? this.eventDurationInput.value : null;
    }
}


// _ _ _

    // Disable first 3 task rows
    function disableFirstTaskRowDivs() {
        document.getElementById("todo-0-date").disabled = true;
        document.getElementById("todo-0-text").disabled = true;
        document.getElementById("todo-0-color").disabled = true;
    }

    function enableFirstTaskRowDivs() {
        document.getElementById("todo-0-date").disabled = false;
        document.getElementById("todo-0-text").disabled = false;
        document.getElementById("todo-0-color").disabled = false;
    }

    // _ _ _

    function disableSecondTaskRowDivs() {
        document.getElementById("todo-1-date").disabled = true;
        document.getElementById("todo-1-text").disabled = true;
        document.getElementById("todo-1-color").disabled = true;
    }

    function enableSecondTaskRowDivs() {
        document.getElementById("todo-1-date").disabled = false;
        document.getElementById("todo-1-text").disabled = false;
        document.getElementById("todo-1-color").disabled = false;
    }

    // _ _ _

    function disableThirdTaskRowDivs() {
        document.getElementById("todo-2-date").disabled = true;
        document.getElementById("todo-2-text").disabled = true;
        document.getElementById("todo-2-color").disabled = true;
    }

    function enableThirdTaskRowDivs() {
        document.getElementById("todo-2-date").disabled = false;
        document.getElementById("todo-2-text").disabled = false;
        document.getElementById("todo-2-color").disabled = false;
    }

    function disableDefaultTaskRows() {
        disableFirstTaskRowDivs();
        disableSecondTaskRowDivs();
        disableThirdTaskRowDivs();
    }

function handleEnableDisableDefaultRows() {
    if (plannedTodos.length === 0) {
        //No plannedTodos added.
        disableDefaultTaskRows();
    } else if (plannedTodos.length === 1) {
        //There is 1 planned todos.
        enableFirstTaskRowDivs();
        disableSecondTaskRowDivs();
        disableThirdTaskRowDivs();
    } else if (plannedTodos.length === 2) {
        //There are 2 planned todos. Execute different behavior.
        enableFirstTaskRowDivs();
        enableSecondTaskRowDivs();
        disableThirdTaskRowDivs();
    } else if (plannedTodos.length >= 3) {
        //There are 3 planned todos. Handle accordingly.
        enableFirstTaskRowDivs();
        enableSecondTaskRowDivs();
        enableThirdTaskRowDivs();
    }
}

handleEnableDisableDefaultRows();

// _ _ _

// Usage Examples
const dayManager = new ChoiceManager('per-weekday');
const weekManager = new ChoiceManager('per-week');
const monthManager = new ChoiceManager('per-month');
const yearManager = new ChoiceManager('per-year');

const daySelectOrDuration = new PeriodicityManager('per-weekday');
daySelectOrDuration.addEventListenerToAll('change', (e) => {
});

// _ _ _

// Ska ...Collection ha "let" eller "const"(?)

// var dateField = document.querySelector('.todo-date');
var dateFields = document.querySelectorAll('.todo-date');
var todoFields = document.querySelectorAll('.todo-text');

let dateCollection = document.getElementsByClassName("todo-date");
let todoCollection = document.getElementsByClassName("todo-text");
let todoTextElements = document.querySelectorAll(".todo-text");
let todoColorCollection = document.getElementsByClassName("todo-color");
let todoColorElement = document.querySelector(".todo-color");
let todoColorElements = document.querySelectorAll(".todo-color");

// _ _ _

let colorPickerSelect = document.querySelector('select#colors');
let colorPickerGray = document.getElementById('gray-color');
let colorPickerYellow = document.getElementById('yellow-color');
let colorPickerGreen = document.getElementById('green-color');
let colorPickerBlue = document.getElementById('blue-color');
let colorPickerPurple = document.getElementById('purple-color');
let colorPickerRed = document.getElementById('red-color');

// Clear todos...
let clearAllButton = document.getElementById('clear-all');
let clearSpecificTodoRowButton = document.getElementById('trash-can');

// Color definition
let grayColor = "rgb(150,150,150)";
let yellowColor = "rgb(255,204,0)";
let greenColor = "rgb(51,153,102)";
let blueColor = "rgb(51,102,255)";
let purpleColor = "rgb(153,51,102)";
let redColor = "rgb(255,64,64)";
let colorText;
let rgbColor;

let returnPickerBackgroundColor = colorPickerSelect.style.backgroundColor;
let returnListElementBackgroundColor = colorPickerSelect.style.backgroundColor;

colorPickerGray.style.backgroundColor = grayColor;
colorPickerYellow.style.backgroundColor = yellowColor;
colorPickerGreen.style.backgroundColor = greenColor;
colorPickerBlue.style.backgroundColor = blueColor;
colorPickerPurple.style.backgroundColor = purpleColor;
colorPickerRed.style.backgroundColor = redColor;

// _ _ _

// Week schedule

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Function to get the current weekday as a three-letter abbreviation
    function getWeekday(date) {
        // const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        return weekdays[date.getDay()];
    }

// var getCurrentWeekDay;

    // currentWeekDayToBeHandled = "mon" / "tue" / "wed" / ... / "sun"
    function getCurrentWeekDayForSelectedLanguage(currentWeekDayToBeHandled) {

        selectedLanguage = sessionStorage.getItem("languageVariable");

        let getCurrentWeekDay;

        if (selectedLanguage === 'sv') {
            if (currentWeekDayToBeHandled === "mon") {
                getCurrentWeekDay = "mån";
            } else if (currentWeekDayToBeHandled === "tue") {
                getCurrentWeekDay = "tis";
            } else if (currentWeekDayToBeHandled === "wed") {
                getCurrentWeekDay = "ons";
            } else if (currentWeekDayToBeHandled === "thu") {
                getCurrentWeekDay = "tor";
            } else if (currentWeekDayToBeHandled === "fri") {
                getCurrentWeekDay = "fre";
            } else if (currentWeekDayToBeHandled === "sat") {
                getCurrentWeekDay = "lör";
            } else if (currentWeekDayToBeHandled === "sun") {
                getCurrentWeekDay = "sön";
            }
        } else if (selectedLanguage === 'en') {
            if (currentWeekDayToBeHandled === "mon") {
                getCurrentWeekDay = "mon";
            } else if (currentWeekDayToBeHandled === "tue") {
                getCurrentWeekDay = "tue";
            } else if (currentWeekDayToBeHandled === "wed") {
                getCurrentWeekDay = "wed";
            } else if (currentWeekDayToBeHandled === "thu") {
                getCurrentWeekDay = "thu";
            } else if (currentWeekDayToBeHandled === "fri") {
                getCurrentWeekDay = "fri";
            } else if (currentWeekDayToBeHandled === "sat") {
                getCurrentWeekDay = "sat";
            } else if (currentWeekDayToBeHandled === "sun") {
                getCurrentWeekDay = "sun";
            }
        }
        return getCurrentWeekDay;
    }


    // Function to format date as YYYY-MM-DD
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // _ _ _

    var todayDate = new Date();

    Date.prototype.getWeekNumber = function () {
        var date = new Date(this.getTime());
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        // January 4 is always in week 1.
        var week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                              - 3 + (week1.getDay() + 6) % 7) / 7);
    };

    // Veckonummer för dagens datum
    var weekNumber = todayDate.getWeekNumber();

    // _ _ _

    // Function to get the current date in CET
    function getCETDate() {
        const now = new Date();
        // Convert to milliseconds
        const utcOffset = now.getTimezoneOffset() * 60000;
        // Create a new date object in UTC
        const utcTime = now.getTime() + utcOffset;
        // Add the CET offset (UTC+1, which is 3600000 milliseconds)
        const cetTime = utcTime + 3600000;

        return new Date(cetTime);
    }

        // _ _ _
        // Function to get the current date in CET (Format: YYYY-MM-DD)
        function getCETDateYYYYMMDD() {
            const now = new Date();
            return new Intl.DateTimeFormat("sv-SE", {
                timeZone: "Europe/Berlin", // CET Timezone
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }).format(now);
        }
            // _ _ _


    function capitalizeFirstLetter(str) {
        if (!str) return ''; // Handle empty strings
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

      // Get today's date in CET
      const today = getCETDate();

      // Display current weekday
      const weekdayDisplay = document.getElementById('weekday-display');

      let currentWeekdayAbbreviatedForWeekdayDisplay = getCurrentWeekDayForSelectedLanguage((getWeekday(today)).toLowerCase());

        currentWeekdayAbbreviatedForWeekdayDisplay = capitalizeFirstLetter(currentWeekdayAbbreviatedForWeekdayDisplay);

        weekdayDisplay.textContent = `${currentWeekdayAbbreviatedForWeekdayDisplay}`;

      // Display today's date
      const dateDisplay = document.getElementById('date-display');
      dateDisplay.textContent = getCETDateYYYYMMDD();




    const weekInfo = {
        sv: `Vecka: `,
        en: `Week: `,
      }

      const weekInfo2 = {
        sv: `v. `,
        en: `wk. `,
      }

// _ _ _

languageSelectElement.addEventListener('change', function() {

        if (selectedValue === 'sv') {
            selectedLanguage = 'sv';
            putInSelectedLanguageMultipleTimes(selectedLanguage);
        }
        else if (selectedValue === 'en') {
            selectedLanguage = 'en';
            putInSelectedLanguageMultipleTimes(selectedLanguage);
    }
})

// _ _ _

    putInSelectedLanguageMultipleTimes(selectedLanguage);

    function putInSelectedLanguageMultipleTimes(selectedLanguage) {


    var weekDisplay = document.getElementById('week-display');
      weekDisplay.textContent = weekInfo[selectedLanguage] + weekNumber;

      document.getElementById('week-display-2').innerHTML = weekInfo2[selectedLanguage] + weekNumber;

    }

    // _ _ _

      document.getElementById('week-display-2').innerHTML = weekInfo2[selectedLanguage] + ' ' + weekNumber;

    // _ _ _

    dateInput.min = dateDisplay.textContent

    dateInput.value = dateDisplay.textContent;

// function getCurrentWeekDates(firstDayOfWeek) {
function getCurrentWeekDates() {
    const currentDay = todayDate.getDay();
    const firstDayOfWeek = new Date(todayDate.setDate(todayDate.getDate() - currentDay + (currentDay === 0 ? -6 : 1))); // Adjust if today is Sunday
    const weekDates = [];

    for (let i = 0; i < 7; i++) {
        const date = new Date(firstDayOfWeek);
        date.setDate(firstDayOfWeek.getDate() + i);
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const dd = String(date.getDate()).padStart(2, '0');
        weekDates.push(`${yyyy}-${mm}-${dd}`);
    }

    return weekDates;
}

// _ _ _

function getDayOfWeek(dateString) {
    // Create a new Date object from the input string
    const date = new Date(dateString);

    // Array of weekday names, starting with Sunday
    const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    // Get the day index (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    const dayIndex = date.getDay();

    // Return the corresponding day name
    return daysOfWeek[dayIndex];
}

// _ _ _

let mondayDiv = document.getElementById('mon-div');
let tuesdayDiv = document.getElementById('tue-div');
let wednesdayDiv = document.getElementById('wed-div');
let thursdayDiv = document.getElementById('thu-div');
let fridayDiv = document.getElementById('fri-div')
let saturdayDiv = document.getElementById('sat-div')
let sundayDiv = document.getElementById('sun-div')

let mondayDateDiv = document.getElementById('mon-date');
let tuesdayDateDiv = document.getElementById('tue-date');
let wednesdayDateDiv = document.getElementById('wed-date');
let thursdayDateDiv = document.getElementById('thu-date');
let fridayDateDiv = document.getElementById('fri-date')
let saturdayDateDiv = document.getElementById('sat-date')
let sundayDateDiv = document.getElementById('sun-date')


// Example usage:
const weekDates = getCurrentWeekDates();

mondayDateDiv.textContent = weekDates[0];
tuesdayDateDiv.textContent = weekDates[1];
wednesdayDateDiv.textContent = weekDates[2];
thursdayDateDiv.textContent = weekDates[3];
fridayDateDiv.textContent = weekDates[4];
saturdayDateDiv.textContent = weekDates[5];
sundayDateDiv.textContent = weekDates[6];


// _ _ _

// Color picker drop down

// Change color value on color picker
    if (colorPickerSelect.value === colorPickerGray.value) {
        colorPickerSelect.style.backgroundColor = grayColor;
    } else if (colorPickerSelect.value === colorPickerYellow.value) {
        colorPickerSelect.style.backgroundColor = yellowColor;
    } else if (colorPickerSelect.value === colorPickerGreen.value) {
        colorPickerSelect.style.backgroundColor = greenColor;
    } else if (colorPickerSelect.value === colorPickerBlue.value) {
        colorPickerSelect.style.backgroundColor = blueColor;
    } else if (colorPickerSelect.value === colorPickerPurple.value) {
        colorPickerSelect.style.backgroundColor = purpleColor;
    } else if (colorPickerSelect.value === colorPickerRed.value) {
        colorPickerSelect.style.backgroundColor = redColor;
    }

// Change color on color picker
function colorPickerFunction() {
    if (colorPickerSelect.value === "grayColor") {
        returnPickerBackgroundColor = grayColor;
    } else if (colorPickerSelect.value === "yellowColor") {
        returnPickerBackgroundColor = yellowColor;
    } else if (colorPickerSelect.value === "greenColor") {
        returnPickerBackgroundColor = greenColor;
    } else if (colorPickerSelect.value === "blueColor") {
        returnPickerBackgroundColor = blueColor;
    } else if (colorPickerSelect.value === "purpleColor") {
        returnPickerBackgroundColor = purpleColor;
    } else if (colorPickerSelect.value === "redColor") {
        returnPickerBackgroundColor = redColor;
    }

    return returnPickerBackgroundColor;
}

// Translator: Change background color on todoElement (in construction), with variable value (string)
function colorPickerElementFunction(todoColorElement) {
    if (todoColorElement.value === "grayColor") {
        todoColorElement.style.backgroundColor = grayColor;
    } else if (todoColorElement.value === "yellowColor") {
        todoColorElement.style.backgroundColor = yellowColor;
    } else if (todoColorElement.value === "greenColor") {
        todoColorElement.style.backgroundColor = greenColor;
    } else if (todoColorElement.value === "blueColor") {
        todoColorElement.style.backgroundColor = blueColor;
    } else if (todoColorElement.value === "purpleColor") {
        todoColorElement.style.backgroundColor = purpleColor;
    } else if (todoColorElement.value === "redColor") {
        todoColorElement.style.backgroundColor = redColor;
    }
}

// Translator: Color text variable to color text string
function returnRgbColor(colorText) {
    if (colorText === "grayColor") {
        return grayColor;
    } else if (colorText === "yellowColor") {
        return yellowColor;
    } else if (colorText === "greenColor") {
        return greenColor;
    } else if (colorText === "blueColor") {
        return blueColor;
    } else if (colorText === "purpleColor") {
        return purpleColor;
    } else if (colorText === "redColor") {
        return redColor;
    }
}

// Translator: rgb color to color text string
function returnDefinedColorText(rgbColor) {
    if (rgbColor === "rgb(150,150,150)") {
        return "grayColor";
    } else if (rgbColor === "rgb(255,204,0)") {
        return "yellowColor";
    } else if (rgbColor === "rgb(51,153,102)") {
        return "greenColor";
    } else if (rgbColor === "rgb(51,102,255)") {
        return "blueColor";
    } else if (rgbColor === "rgb(153,51,102)") {
        return "purpleColor";
    } else if (rgbColor === "rgb(255,64,64)") {
        return "redColor";
    }
}

function returnColorText(colorText) {
    if (colorText === "grayColor") {
        return "gray";
    } else if (colorText === "yellowColor") {
        return "yellow";
    } else if (colorText === "greenColor") {
        return "green";
    } else if (colorText === "blueColor") {
        return "blue";
    } else if (colorText === "purpleColor") {
        return "purple";
    } else if (colorText === "redColor") {
        return "red";
    }
}

// Color picker drop down (change)
colorPickerSelect.addEventListener("change", (e) => {
    colorPickerSelect.style.backgroundColor = colorPickerFunction()
});

let todoContainers = document.querySelectorAll('.todo-container-element');


// Funktion för att extrahera tid från todo-text (hh:mm)
function extractTime(todo) {
    const timePattern = /^\d{2}:\d{2}/; // Hitta tidsformat hh:mm i början
    const match = todo.match(timePattern);
    return match ? match[0] : null;
}

// Funktion för att konvertera tidsträng till ett tal för enkel jämförelse (t.ex. "16:30" blir 1630)
function timeToNumber(time) {
    return time ? parseInt(time.replace(':', '')) : Infinity; // Ingen tid sorteras sist (Infinity)
}

// _ _ _

// Hjälpfunktion för att extrahera tid från "todo"-texten om den finns
function extractTimeFromTodo(todo) {
    const timePattern = /\b([01]\d|2[0-3]):([0-5]\d)\b/; // Regex för tid i formatet hh:mm
    const match = todo.match(timePattern);
    return match ? match[0] : null;
}

//_ _ _

// Function to handle clicks
function handleClickWhenEmpty(e) {
    if (plannedTodos.length === 0 || plannedTodos.length === undefined) {
        alert(emptyTaskAlert[selectedLanguage]);
    } else {
    }
}

// Add a global event listener to a specific selector
document.addEventListener('click', (e) => {
    if (e.target.matches('todo-wrapper')) {
        handleClickWhenEmpty(e);
    }
});

//_ _ _

let blockedDates = new Set();

// Function to validate date format (YYYY-MM-DD)
function isValidDateFormat(dateString) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Regex for YYYY-MM-DD
    return dateRegex.test(dateString);
}

// _ _ _

function isValidDateExceptFebruary(dateString) {
    // Check if the input matches the expected format YYYY-MM-DD
    if (!/^\d{4}-(0[1-9]|1[0-2])-\d{2}$/.test(dateString)) {
        return false;
    }

    let [year, month, day] = dateString.split("-").map(Number);

    // Define the maximum number of days for each month (excluding February)
    const daysInMonth = {
        1: 31,  // January
        3: 31,  // March
        4: 30,  // April
        5: 31,  // May
        6: 30,  // June
        7: 31,  // July
        8: 31,  // August
        9: 30,  // September
        10: 31, // October
        11: 30, // November
        12: 31  // December
    };

    // Ensure the month is NOT February (02)
    if (month === 2) {
        return false;
    }

    // Check if the day is within valid range
    return day >= 1 && day <= daysInMonth[month];
}

// _ _ _

function isValidFebruaryDate(dateString) {
    // Check if the input matches the expected format
    if (!/^\d{4}-02-\d{2}$/.test(dateString)) {
        return false;
    }

    let [year, month, day] = dateString.split("-").map(Number);

    // Ensure MM is 02 (February)
    if (month !== 2) {
        return false;
    }

    // Leap year check: February has 29 days in a leap year, otherwise 28 days
    let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    let maxDay = isLeapYear ? 29 : 28;

    // Check if the day is within valid range
    return day >= 1 && day <= maxDay;
}

// _ _ _


// Add opacity to current date (in week schedule)

let weekDayBgColor = 'rgb(70, 99, 84)';

if (dateDisplay.textContent === mondayDateDiv.innerHTML) {
    mondayDiv.style.backgroundColor = weekDayBgColor;
}
else if (dateDisplay.textContent === tuesdayDateDiv.innerHTML) {
    tuesdayDiv.style.backgroundColor = weekDayBgColor;
}
else if (dateDisplay.textContent === wednesdayDateDiv.innerHTML) {
    wednesdayDiv.style.backgroundColor = weekDayBgColor;
}
else if (dateDisplay.textContent === thursdayDateDiv.innerHTML) {
    thursdayDiv.style.backgroundColor = weekDayBgColor;
}
else if (dateDisplay.textContent === fridayDateDiv.innerHTML) {
    fridayDiv.style.backgroundColor = weekDayBgColor;
}
else if (dateDisplay.textContent === saturdayDateDiv.innerHTML) {
    saturdayDiv.style.backgroundColor = weekDayBgColor;
}
else if (dateDisplay.textContent === sundayDateDiv.innerHTML) {
    sundayDiv.style.backgroundColor = weekDayBgColor;
}


// _ _ _


// Function to handle date input

var resultString;

    function handleDateInput(dateInputString, defaultDate) {

    resultString = dateInputString.trim(); // Get the input value and trim whitespace

        if (isValidDateFormat(resultString) && isValidDateExceptFebruary(dateInputString) === true ||
        isValidDateFormat(resultString) && isValidFebruaryDate(dateInputString) === true) {

        if (blockedDates.has(resultString)) {
            console.log(`Date ${resultString} is blocked.`);
        } else {
            console.log(`Date ${resultString} is valid and unblocked.`);
        }
    }
    else {
        console.log(`is Invalid date format: ${resultString}`);
        resultString = defaultDate;

        checkIfDateAndTextAreEmpty();
    }
    updateCurrentWeekSchedule(false);
    return resultString;
}

// _ _ _

function getCurrentDataIdOnClick(dataFieldClass) {
    // Select all elements with the specified class (or datafield type)
    const dataFields = document.querySelectorAll(`.${dataFieldClass}`);

    // Add a click event listener to each element
    dataFields.forEach(dataField => {
        dataField.addEventListener('click', () => {
            // Get the value of the data-id attribute of the clicked element
            const currentDataId = dataField.getAttribute('data-id');

            // Return the current data-id
            // (Optional: Call a function or process the data-id here)
            processDataId(currentDataId);
        });
    });
}

// Example function to process the data-id
function processDataId(dataId) {
    return dataId;
}

// Example usage: Attach to fields with the class 'todo-date'
getCurrentDataIdOnClick('todo-date');

// _ _ _

// Recurring menus

function recCheckBoxIsUnchecked() {
    recUnderline.style.textDecorationColor = "rgba(0,117,255,0.5)";
    periodicityMenu.style.display = "none";
    PeriodicityDayMenu.style.display = "none";
    PeriodicityWeekMenu.style.display = "none";
    PeriodicityMonthMenu.style.display = "none";
    PeriodicityYearMenu.style.display = "none";
    isRecurringDayRadioButton.checked = false;
    isRecurringWeekDayNameRadioButton.checked = false;
    isRecurringDayMonCheckbox.checked = false;
    isRecurringDayTueCheckbox.checked = false;
    isRecurringDayWedCheckbox.checked = false;
    isRecurringDayThuCheckbox.checked = false;
    isRecurringDayFriCheckbox.checked = false;
    isRecurringDaySatCheckbox.checked = false;
    isRecurringDaySunCheckbox.checked = false;
    isRecurringWeekDayNumberRadioButton.checked = false;
    recurringDayEveryWeekCheckBox.checked = false;
    isRecurringWeekRadioButton.checked = false;
    isRecurringWeekNrOneRadioButton.checked = false;
    isRecurringWeekNrTwoRadioButton.checked = false;
    isRecurringWeekNrThreeRadioButton.checked = false;
    isRecurringWeekNrFourRadioButton.checked = false;
    isRecurringMonthRadioButton.checked = false;
    isRecurringYearRadioButton.checked = false;
}

isRecurringCheckbox.addEventListener("click", (e) => {

    if (isRecurringCheckbox.checked) {
        periodicityMenu.style.display = "block";
        PeriodicityYearMenu.style.display = "none";
        recUnderline.style.textDecorationColor = "rgba(235,235,235,0.5)";
    }
    else if (!isRecurringCheckbox.checked) {
        recCheckBoxIsUnchecked();
    }
})

// Recurring task (daily)
isRecurringDayRadioButton.addEventListener("click", (e) => {

    if (isRecurringDayRadioButton.value === "day") {
        PeriodicityDayMenu.style.display = "block";
        PeriodicityWeekMenu.style.display = "none";
        PeriodicityMonthMenu.style.display = "none";
        PeriodicityYearMenu.style.display = "none";

        dayInput.value = '1';

        isRecurringWeekNrOneRadioButton.checked = false;
        isRecurringWeekNrTwoRadioButton.checked = false;
        isRecurringWeekNrThreeRadioButton.checked = false;
        isRecurringWeekNrFourRadioButton.checked = false;
    }
    else if (!isRecurringDayRadioButton.value === "day") {
        PeriodicityDayMenu.style.display = "none";
    }
})

// Recurring task (weekly)
isRecurringWeekRadioButton.addEventListener("click", (e) => {

    if (isRecurringWeekRadioButton.value === "week") {
        PeriodicityWeekMenu.style.display = "block";
        PeriodicityDayMenu.style.display = "none";
        PeriodicityMonthMenu.style.display = "none";
        PeriodicityYearMenu.style.display = "none";
        weekInput.value = '1';
        isRecurringWeekDayNameRadioButton.checked = false;
        isRecurringDayMonCheckbox.checked = false;
        isRecurringDayTueCheckbox.checked = false;
        isRecurringDayWedCheckbox.checked = false;
        isRecurringDayThuCheckbox.checked = false;
        isRecurringDayFriCheckbox.checked = false;
        isRecurringDaySatCheckbox.checked = false;
        isRecurringDaySunCheckbox.checked = false;
        isRecurringWeekDayNumberRadioButton.checked = false;
        recurringDayEveryWeekCheckBox.checked = false;
    }
    else if (!isRecurringWeekRadioButton.value === "week") {
        PeriodicityWeekMenu.style.display = "none";
    }
})

// Recurring task (monthly)
isRecurringMonthRadioButton.addEventListener("click", (e) => {

    if (isRecurringMonthRadioButton.value === "month") {
        PeriodicityMonthMenu.style.display = "block";
        PeriodicityDayMenu.style.display = "none";
        PeriodicityWeekMenu.style.display = "none";
        PeriodicityYearMenu.style.display = "none";
        monthInput.value = '1';
        isRecurringWeekDayNameRadioButton.checked = false;
        isRecurringDayMonCheckbox.checked = false;
        isRecurringDayTueCheckbox.checked = false;
        isRecurringDayWedCheckbox.checked = false;
        isRecurringDayThuCheckbox.checked = false;
        isRecurringDayFriCheckbox.checked = false;
        isRecurringDaySatCheckbox.checked = false;
        isRecurringDaySunCheckbox.checked = false;
        isRecurringWeekDayNumberRadioButton.checked = false;
        recurringDayEveryWeekCheckBox.checked = false;
        isRecurringWeekNrOneRadioButton.checked = false;
        isRecurringWeekNrTwoRadioButton.checked = false;
        isRecurringWeekNrThreeRadioButton.checked = false;
        isRecurringWeekNrFourRadioButton.checked = false;
    }
    else if (!isRecurringMonthRadioButton.value === "month") {
        PeriodicityMonthMenu.style.display = "none";
    }
    })

// Recurring task (yearly)
isRecurringYearRadioButton.addEventListener("click", (e) => {

    if (isRecurringYearRadioButton.value === "year") {
        PeriodicityYearMenu.style.display = "block";
        PeriodicityDayMenu.style.display = "none";
        PeriodicityWeekMenu.style.display = "none";
        PeriodicityMonthMenu.style.display = "none";
        yearInput.value = '1';
        isRecurringWeekDayNameRadioButton.checked = false;
        isRecurringDayMonCheckbox.checked = false;
        isRecurringDayTueCheckbox.checked = false;
        isRecurringDayWedCheckbox.checked = false;
        isRecurringDayThuCheckbox.checked = false;
        isRecurringDayFriCheckbox.checked = false;
        isRecurringDaySatCheckbox.checked = false;
        isRecurringDaySunCheckbox.checked = false;
        isRecurringWeekDayNumberRadioButton.checked = false;
        recurringDayEveryWeekCheckBox.checked = false;
        isRecurringWeekNrOneRadioButton.checked = false;
        isRecurringWeekNrTwoRadioButton.checked = false;
        isRecurringWeekNrThreeRadioButton.checked = false;
        isRecurringWeekNrFourRadioButton.checked = false;
    }
    else if (!isRecurringYearRadioButton.value === "year") {
        PeriodicityYearMenu.style.display = "none";
    }
    })

// _ _ _

let sortedData;

// Add todos (to todo list)
// add task (addtask)

var weekDayNumber;

// Convert
function weekdayNameToWeekDayNumber(dateInputValue) {

    let currentWeekdayAbbreviated;

    if (isValidDateExceptFebruary(dateInputValue) === true) {
        if (isValidFebruaryDate(dateInputValue) === true) {
            currentWeekdayAbbreviated = getCurrentWeekDayForSelectedLanguage(getDayOfWeek(dateInputValue));
        }
        currentWeekdayAbbreviated = getCurrentWeekDayForSelectedLanguage(getDayOfWeek(dateInputValue));
    } else if (dateInputValue.value !== undefined) {
        currentWeekdayAbbreviated = getCurrentWeekDayForSelectedLanguage(getDayOfWeek(dateInputValue.value));
    } else if (dateInputValue.value === undefined) {
        if (dateInputValue !== undefined) {
            currentWeekdayAbbreviated = getCurrentWeekDayForSelectedLanguage(getDayOfWeek(dateInputValue));
        } else if (dateInputValue === undefined) {
            currentWeekdayAbbreviated = getCurrentWeekDayForSelectedLanguage(getDayOfWeek(defaultDate));
        }
    }

    if (currentWeekdayAbbreviated === "mån" || currentWeekdayAbbreviated === "mon") {
    weekDayNumber = "0";
    }
    else if (currentWeekdayAbbreviated === "tis" || currentWeekdayAbbreviated === "tue") {
        weekDayNumber = "1";
    }
    else if (currentWeekdayAbbreviated === "ons" || currentWeekdayAbbreviated === "wed") {
        weekDayNumber = "2";
    }
    else if (currentWeekdayAbbreviated === "tor" || currentWeekdayAbbreviated === "thu") {
        weekDayNumber = "3";
    }
    else if (currentWeekdayAbbreviated === "fre" || currentWeekdayAbbreviated === "fri") {
        weekDayNumber = "4";
    }
    else if (currentWeekdayAbbreviated === "lör" || currentWeekdayAbbreviated === "sat") {
        weekDayNumber = "5";
    }
    else if (currentWeekdayAbbreviated === "sun" || currentWeekdayAbbreviated === "sön") {
        weekDayNumber = "6";
    }

    return weekDayNumber;
}

function weekdayNameToWeekDayNumberMultiDuration(newConvertedDateString) {

    let currentWeekdayAbbreviated = getCurrentWeekDayForSelectedLanguage(getDayOfWeek(newConvertedDateString));

    if (currentWeekdayAbbreviated === "mån" || currentWeekdayAbbreviated === "mon") {
    weekDayNumber = "0";
    }
    else if (currentWeekdayAbbreviated === "tis" || currentWeekdayAbbreviated === "tue") {
        weekDayNumber = "1";
    }
    else if (currentWeekdayAbbreviated === "ons" || currentWeekdayAbbreviated === "wed") {
        weekDayNumber = "2";
    }
    else if (currentWeekdayAbbreviated === "tor" || currentWeekdayAbbreviated === "thu") {
        weekDayNumber = "3";
    }
    else if (currentWeekdayAbbreviated === "fre" || currentWeekdayAbbreviated === "fri") {
        weekDayNumber = "4";
    }
    else if (currentWeekdayAbbreviated === "lör" || currentWeekdayAbbreviated === "sat") {
        weekDayNumber = "5";
    }
    else if (currentWeekdayAbbreviated === "sun" || currentWeekdayAbbreviated === "sön") {
        weekDayNumber = "6";
    }
    return weekDayNumber;
}

let isCopy;

let plannedTodosObjectsArray = [];

    // _ _ _

    let selectedPeriod = '';
    let everyWeek = false;
    let weekPeriod = '';
    let recurringType = '';
    let duration = '';

    recurringDayEveryWeekCheckBox.addEventListener('change', function() {
        if (selectedPeriod !== 'day') {
            everyWeek = false;
        } else if (recurringDayEveryWeekCheckBox.checked === true) {
            everyWeek = true;
        } else if (recurringDayEveryWeekCheckBox.checked === false) {
            everyWeek = false;
        }
        updateDuration();
    })



    // _ _ _



    document.getElementsByName('select-period').forEach((element) => {
        element.addEventListener('change', function() {
            selectedPeriod = this.value;

            // Reset weekPeriod if the selectedPeriod is not 'week'
            if (selectedPeriod !== 'week') {
                weekPeriod = '';
            }
            updateDuration();
        });
    });

    document.getElementsByName('select-week-periodicity').forEach((element) => {
        element.addEventListener('change', function() {
            if (selectedPeriod === 'week') {
                weekPeriod = 'w' + this.value;
            }
            updateDuration();
        });
    });

    // Event listeners for duration input fields
    document.getElementById('rec-day-days').addEventListener('input', updateDuration);
    document.getElementById('rec-week-days').addEventListener('input', updateDuration);
    document.getElementById('rec-month-days').addEventListener('input', updateDuration);
    document.getElementById('rec-year-days').addEventListener('input', updateDuration);

    function updateDuration() {
        if (selectedPeriod === 'day') {
            duration = dayInput.value; }
        else if (selectedPeriod === 'day' && dayInput.disabled) {
            duration = "1";
        }
        else if (selectedPeriod === 'week') {
            duration = weekInput.value;
        }
        else if (selectedPeriod === 'month') {
            duration = monthInput.value;
        }
        else if (selectedPeriod === 'year') {
            duration = yearInput.value; }
        else {
            duration = "1"; // Default value if no period is selected
        }
    };

    function getRecurringType(selectedPeriod, isRecurringCheckbox) {
        if (!isRecurringCheckbox.checked) {
            return '';
        }
        else if (selectedPeriod === "day" && isRecurringCheckbox.checked) {
            return recurringType = "d";
          } else if (selectedPeriod === "week" && isRecurringCheckbox.checked) {
            return recurringType = "w";
          } else if (selectedPeriod === "month" && isRecurringCheckbox.checked) {
            return recurringType = "m";
          } else if (selectedPeriod === "year" && isRecurringCheckbox.checked) {
            return recurringType = "y";
          }
    }

    // _ _ _

    function getDuration(selectedPeriod) {
        if (selectedPeriod === "day" && dayInput.value !== '' && dayInput.value !== null && dayInput.value !== undefined) {
            return duration = dayInput.value;
          } else if (selectedPeriod === "week" && weekInput.value !== '' && weekInput.value !== null && weekInput.value !== undefined) {
            return duration = weekInput.value;
          } else if (selectedPeriod === "month" && monthInput.value !== '' && monthInput.value !== null && monthInput.value !== undefined) {
            return duration = monthInput.value;
          } else if (selectedPeriod === "year" && yearInput.value !== '' && yearInput.value !== null && yearInput.value !== undefined) {
            return duration = yearInput.value;
          } else {
          return duration = "1";
          }
    }

    // _ _ _

    function sortPlannedTodos(plannedTodos) {
        // Sorteringsfunktion (sortera 1. Datum, 2. Tid)
        plannedTodos.sort(function(a, b) {
            // Jämför datum först
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;

            // Om datum är lika, försök jämföra tid från "time" eller "todo"
            const timeA = a.time || extractTimeFromTodo(a.todo); // Kolla om tid finns i "time" eller i "todo"
            const timeB = b.time || extractTimeFromTodo(b.todo);

            if (timeA && timeB) {
                if (timeA < timeB) return -1;
                if (timeA > timeB) return 1;
            }

            return 0; // Om både datum och tid (från time eller todo) är lika
        });
    }

    // _ _ _

    // Add focus event listener
    textInputValue.addEventListener('focus', () => {
        textInputValue.classList.add('highlight');
    });

    // Add blur event listener
    textInputValue.addEventListener('blur', () => {
        textInputValue.classList.remove('highlight');
    });

    // _ _ _

// function addTaskToList() (start)
// function addTaskToList(dateInputValue) {
    function addTaskToList(resultString) {
        isCopy = false;

        // _ _ _

        if (resultString === "" || dateInputValue.value === "") {
        }

        else if(dateInputValue.value !== "") {

            let newTodo = {
                date: dateInputValue.value,
                todo: textInputValue.value,
                color: colorPickerSelect.value,
                isRecurring: isRecurringCheckbox.checked,
                recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                everyWeek: everyWeek,
                weekPeriod: weekPeriod,
                duration: getDuration(selectedPeriod),
                dataDate: weekdayNameToWeekDayNumber(dateInputValue),
                isEmpty: false
            }

        // _ _ _

        var dataDateNr = '';

        // Get date for recurring daily tasks
        // function checkIfDailyRecTaskInPast(dataDateNr) {

        // Returns the coming date for a daily recurring task (based on selected day (dataDate))
        // (startingDate >= dateDisplay.textContent)
            function getComingDailyRecTaskDate(dataDateNr) {

                let nextDate = '';
                let comingSevenRecDays = [];

                let startingDate = newTodo.date;    // First weekday date for the daily task (mon/tue/wed/..., dataDate 0/1/2/...)

                let startingDailyRecDate = new Date(startingDate);
                let nextOneRecDate = new Date(startingDate);
                let nextTwoRecDate = new Date(startingDate);
                let nextThreeRecDate = new Date(startingDate);
                let nextFourRecDate = new Date(startingDate);
                let nextFiveRecDate = new Date(startingDate);
                let nextSixRecDate = new Date(startingDate);

                let startingDailyRecDateString = startingDailyRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                Number(weekdayNameToWeekDayNumberMultiDuration(startingDailyRecDateString));

                nextOneRecDate.setDate(startingDailyRecDate.getDate() + 1);
                nextTwoRecDate.setDate(startingDailyRecDate.getDate() + 2);
                nextThreeRecDate.setDate(startingDailyRecDate.getDate() + 3);
                nextFourRecDate.setDate(startingDailyRecDate.getDate() + 4);
                nextFiveRecDate.setDate(startingDailyRecDate.getDate() + 5);
                nextSixRecDate.setDate(startingDailyRecDate.getDate() + 6);

                let nextOneRecDateString = nextOneRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                let nextTwoRecDateString = nextTwoRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                let nextThreeRecDateString = nextThreeRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                let nextFourRecDateString = nextFourRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                let nextFiveRecDateString = nextFiveRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                let nextSixRecDateString = nextSixRecDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format


                comingSevenRecDays.push(startingDailyRecDateString, nextOneRecDateString, nextTwoRecDateString, nextThreeRecDateString, nextFourRecDateString, nextFiveRecDateString, nextSixRecDateString);
                comingSevenRecDays.forEach((comingWeekDate) => {
                    if (Number(weekdayNameToWeekDayNumberMultiDuration(comingWeekDate)) === dataDateNr) {

                        nextDate = comingWeekDate;

                        if (plannedTodos.length >= 3) {
                            dynamicContainerToken = "load_func";
                            dynamicContainerDataId = plannedTodos.length;
                            addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                        }
                    }
                })
                return nextDate;
            }

        // _ _ _

        if (plannedTodos.length > 0) {
                plannedTodos.forEach(todoRow => {
                if (todoRow.date === newTodo.date && todoRow.todo === newTodo.todo) {
                    isCopy = true
                }
            })
        }

        if (plannedTodos.length > 0 && isCopy === true) {
            alert(copyAlreadyExists[selectedLanguage]);
            return 0;
        }
        // Add todo-object to plannedTodos (object array)

        // Add yearly recurring todo
        else if (plannedTodos.length >= 0 && isCopy === false && newTodo.date >= dateDisplay.textContent && newTodo.isRecurring === true && newTodo.recurringType === 'y') {

            // Handle duration >= 1

            //stringToNumber
            let durationStringToNumber = Number(newTodo.duration);

            if (durationStringToNumber === 1) {

                // Add rec yearly task"
                if (plannedTodos.length >= 3) {
                    dynamicContainerToken = "load_func";
                    dynamicContainerDataId = plannedTodos.length;
                    addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                }

                let ifRecYearAddToTodoText = "🔁Y ";

                newTodo.todo = ifRecYearAddToTodoText + textInputValue.value;

                plannedTodos.push(newTodo);

            } else if (durationStringToNumber > 1) {

                for (let i = 0; i < durationStringToNumber; i++) {

                    let newDurationDate = new Date(newTodo.date);
                    newDurationDate.setDate(newDurationDate.getDate() + i); // Increment the date by 'i' days
                    let newConvertedDateString = newDurationDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                    // MAKE A DUPLICATE CHECKER !? (Don't add duplicates)

                    isCopy = false;

                    plannedTodos.forEach((todoRow) => {
                        if (todoRow.date === newConvertedDateString && todoRow.todo === textInputValue.value) {
                            isCopy = true;
                        }
                        if (isCopy === true) {
                            alert(copyExistsInInterval[selectedLanguage]);
                            return 0;
                        }
                        // isCopy exists(?)
                    })

                    if (isCopy === false) {

                        let ifRecYearAddToTodoText = "🔁Y ";

                        plannedTodos.push({
                            date: newConvertedDateString,
                            todo: ifRecYearAddToTodoText + textInputValue.value,
                            color: colorPickerSelect.value,
                            isRecurring: isRecurringCheckbox.checked,
                            recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                            everyWeek: everyWeek,
                            weekPeriod: weekPeriod,
                            duration: getDuration(selectedPeriod),
                            dataDate: weekdayNameToWeekDayNumberMultiDuration(newConvertedDateString),
                            isEmpty: false
                        });
                    }

                // _ _ _

                    if (plannedTodos.length > 1 && plannedTodos.length < 3) {

                        // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                        sortPlannedTodos(plannedTodos);
                    }


                        // Add container (if plannedTodoos > 3)
                        // add div
                        if (plannedTodos.length > 3) {
                            dynamicContainerToken = "addTaskToList";
                            addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                        }

                    }
                }



            // _ _ _

        }
        // Add monthly recurring todo (if date <= 28)
        else if (plannedTodos.length >= 0 && isCopy === false && newTodo.date >= dateDisplay.textContent && newTodo.isRecurring === true && newTodo.recurringType === 'm' && isDayLessThan29(newTodo.date) === true) {

            // Handle duration >= 1

            //stringToNumber
            let monthlyRecDurationStringToNumber = Number(newTodo.duration);

            if (monthlyRecDurationStringToNumber === 1) {
                if (plannedTodos.length >= 3) {
                dynamicContainerToken = "load_func";
                dynamicContainerDataId = plannedTodos.length;
                addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
            }
                let ifRecMonthAddToTodoText = "🔁M ";
                newTodo.todo = ifRecMonthAddToTodoText + textInputValue.value;
                plannedTodos.push(newTodo);
        }
        else if (monthlyRecDurationStringToNumber > 1) {

            for (let i = 0; i < monthlyRecDurationStringToNumber; i++) {

                let newMontlyRecDurationDate = new Date(newTodo.date);
                newMontlyRecDurationDate.setDate(newMontlyRecDurationDate.getDate() + i); // Increment the date by 'i' days
                let newConvertedMontlyRecDateString = newMontlyRecDurationDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                // if duration > '1' -> multiple newConvertedDateString variables

                // MAKE A DUPLICATE CHECKER !? (Don't add duplicates)

                isCopy = false;

                plannedTodos.forEach((todoRow) => {
                    if (todoRow.date === newConvertedMontlyRecDateString && todoRow.todo === textInputValue.value) {
                        isCopy = true;
                    }
                    if (isCopy === true) {
                        alert(copyExistsInInterval[selectedLanguage]);
                        return 0;
                    }
                })

                if (isCopy === false) {
                    let ifRecMonthAddToTodoText = "🔁M ";
                    plannedTodos.push({
                        date: newConvertedMontlyRecDateString,
                        todo: ifRecMonthAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: everyWeek,
                        weekPeriod: weekPeriod,
                        duration: getDuration(selectedPeriod),
                        dataDate: weekdayNameToWeekDayNumberMultiDuration(newConvertedMontlyRecDateString),
                        isEmpty: false
                    });
                }

                // _ _ _

                if (plannedTodos.length > 1 && plannedTodos.length < 3) {


                    // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                    sortPlannedTodos(plannedTodos);

                }


                // Add container (if plannedTodoos > 3)
                // add div
                    if (plannedTodos.length > 3) {
                        dynamicContainerToken = "addTaskToList";
                        addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                    }

                // _ _ _

                }
            }


        // _ _ _
        }
        // Don´t add monthly recurring todos if date > 28
        else if (newTodo.date >= dateDisplay.textContent && newTodo.isRecurring === true && newTodo.recurringType === 'm' && isDayLessThan29(newTodo.date) === false) {
            alert(recurringMonthDateAlert[selectedLanguage]);
        }

        // Add weekly recurring todo
        else if (plannedTodos.length >= 0 && isCopy === false && newTodo.date >= dateDisplay.textContent && newTodo.isRecurring === true && newTodo.recurringType === 'w' && newTodo.weekPeriod !== '') {

            // Handle duration >= 1

            //stringToNumber
            let weeklyRecDurationStringToNumber = Number(newTodo.duration);

            if (weeklyRecDurationStringToNumber === 1) {
                if (plannedTodos.length >= 3) {
                    dynamicContainerToken = "load_func";
                    dynamicContainerDataId = plannedTodos.length;
                    addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                }

                let weekOption = newTodo.weekPeriod;
                weekOption = weekOption.toUpperCase();
                let ifRecWeekAddToTodoText = "🔁" + weekOption + " ";
                newTodo.todo = ifRecWeekAddToTodoText + textInputValue.value;
                plannedTodos.push(newTodo);
            } else if (weeklyRecDurationStringToNumber > 1) {

                for (let i = 0; i < weeklyRecDurationStringToNumber; i++) {

                    let newWeeklyRecDurationDate = new Date(newTodo.date);
                    newWeeklyRecDurationDate.setDate(newWeeklyRecDurationDate.getDate() + i); // Increment the date by 'i' days
                    let newConvertedWeeklyRecDateString = newWeeklyRecDurationDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                    // if duration > '1' -> multiple newConvertedDateString variables

                    // MAKE A DUPLICATE CHECKER !? (Don't add duplicates)

                    isCopy = false;

                    plannedTodos.forEach((todoRow) => {
                        if (todoRow.date === newConvertedWeeklyRecDateString && todoRow.todo === textInputValue.value) {
                            isCopy = true;
                        }
                        if (isCopy === true) {
                            alert(copyExistsInInterval[selectedLanguage]);
                            return 0;
                        }
                        // isCopy exists(?) (2)
                    })

                    if (isCopy === false) {
                        let weekOption = newTodo.weekPeriod;
                        weekOption = weekOption.toUpperCase();
                        let ifRecWeekAddToTodoText = "🔁" + weekOption + " ";
                        plannedTodos.push({
                            date: newConvertedWeeklyRecDateString,
                            todo: ifRecWeekAddToTodoText + textInputValue.value,
                            color: colorPickerSelect.value,
                            isRecurring: isRecurringCheckbox.checked,
                            recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                            everyWeek: everyWeek,
                            weekPeriod: weekPeriod,
                            duration: getDuration(selectedPeriod),
                            dataDate: weekdayNameToWeekDayNumberMultiDuration(newConvertedWeeklyRecDateString),
                            isEmpty: false
                        });
                    }

                // _ _ _

                // if (plannedTodos.length > 1) {
                    if (plannedTodos.length > 1 && plannedTodos.length < 3) {

                        // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                        sortPlannedTodos(plannedTodos);

                    }


                    // Add container (if plannedTodoos > 3)
                    // add div
                        if (plannedTodos.length > 3) {
                            dynamicContainerToken = "addTaskToList";
                            addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                        }

                // _ _ _

                    }
                }



            // _ _ _
            // _ _ _
        }

        // _ _ _
        // _ _ _
        // _ _ _
        // _ _ _

        // Add daily recurring todo (Every week)
        else if (plannedTodos.length >= 0 &&
            isCopy === false &&
            newTodo.date >= dateDisplay.textContent &&
            newTodo.isRecurring === true &&
            newTodo.recurringType === 'd' &&
            isRecurringWeekDayNameRadioButton.checked === true &&
            recurringDayEveryWeekCheckBox.checked === true) {
            // plannedTodos.push(newTodo);
            // Handle duration >= 1


            //stringToNumber
            // let dailyRecDurationStringToNumber = Number(newTodo.duration);
            // console.log("weeklyRecdurationStringToNumber = " + dailyRecDurationStringToNumber);

            let ifRecDaySpecificDaysAddToTodoText = "🔁D ";

            // duration === 1

            // Add next coming Monday (after startingDate)
            if (isRecurringDayMonCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 0;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '0',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayTueCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 1;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '1',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayWedCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 2;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '2',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayThuCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 3;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '3',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayFriCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 4;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '4',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDaySatCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 5;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '5',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDaySunCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 6;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: ifRecDaySpecificDaysAddToTodoText + textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: isRecurringCheckbox.checked,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: true,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '6',
                        isEmpty: false
                    });
                }
            }

                // _ _ _

                // if (plannedTodos.length > 1)
                    if (plannedTodos.length > 1 && plannedTodos.length < 3) {

                        // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                        sortPlannedTodos(plannedTodos);

                    }
        }

        // _ _ _
        // Add daily recurring todo (!Every week)
        else if (plannedTodos.length >= 0 &&
            isCopy === false &&
            newTodo.date >= dateDisplay.textContent &&
            newTodo.isRecurring === true &&
            newTodo.recurringType === 'd' &&
            isRecurringWeekDayNameRadioButton.checked === true &&
            recurringDayEveryWeekCheckBox.checked === false) {

            //stringToNumber
            // let dailyRecDurationStringToNumber = Number(newTodo.duration);
            // console.log("weeklyRecdurationStringToNumber = " + dailyRecDurationStringToNumber);

            // duration === 1

            // Add next coming Monday (after startingDate)
            if (isRecurringDayMonCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 0;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '0',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayTueCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 1;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '1',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayWedCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 2;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '2',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayThuCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 3;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '3',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDayFriCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 4;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '4',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDaySatCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 5;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '5',
                        isEmpty: false
                    });
                }
            }
            if (isRecurringDaySunCheckbox.checked) {
                if (isCopy === false) {
                    dataDateNr = 6;
                    plannedTodos.push({
                        date: getComingDailyRecTaskDate(dataDateNr),
                        todo: textInputValue.value,
                        color: colorPickerSelect.value,
                        isRecurring: false,
                        recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                        everyWeek: false,
                        weekPeriod: '',
                        duration: '1',
                        dataDate: '6',
                        isEmpty: false
                    });
                }
            }

                // _ _ _

                // if (plannedTodos.length > 1) {
                    if (plannedTodos.length > 1 && plannedTodos.length < 3) {

                        // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                        sortPlannedTodos(plannedTodos);
                    }
        }

            // Add daily recurring (duration) todo (Every week)
            else if (plannedTodos.length >= 0 &&
                isCopy === false &&
                newTodo.date >= dateDisplay.textContent &&
                newTodo.isRecurring === true &&
                newTodo.recurringType === 'd' &&
                isRecurringWeekDayNumberRadioButton.checked === true &&
                recurringDayEveryWeekCheckBox.checked === true) {

                        let durationDaysNumber = Number(dayInput.value);

                        if (durationDaysNumber > 7) {
                            durationDaysNumber = 7;
                        }


                        for (let i = 1; i <= durationDaysNumber; i++) {

                            let newDailyRecDurationDate = new Date(newTodo.date);
                            newDailyRecDurationDate.setDate(newDailyRecDurationDate.getDate() + i-1); // Increment the date by 'i' days
                            let newConvertedDailyRecDateString = newDailyRecDurationDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                            let ifRecDayDurationDaysAddToTodoText = "🔁#D ";

                            if (plannedTodos.length >= 3) {
                                dynamicContainerToken = "load_func";
                                dynamicContainerDataId = plannedTodos.length;
                                addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                            }

                            if (isCopy === false) {
                                plannedTodos.push({
                                    date: newConvertedDailyRecDateString,
                                    todo: ifRecDayDurationDaysAddToTodoText + textInputValue.value,
                                    color: colorPickerSelect.value,
                                    isRecurring: true,
                                    recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                                    everyWeek: true,
                                    weekPeriod: '',
                                    duration: durationDaysNumber.toString(),
                                    dataDate: weekdayNameToWeekDayNumberMultiDuration(newConvertedDailyRecDateString),
                                    isEmpty: false
                                });
                            }
                        }

                    if (plannedTodos.length > 1 && plannedTodos.length <= 3) {
                        // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                        sortPlannedTodos(plannedTodos);
                    }
                }

                // Add daily recurring (duration) todo (!Every week)
                else if (plannedTodos.length >= 0 &&
                    isCopy === false &&
                    newTodo.date >= dateDisplay.textContent &&
                    newTodo.isRecurring === true &&
                    newTodo.recurringType === 'd' &&
                    isRecurringWeekDayNumberRadioButton.checked === true &&
                    recurringDayEveryWeekCheckBox.checked === false) {

                        let durationDaysNumber = Number(dayInput.value);

                        if (durationDaysNumber > 14) {
                            alert(durationDayNumberLargerThanFourteen[selectedLanguage])
                            durationDaysNumber = 14;
                        }

                        for (let i = 1; i <= durationDaysNumber; i++) {

                            let newDailyRecDurationDate = new Date(newTodo.date);
                            newDailyRecDurationDate.setDate(newDailyRecDurationDate.getDate() + i-1); // Increment the date by 'i' days
                            let newConvertedDailyRecDateString = newDailyRecDurationDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                            if (plannedTodos.length >= 3) {
                                dynamicContainerToken = "load_func";
                                dynamicContainerDataId = plannedTodos.length;
                                addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                            }

                            if (isCopy === false) {
                                plannedTodos.push({
                                    date: newConvertedDailyRecDateString,
                                    todo: textInputValue.value,
                                    color: colorPickerSelect.value,
                                    isRecurring: false,
                                    recurringType: getRecurringType(selectedPeriod, isRecurringCheckbox) || '',
                                    everyWeek: false,
                                    weekPeriod: '',
                                    duration: durationDaysNumber,
                                    dataDate: weekdayNameToWeekDayNumberMultiDuration(newConvertedDailyRecDateString),
                                    isEmpty: false
                                });
                            }
                        }

                        if (plannedTodos.length > 1 && plannedTodos.length <= 3) {
                            // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
                            sortPlannedTodos(plannedTodos);
                        }
                    }

        // _ _ _

        // Add todo object to plannedTodos (!recurring)
            else if (plannedTodos.length >= 0 && isCopy === false && newTodo.date >= dateDisplay.textContent && newTodo.isRecurring === false) {
                plannedTodos.push(newTodo);

            if (plannedTodos.length > 1 && plannedTodos.length < 3) {


            // Sorteringsfunktion (sortera 1. Datum, 2. Tid (Senast sist))
            sortPlannedTodos(plannedTodos);

        }


        // Add container (if plannedTodoos > 3)
        // add div
            if (plannedTodos.length > 3) {
                dynamicContainerToken = "addTaskToList";
                addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
            }
        }

        // Past dates should not be added!?
        else if (plannedTodos.length >= 0 && isCopy === false && newTodo.date < dateDisplay.textContent) {
            alert(cantPlanThePast[selectedLanguage]);
        }

        // _ _ _

    sortPlannedTodos(plannedTodos);
    // Update Current Plan (DOM)

    // _ _ _

    // Empty todo text input
    textInputValue.value = '';

    // Update the week schedule (when a new task is added)
    updateCurrentWeekSchedule(false);
    ifPlannedTodosIsPastPutToPastPlans();

    recurringType = '';
    everyWeek= false;
    duration = '';

    // _ _ _

    updateRecurringPlannedTodos(plannedTodos);

    // _ _ _

    }

    // Get an alert if recurring day-s radio button is selected (but 'Select days' or 'Duration (days) are unchecked)
    if (isRecurringDayRadioButton.checked === true && isRecurringWeekDayNameRadioButton.checked === false && isRecurringWeekDayNumberRadioButton.checked === false) {
        alert(selectRecurringDaysOrDuration[selectedLanguage]);
    }

    // Get an alert if recurring day-s radio button is selected (but 'Select days' or 'Duration (days) are unchecked)
    if (isRecurringWeekRadioButton.checked === true && isRecurringWeekNrOneRadioButton.checked === false && isRecurringWeekNrTwoRadioButton.checked === false && isRecurringWeekNrThreeRadioButton.checked === false && isRecurringWeekNrFourRadioButton.checked === false) {
        alert(selectRecurringNumberOfWeeks[selectedLanguage]);
    }

    recurringYearDayDurationInput.value = 1;
    recCheckBoxIsUnchecked();
    isRecurringCheckbox.checked = false;
}

// function addTaskToList() (end)

// _ _ _

// Add task when Enter button is pressed
textInputValue.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTaskToList();
    }
});

// _ _ _

function updateRecurringPlannedTodos(plannedTodos) {

    // Example dateDisplay and plannedTodos
    const dateDisplay = document.getElementById('date-display'); // Assuming this element exists

    // Ensure dateDisplay.textContent is a valid date
    if (dateDisplay.textContent) {
        const displayDate = new Date(dateDisplay.textContent);
        if (!isNaN(displayDate)) {
            const displayYear = displayDate.getFullYear();

    if (plannedTodos.length > 0) {

        // If yearly recurring:
            plannedTodos.forEach(task => {
                // Ensure the task is recurring yearly and its date is valid
                if (task.recurringType === 'y' && task.date < displayDate.textContent) {
                    const taskDate = new Date(task.date);

                    if (!isNaN(taskDate)) {
                        // Check if the task date is in the future and matches the display year
                        if (
                            taskDate.getFullYear() === displayYear &&
                            taskDate < new Date()
                        ) {
                            // Replace the year with the coming year
                            taskDate.setFullYear(taskDate.getFullYear() + 1);

                            // Update task.date with the adjusted date in 'YYYY-MM-DD' format
                            task.date = taskDate.toISOString().split('T')[0];
                            plannedTodos.push(task);
                        }
                    } else {
                        console.error(`Invalid date format for task: ${task.date}`);
                    }
                }
            });
        }
        } else {
            console.error('Invalid date format in dateDisplay.textContent');
        }
    } else {
        console.error('dateDisplay.textContent is empty');
    }

    updateCurrentWeekSchedule(false);

}



        // textareas används inte? (2025-01-20)
        const textareas = document.querySelectorAll('textarea');

        const status = document.getElementById('status');

        // var defaultDate; // Variable to store default date
        var currentDateDiv;
        var editDate; // Variable to store edited date
        let currentDataId; // To keep track of the current data-id
        // _ _ _

        var editDateButton;
        var editDateStatus = true;

        var newDate;

        // _ _ _

        // Attach focus event listener to all todo-text textareas
        document.querySelectorAll(".todo-text").forEach(todoTextArea => {
            todoTextArea.addEventListener("focus", () => {

                // Get the current data-id of the focused textarea
                const dataId = todoTextArea.getAttribute("data-id");

                // Get the value of the todo-text textarea for this data-id
                const todoValue = todoTextArea.value;

                if (plannedTodos.length === 0) {
                    alert(alertAddBeforeEdit[selectedLanguage]);
                    todoTextArea.blur();
                    textInputValue.focus();
                } else if (plannedTodos.length > 0) {

                    // Log the data-id and value
                    defaultTodoText = todoValue;

                    // Optional: Update a status or display this information somewhere in the UI
                    const status = document.getElementById("status");
                    if (status) {
                        status.textContent = `Focused todo-text (data-id: ${dataId}): "${todoValue}"`;
                    }
                }
            });
        });

        var isDateCopy = false;
        var isTodoCopy = false;
        var isEditDuplicate = false;

        // _ _ _

        function checkForTodoDateDuplicates(defaultDate, defaultTodoText, dateCollection, todoCollection, dataId) {

            plannedTodos.forEach(todoRow => {

                if (isValidDateExceptFebruary(todoRow.date) === true &&
                    todoRow.date === dateCollection[dataId].value &&
                    todoRow.todo === todoCollection[dataId].value &&
                    plannedTodos.length > 3) {

                    dateCollection[dataId].value = defaultDate;
                    dateCollection[dataId].innerHTML = defaultDate;
                    todoCollection[dataId].value = defaultTodoText;
                    todoCollection[dataId].innerHTML = defaultTodoText;

                    return isEditDuplicate = true
                }
            });
        }

        // _ _ _

        // Check newDate format and time -> editDate = ...
        function validateAndAssignDate(newDate, defaultDate, dataId) {

            // Regular expression to check if the string is in the format "YYYY-MM-DD"
            const regexA = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
            const regexB = /^\d{4}-\d{2}-\d{2}$/;

            // Helper function to check if the date is today or later
            function isTodayOrLater(dateString) {
                const today = new Date();
                const inputDate = new Date(dateString);

                // Compare only dates, ignoring time
                today.setHours(0, 0, 0, 0);
                inputDate.setHours(0, 0, 0, 0);

                return inputDate >= today;
            }

            // Validate the date format and check if it's a valid calendar date
            if (regexA.test(newDate) && regexB.test(newDate) && isValidDateExceptFebruary(newDate) === true || regexA.test(newDate) && regexB.test(newDate) && isValidFebruaryDate(newDate) === true) {
                const [year, month, day] = newDate.split("-").map(Number);
                const date = new Date(year, month - 1, day);

                if (
                    date.getFullYear() === year &&
                    date.getMonth() === month - 1 &&
                    date.getDate() === day &&
                    isTodayOrLater(newDate)
                ) {
                    // If valid and today or later, return newDate
                    editDate = newDate;
                }
            } else if (newDate === undefined || regexA.test(newDate) === false || regexB.test(newDate) === false || isValidDateExceptFebruary(newDate) === false || isValidFebruaryDate(newDate) === false) {
                // If invalid or not today or later, assign defaultDate
                alert(alertCheckValidDate[selectedLanguage]);

                newDate = defaultDate;
                dateCollection[dataId].value = defaultDate;
                dateCollection[dataId].innerHTML = defaultDate;

                if (plannedTodos.length === 0) {
                    editDate = '';
                }
                else if (defaultDate !== plannedTodos[dataId].date) {
                    defaultDate = plannedTodos[dataId].date;
                }
                editDate = defaultDate;
            }
        }

        // editDateButtonFunctionality() used with hidden button(?)
        function editDateButtonFunctionality(newDate, dataId) {

            // dataId = ?

            newDate = dateCollection[dataId].value;

            validateAndAssignDate(newDate, defaultDate, dataId);

            if (dateCollection[dataId].value === defaultDate) {
            } else if (dateCollection[dataId].value !== defaultDate) {
            updateCurrentWeekSchedule(false);
            }
        }


        function createEditDateButton(currentDateDiv, dataId) {

            // Create the orange button
            editDateButton = document.createElement('button');
            editDateButton.textContent = 'Edit Date';
            editDateButton.classList.add('edit-date-button');

            // Add click event listener to the button
            editDateButton.addEventListener('click', () => {

                // What should happen when the Edit Button is clicked!?
                // Return "editDate"
                editDateButtonFunctionality(newDate, dataId);
                removeEditDateButton(dataId);
                isDateFieldFocus = false;
                changeDateFieldBackgroundColor(isDateFieldFocus, currentDateDiv) // Optional: Highlight when active });
            });

            // Add the button after the currentDateDiv
            if (!document.getElementById(`edit-button-${dataId}`)) {
                editDateButton.id = `edit-button-${dataId}`;
                currentDateDiv.parentNode.appendChild(editDateButton);
            }
        }

        function validateDate(newDate, defaultDate) {
            // Regular expression to check if the date is in "YYYY-MM-DD" format
            const datePattern = /^\d{4}-\d{2}-\d{2}$/;

            // Check if newDate matches the pattern
            if (!datePattern.test(newDate)) {
                console.log('Invalid date format. Setting newDate to defaultDate.');
                return defaultDate;
            }

            // Check if newDate is today or later
            const currentDate = new Date().toISOString().split('T')[0];
            if (newDate < currentDate) {
                console.log('Date is earlier than today. Setting newDate to defaultDate.');
                return defaultDate;
            }

            // If newDate is valid and today or later, return newDate
            return newDate;
        }

        // _ _ _

        var isDateFieldFocus;
        // Change date text field background color

        function changeDateFieldBackgroundColor(isDateFieldFocus, currentDateDiv) {

            if (isDateFieldFocus === false) {
                    // dateFieldTextarea.style.backgroundColor = 'rgb(202, 202, 202)';
                    currentDateDiv.style.backgroundColor = 'rgb(202, 202, 202)';

            } else if (isDateFieldFocus === true) {
                // currentDateDiv.style.backgroundColor = 'lightyellow';
                currentDateDiv.style.backgroundColor = 'rgb(240, 240, 231)';
            }

        }

        // _ _ _

            // Function to check if the div is focused
            function isFirstDateDivFocused() {
                if (document.activeElement === firstDateDiv) {
                    // The div is currently focused!")
                    return true;
                } else if (document.activeElement !== firstDateDiv) {
                    return false;
                    // The div is not focused
                }
            }

            // _ _ _

        dateFields.forEach(dateFieldTextarea => {

            // Event listener for focus event
            dateFieldTextarea.addEventListener('focus', (e) => {

                const currentValue = e.target.value; // Get the current value of the field
                console.log(`Updated value in field ${e.target.getAttribute('data-id')}: ${currentValue}`);

                let dataId = `${dateFieldTextarea.getAttribute('data-id')}`

                //_ _ _

                status.textContent = `Date textarea with data-id="${dateFieldTextarea.getAttribute('data-id')}" is active.`;

                isDateFieldFocus = true;

                currentDateDiv = document.querySelector(`.todo-date[data-id="${dataId}"]`);

                // _ _ _

                defaultDate = getDateInputString();

                editDate = dateCollection[dataId].value

                // _ _ _

                    if (plannedTodos.length > 0 && dataId === "0") {
                    // status.textContent = `Date textarea with data-id="${dataId}" is active.`;

                // _ _ _

                    }

                isDateFieldFocus = true;
                changeDateFieldBackgroundColor(isDateFieldFocus, dateFieldTextarea) // Optional: Highlight when active });
                dateFieldTextarea.style.backgroundColor = '';

            });

            // _ _ _

            // Event listener for blur event (start)
            // dataId (0-2(?))
            dateFieldTextarea.addEventListener('blur', (event) => {
                let dataId = `${dateFieldTextarea.getAttribute('data-id')}`

                // _ _ _

                    dateInputString = getDateInputString();

                    // if selected date is a valid date
                    if (isValidDateExceptFebruary(dateInputString) === true || isValidFebruaryDate(dateInputString) === true) {
                        plannedTodos[dataId].date = dateCollection[dataId].value;
                    }

                    // Prevent blur event if the Edit Date button is clicked
                    if (event.relatedTarget && event.relatedTarget.id === `edit-button-${dataId}`) {
                        return;
                    }

                    dateInputString = getDateInputString();

                    defaultTodoText = todoCollection[dataId].value;

                    // Edit-kontroll: dataId 0-2
                    if (dateInputString >= dateDisplay.textContent && isValidDateExceptFebruary(dateInputString) === true && isValidFebruaryDate(dateInputString) === true) {
                        // Edited date is OK, update date!
                        handleDateInput(dateInputString, defaultDate);

                    } else if (dateInputString < dateDisplay.textContent || isValidDateExceptFebruary(dateInputString) === false && isValidFebruaryDate(dateInputString) === false || dateInputString === undefined) {

                        dateCollection[dataId].value = defaultDate;
                        dateCollection[dataId].innerHTML = defaultDate;

                        dateInputString = defaultDate;

                        handleDateInput(dateInputString, defaultDate);
                        updateCurrentWeekSchedule(true)
                    }
                    else if (dateInputString = '') {
                    }
                    // status.textContent = 'No Date textarea is active.';

                    checkForTodoDateDuplicates(defaultDate, defaultTodoText, dateCollection, todoCollection, dataId);

                        if (plannedTodos.length === dateCollection.length && plannedTodos.length > 0  && isValidDateExceptFebruary(resultString) === true && isValidFebruaryDate(resultString) === true && resultString !== undefined) {
                            plannedTodos[dataId].date = resultString;
                        } else if (resultString === undefined || isValidDateExceptFebruary(resultString) === false && isValidFebruaryDate(resultString) === false) {

                            resultString = defaultDate;

                            // on blur, a lot of false, ... resultString (2) = " + resultString

                            // if ('2025-03-1' < dateDisplay.textContent)   (#"2025-03-1")
                                if (plannedTodos[dataId].date < dateDisplay.textContent) {
                                    plannedTodos[dataId].date = defaultDate;
                                }
                        }

                        dateCollection[dataId].value = resultString;
                        dateCollection[dataId].innerHTML = resultString;

                        plannedTodos.forEach(todoRow => {

                            //to doRow.date (i forEach blur (dataId 0-2)) (1) =" + todoRow.date)

                            if (todoRow.date === undefined) {
                                todoRow.date = defaultDate;
                                todoRow.todo = defaultTodoText;
                            }

                            //to doRow.date (i forEach blur (dataId 0-2)) (2) =" + todoRow.date)
                        });

                        sortPlannedTodos(plannedTodos);

                    updateCurrentWeekSchedule(true);

                    removeEditDateButton(dataId);
                    isDateFieldFocus = false;
                    changeDateFieldBackgroundColor(isDateFieldFocus, dateFieldTextarea) // Optional: Highlight when active });
                    dateFieldTextarea.style.backgroundColor = ''; // Optional: Reset background color }); });
            });

            // _ _ _

        });
        //Event listener for blur event (end)

        // _ _ _

        function removeEditDateButton(dataId) {
            defaultDate = '';
            // Remove the "Edit Date" button
            const button = document.getElementById(`edit-button-${dataId}`);
            if (button) {
                button.remove();
            }
        }

        function updateDateCollection(dataId) {
            // Set dateCollection value to defaultDate and update innerHTML
            if (defaultDate) {
                dateCollection[dataId].value = defaultDate;
                dateCollection[dataId].innerHTML = defaultDate;
                const planCurrentDdateDiv = document.querySelector(`.todo-date[data-id="${dataId}"]`);
                if (planCurrentDdateDiv) {
                    planCurrentDdateDiv.value = defaultDate; // Update the textarea value
                }
            }
        }

// dataId is defined here
let dataId;

function getDataId(dataId) {
    if (!dataId) {
        console.warn("dataId is not provided.");
    }
    let currentDataId = dataId;
    return currentDataId;
}

    // dateInputString (sträng som skickas in i handleDateInput()-funktionen)
    var dateInputString;

    // getDateInputString() hämtar task dateString från DOM:en
    function getDateInputString() {
        dataId = event.target.getAttribute('data-id');

        // exceptfeb
        if (isValidDateExceptFebruary(dateCollection[dataId].value) === true || isValidFebruaryDate(dateCollection[dataId].value) === true) {
            dateInputString = dateCollection[dataId].value;
        }
        else if (isValidDateExceptFebruary(dateCollection[dataId].value) === false &&
                dateCollection[dataId].value < dateDisplay.textContent) {

            if (isValidFebruaryDate(dateCollection[dataId].value) === false &&
            dateCollection[dataId].value < dateDisplay.textContent) {
                dateInputString = defaultDate;
            }
            dateInputString = defaultDate;
        }

        return dateInputString;
    }

function getDateFields(dateFields) {
    if (!dateFields) {
        console.warn("dateFields are not provided.");
    }
    let currentDateFields = dateFields;
    return currentDateFields;
}

function getTodoFields(todoFields) {
    if (!todoFields) {
        console.warn("todoFields are not provided.");
    }
    let currentTodoFields = todoFields;
    return currentTodoFields;
}

// _ _ _

// Behöver uppdateras (2024-10-16?)
function checkIfDateAndTextAreEmpty() {
    getDataId(dataId);
    if (dateCollection[dataId].value === '' && todoCollection[dataId].value === '') {
        if (plannedTodos.length > 0 && dataId !== "2") {
            plannedTodos[dataId].date = '';
            plannedTodos[dataId].todo = '';
            plannedTodos[dataId].color = '';
            // todoColorCollection[dataId].style.backgroundColor = 'rgb(221, 221, 221)';
            todoColorCollection[dataId].style.backgroundColor = 'rgb(228, 228, 228)';
            plannedTodos[dataId].isEmpty = true;
        }
    }
}

        // Date fields
        // Select all date fields (textareas) with the class 'todo-date'

        // UPPDATERA nya date-div:ar med addeventlistener!!! (och kör funktionen nedan när de editeras)
        // const dateFields = document.querySelectorAll('.todo-date');
        // var dateFields = document.querySelectorAll('.todo-date');

        // Add event listeners to all the created date fields

        dateFields = getDateFields(dateFields);

        if (dateCollection[0].value !== undefined && plannedTodos.length > 0 && plannedTodos !== undefined) {

            // When input is changed for any date field (in Current Plan)... (start)
            dateFields.forEach(function(field) {

                field.addEventListener('input', function(event) {

                    dataId = event.target.getAttribute('data-id');  // Get the todo index
                    const key = event.target.getAttribute('data-key');  // Get the key (todo, color, etc.)
                    console.log("key = " + key)

                    getDataId(dataId);

                    dateInputString = getDateInputString();

                    // 2025-03-03: Ta bort 9-gräns
                    if (dateCollection[dataId].value !== ''
                        )
                        {


                    // UPPDATERA TODO-TASK-List-DATUM (och dataDate), Lägg till på nytt (objekt och DOM-element) och ta bort gammalt (objekt och DOM-element)

                    // 1. Om DOM-datumet (dateCollection[dataId].value) ändras && nytt datum finns i veckovy. (loopa igenom och undersök om dateCollection[dataId].value === weekDates[i]) => Ta bort old todo-vecko-div från vecko-vy (se removeSpecificTodo)
                    // 2. Lägg till ny todo-vecko-div i vecko-vy (för nytt datum) ((där style.backgroundColor === ''(?)))

                    plannedTodos[dataId].dataDate = weekdayNameToWeekDayNumber(dateCollection[dataId].value)

                    // _ _ _

                        currentMondayTodoItems.forEach(Element => {
                            Element.innerHTML = "";
                            Element.style.backgroundColor = "";
                        })
                        currentTuesdayTodoItems.forEach(Element => {
                            Element.innerHTML = "";
                            Element.style.backgroundColor = "";
                        })
                        currentWednesdayTodoItems.forEach(Element => {
                            Element.innerHTML = "";
                            Element.style.backgroundColor = "";
                        })
                        currentThursdayTodoItems.forEach(Element => {
                            Element.innerHTML = "";
                            Element.style.backgroundColor = "";
                        })
                        currentFridayTodoItems.forEach(Element => {
                            Element.innerHTML = "";
                            Element.style.backgroundColor = "";
                        })
                        currentSaturdayTodoItems.forEach(Element => {
                            Element.innerHTML = "";
                            Element.style.backgroundColor = "";
                        })
                        currentSundayTodoItems.forEach(Element => {
                            Element.innerHTML = "";
                            Element.style.backgroundColor = "";
                        })

                    } else if (dateCollection[dataId].value === undefined || dateCollection[dataId].value === null || dateCollection[dataId].value === '') {
                        checkIfDateAndTextAreEmpty();
                    }
                    // 2025-03-03: Ta bort 9-gräns
                    else if (dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[0]
                        || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[1]
                        || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[2]
                        || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[3]
                        || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[4]
                        || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[5]
                        || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[6]
                    ) {
                        dateCollection[dataId].value = '';
                    }
                });
            });

        } else {
        }

        // When input is changed for any date field (in Current Plan)... (end)

        // _ _ _

        // Text fields
        // Select all text fields (textareas) with the class 'todo-text'
        // const todoFields = document.querySelectorAll('.todo-text');

        // let currentTodoField = document.querySelector('.todo-text');

        // Add event listeners to all the created todo-text fields
        todoFields = getTodoFields(todoFields);
        todoFields.forEach(function(field) {
            field.addEventListener('input', function(event) {

                dataId = event.target.getAttribute('data-id');  // Get the todo index
                const key = event.target.getAttribute('data-key');  // Get the key (todo, color, etc.)

                // Edit plannedTodos (object) when todo (DOM-list) is changed
                if (todoCollection[dataId].value !== '') {

                    // Om måndag-array-objekt finns, gå igenom alla måndags-objekt,    OM måndags-objekt-datum är lika plannedTodos-objekt-datum     &&  måndags-objekt-todo är lika plannedTodos-objekt-todo (för aktuell todo-liste-rad)  DÅ  (Hämta todo-värden från DOM-raden och lägg in i week schedule (för måndags-objekten i tur och ordning, efter "i"))
                    if (currentMondayTodos.length > 0) {
                        for (let i = 0; i < currentMondayTodos.length; i++) {

                            // Hitta currentMondayTodos-objekt som är lika plannedTodos[dataId]
                            if (currentMondayTodos[i]?.date === plannedTodos[dataId]?.date && currentMondayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                                currentMondayTodos[i].todo = todoCollection[dataId].value;
                                currentMondayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }

                    if (currentTuesdayTodos.length > 0) {
                        for (let i = 0; i < currentTuesdayTodos.length; i++) {

                            // Hitta currentTuesdayTodos-objekt som är lika plannedTodos[dataId]
                            if (currentTuesdayTodos[i]?.date === plannedTodos[dataId]?.date && currentTuesdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                                currentTuesdayTodos[i].todo = todoCollection[dataId].value;
                                currentTuesdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }

                    if (currentWednesdayTodos.length > 0) {
                        for (let i = 0; i < currentWednesdayTodos.length; i++) {

                            // Hitta currentWednesdayTodos-objekt som är lika plannedTodos[dataId]
                            if (currentWednesdayTodos[i]?.date === plannedTodos[dataId]?.date && currentWednesdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                                currentWednesdayTodos[i].todo = todoCollection[dataId].value;
                                currentWednesdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }

                    if (currentThursdayTodos.length > 0) {
                        for (let i = 0; i < currentThursdayTodos.length; i++) {

                            // Hitta currentThursdayTodos-objekt som är lika plannedTodos[dataId]
                            if (currentThursdayTodos[i]?.date === plannedTodos[dataId]?.date && currentThursdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                                currentThursdayTodos[i].todo = todoCollection[dataId].value;
                                currentThursdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }
                    if (currentFridayTodos.length > 0) {
                        for (let i = 0; i < currentFridayTodos.length; i++) {

                            // Hitta currentFridayTodos-objekt som är lika plannedTodos[dataId]
                            if (currentFridayTodos[i]?.date === plannedTodos[dataId]?.date && currentFridayTodos[i]?.todo === plannedTodos[dataId]?.todo) {

                                currentFridayTodos[i].todo = todoCollection[dataId].value;
                                currentFridayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }
                    if (currentSaturdayTodos.length > 0) {
                        for (let i = 0; i < currentSaturdayTodos.length; i++) {

                            // Hitta currentSaturdayTodos-objekt som är lika plannedTodos[dataId]
                            if (currentSaturdayTodos[i]?.date === plannedTodos[dataId]?.date && currentSaturdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                                currentSaturdayTodos[i].todo = todoCollection[dataId].value;
                                currentSaturdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }
                    if (currentSundayTodos.length > 0) {
                        for (let i = 0; i < currentSundayTodos.length; i++) {

                            // Hitta currentSundayTodos-objekt som är lika plannedTodos[dataId]
                            if (currentSundayTodos[i]?.date === plannedTodos[dataId]?.date && currentSundayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                                currentSundayTodos[i].todo = todoCollection[dataId].value;
                                currentSundayTodoItems[i].innerHTML = todoCollection[dataId].value;
                            }
                        }
                    }

                    plannedTodos[dataId][key] = todoCollection[dataId].value;

                } else if (todoCollection[dataId].value === undefined || todoCollection[dataId].value === null || todoCollection[dataId].value === '') {
                    // invalid todo, -> checkIfDateAndTextAreEmpty()
                    checkIfDateAndTextAreEmpty();
                }
            });
        });


        // Edit color (for specific task)

        // Select the parent element and the childDivs
        const parentDiv = document.getElementById('todo-wrapper');

        // childDivsColor  (old & new color switcher panel-divs)
        const childDivsColor = parentDiv.querySelectorAll('.todo-color');

        const colorSwitcherPanel = document.getElementById('color-switcher-panel');
        const closePanelButton = document.getElementById('close-panel');

        const colorOption = document.querySelector('.color-option');

        // _ _ _

        // Add event listener to the parent element (3x default divs)
        parentDiv.addEventListener('click', function(event) {

            // Check if the clicked element is a div with the name "color"
            dataId = event.target.getAttribute('data-id');

            if (event.target && event.target.getAttribute('name') === 'color') {

                colorSwitcherPanel.style.display = 'flex';
            }

            defaultDate = plannedTodos[dataId].date;
        });

            // _ _ _

        // Add event listener to the parent element
        parentDiv.addEventListener('blur', function(event) {

                // Check if the clicked element is a div with the name "color"

                dataId = event.target.getAttribute('data-id');

                if (isValidDateExceptFebruary(plannedTodos[dataId].date) === true) {
                    // valid date when blur default 3 divs"
                }

                if (isValidDateExceptFebruary(plannedTodos[dataId].date) === false) {

                    plannedTodos[dataId].date = defaultDate;
                    dateCollection[dataId].value = defaultDate;
                    dateCollection[dataId].innerHTML = defaultDate;
                }
        });

            // _ _ _

        // colorSwitcherPanel click
        colorSwitcherPanel.addEventListener('click', function(e) {

            getDataId(dataId);
            todoColorCollection[dataId].value = returnRgbColor(e.target.getAttribute('data-color'));
            todoColorCollection[dataId].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));


            // which day (?)

            let currentDayTodoItems;

            if (plannedTodos[dataId].dataDate === "0") {
                currentDayTodoItems = currentMondayTodos.length
            }
            else if (plannedTodos[dataId].dataDate === "1") {
                currentDayTodoItems = currentTuesdayTodos.length
            }
            else if (plannedTodos[dataId].dataDate === "2") {
                currentDayTodoItems = currentWednesdayTodos.length
            }
            else if (plannedTodos[dataId].dataDate === "3") {
                currentDayTodoItems = currentThursdayTodos.length
            }
            else if (plannedTodos[dataId].dataDate === "4") {
                currentDayTodoItems = currentFridayTodos.length
            }
            else if (plannedTodos[dataId].dataDate === "5") {
                currentDayTodoItems = currentSaturdayTodos.length
            }
            else if (plannedTodos[dataId].dataDate === "6") {
                currentDayTodoItems = currentSundayTodos.length
            }
            // Fill up the week schedule divs with edited data
            // 2025-03-03: Ta bort 9-gräns

            for (let i = 0; i < currentDayTodoItems; i++) {
            if (plannedTodos[dataId].dataDate === "0" &&
                currentMondayTodos.length > 0 &&
                currentMondayTodos[i]?.date === plannedTodos[dataId]?.date &&
                currentMondayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                // Monday (?)
                        currentMondayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                        currentMondayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
                    }
            else if (plannedTodos[dataId].dataDate === "1" &&
                currentTuesdayTodos.length > 0 &&
                currentTuesdayTodos[i]?.date === plannedTodos[dataId]?.date &&
                currentTuesdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                        currentTuesdayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                        currentTuesdayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
                    }
            else if (plannedTodos[dataId].dataDate === "2" &&
                currentWednesdayTodos.length > 0 &&
                currentWednesdayTodos[i]?.date === plannedTodos[dataId]?.date &&
                currentWednesdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                        currentWednesdayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                        currentWednesdayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
                    }
            else if (plannedTodos[dataId].dataDate === "3" &&
                currentThursdayTodos.length > 0 &&
                currentThursdayTodos[i]?.date === plannedTodos[dataId]?.date &&
                currentThursdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                        currentThursdayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                        currentThursdayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
                    }
            else if (plannedTodos[dataId].dataDate === "4" &&
                currentFridayTodos.length > 0 &&
                currentFridayTodos[i]?.date === plannedTodos[dataId]?.date &&
                currentFridayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                        currentFridayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                        currentFridayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
                    }
            else if (
                plannedTodos[dataId].dataDate === "5" &&currentSaturdayTodos.length > 0 &&
                currentSaturdayTodos[i]?.date === plannedTodos[dataId]?.date &&
                currentSaturdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                        currentSaturdayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                        currentSaturdayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
                    }
            else if (plannedTodos[dataId].dataDate === "6" &&
                currentSundayTodos.length > 0 &&
                currentSundayTodos[i]?.date === plannedTodos[dataId]?.date &&
                currentSundayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                        currentSundayTodos[i].color = returnDefinedColorText(todoColorCollection[dataId].value);
                        currentSundayTodoItems[i].style.backgroundColor = returnRgbColor(e.target.getAttribute('data-color'));
                    }
            }

            // _ _ _

            plannedTodos[dataId].color = returnDefinedColorText(todoColorCollection[dataId].value)

        });


        // Add event listener to close the panel
        closePanelButton.addEventListener('click', function(event) {
            event.stopPropagation();
            colorSwitcherPanel.classList.add('hidden');
            colorSwitcherPanel.style.display = 'none';
        });

        // _ _ _

let recurringOutput;

function convertStringToBoolean(recurring) {
    if (recurring === "true") {
        recurringOutput = true;
    }
    else if (recurring === "false") {
        recurringOutput = false;
    }
    return recurringOutput;
}

// Remove specific todo (start)
// delete specific todo
// removespecific

let wrapperContainer = document.getElementById('todo-wrapper');
let specificTodoContainer = wrapperContainer.getElementsByClassName('todo-container-element');

    var isRemoveAllRecurringCopies = false;
    var plannedTodosEditRecurring = [];
    var plannedTodosEditOneRecurring = [];
    var plannedTodosEditOneAny = [];

    function removeAllRecurringCopies() {
        // Display a confirm dialog box
        let userResponse = confirm("Remove all copies of this recurring task?");

        // Check the user's response
        if (userResponse) {
            // User chose Yes.
            isRemoveAllRecurringCopies = true;
            // Add additional actions for Yes
        } else {
            //User chose No.
            isRemoveAllRecurringCopies = false;
            // Add additional actions for No
        }
        return isRemoveAllRecurringCopies;
    }


    // _ _ _

// Clear Specific Todo row (start)
    // clearSpecificTodoRowButton.addEventListener('click', function() {
        clearSpecificTodoRowButton.addEventListener('click', function() {
                getDataId(dataId);

                // _ _ _

                // Delete specific week schedule day div (if div number > 10)

                // if (currentMondayTodoItems.length > 10 && currentMondayTodos.length < currentMondayTodoItems.length) {

                if (currentMondayTodoItems.length > 10 ||
                    currentTuesdayTodoItems.length > 10 ||
                    currentWednesdayTodoItems.length > 10 ||
                    currentThursdayTodoItems.length > 10 ||
                    currentFridayTodoItems.length > 10 ||
                    currentSaturdayTodoItems.length > 10 ||
                    currentSundayTodoItems.length > 10
                ) {

                    // Get current day
                    let dataDateOfplannedTodosToRemove = plannedTodos[dataId].dataDate

                    // Om date to be removed ingår i veckoschemat
                    if (plannedTodos[dataId].date === weekDates[dataDateOfplannedTodosToRemove]) {

                        if (plannedTodos[dataId].dataDate === "0") {
                            removeLastMondayTodoDiv();
                        }
                        else if (plannedTodos[dataId].dataDate === "1") {
                            removeLastTuesdayTodoDiv();
                        }
                        else if (plannedTodos[dataId].dataDate === "2") {
                            removeLastWednesdayTodoDiv();
                        }
                        else if (plannedTodos[dataId].dataDate === "3") {
                            removeLastThursdayTodoDiv();
                        }
                        else if (plannedTodos[dataId].dataDate === "4") {
                            removeLastFridayTodoDiv();
                        }
                        else if (plannedTodos[dataId].dataDate === "5") {
                            removeLastSaturdayTodoDiv();
                        }
                        else if (plannedTodos[dataId].dataDate === "6") {
                            removeLastSundayTodoDiv();
                        }

                    }
                }

                // remove all recurring todos with duration >1 (not necessarily the same name and date)
                if (plannedTodos[dataId].isRecurring === true && plannedTodos[dataId].duration > '1') {
                    //Here #0"

                        removeAllRecurringCopies();

                        // Remove all recurring (duration > '1') copies (of todos with the same todo text)
                        if (isRemoveAllRecurringCopies === true) {
                            //Here #1

                            let dateCollectionLengthStart = dateCollection.length;

                            // Töm DOM:en

                            currentMondayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentTuesdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentWednesdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentThursdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentFridayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentSaturdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentSundayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })

                            for (let i = 0; i < dateCollection.length; i++) {
                                dateCollection[i].value = '';
                                dateCollection[i].innerHTML = '';
                                todoCollection[i].value = '';
                                todoCollection[i].innerHTML = '';
                                todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
                            }


                                for (let i = 0; i < plannedTodos.length; i++) {
                                    // push the !copies to an object array
                                    if (plannedTodos[dataId].todo !== plannedTodos[i].todo) {

                                        plannedTodosEditRecurring.push({
                                            date: plannedTodos[i].date,
                                            todo: plannedTodos[i].todo,
                                            color: plannedTodos[i].color,
                                            isRecurring: plannedTodos[i].isRecurring,
                                            recurringType: plannedTodos[i].recurringType,
                                            everyWeek: plannedTodos[i].everyWeek,
                                            weekPeriod: plannedTodos[i].weekPeriod,
                                            duration: plannedTodos[i].duration,
                                            dataDate: plannedTodos[i].dataDate,
                                            isEmpty: false
                                        })
                                    }
                                }
                            plannedTodos = plannedTodosEditRecurring;
                            plannedTodosEditRecurring = [];

                            let dateCollectionLengthEnd = plannedTodos.length;

                            let dateCollectionLengthDiff = dateCollectionLengthStart - dateCollectionLengthEnd;

                            for (let i = 0; i < dateCollectionLengthDiff; i++) {
                                removeLastDynamicTodoContainer();
                            }

                            // Testa torsdag?
                            plannedTodos.forEach((todoRow) => {

                                if (getDayOfWeek(todoRow.date) === 'thu') {
                                }
                                if (todoRow.isRecurring === true) {
                                }
                                if (todoRow.isRecurring === false) {
                            }
                                if (todoRow.date <= weekDates[3]) {
                            }
                            // 2025-03-03: Ta bort 9-gräns
                                if (getDayOfWeek(todoRow.date) === "thu" &&
                                todoRow.isRecurring === false &&
                                todoRow.dataDate === "3" &&
                                todoRow.date <= weekDates[3]
                                )
                                {
                                    //getDayOfWeek(todoRow.date) === 'thu' && todoRow.isRecurring === false && todoRow.dataDate === '3' ... MATCH"
                                }
                            })

                            sortPlannedTodos(plannedTodos);

                            // Uppdatera DOM:en (med plannedTodos-objekt-data)

                            //_ _ _

                            for (let i = 0; i < plannedTodos.length; i++) {
                                dateCollection[i].value = plannedTodos[i].date;
                                dateCollection[i].innerHTML = plannedTodos[i].date;
                                todoCollection[i].value = plannedTodos[i].todo;
                                todoCollection[i].innerHTML = plannedTodos[i].todo;
                                todoColorCollection[i].style.backgroundColor = returnRgbColor(plannedTodos[i].color);
                            }

                            //_ _ _

                            updateCurrentWeekSchedule(false);

                            event.stopPropagation();
                            colorSwitcherPanel.classList.add('hidden');
                            colorSwitcherPanel.style.display = 'none';

                        }

                        // Remove 1x recurringTodo with duration > '1' ([dataId])
                        else if (isRemoveAllRecurringCopies === false) {
                            // Here #1 b

                            // 1. Töm DOM:en
                            // 2. Push:a alla plannedTodos-object utom [dataId] (!== ...[dataId]) till en object-array (-> ny plannedTodos)
                            // 3. Kör updateCurrentWeekSchedule()   (sortera eventuellt plannedTodos?)


                            // Töm DOM:en

                            currentMondayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentTuesdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentWednesdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentThursdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentFridayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentSaturdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentSundayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })

                            for (let i = 0; i < dateCollection.length; i++) {
                                dateCollection[i].value = '';
                                dateCollection[i].innerHTML = '';
                                todoCollection[i].value = '';
                                todoCollection[i].innerHTML = '';
                                todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
                            }

                            for (let i = 0; i < plannedTodos.length; i++) {
                                // push the !copies to an object array
                                if (plannedTodos[i].todo !== plannedTodos[dataId].todo) {

                                    plannedTodosEditOneRecurring.push({
                                        date: plannedTodos[i].date,
                                        todo: plannedTodos[i].todo,
                                        color: plannedTodos[i].color,
                                        isRecurring: plannedTodos[i].isRecurring,
                                        recurringType: plannedTodos[i].recurringType,
                                        everyWeek: plannedTodos[i].everyWeek,
                                        weekPeriod: plannedTodos[i].weekPeriod,
                                        duration: plannedTodos[i].duration,
                                        dataDate: plannedTodos[i].dataDate,
                                        isEmpty: false
                                    })
                                }
                                // push the todo text copies (with different date) to the object array
                                else if (plannedTodos[i].todo === plannedTodos[dataId].todo && plannedTodos[i].date !== plannedTodos[dataId].date) {

                                    plannedTodosEditOneRecurring.push({
                                        date: plannedTodos[i].date,
                                        todo: plannedTodos[i].todo,
                                        color: plannedTodos[i].color,
                                        isRecurring: plannedTodos[i].isRecurring,
                                        recurringType: plannedTodos[i].recurringType,
                                        everyWeek: plannedTodos[i].everyWeek,
                                        weekPeriod: plannedTodos[i].weekPeriod,
                                        duration: plannedTodos[i].duration,
                                        dataDate: plannedTodos[i].dataDate,
                                        isEmpty: false
                                    })

                                }
                            }

                            plannedTodos = plannedTodosEditOneRecurring;
                            plannedTodosEditOneRecurring = [];

                            sortPlannedTodos(plannedTodos);

                            removeLastDynamicTodoContainer();

                            for (let i = 0; i < plannedTodos.length; i++) {

                                dateCollection[i].value = plannedTodos[i].date;
                                dateCollection[i].innerHTML = plannedTodos[i].date;
                                todoCollection[i].value = plannedTodos[i].todo;
                                todoCollection[i].innerHTML = plannedTodos[i].todo;
                                todoColorCollection[i].style.backgroundColor = returnRgbColor(plannedTodos[i].color);
                            }

                            updateCurrentWeekSchedule(false);

                            // _ _ _

                                        event.stopPropagation();
                                        colorSwitcherPanel.classList.add('hidden');
                                        colorSwitcherPanel.style.display = 'none';

                }
            }

                // _ _ _

                // Remove a specific todo for non recurring todos (duration === '1')
            else {
                // Here #2

                    // Lägg till alla todos (utom ...dataId) i object-array
                    getDataId(dataId);

                    dataId = Number(getDataId(dataId));

                    for (let i = 0; i < plannedTodos.length; i++) {

                        if (i !== dataId) {
                            plannedTodosEditOneAny.push({
                                date: `${plannedTodos[i].date}`,
                                todo: `${plannedTodos[i].todo}`,
                                color: `${plannedTodos[i].color}`,
                                isRecurring: convertStringToBoolean(`${plannedTodos[i].isRecurring}`),
                                recurringType: `${plannedTodos[i].recurringType}`,
                                everyWeek: `${plannedTodos[i].everyWeek}`,
                                weekPeriod: `${plannedTodos[i].weekPeriod}`,
                                duration: `${plannedTodos[i].duration}`,
                                dataDate: `${plannedTodos[i].dataDate}`,
                                isEmpty: false
                            });
                        }
                    }

                    plannedTodos = plannedTodosEditOneAny;

                    plannedTodosEditOneAny = [];

                            currentMondayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentTuesdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentWednesdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentThursdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentFridayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentSaturdayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })
                            currentSundayTodoItems.forEach((dayRow) => {
                                dayRow.innerHTML = '';
                                dayRow.value = '';
                                dayRow.style.backgroundColor = '';
                            })

                            for (let i = 0; i < dateCollection.length; i++) {
                                dateCollection[i].value = '';
                                dateCollection[i].innerHTML = '';
                                todoCollection[i].value = '';
                                todoCollection[i].innerHTML = '';
                                todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
                            }

                // _ _ _

                //Empty the Current Plan HTML rows (in the DOM)

                for (let i = 0; i < dateCollection.length; i++) {
                    dateCollection[i].value = '';
                    dateCollection[i].innerHTML = '';
                    todoCollection[i].value = '';
                    todoCollection[i].innerHTML = '';
                    todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
                }

                // _ _ _

                updateCurrentWeekSchedule(false);

                removeLastDynamicTodoContainer();

                ifPlannedTodosIsPastPutToPastPlans();

                // _ _ _

                    event.stopPropagation();
                    colorSwitcherPanel.classList.add('hidden');
                    colorSwitcherPanel.style.display = 'none';

            }
        // }
    });

    // Remove Specific Todo row (slut)
    // Clear Specific Todo row
    // _ _ _
    // _ _ _

    // Fixa så att clear todos fungerar för week schedule (2024-10-16)

    // Delete, erase, remove
    // Clear todos

    // Clear All todos
    function clearAll() {

        if (dateCollection[0].value !== undefined && plannedTodos.length > 0 && plannedTodos !== undefined) {

            todoElements.forEach((element) => {
                element.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            });

                // clear the DOM todo data
                for (let i = 0; i < dateCollection.length; i++) {
                    dateCollection[i].value = '';
                    dateCollection[i].innerHTML = '';
                    todoCollection[i].value = '';
                    todoCollection[i].innerHTML = '';
                    todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
                }

                dateInputValue.value = dateDisplay.textContent;

                plannedTodos = [];

                for (let i = currentMondayTodoItems.length; currentMondayTodoItems.length > 10; i--) {
                    removeLastMondayTodoDiv();
                }
                for (let i = currentTuesdayTodoItems.length; currentTuesdayTodoItems.length > 10; i--) {
                    removeLastTuesdayTodoDiv();
                }
                for (let i = currentWednesdayTodoItems.length; currentWednesdayTodoItems.length > 10; i--) {
                    removeLastWednesdayTodoDiv();
                }
                for (let i = currentThursdayTodoItems.length; currentThursdayTodoItems.length > 10; i--) {
                    removeLastThursdayTodoDiv();
                }
                for (let i = currentFridayTodoItems.length; currentFridayTodoItems.length > 10; i--) {
                    removeLastFridayTodoDiv();
                }
                for (let i = currentSaturdayTodoItems.length; currentSaturdayTodoItems.length > 10; i--) {
                    removeLastSaturdayTodoDiv();
                }
                for (let i = currentSundayTodoItems.length; currentSundayTodoItems.length > 10; i--) {
                    removeLastSundayTodoDiv();
                }

                currentMondayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })
                currentTuesdayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })
                currentWednesdayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })
                currentThursdayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })
                currentFridayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })
                currentSaturdayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })
                currentSundayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })

                restoreTodoWrapper();

                colorPickerSelect.style.backgroundColor = returnRgbColor(colorPickerGray.value);
                colorPickerSelect.value = colorPickerGray.value;

                // _ _ _

                currentMondayTodos = [];
                currentTuesdayTodos = [];
                currentWednesdayTodos = [];
                currentThursdayTodos = [];
                currentFridayTodos = [];
                currentSaturdayTodos = [];
                currentSundayTodos = [];

                // _ _ _
                pastTasksSet = new Set();
                pastPlansTextArea.innerHTML = '';
                pastPlansTextArea.value = '';
                pastPlanStringToSaveUpdate = '';

            // _ _ _

            // Attach focus event listener to all todo-text textareas
            document.querySelectorAll(".todo-text").forEach(todoTextArea => {
                todoTextArea.addEventListener("focus", () => {

                    // Get the current data-id of the focused textarea
                    // const dataId = todoTextArea.getAttribute("data-id");
                    dataId = todoTextArea.getAttribute("data-id");

                });
            });

            // _ _ _
            handleEnableDisableDefaultRows();

        } else {
            textInputValue.focus();
        }
        // clearAll() end
    }

clearAllButton.addEventListener('click', clearAll);

// _ _ _


// Show plan (in week schedule)

// Monday Schedule Div
var monScheduleWrapper = document.getElementById("mon-todo");
var tueScheduleWrapper = document.getElementById("tue-todo");
var wedScheduleWrapper = document.getElementById("wed-todo");
var thuScheduleWrapper = document.getElementById("thu-todo");
var friScheduleWrapper = document.getElementById("fri-todo");
var satScheduleWrapper = document.getElementById("sat-todo");
var sunScheduleWrapper = document.getElementById("sun-todo");


function addCurrentWeekdayDivStyle(currentWeekdayDiv) {
    currentWeekdayDiv.style.display = "grid";
    currentWeekdayDiv.style.width = "100%";
    currentWeekdayDiv.style.fontSize = "13px";
    currentWeekdayDiv.style.color = "rgb(0, 0, 0)";
    currentWeekdayDiv.style.borderRadius = "5px";
}

// _ _ _

// Define 9x (Monday -> Sunday) Week Schedule Divs
let newMonWeekDiv = document.createElement("mon-schedule-div");
let newTueWeekDiv = document.createElement("tue-schedule-div");
let newWedWeekDiv = document.createElement("wed-schedule-div");
let newThuWeekDiv = document.createElement("thu-schedule-div");
let newFriWeekDiv = document.createElement("fri-schedule-div");
let newSatWeekDiv = document.createElement("sat-schedule-div");
let newSunWeekDiv = document.createElement("sun-schedule-div");

var currentMondayTodoItems = document.querySelectorAll(".monday-target-div");
var currentTuesdayTodoItems = document.querySelectorAll(".tuesday-target-div");
var currentWednesdayTodoItems = document.querySelectorAll(".wednesday-target-div");
var currentThursdayTodoItems = document.querySelectorAll(".thursday-target-div");
var currentFridayTodoItems = document.querySelectorAll(".friday-target-div");
var currentSaturdayTodoItems = document.querySelectorAll(".saturday-target-div");
var currentSundayTodoItems = document.querySelectorAll(".sunday-target-div");

let mondayTodoItem = document.querySelector(".mon-todo-week-item");
let tuesdayTodoItem = document.querySelector(".tue-todo-week-item");
let wednesdayTodoItem = document.querySelector(".wed-todo-week-item");
let thursdayTodoItem = document.querySelector(".thu-todo-week-item");
let fridayTodoItem = document.querySelector(".fri-todo-week-item");
let saturdayTodoItem = document.querySelector(".sat-todo-week-item");
let sundayTodoItem = document.querySelector(".sun-todo-week-item");

let currentMonCollection = document.getElementsByClassName("mon-todo-week-item");
let currentTueCollection = document.getElementsByClassName("tue-todo-week-item");
let currentWedCollection = document.getElementsByClassName("wed-todo-week-item");
let currentThuCollection = document.getElementsByClassName("thu-todo-week-item");
let currentFriCollection = document.getElementsByClassName("fri-todo-week-item");
let currentSatCollection = document.getElementsByClassName("sat-todo-week-item");
let currentSunCollection = document.getElementsByClassName("sun-todo-week-item");

// _ _ _

let mondayTodoCollection = document.querySelectorAll(".grid-item day1");
let tuesdayTodoCollection = document.querySelectorAll(".grid-item day2");
let wednesdayTodoCollection = document.querySelectorAll(".grid-item day3");
let thursdayTodoCollection = document.querySelectorAll(".grid-item day4");
let fridayTodoCollection = document.querySelectorAll(".grid-item day5");
let saturdayTodoCollection = document.querySelectorAll(".grid-item day6");
let sundayTodoCollection = document.querySelectorAll(".grid-item day7");

    // Function to add a new divs

    // Add Monday weekschedule divs (> 10)
    function addNewMondayTodoDiv() {
        if (currentMondayTodos.length > 10) {

            // If more todos exist than the current divs, add more divs
            if (currentMondayTodos.length > currentMondayTodoItems.length) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("monday-target-div");
                newDiv.setAttribute("data-date", "0");
                monScheduleWrapper.appendChild(newDiv);

                    // Update the NodeList by re-selecting the elements
                currentMondayTodoItems = document.querySelectorAll(".monday-target-div");
            }
        }
    }

    // Add Tuesday weekschedule divs (> 10)
    function addNewTuesdayTodoDiv() {
        if (currentTuesdayTodos.length > 10) {

            // If more todos exist than the current divs, add more divs
            if (currentTuesdayTodos.length > currentTuesdayTodoItems.length) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("tuesday-target-div");
                newDiv.setAttribute("data-date", "1");
                tueScheduleWrapper.appendChild(newDiv);

                // Update the NodeList by re-selecting the elements
                currentTuesdayTodoItems = document.querySelectorAll(".tuesday-target-div");
            }
        }
    }

    // Add Wednesday weekschedule divs (> 10)
    function addNewWednesdayTodoDiv() {
        if (currentWednesdayTodos.length > 10) {

            // If more todos exist than the current divs, add more divs
            if (currentWednesdayTodos.length > currentWednesdayTodoItems.length) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("wednesday-target-div");
                newDiv.setAttribute("data-date", "2");
                wedScheduleWrapper.appendChild(newDiv);

                // Update the NodeList by re-selecting the elements
                currentWednesdayTodoItems = document.querySelectorAll(".wednesday-target-div");
            }
        }
    }

        // Add Thursday weekschedule divs (> 10)
        function addNewThursdayTodoDiv() {
            if (currentThursdayTodos.length > 10) {

                // If more todos exist than the current divs, add more divs
                if (currentThursdayTodos.length > currentThursdayTodoItems.length) {
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("thursday-target-div");
                    newDiv.setAttribute("data-date", "3");
                    thuScheduleWrapper.appendChild(newDiv);

                    // Update the NodeList by re-selecting the elements
                    currentThursdayTodoItems = document.querySelectorAll(".thursday-target-div");
                }
            }
        }

         // Add Friday weekschedule divs (> 10)
    function addNewFridayTodoDiv() {
        if (currentFridayTodos.length > 10) {

            // If more todos exist than the current divs, add more divs
            if (currentFridayTodos.length > currentFridayTodoItems.length) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("friday-target-div");
                newDiv.setAttribute("data-date", "4");
                friScheduleWrapper.appendChild(newDiv);

                // Update the NodeList by re-selecting the elements
                currentFridayTodoItems = document.querySelectorAll(".friday-target-div");
            }
        }
    }

        // Add Saturday weekschedule divs (> 10)
        function addNewSaturdayTodoDiv() {
            if (currentSaturdayTodos.length > 10) {

                // If more todos exist than the current divs, add more divs
                if (currentSaturdayTodos.length > currentSaturdayTodoItems.length) {
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("saturday-target-div");
                    newDiv.setAttribute("data-date", "5");
                    satScheduleWrapper.appendChild(newDiv);

                    // Update the NodeList by re-selecting the elements
                    currentSaturdayTodoItems = document.querySelectorAll(".saturday-target-div");
                }
            }
        }

    // Add Sunday weekschedule divs (> 10)
    function addNewSundayTodoDiv() {
        if (currentSundayTodos.length > 10) {

            // If more todos exist than the current divs, add more divs
            if (currentSundayTodos.length > currentSundayTodoItems.length) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("sunday-target-div");
                newDiv.setAttribute("data-date", "6");
                sunScheduleWrapper.appendChild(newDiv);

                // Update the NodeList by re-selecting the elements
                currentSundayTodoItems = document.querySelectorAll(".sunday-target-div");
            }
        }
    }

    // _ _ _

    function removeLastMondayTodoDiv() {

            if (currentMondayTodoItems.length > 10) {
                currentMondayTodoItems[currentMondayTodoItems.length - 1].remove();

                // Update the NodeList by re-selecting the elements
            currentMondayTodoItems = document.querySelectorAll(".monday-target-div");
            }

    }


    function removeLastTuesdayTodoDiv() {

            if (currentTuesdayTodoItems.length > 10) {
                currentTuesdayTodoItems[currentTuesdayTodoItems.length - 1].remove();

                // Update the NodeList by re-selecting the elements
            currentTuesdayTodoItems = document.querySelectorAll(".tuesday-target-div");
            }
    }
    function removeLastWednesdayTodoDiv() {

        if (currentWednesdayTodoItems.length > 10) {
            currentWednesdayTodoItems[currentWednesdayTodoItems.length - 1].remove();

            // Update the NodeList by re-selecting the elements
        currentWednesdayTodoItems = document.querySelectorAll(".wednesday-target-div");
        }
    }
    function removeLastThursdayTodoDiv() {

        if (currentThursdayTodoItems.length > 10) {
            currentThursdayTodoItems[currentThursdayTodoItems.length - 1].remove();

            // Update the NodeList by re-selecting the elements
        currentThursdayTodoItems = document.querySelectorAll(".thursday-target-div");
        }
    }
    function removeLastFridayTodoDiv() {

        if (currentFridayTodoItems.length > 10) {
            currentFridayTodoItems[currentFridayTodoItems.length - 1].remove();

            // Update the NodeList by re-selecting the elements
        currentFridayTodoItems = document.querySelectorAll(".friday-target-div");
        }
    }
    function removeLastSaturdayTodoDiv() {

        if (currentSaturdayTodoItems.length > 10) {
            currentSaturdayTodoItems[currentSaturdayTodoItems.length - 1].remove();

            // Update the NodeList by re-selecting the elements
        currentSaturdayTodoItems = document.querySelectorAll(".saturday-target-div");
        }
    }
    function removeLastSundayTodoDiv() {

        if (currentSundayTodoItems.length > 10) {
            currentSundayTodoItems[currentSundayTodoItems.length - 1].remove();

            // Update the NodeList by re-selecting the elements
        currentSundayTodoItems = document.querySelectorAll(".sunday-target-div");
        }
    }

    // _ _ _

// updateCurrentWeekSchedule() (start)
// update data (to divs in the week schedule)

// Add / Edit / Delete Specific / Clear all / Load
function updateCurrentWeekSchedule(specialUpdateBoolean) {

        // Uppdatera DOM:en (för recurring Todos, undefined, "year", "month, ...")

        if (defaultDate === undefined) {
            defaultDate = dateDisplay.textContent;
        }

        plannedTodos.forEach(element => {


            if (specialUpdateBoolean === true && element.isRecurring === false) {
                // on Edit
                if (plannedTodos.length === 1 && defaultDate === undefined) {
                    defaultDate = dateDisplay.textContent;
                }

                // Hantera exempelvis ('2025-03-13a' #"2025-03-13a") felaktiga datum:
                if (isValidDateExceptFebruary(element.date) === false) {
                    element.date = defaultDate;
                    element.dataDate = weekdayNameToWeekDayNumber(defaultDate);
                }

                // Hantera exempelvis ('2025-03-1' #"2025-03-1") felaktiga datum:
                if (isValidDateExceptFebruary(element.date) === false && element.date < dateDisplay.textContent) {
                    element.date = defaultDate;
                    element.dataDate = weekdayNameToWeekDayNumber(defaultDate);
                }

                if (isValidFebruaryDate(element.date) === false && element.date < dateDisplay.textContent) {
                    element.date = defaultDate;
                    element.dataDate = weekdayNameToWeekDayNumber(defaultDate);
                }

                //exceptfeb
                if (isValidDateExceptFebruary(element.date) === true || isValidFebruaryDate(element.date) === true) {

                    element.dataDate = weekdayNameToWeekDayNumberMultiDuration(element.date);

                    if (element.date >= dateDisplay.textContent) {
                    // if (element.date < dateDisplay: delete the plannedTodos from the DOM)
                    plannedTodosEdit.push(element);
                    }
                }
            }

            // Hur editera recurring todos? (vad skiljer mot standard-todos?)
            else if (specialUpdateBoolean === true && element.isRecurring === true) {

                // Hantera exempelvis ('2025-03-1' #"2025-03-1") felaktiga datum:
                if (isValidDateExceptFebruary(element.date) === false && element.date < dateDisplay.textContent) {
                    element.date = defaultDate;
                    element.dataDate = weekdayNameToWeekDayNumber(defaultDate);
                }

                else if (isValidFebruaryDate(element.date) === false && element.date < dateDisplay.textContent) {
                    element.date = defaultDate;
                    element.dataDate = weekdayNameToWeekDayNumber(defaultDate);
                }

                // Hantera exempelvis ('2025-03-13a' #"2025-03-13a") felaktiga datum:
                if (isValidDateExceptFebruary(element.date) === false) {

                    if (isValidFebruaryDate(element.date) === true) {
                        element.dataDate = weekdayNameToWeekDayNumber(element.date);
                    } else if (isValidFebruaryDate(element.date) === false) {
                        element.date = defaultDate;
                        element.dataDate = weekdayNameToWeekDayNumber(defaultDate);
                    }
                }

                if (element.date >= dateDisplay.textContent) {

                    element.dataDate = weekdayNameToWeekDayNumberMultiDuration(element.date);
                    plannedTodosEdit.push(element);
                }
            }

            else if (specialUpdateBoolean === false) {
                if (element.date >= dateDisplay.textContent) {
                // if (element.date < dateDisplay: delete the plannedTodos from the DOM)
                plannedTodosEdit.push(element);
                }
            }
        })

        plannedTodos = plannedTodosEdit;

        plannedTodosEdit = [];

            // uppdatera DOM:en
            for (let i = 0; i < plannedTodos.length; i++) {

                //Update HTML to (input order) values
                dateCollection[i].innerHTML = plannedTodos[i].date;
                dateCollection[i].value = plannedTodos[i].date;
                todoCollection[i].innerHTML = plannedTodos[i].todo;
                todoCollection[i].value = plannedTodos[i].todo;
                todoColorCollection[i].style.backgroundColor = returnRgbColor(plannedTodos[i].color)
            }

        // _ _ _

        // 2025-03-03: Ta bort 9-gräns
        // if (blockedDatesBoolean === false) {

        currentMondayTodos = [];
        currentTuesdayTodos = [];
        currentWednesdayTodos = [];
        currentThursdayTodos = [];
        currentFridayTodos = [];
        currentSaturdayTodos = [];
        currentSundayTodos = [];

        // _ _ _

        // Töm current...dayTodoItems
        currentMondayTodoItems.forEach(Element => {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        })
        currentTuesdayTodoItems.forEach(Element => {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        })
        currentWednesdayTodoItems.forEach(Element => {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        })
        currentThursdayTodoItems.forEach(Element => {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        })
        currentFridayTodoItems.forEach(Element => {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        })
        currentSaturdayTodoItems.forEach(Element => {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        })
        currentSundayTodoItems.forEach(Element => {
            Element.innerHTML = "";
            Element.style.backgroundColor = "";
        })

        // _ _ _

        // Om dag (datum, plannedTodos[x].date) ändras ska även recurringTodosArray-datum ändras för aktuell todo)
        // Lägg in, push recurringTodosArray-värden för aktuell dag (Day: currentDayTodos..)

        plannedTodos.forEach(todoRow => {

            // . . .
            // . . .

        //     1. 	Ändrar plannedTodos[x].date (i DOM:en)

        //      2.	if (getWeekDay(plannedTodos[x].date === "mon") {   plannedTodos[x].dataDate = "0"  }
        // 	    else if ((getWeekDay(plannedTodos[x].date === "tue") {   plannedTodos[x].dataDate = "1"  }
        // 	    …

        //      3.	Töm (currentDayTodos)

        //      4.	Fyll på (currentDayTodos)    ((med plannedTodos-objekt))
        // 	    (uppdatera currentDayTodos[ooa].date (med plannedTodos[x].dataDate (= "0")))

        // 	    if (plannedTodos[x].dataDate === "0" && plannedTodos[x].isRecurring === true) { currentDayTodos.push(
        // 	    {
        // 		    date: 		weekDates[0],
        // 		    todo: 		plannedTodos[x].todo,
        // 		    color: 		plannedTodos[x].color,
        // 		    isRecurring: 		plannedTodos[x].isRecurring,
        // 		    dataDate: 		plannedTodos[x].dataDate
        // 	    })

            // _ _ _

        // 2025-03-03: Ta bort 9-gräns

            if (getDayOfWeek(todoRow.date) === "mon" &&
            todoRow.isRecurring === true &&
            todoRow.dataDate === "0" &&
            todoRow.date <= weekDates[0]
        ) {
                    // Den här todo:n är återkommande för måndagar" + todoRow.date + ", " + dataId
                    currentMondayTodos.push({
                        date: `${todoRow.date}`,
                        todo: `${todoRow.todo}`,
                        color: `${todoRow.color}`,
                        isRecurring: true,
                        recurringType: `${todoRow.recurringType}`,
                        everyWeek: `${todoRow.everyWeek}`,
                        weekPeriod: `${todoRow.weekPeriod}`,
                        duration: `${todoRow.duration}`,
                        dataDate: `${todoRow.dataDate}`,
                        isEmpty: false
                    })
            }
            else if (getDayOfWeek(todoRow.date) === "tue" &&
            todoRow.isRecurring === true &&
            todoRow.dataDate === "1" &&
            todoRow.date <= weekDates[1]
        ) {
            // Den här todo:n är återkommande för tisdagar" + todoRow.date + ", " + dataId
            currentTuesdayTodos.push({
                date: `${todoRow.date}`,
                todo: `${todoRow.todo}`,
                color: `${todoRow.color}`,
                isRecurring: true,
                recurringType: `${todoRow.recurringType}`,
                everyWeek: `${todoRow.everyWeek}`,
                weekPeriod: `${todoRow.weekPeriod}`,
                duration: `${todoRow.duration}`,
                dataDate: `${todoRow.dataDate}`,
                isEmpty: false
            })
    }
    else if (getDayOfWeek(todoRow.date) === "wed" && todoRow.isRecurring === true && todoRow.dataDate === "2" && todoRow.date <= weekDates[2]
    ) {
            // Den här todo:n är återkommande för onsdagar" + todoRow.date + ", " + dataId
            currentWednesdayTodos.push({
                date: `${todoRow.date}`,
                todo: `${todoRow.todo}`,
                color: `${todoRow.color}`,
                isRecurring: true,
                recurringType: `${todoRow.recurringType}`,
                everyWeek: `${todoRow.everyWeek}`,
                weekPeriod: `${todoRow.weekPeriod}`,
                duration: `${todoRow.duration}`,
                dataDate: `${todoRow.dataDate}`,
                isEmpty: false
            })
    }
    else if (getDayOfWeek(todoRow.date) === "thu" && todoRow.isRecurring === true && todoRow.dataDate === "3" && todoRow.date <= weekDates[3]
    ) {
            // Den här todo:n är återkommande för torsdagar" + todoRow.date + ", " + dataId
            currentThursdayTodos.push({
                date: `${todoRow.date}`,
                todo: `${todoRow.todo}`,
                color: `${todoRow.color}`,
                isRecurring: true,
                recurringType: `${todoRow.recurringType}`,
                everyWeek: `${todoRow.everyWeek}`,
                weekPeriod: `${todoRow.weekPeriod}`,
                duration: `${todoRow.duration}`,
                dataDate: `${todoRow.dataDate}`,
                isEmpty: false
            })
    }
    else if (getDayOfWeek(todoRow.date) === "fri" && todoRow.isRecurring === true && todoRow.dataDate === "4" && todoRow.date <= weekDates[4]
    ) {
        // Den här todo:n är återkommande för fredagar" + todoRow.date + ", " + dataId
        currentFridayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: true,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "sat" && todoRow.isRecurring === true && todoRow.dataDate === "5" && todoRow.date <= weekDates[5]
    ) {
        // Den här todo:n är återkommande för lördagar" + todoRow.date + ", " + dataId
        currentSaturdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: true,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "sun" && todoRow.isRecurring === true && todoRow.dataDate === "6" && todoRow.date <= weekDates[6]
    ) {
        // Den här todo:n är återkommande för söndagar" + todoRow.date + ", " + dataId
        currentSundayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: true,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    // plannedTodos (isRecurring === false, todoRow === weekDates[x])
    else if (getDayOfWeek(todoRow.date) === "mon" && todoRow.isRecurring === false && todoRow.dataDate === "0" && todoRow.date === weekDates[0]
    ) {
            // Den här todo:n är för måndag" + todoRow.date + ", " + dataId
            currentMondayTodos.push({
                date: `${todoRow.date}`,
                todo: `${todoRow.todo}`,
                color: `${todoRow.color}`,
                isRecurring: false,
                recurringType: `${todoRow.recurringType}`,
                everyWeek: `${todoRow.everyWeek}`,
                weekPeriod: `${todoRow.weekPeriod}`,
                duration: `${todoRow.duration}`,
                dataDate: `${todoRow.dataDate}`,
                isEmpty: false
            })
    }
    else if (getDayOfWeek(todoRow.date) === "tue" && todoRow.isRecurring === false && todoRow.dataDate === "1" && todoRow.date === weekDates[1]
    ) {
       // Den här todo:n är för tisdag" + todoRow.date + ", " + dataId
        currentTuesdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "wed" && todoRow.isRecurring === false && todoRow.dataDate === "2" && todoRow.date === weekDates[2]
    ) {
        // Den här todo:n är för onsdag" + todoRow.date + ", " + dataId
        currentWednesdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "thu" && todoRow.isRecurring === false && todoRow.dataDate === "3" && todoRow.date === weekDates[3]
    ) {
        // Den här todo:n är för torsdag" + todoRow.date + ", " + dataId
        currentThursdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "fri" && todoRow.isRecurring === false && todoRow.dataDate === "4" && todoRow.date === weekDates[4]
    ) {
        // Den här todo:n är för fredag" + todoRow.date + ", " + dataId
        currentFridayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "sat" && todoRow.isRecurring === false && todoRow.dataDate === "5" && todoRow.date === weekDates[5]
    ) {
        // Den här todo:n är för lördag" + todoRow.date + ", " + dataId
        currentSaturdayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }
    else if (getDayOfWeek(todoRow.date) === "sun" && todoRow.isRecurring === false && todoRow.dataDate === "6" && todoRow.date === weekDates[6]
    ) {
        // Den här todo:n är för söndag" + todoRow.date + ", " + dataId
        currentSundayTodos.push({
            date: `${todoRow.date}`,
            todo: `${todoRow.todo}`,
            color: `${todoRow.color}`,
            isRecurring: false,
            recurringType: `${todoRow.recurringType}`,
            everyWeek: `${todoRow.everyWeek}`,
            weekPeriod: `${todoRow.weekPeriod}`,
            duration: `${todoRow.duration}`,
            dataDate: `${todoRow.dataDate}`,
            isEmpty: false
        })
    }

    handleEnableDisableDefaultRows();

})
// updateCurrentWeekSchedule() (end)


domUpdateCurrentWeekSchedule();

}

// updateCurrentWeekSchedule() (end)

// _ _ _

function domUpdateCurrentWeekSchedule() {

    // addNewMondayTodoDiv();
    // addNewTuesdayTodoDiv();

    if (currentMondayTodos.length > 10 && currentMondayTodos.length > currentMondayTodoItems.length) {
        // add more mon divs
        addNewMondayTodoDiv();
    }

    if (currentTuesdayTodos.length > 10 && currentTuesdayTodos.length > currentTuesdayTodoItems.length) {
        // add more tue divs
        addNewTuesdayTodoDiv();
    }

    if (currentWednesdayTodos.length > 10 && currentWednesdayTodos.length > currentWednesdayTodoItems.length) {
        // add more wed divs
        addNewWednesdayTodoDiv();
    }

    if (currentThursdayTodos.length > 10 && currentThursdayTodos.length > currentThursdayTodoItems.length) {
        // add more thu divs
        addNewThursdayTodoDiv();
    }

    if (currentFridayTodos.length > 10 && currentFridayTodos.length > currentFridayTodoItems.length) {
        // add more fri divs
        addNewFridayTodoDiv();
    }

    if (currentSaturdayTodos.length > 10 && currentSaturdayTodos.length > currentSaturdayTodoItems.length) {
        // add more sat divs
        addNewSaturdayTodoDiv();
    }

    if (currentSundayTodos.length > 10 && currentSundayTodos.length > currentSundayTodoItems.length) {
        // add more sun divs
        addNewSundayTodoDiv();
    }

    // _ _ _

    // Loop through the current...dayTodos and fill in the corresponding divs
    for (let i = 0; i < currentMondayTodos.length; i++) {

        currentMondayTodoItems[i].innerHTML = currentMondayTodos[i].todo;
        currentMondayTodoItems[i].style.backgroundColor = returnRgbColor(currentMondayTodos[i].color);
    }

    for (let i = 0; i < currentTuesdayTodos.length; i++) {

        currentTuesdayTodoItems[i].innerHTML = currentTuesdayTodos[i].todo;
        currentTuesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentTuesdayTodos[i].color);
    }

    for (let i = 0; i < currentWednesdayTodos.length; i++) {

        currentWednesdayTodoItems[i].innerHTML = currentWednesdayTodos[i].todo;
        currentWednesdayTodoItems[i].style.backgroundColor = returnRgbColor(currentWednesdayTodos[i].color);
    }

    for (let i = 0; i < currentThursdayTodos.length; i++) {

            currentThursdayTodoItems[i].innerHTML = currentThursdayTodos[i].todo;
            currentThursdayTodoItems[i].style.backgroundColor = returnRgbColor(currentThursdayTodos[i].color);

    }

    for (let i = 0; i < currentFridayTodos.length; i++) {

            currentFridayTodoItems[i].innerHTML = currentFridayTodos[i].todo;
            currentFridayTodoItems[i].style.backgroundColor = returnRgbColor(currentFridayTodos[i].color);
    }

    for (let i = 0; i < currentSaturdayTodos.length; i++) {

            currentSaturdayTodoItems[i].innerHTML = currentSaturdayTodos[i].todo;
            currentSaturdayTodoItems[i].style.backgroundColor = returnRgbColor(currentSaturdayTodos[i].color);
    }

    for (let i = 0; i < currentSundayTodos.length; i++) {

            currentSundayTodoItems[i].innerHTML = currentSundayTodos[i].todo;
            currentSundayTodoItems[i].style.backgroundColor = returnRgbColor(currentSundayTodos[i].color);
    }
}

// _ _ _

// add divs
// add containers
function addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId) {

    if (dynamicContainerToken === "addTaskToList") {
        newId = plannedTodos.length-1;
    } else if (dynamicContainerToken === "load_func") {
        newId = dynamicContainerDataId;
    }

    // Create a new div for the todo-container-element
    const dynamicTodoContainer = document.createElement('div');
    dynamicTodoContainer.id = 'todo-container';
    dynamicTodoContainer.classList.add('todo-container-element');
    dynamicTodoContainer.setAttribute('data-id', newId);
    dynamicTodoContainer.style.display = "flex";

    // Lägg in data från plannedTodos[sistaIndexNr???]

    // Create and append the first textarea for date
    const userCreatedDateField = document.createElement('textarea');
    userCreatedDateField.id = `todo-${newId}-date`;
    userCreatedDateField.classList.add('todo-date');
    userCreatedDateField.setAttribute('type', 'text');
    userCreatedDateField.setAttribute('data-id', newId);
    userCreatedDateField.setAttribute('data-key', 'date');
    userCreatedDateField.setAttribute('name', 'date');
    userCreatedDateField.textContent = `Date ${newId}`; // Placeholder text
    dynamicTodoContainer.appendChild(userCreatedDateField);

    // Create and append the second textarea for text
    const userCreatedTextField = document.createElement('textarea');
    userCreatedTextField.id = `todo-${newId}-text`;
    userCreatedTextField.classList.add('todo-text');
    userCreatedTextField.setAttribute('type', 'text');
    userCreatedTextField.setAttribute('data-id', newId);
    userCreatedTextField.setAttribute('data-key', 'todo');
    userCreatedTextField.setAttribute('name', 'text');
    userCreatedTextField.textContent = `Todo Text ${newId}`; // Placeholder text
    dynamicTodoContainer.appendChild(userCreatedTextField);

    // Create and append the color div
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('todo-color');
    colorDiv.setAttribute('data-id', newId);
    colorDiv.setAttribute('data-key', 'color');
    colorDiv.setAttribute('name', 'color');
    dynamicTodoContainer.appendChild(colorDiv);

    // Create and append the recurring div
    const recurringDiv = document.createElement('div');
    recurringDiv.classList.add('todo-rec');
    recurringDiv.setAttribute('data-id', newId);
    recurringDiv.setAttribute('data-key', 'rec');
    recurringDiv.setAttribute('name', 'rec');
    dynamicTodoContainer.appendChild(recurringDiv);

    // Append the new container to the main container
    wrapperContainer.appendChild(dynamicTodoContainer);

    dynamicTodoContainer.addEventListener('click', function() {

        // Access the data-id attribute
        const dataId = dynamicTodoContainer.dataset.id;

        defaultDate = dateCollection[dataId].value;
        defaultTodoText = todoCollection[dataId].value;
    });

    // Add dateField event listeners to the new (all) dateFields
    dateFields = document.querySelectorAll(".todo-date");

    getDateFields(dateFields)

    // _ _ _

    // Add focus event listener (to (created(?)) date fields)
    userCreatedDateField.addEventListener('focus', () => {

        let dataId = `${userCreatedDateField.getAttribute('data-id')}`;

        //`The (dataId > 2 -div ("${dataId}") is focused!`

        defaultDate = dateCollection[dataId]?.value || ""; // Use value from dateCollection if available

        //`Date textarea with data-id="${dataId}" is active.`
        // status.textContent = `Date textarea with data-id="${dataId}" is active.`;

        isDateFieldFocus = true;
        changeDateFieldBackgroundColor(isDateFieldFocus, userCreatedDateField); // Optional: Highlight when active

        // Handle Edit Date Button
        const currentDateDiv = document.querySelector(`.todo-date[data-id="${dataId}"]`);
        createEditDateButton(currentDateDiv, dataId);

        if (editDateButton) {
            // editDateButton exists!
        }

        editDate = dateCollection[dataId]?.value || ""; // Ensure editDate is set correctly
    });

    // Add blur event listener
    userCreatedDateField.addEventListener('blur', (event) => {

        let dataId = `${userCreatedDateField.getAttribute('data-id')}`;

        dateInputString = getDateInputString();
        // dateInputString (when blur, userCreatedDateField) = " + dateInputString)


        // if selected date is a valid date
        if (dateInputString >= dateDisplay.textContent && isValidDateExceptFebruary(dateInputString) === true || dateInputString >= dateDisplay.textContent && isValidFebruaryDate(dateInputString) === true) {
            plannedTodos[dataId].date = dateInputString;
            resultString = dateInputString;
            plannedTodos[dataId].dataDate = weekdayNameToWeekDayNumberMultiDuration(resultString);

            // plannedTodos[dataId].date (at blur), is a valid date ...
        } else if (dateInputString < dateDisplay.textContent || isValidDateExceptFebruary(dateInputString) === false || isValidFebruaryDate(dateInputString) === false) {
            dateInputString = defaultDate;
            plannedTodos[dataId].date = defaultDate;
            plannedTodos[dataId].dataDate = weekdayNameToWeekDayNumberMultiDuration(defaultDate);
            resultString = defaultDate;
            // plannedTodos[dataId].date (at blur), is invalid ...
        }

        // _ _ _

        checkForTodoDateDuplicates(defaultDate, defaultTodoText, dateCollection, todoCollection, dataId);

        plannedTodos[dataId].date = resultString;

        dateCollection[dataId].value = resultString;
        dateCollection[dataId].innerHTML = resultString;

        sortPlannedTodos(plannedTodos);
        removeEditDateButton(dataId);

        updateCurrentWeekSchedule(true);

        isDateFieldFocus = false;
        changeDateFieldBackgroundColor(isDateFieldFocus, userCreatedDateField); // Reset background color
        userCreatedDateField.style.backgroundColor = ''; // Optional: Reset background color }); });
});
// addDynamicTodoContainer (end)

// _ _ _


    // x Den här funktionen ska inte köras om matchCount === 10 (för blockedDate) && dateCollection[dataId].value === targetDate (= blockedDate)

    dateFields.forEach(function(field) {
        field.addEventListener('input', function(event) {

            dataId = event.target.getAttribute('data-id');  // Get the todo index
            const key = event.target.getAttribute('data-key');  // Get the key (todo, color, etc.)
            console.log("key = " + key)

            getDataId(dataId);

            if (dateCollection[dataId].value === undefined || dateCollection[dataId].value === null || dateCollection[dataId].value === '') {
                    // invalid todo -> checkIfDateAndTextAreEmpty()
                    checkIfDateAndTextAreEmpty();
                    plannedTodos[dataId][key] = dateCollection[dataId].value;
                    plannedTodos[dataId].isEmpty = false;
                }

                    // 2025-03-03: Ta bort 9-gräns
                    if (dateCollection[dataId].value !== '') {

                // UPPDATERA TODO-TASK-List-DATUM (och dataDate), Lägg till på nytt (objekt och DOM-element) och ta bort gammalt (objekt och DOM-element)

                // 1. Om DOM-datumet (dateCollection[dataId].value) ändras && nytt datum finns i veckovy. (loopa igenom och undersök om dateCollection[dataId].value === weekDates[i]) => Ta bort old todo-vecko-div från vecko-vy (se removeSpecificTodo)
                // 2. Lägg till ny todo-vecko-div i vecko-vy (för nytt datum) ((där style.backgroundColor === ''(?)))

                plannedTodos[dataId].dataDate = weekdayNameToWeekDayNumber(dateCollection[dataId]);

                // Edit date (1-3 plannedTodos, index: 0-2) (1, start)
                var oldDate = '';
                var freshDate = '';

                for (let i = 0; i < plannedTodos.length; i++) {

                    if (dateCollection[i].innerHTML >= dateDisplay.textContent && isValidDateExceptFebruary(dateCollection[i].innerHTML) === true && isValidDateExceptFebruary(dateInputString) === true ||
                        dateCollection[i].innerHTML >= dateDisplay.textContent && isValidFebruaryDate(dateCollection[i].innerHTML) === true && isValidDateExceptFebruary(dateInputString) === true) {

                        oldDate = dateCollection[i].innerHTML;
                        dateCollection[i].innerHTML = dateCollection[i].value;
                    } else if (dateInput.value < dateDisplay.textContent || isValidDateExceptFebruary(dateCollection[i].innerHTML) === false || isValidFebruaryDate(dateCollection[i].innerHTML) === false) {
                        oldDate = defaultDate;
                    }

                    if (dateCollection[i].innerHTML >= dateDisplay.textContent && isValidDateExceptFebruary(freshDate) === true && oldDate !== freshDate && isValidDateExceptFebruary(dateInputString) === true ||
                        dateCollection[i].innerHTML >= dateDisplay.textContent && isValidFebruaryDate(freshDate) === true && oldDate !== freshDate && isValidDateExceptFebruary(dateInputString) === true) {
                            freshDate = dateCollection[i].innerHTML;
                    } else if (dateInput.value < dateDisplay.textContent || isValidDateExceptFebruary(freshDate) === false || isValidFebruaryDate(freshDate) === false || oldDate === freshDate) {
                        freshDate = defaultDate;
                    }

                }

                //exceptfeb
                if (dateInput.value >= dateDisplay.textContent && isValidDateExceptFebruary(oldDate) === true && isValidDateExceptFebruary(freshDate) === true && oldDate !== freshDate && isValidDateExceptFebruary(dateInputString) === true ||
                isValidFebruaryDate(oldDate) === true && isValidFebruaryDate(freshDate) === true && oldDate !== freshDate && isValidFebruaryDate(dateInputString) === true
                ) {
                    plannedTodos[dataId].date = freshDate;
                }

                // _ _ _

                else if (dateInput.value < dateDisplay.textContent ||
                    isValidDateExceptFebruary(oldDate) === false ||
                    isValidDateExceptFebruary(freshDate) === false ||
                    oldDate === freshDate ||
                    isValidDateExceptFebruary(dateInputString) === false ||
                    isValidFebruaryDate(dateInputString) === false) {

                    plannedTodos[dataId].date = dateDisplay.textContent;

                }

                // _ _ _

                plannedTodos[dataId][key] = dateCollection[dataId].value;

                if (isValidDateExceptFebruary(plannedTodos[dataId][key]) === true && plannedTodos[dataId][key] < dateDisplay.textContent ||
                    isValidFebruaryDate(plannedTodos[dataId][key] === true && plannedTodos[dataId][key] < dateDisplay.textContent
                )) {
                    plannedTodos[dataId][key] = defaultDate;
                }

                // Varför töms ...dayTodoItems?
                currentMondayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })
                currentTuesdayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })
                currentWednesdayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })
                currentThursdayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })
                currentFridayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })
                currentSaturdayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })
                currentSundayTodoItems.forEach(Element => {
                    Element.innerHTML = "";
                    Element.style.backgroundColor = "";
                })

                // Update the week schedule (when a task has been edited)
                // updateCurrentWeekSchedule();

                // domUpdateCurrentWeekSchedule();



            } else if (dateCollection[dataId].value === undefined || dateCollection[dataId].value === null || dateCollection[dataId].value === '') {
                checkIfDateAndTextAreEmpty();
            }

            // (2025-03-10: Ej aktuellt(?), ingen gräns längre?)
            else if (dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[0]
                || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[1]
                || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[2]
                || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[3]
                || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[4]
                || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[5]
                || dateCollection[dataId].value !== '' && dateCollection[dataId].value === weekDates[6]
            ) {
                dateCollection[dataId].value = '';
            }

            // Edit date (1-3 plannedTodos, index: 0-2) (2 start)
            var todoDatesAreValid = true;
            plannedTodos.forEach((todoRow) => {
                if (!isValidDateFormat(todoRow.date)) {
                    todoDatesAreValid = false;
                }
            })
            if (todoDatesAreValid === true) {
                updateCurrentWeekSchedule(true);
            }
            // Edit date (1-3 plannedTodos, index: 0-2) (2 end)
        });
    });


    // Add todoField event listeners to the new (all) todoFields
    todoFields = document.querySelectorAll(".todo-text");

    getTodoFields(todoFields)

    todoFields.forEach(function(field) {
        field.addEventListener('input', function(event) {

            dataId = event.target.getAttribute('data-id');  // Get the todo index
            const key = event.target.getAttribute('data-key');  // Get the key (todo, color, etc.)

            // Check if edited todo already exists (isEditDuplicate)
            if (isEditDuplicate === true) {
                // isEditDuplicate === true
                // 2025-03-19: Alert-boxen buggar ur?
                // alert("That task may already exists!")
            }

            // Edit plannedTodos (object) when todo (DOM-list) is changed

            if (todoCollection[dataId].value !== '') {

                // Om måndag-array-objekt finns, gå igenom alla måndags-objekt,    OM måndags-objekt-datum är lika plannedTodos-objekt-datum     &&  måndags-objekt-todo är lika plannedTodos-objekt-todo (för aktuell todo-liste-rad)  DÅ  (Hämta todo-värden från DOM-raden och lägg in i week schedule (för måndags-objekten i tur och ordning, efter "i"))
                if (currentMondayTodos.length > 0) {
                    for (let i = 0; i < currentMondayTodos.length; i++) {

                        // Hitta currentMondayTodos-objekt som är lika plannedTodos[dataId]
                            if (currentMondayTodos[i]?.date === plannedTodos[dataId]?.date && currentMondayTodos[i]?.todo === plannedTodos[dataId]?.todo)
                            {
                            // Monday todo change (?)
                            currentMondayTodos[i].todo = todoCollection[dataId].value;
                            currentMondayTodoItems[i].innerHTML = todoCollection[dataId].value;
                        }
                    }
                }

                // _ _ _

                if (currentTuesdayTodos.length > 0) {
                    for (let i = 0; i < currentTuesdayTodos.length; i++) {

                        // Hitta currentTuesdayTodos-objekt som är lika plannedTodos[dataId]
                        if (currentTuesdayTodos[i]?.date === plannedTodos[dataId]?.date && currentTuesdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                            currentTuesdayTodos[i].todo = todoCollection[dataId].value;
                            currentTuesdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                        }
                    }
                }

                if (currentWednesdayTodos.length > 0) {
                    for (let i = 0; i < currentWednesdayTodos.length; i++) {

                        // Hitta currentWednesdayTodos-objekt som är lika plannedTodos[dataId]
                        if (currentWednesdayTodos[i]?.date === plannedTodos[dataId]?.date && currentWednesdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                            currentWednesdayTodos[i].todo = todoCollection[dataId].value;
                            currentWednesdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                        }
                    }
                }

                if (currentThursdayTodos.length > 0) {
                    for (let i = 0; i < currentThursdayTodos.length; i++) {

                        // Hitta currentThursdayTodos-objekt som är lika plannedTodos[dataId]
                        if (currentThursdayTodos[i]?.date === plannedTodos[dataId]?.date && currentThursdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                            currentThursdayTodos[i].todo = todoCollection[dataId].value;
                            currentThursdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                        }
                    }
                }
                if (currentFridayTodos.length > 0) {
                    for (let i = 0; i < currentFridayTodos.length; i++) {

                        // Hitta currentFridayTodos-objekt som är lika plannedTodos[dataId]
                        if (currentFridayTodos[i]?.date === plannedTodos[dataId]?.date && currentFridayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                            currentFridayTodos[i].todo = todoCollection[dataId].value;
                            currentFridayTodoItems[i].innerHTML = todoCollection[dataId].value;
                        }
                    }
                }
                if (currentSaturdayTodos.length > 0) {
                    for (let i = 0; i < currentSaturdayTodos.length; i++) {

                        // Hitta currentSaturdayTodos-objekt som är lika plannedTodos[dataId]
                        if (currentSaturdayTodos[i]?.date === plannedTodos[dataId]?.date && currentSaturdayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                            currentSaturdayTodos[i].todo = todoCollection[dataId].value;
                            currentSaturdayTodoItems[i].innerHTML = todoCollection[dataId].value;
                        }
                    }
                }
                if (currentSundayTodos.length > 0) {
                    for (let i = 0; i < currentSundayTodos.length; i++) {

                        // Hitta currentSundayTodos-objekt som är lika plannedTodos[dataId]
                        if (currentSundayTodos[i]?.date === plannedTodos[dataId]?.date && currentSundayTodos[i]?.todo === plannedTodos[dataId]?.todo) {
                            currentSundayTodos[i].todo = todoCollection[dataId].value;
                            currentSundayTodoItems[i].innerHTML = todoCollection[dataId].value;
                        }
                    }
                }

                // _ _ _

                plannedTodos[dataId][key] = todoCollection[dataId].value;

            } else if (todoCollection[dataId].value === undefined || todoCollection[dataId].value === null || todoCollection[dataId].value === '') {
                checkIfDateAndTextAreEmpty();
            }
            isEditDuplicate = false;
        });
    });

}

// Add eventlistener to new todo-date-div-elements ...


function removeLastDynamicTodoContainer() {

    let lastContainerNumber = specificTodoContainer.length - 1

    // specificTodoContainer...

    // if (specificTodoContainer.length > 3)
    if (specificTodoContainer.length > 3) {
        let lastContainer = specificTodoContainer[lastContainerNumber];
        wrapperContainer.removeChild(lastContainer);
    } else if (specificTodoContainer.length <= 3) {
        // No more todo containers to remove.
    }

    // _ _ _

    // plannedTodos.forEach(element => {console.log("JSON.sfy(plannedTodos-element) = " + JSON.stringify(element))})
    // currentWednesdayTodos.forEach(element => {console.log("JSON.sfy(wed-element) = " + JSON.stringify(element))})

    //lastDomRowNumber is not defined...

    // _ _ _

    handleEnableDisableDefaultRows();

}

// _ _ _

// Function to restore the todo-wrapper to the original structure
function restoreTodoWrapper() {

    // Clear all existing child elements in wrapperContainer
    wrapperContainer.innerHTML = '';

    // Create the initial three containers with specific data and structure
    for (let i = 0; i < 3; i++) {
        // Create the todo container div
        const dynamicTodoContainer = document.createElement('div');
        dynamicTodoContainer.id = 'todo-container';
        dynamicTodoContainer.classList.add('todo-container-element');
        dynamicTodoContainer.setAttribute('data-id', i);

        // Create and append the first textarea for date
        const userCreatedDateField = document.createElement('textarea');
        userCreatedDateField.id = `todo-${i}-date`;
        userCreatedDateField.classList.add('todo-date');
        userCreatedDateField.setAttribute('type', 'text');
        userCreatedDateField.setAttribute('data-id', i);
        userCreatedDateField.setAttribute('data-key', 'date');
        userCreatedDateField.setAttribute('name', 'date');
        userCreatedDateField.placeholder = i === 0 ? 'Next date...' : ''; // Set placeholder for the first one
        dynamicTodoContainer.appendChild(userCreatedDateField);

        // Create and append the second textarea for text
        const userCreatedTextField = document.createElement('textarea');
        userCreatedTextField.id = `todo-${i}-text`;
        userCreatedTextField.classList.add('todo-text');
        userCreatedTextField.setAttribute('type', 'text');
        userCreatedTextField.setAttribute('data-id', i);
        userCreatedTextField.setAttribute('data-key', 'todo');
        userCreatedTextField.setAttribute('name', 'text');
        userCreatedTextField.placeholder = i === 0 ? 'Planned todo... (Add Task)' : ''; // Set placeholder for the first one
        dynamicTodoContainer.appendChild(userCreatedTextField);

        // Create and append the color div
        const colorDiv = document.createElement('div');
        colorDiv.id = `todo-${i}-color`;
        colorDiv.classList.add('todo-color');
        colorDiv.setAttribute('data-id', i);
        colorDiv.setAttribute('data-key', 'color');
        colorDiv.setAttribute('name', 'color');
        dynamicTodoContainer.appendChild(colorDiv);

        // Create and append the recurring div
        const recurringDiv = document.createElement('div');
        recurringDiv.classList.add('todo-rec');
        recurringDiv.setAttribute('data-id', i);
        recurringDiv.setAttribute('data-key', 'rec');
        recurringDiv.setAttribute('name', 'rec');
        dynamicTodoContainer.appendChild(recurringDiv);

        // Append the new container to the main container
        wrapperContainer.appendChild(dynamicTodoContainer);
    }
}

// _ _ _

// Old todos (start)
// Old tasks
// Past plans

let pastPlansTextArea = document.getElementById('past-tasks-input-field');
var pastPlansTextString;
var pastTasksArray = [];
var pastPlanStringToSave = '';
var pastPlanStringToSaveUpdate = '';

function ifPlannedTodosIsPastPutToPastPlans() {

    // 1. Check if plannedTodos is past
    // 2. Put to past plans
    // 3. Update plannedTodos && dateCollection && todoCollection todoColorCollection (&& currentDayTodos && currentDayTodosItems ?)

    // Add past plans to textarea
    plannedTodos.forEach(todoRow => {
        if (todoRow.date < dateDisplay.textContent && todoRow.isRecurring !== true) {
            pastPlansTextString = todoRow.date + "    " + todoRow.todo + "    " + returnColorText(todoRow.color) + "\n";

            pastTasksSet.add(pastPlansTextString)
            pastPlansTextArea.innerHTML = [...pastTasksSet]
            pastPlansTextArea.innerHTML = pastPlansTextArea.innerHTML.replaceAll(/,+/g, "")
            pastPlansTextArea.value  = [...pastTasksSet]
            pastPlansTextArea.value = pastPlansTextArea.innerHTML.replaceAll(/,+/g, "")
        }
    })
        pastPlanStringToSave = `${pastPlansTextArea.innerHTML}`
    }

let clearPastButton = document.getElementById('clear-past-tasks');

var past_data;
clearPastButton.addEventListener('click', () => {
    pastPlansTextArea.innerHTML = '';
    pastPlansTextArea.value = '';
    pastTasksSet = new Set();
    pastPlanStringToSave = '';
    past_data = '';
})

// Old todos (end)


// Hur hantera data som finns i input-fält (i browsern) vid uppstart?

// Load!

        window.onload = () => {
    // page is fully loaded

    // clear the DOM todo data
    for (let i = 0; i < dateCollection.length; i++) {
        dateCollection[i].value = '';
        dateCollection[i].innerHTML = '';
        todoCollection[i].value = '';
        todoCollection[i].innerHTML = '';
        todoColorCollection[i].style.backgroundColor = 'rgb(228, 228, 228)';
    }

    // plannedTodos before DOM update ...

    updatePlannedTodosWithDomData();
    ifPlannedTodosIsPastPutToPastPlans();
    // updateCurrentWeekSchedule();
    // plannedTodos after DOM update...
    // object updated with DOM data... (?)

    // Loading delay (load file)

        }

function updatePlannedTodosWithDomData() {

    // if no localStorage saved

    // if localStorage exists!?

    if (dateCollection.length > 0) {

        for (let i = 0; i < dateCollection.length; i++) {

            if (dateCollection[i].value !== "") {

                dateCollection[i].value = "";
                dateCollection[i].innerHTML = "";
                todoCollection[i].value = "";
                todoCollection[i].innerHTML = "";

                document.getElementById("todo-`${0}`-date").innerHTML = ``;
                document.getElementById("todo-0-text").innerHTML = ``;
            }
        }
    }

}

// _ _ _


// Skapa en tom struktur för veckans todos (x FIXA gräns!? - max 9 todos)

let weekTodos = [];




// Save plan

    // Use a delimiter to concatenate the strings (JSON.stringify(plannedTodos) and pastPlanStringToSave)
    var delimiter = "<DELIMITER>";

function save_func() {

    // Get the file name from the input field
    var fileName = document.getElementById('file-name').value;
    var fullFileName = fileName + ".txt";

    // Check if the file name is not empty
    if (!fileName) {
        alert(alertEnterFileName[selectedLanguage]);
        return;
    }


    // _ _ _

    var planned_data = JSON.stringify(plannedTodos)

    past_data = pastPlanStringToSave

    // planned_data...
    // past_data...

        let combinedString = planned_data + delimiter + past_data;

        var file = new Blob([combinedString],{type:"text/plain"})
        var anchor = document.createElement("a");
        // I want to create a file from this location: "file:///C:/Users/filip/Desktop/Personal_Efficiency_App/index.html"
        anchor.href = URL.createObjectURL(file);
        anchor.download = fullFileName;
        anchor.click();
}

// _ _ _

// async function save() {
async function saveAs() {
    try {
        // Get the file name from the input field
        const fileNameElement = document.getElementById('file-name');
        if (!fileNameElement) {
            alert(alertFileNameElementNotFound[selectedLanguage]);
            return;
        }

        // const fileName = fileNameElement.innerText || fileNameElement.textContent;
        const fileName = fileNameElement.value;
        if (!fileName) {
            alert(alertEnterFileName2[selectedLanguage]);
            return;
        }

        const fullFileName = fileName.trim() + ".txt";

        // Create the options object for the save file picker
        const options = {
            suggestedName: fullFileName,
            types: [{
                description: 'Text Files',
                accept: {
                    'text/plain': ['.txt'],
                },
            }],
        };

        // Open the save file picker and get the file handle
        const fileHandle = await window.showSaveFilePicker(options);

        // Prepare the data to be saved
        const planned_data = JSON.stringify(plannedTodos);
        const past_data = pastPlanStringToSave;
        const combinedString = planned_data + delimiter + past_data;

        // Create a writable stream and write the data to the file
        const writableStream = await fileHandle.createWritable();
        await writableStream.write(combinedString);
        await writableStream.close();

        // File saved successfully!
    } catch (error) {
        console.error("An error occurred while saving the file:", error);
    }
}

// _ _ _

function getExactYearDifference(todoDate, currentDate) {

    let diff = currentDate.getFullYear() - todoDate.getFullYear();

    // If the month/day of todoDate hasn't passed yet in the current year, subtract 1
    if (
        currentDate.getMonth() < todoDate.getMonth() ||
        (currentDate.getMonth() === todoDate.getMonth() && currentDate.getDate() < todoDate.getDate())
    ) {
        diff--;
    }

    return diff;
}

function isDayLessThan29(dateString) {

    // Parse the date string to extract the day component
    const dateParts = dateString.split('-');
    const day = parseInt(dateParts[2], 10);

    // Check if the day is less than 29
    return day < 29;
}

// _ _ _

function replaceInvalidDate(todoRow, plannedTodos) {

    // Parse the current date from todoRow
    let date = new Date(todoRow.date);

    // Get the current month and last day of the current month
    const currentMonth = date.getMonth();
    const lastDayOfMonth = new Date(date.getFullYear(), currentMonth + 1, 0).getDate();

    // Check if the current date exceeds the last valid day of the month
    if (date.getDate() > lastDayOfMonth) {
        // Move to the first day of the coming month
        const nextMonth = currentMonth + 1;
        date = new Date(date.getFullYear(), nextMonth, 1); // First day of next month

        // Check for conflicts with plannedTodos
        let conflict = plannedTodos.some(
            task =>
                task.date === date.toISOString().split("T")[0] && task.todo === todoRow.todo
        );

        // Find the next available date without conflicts
        while (conflict) {
            date.setDate(date.getDate() + 1); // Increment to the next day
            conflict = plannedTodos.some(
                task =>
                    task.date === date.toISOString().split("T")[0] && task.todo === todoRow.todo
            );
        }
    }

    // Update the todoRow's date with the new valid date
    todoRow.date = date.toISOString().split("T")[0];
}


function ensureRecurringMonthDate(todoDateLoad, currentDate) {

    // Parse the loaded date and current date
    const loadedDate = new Date(todoDateLoad);
    const current = new Date(currentDate);

    // Initialize the new date with the loaded date
    let newDate = new Date(todoDateLoad);

    // newDate (1) (date to be updated)...

    // Check if the loaded date is in the past
    if (loadedDate < current) {
        // Check if the same day of the current month is in the future
        newDate = new Date(current.getFullYear(), current.getMonth(), loadedDate.getDate());

        // newDate (2a) (date to be updated)...

        if (newDate < current) {
            // If the same day of the current month is in the past, set to the next month (this year)
            newDate = new Date(current.getFullYear(), current.getMonth() + 1, loadedDate.getDate());
            // newDate (2b) (date to be updated)...
        }
    }

    let newDateToBeUpdated = formatDate(newDate);

    // Ensure the new date is in the 'YYYY-MM-DD' format
    return newDateToBeUpdated;
}

var diffDays = '';

function calculateDaysBetweenDates(smallDateString1, largeDateString2) {
    // Parse the two date strings
    const date1 = new Date(smallDateString1);
    const date2 = new Date(largeDateString2);

    // Get the time values in milliseconds
    const time1 = date1.getTime();
    const time2 = date2.getTime();

    // Calculate the difference in milliseconds
    const differenceInMillis = Math.abs(time2 - time1);

    // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
    const differenceInDays = differenceInMillis / (1000 * 60 * 60 * 24);

    diffDays = differenceInDays

    return diffDays;
}

function getRemainderDividingWithFourteen(number) {
    return number % 14
}

function getRemainderDividingWithTwentyone(number) {
    return number % 21
}

function getRemainderDividingWithTwentyeight(number) {
    return number % 28
}

function ensureRecurringWeekDate(todoDateLoad, currentDate, weekPeriod) {

    const loadedDate = new Date(todoDateLoad);
    const current = new Date(currentDate);

    let loadedDataDate = weekdayNameToWeekDayNumberMultiDuration(loadedDate); // 0-6

    loadedDataDate = Number(loadedDataDate);

    let currentDataDate = weekdayNameToWeekDayNumberMultiDuration(current); // 0-6

    currentDataDate = Number(currentDataDate);

    // Hitta datum med samma dataDate i aktuell vecka,
    // Om hittat datum < current -> hittat datum + 7 dagar (weekPeriod === 'w1')

    let newDate = '';
    let addDaysW1 = '';
    let addDaysW2 = '';
    let addDaysW3 = '';
    let addDaysW4 = '';

    // newDate (1 - w) (date to be updated)...



    // Check if the loaded date is in the past
    if (loadedDate < current) {

        // _ _ _

        if (weekPeriod === 'w1') {

            if (loadedDataDate < currentDataDate) {
                let dayDifference = currentDataDate-loadedDataDate
                addDaysW1 = 7-Math.abs(dayDifference); // 2025-03-03 Notering: Kan bli större än 7 (om ej absolut-belopp)
            } else if (loadedDataDate === currentDataDate) {
                addDaysW1 = 0;
            } else if (loadedDataDate > currentDataDate) {
                addDaysW1 = Math.abs(currentDataDate-loadedDataDate); // 2025-03-03 Notering: Kan bli negativt 7 - - x (om ej absolut-belopp)
            }

            newDate = new Date(current.getFullYear(), current.getMonth(), current.getDate() + addDaysW1);
        }

        // _ _ _

        else if (weekPeriod === 'w2') {

            calculateDaysBetweenDates(loadedDate, current);

            let getRemainder = '';

            if (diffDays < 14) {
                getRemainder = 14-diffDays;
            }

            else if (diffDays >= 14) {
                getRemainder = 14-getRemainderDividingWithFourteen(diffDays);
                if (diffDays % getRemainder === 0) {
                    getRemainder = 0;
                }
            }

            addDaysW2 = getRemainder;

            newDate = new Date(current.getFullYear(), current.getMonth(), current.getDate() + addDaysW2);
        }

        // 2025-03-04: OBS! Se över!?
        else if (weekPeriod === 'w3') {

            calculateDaysBetweenDates(loadedDate, current);

            let getRemainder = '';

            if (diffDays < 21) {
                getRemainder = 21-diffDays;
                addDaysW3 = getRemainder;
            }

            // else if (diffDays >= 21) {
            else if (diffDays >= 21) {
                getRemainder = 21-getRemainderDividingWithTwentyone(diffDays);

                    if (diffDays % getRemainder === 0 && getRemainder === diffDays) {
                        // Here === 0 (1)
                    getRemainder = '';
                    } else if (diffDays % getRemainder === 0 && getRemainder !== diffDays) {
                        // Here === 0 (2)
                        getRemainder = 21-getRemainderDividingWithTwentyone(diffDays);
                    }

                // _ _ _
                // För att undvika att:
                // if (diffDays % getRemainder === 0)...
            }

            addDaysW3 = getRemainder;

            newDate = new Date(current.getFullYear(), current.getMonth(), current.getDate() + addDaysW3);
        }
        else if (weekPeriod === 'w4') {

            calculateDaysBetweenDates(loadedDate, current);

            let getRemainder = '';

            if (diffDays < 28) {
                getRemainder = 28-diffDays;
                addDaysW4 = getRemainder;
            }

            else if (diffDays >= 28) {
                getRemainder = 28-getRemainderDividingWithTwentyeight(diffDays);

                if (diffDays % getRemainder === 0 && getRemainder === diffDays) {

                getRemainder = '';
                } else if (diffDays % getRemainder === 0 && getRemainder !== diffDays) {

                    getRemainder = 28-getRemainderDividingWithTwentyone(diffDays);
                }

            }

            addDaysW4 = getRemainder;

            newDate = new Date(current.getFullYear(), current.getMonth(), current.getDate() + addDaysW4);
        }
    }

    let newDateToBeUpdated = formatDate(newDate);

    return newDateToBeUpdated;

}

// _ _ _

function checkTodoText(todoText) {
    // Regex to match 🔁#D
    const patternFalse = /🔁#D/;
    // Regex to match 🔁D
    const patternTrue = /🔁D/;

    // Check if the todo text matches the false pattern
    if (patternFalse.test(todoText)) {
        return false;
    }

    // Check if the todo text matches the true pattern
    if (patternTrue.test(todoText)) {
        return true;
    }

    // Default return value if neither pattern matches
    return null;
}

// Function to read the Blob (file) content and separate the strings

function readFile(file) {
    const reader = new FileReader();

    reader.onload = function(event) {
        const result = event.target.result;
       // Concatenated string with delimiter: result

        // Split the result using the delimiter
        let [planned_data, past_data] = result.split(delimiter);

       // String 1 (planned_data):", planned_data
        // String 2 (past_data):", past_data



        plannedTodos = planned_data;

        // Convert the loaded JSON.stringify(plannedTodos) (= "text" (string)) into an object (-> "plannedTodos" (object))
        planned_data = JSON.parse(planned_data)
        plannedTodos = planned_data;

        ifPlannedTodosIsPastPutToPastPlans();

        let plannedTodosOnLoad = [];

        plannedTodos.forEach(todoRow => {
            let todoDateLoad = new Date(todoRow.date);  // Convert to Date object
            let currentDate = new Date(dateDisplay.textContent); // Convert dateDisplay to Date

            if (todoDateLoad >= currentDate && todoRow.isRecurring !== true) {

                plannedTodosOnLoad.push(todoRow);
            }
            // If the recurring year is in the future: Update recurring todos (year)
            else if (todoDateLoad >= currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'y') {
                plannedTodosOnLoad.push(todoRow);
            }
            // If the recurring year is in the past: update the year (and dataDate) to the coming year (and weekday number)
            else if (todoDateLoad < currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'y') {

                let yearDifference = getExactYearDifference(todoDateLoad, currentDate);

                // Add "yearDifference" year
                todoDateLoad.setFullYear(todoDateLoad.getFullYear() + yearDifference);

                // Format back to YYYY-MM-DD
                let updatedDate = todoDateLoad.toISOString().split("T")[0];

                if (updatedDate >= dateDisplay.textContent) {

                    // Update the todoRow date
                    todoRow.date = updatedDate;
                    todoRow.dataDate = weekdayNameToWeekDayNumberMultiDuration(updatedDate);
                }

                // If todoDateLoad < currentDate, but same year, add 1 year
                else if (updatedDate < dateDisplay.textContent) {
                    todoDateLoad.setFullYear(todoDateLoad.getFullYear() + 1);
                    updatedDate = todoDateLoad.toISOString().split("T")[0];

                    // Update the todoRow date
                    todoRow.date = updatedDate;
                    todoRow.dataDate = weekdayNameToWeekDayNumberMultiDuration(updatedDate);
                }

                plannedTodosOnLoad.push(todoRow);
            }
            // If the recurring month is in the future: Update recurring todos (month)
            else if (todoDateLoad >= currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'm' && isDayLessThan29(todoRow.date) === true) {

                plannedTodosOnLoad.push(todoRow);
            }
            else if (todoDateLoad >= currentDate &&
                todoRow.isRecurring === true &&
                todoRow.recurringType === 'm' &&
                isDayLessThan29(todoRow.date) === false &&
                isValidDateExceptFebruary(todoRow.date) === true) {

                plannedTodosOnLoad.push(todoRow);
            }
            else if (todoDateLoad >= currentDate &&
                todoRow.isRecurring === true &&
                todoRow.recurringType === 'm' &&
                isDayLessThan29(todoRow.date) === false &&
                isValidFebruaryDate(todoRow.date) === true) {

                plannedTodosOnLoad.push(todoRow);
            }
            else if (todoDateLoad >= currentDate &&
                todoRow.isRecurring === true &&
                todoRow.recurringType === 'm' &&
                isDayLessThan29(todoRow.date) === false &&
                isValidDateExceptFebruary(todoRow.date) === false &&
                isValidFebruaryDate(todoRow.date) === false) {

                replaceInvalidDate(todoRow, plannedTodos);

                plannedTodosOnLoad.push(todoRow);
            }
            // If the recurring month is in the past: update the month (and dataDate) to the coming month (and weekday number)
            else if (todoDateLoad < currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'm' && isDayLessThan29(todoRow.date) === true) {

                // Format back to YYYY-MM-DD
                let updatedDate = ensureRecurringMonthDate(todoDateLoad, currentDate);

                todoRow.date = updatedDate;
                todoRow.dataDate = weekdayNameToWeekDayNumberMultiDuration(updatedDate);

                plannedTodosOnLoad.push(todoRow);
            }

            // If the recurring week is in the future: Update recurring todos (week)
            else if (todoDateLoad >= currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'w' && todoRow.weekperiod !== '') {

                plannedTodosOnLoad.push(todoRow);
            }
            // If the recurring week is in the past: update the week (and dataDate) to the coming week... (and weekday number)
            else if (todoDateLoad < currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'w' && todoRow.weekperiod !== '') {

                let weekPeriod = todoRow.weekPeriod;

                // Format back to YYYY-MM-DD
                let updatedDate = ensureRecurringWeekDate(todoDateLoad, currentDate, weekPeriod);

                todoRow.date = updatedDate;
                todoRow.dataDate = weekdayNameToWeekDayNumberMultiDuration(updatedDate);

                plannedTodosOnLoad.push(todoRow);
            }
                // If the recurring day is in the future: Update recurring todos (day)
                else if (todoDateLoad >= currentDate && todoRow.isRecurring === true && todoRow.recurringType === 'd') {

                    plannedTodosOnLoad.push(todoRow);
                }
                // If the recurring day is in the past: update the day to the coming week... (specific day-s) ("D")
                else if (todoDateLoad < currentDate && todoRow.isRecurring === true && todoRow.everyWeek === true && todoRow.recurringType === 'd' && checkTodoText(todoRow.todo) === true) {

                    let currentWeekDayDateFromDataDate = weekDates[todoRow.dataDate];

                        if (currentWeekDayDateFromDataDate >= dateDisplay.textContent) {
                            let convertDateToFullDate = new Date(currentWeekDayDateFromDataDate);

                            let convertedDateFromFullDate = new Date(currentWeekDayDateFromDataDate);
                            convertedDateFromFullDate.setDate(convertDateToFullDate.getDate());
                            let convertedDateFromFullDateString = convertedDateFromFullDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                            todoRow.date = convertedDateFromFullDateString

                            plannedTodosOnLoad.push(todoRow);
                        }

                            else if (currentWeekDayDateFromDataDate < dateDisplay.textContent) {

                            let convertDateToFullDate = new Date(currentWeekDayDateFromDataDate);

                            let convertedDateFromFullDate = new Date(currentWeekDayDateFromDataDate);
                            convertedDateFromFullDate.setDate(convertDateToFullDate.getDate() + 7);
                            let convertedDateFromFullDateString = convertedDateFromFullDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                            // Add 7 days to currentWeekDayDateFromDataDate
                            todoRow.date = convertedDateFromFullDateString

                            plannedTodosOnLoad.push(todoRow);
                        }
                }
                        // If the recurring day is in the past: update the day to the coming week... (duration) ("#D")
                    else if (todoDateLoad < currentDate && todoRow.isRecurring === true && todoRow.everyWeek === true && todoRow.recurringType === 'd' && checkTodoText(todoRow.todo) === false) {

                        let convertedDateFromFullDateString;

                        let currentWeekDayDateFromDataDate = weekDates[todoRow.dataDate];

                            if (currentWeekDayDateFromDataDate >= dateDisplay.textContent) {

                                let convertDateToFullDate = new Date(currentWeekDayDateFromDataDate);

                                let convertedDateFromFullDate = new Date(currentWeekDayDateFromDataDate);
                                convertedDateFromFullDate.setDate(convertDateToFullDate.getDate());
                                convertedDateFromFullDateString = convertedDateFromFullDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format
                            }
                            else if (currentWeekDayDateFromDataDate < dateDisplay.textContent) {
                                let convertDateToFullDate = new Date(currentWeekDayDateFromDataDate);

                                let convertedDateFromFullDate = new Date(currentWeekDayDateFromDataDate);
                                convertedDateFromFullDate.setDate(convertDateToFullDate.getDate() + 7);
                                convertedDateFromFullDateString = convertedDateFromFullDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                                // Add 7 days to currentWeekDayDateFromDataDate
                            }

                            // Add 0 days to currentWeekDayDateFromDataDate
                            todoRow.date = convertedDateFromFullDateString

                            plannedTodosOnLoad.push(todoRow);
                    }
                                    // If the recurring day is in the past: update the day to the coming week... (duration)
                                    else if (todoDateLoad < currentDate && todoRow.isRecurring === true && todoRow.everyWeek === true && todoRow.recurringType === 'd' && checkTodoText(todoRow.todo) === false) {

                                        let currentWeekDayDateFromDataDate = weekDates[todoRow.dataDate];

                                            let convertDateToFullDate = new Date(currentWeekDayDateFromDataDate);

                                            let convertedDateFromFullDate = new Date(currentWeekDayDateFromDataDate);
                                            convertedDateFromFullDate.setDate(convertDateToFullDate.getDate());
                                            let convertedDateFromFullDateString = convertedDateFromFullDate.toISOString().split('T')[0]; // Convert the date to 'YYYY-MM-DD' format

                                            // Add 0 days to currentWeekDayDateFromDataDate
                                            todoRow.date = convertedDateFromFullDateString

                                            plannedTodosOnLoad.push(todoRow);
                                    }
        });

        plannedTodos = plannedTodosOnLoad;
        plannedTodosOnLoad = '';

        // Uppdatera plannedTodos här(?) ((innan nya div:ar skapas))

        if (plannedTodos.length > 3) {
            for (let i = 3; i < plannedTodos.length; i++) {
                if (plannedTodos[i].date >= dateDisplay.textContent) {
                    dynamicContainerToken = "load_func";
                    dynamicContainerDataId = i;
                    addDynamicTodoContainer(dynamicContainerToken, dynamicContainerDataId);
                }
            }
        }

        past_data = `${past_data}`
        // Remove the quotation marks and newline character
        past_data = past_data.replaceAll(/["]/g, '').replaceAll(/\n/g, '');

        if (past_data != '') {
            pastPlanStringToSaveUpdate = past_data + "" + pastPlanStringToSave;
            pastTasksSet.add(past_data)
        } else if (past_data === '') {
            pastPlanStringToSaveUpdate = pastPlanStringToSave;
        }

        let inputString = pastPlanStringToSaveUpdate;

        let outputString = inputString.replace(/(2025-\d{2}-\d{2})/g, '\n$1');
        outputString = outputString.trim();


        // Log the result

        pastPlanStringToSaveUpdate = outputString;

        pastPlansTextArea.innerHTML = pastPlanStringToSaveUpdate
        pastPlansTextArea.value = pastPlanStringToSaveUpdate

        pastPlanStringToSave = `${pastPlansTextArea.innerHTML}`

        var filePath = document.getElementById('load').value;

        // Extract the file name from the path
        var loadedFileName = filePath.split('\\').pop().split('.')[0];
        document.getElementById('file-name').value = loadedFileName;

        sortPlannedTodos(plannedTodos);

        updateCurrentWeekSchedule(false);
    };
    reader.readAsText(file);
}

// readFile(file) (end)

function load_func(delimiter) {

    if (dateCollection[0].value !== undefined && plannedTodos.length > 0) {
        clearAll();
    }

    var file = document.getElementById("load").files[0];

    readFile(file);

    };
