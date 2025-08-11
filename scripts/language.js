  var flagDiv = document.querySelector(".flag-div");

  const languageFlagImage = {
    en: "us-uk-flag-small.png",
    sv: "sweden-flag-icon-small.png",
  }

  const dynamicLanguageImage = document.querySelector(".flag-div");
  const fetchLanguageImage = document.querySelector(".flag-div").innerHTML;

   var languageSelectId = document.getElementById("select-language");
  
   var selectedLanguage;
  
   // Select the dropdown element
   var languageSelectElement = document.querySelector('.language-selector');
   var languageSelectVariable;
   var languageVariable = 'sv';
   sessionStorage.setItem("languageVariable", languageVariable);
   var selectedValue;
  
    languageSelectElement.value = 'sv'
  
    selectedLanguage = sessionStorage.getItem("languageVariable");
  
    function changeFlagImage() {
      dynamicLanguageImage.innerHTML =
      fetchLanguageImage +
      `<img class="flag-img" src="./media/img/${languageFlagImage[selectedLanguage]}" alt="language flag image | https://uxwing.com/tag/country-flag-icons/">`
    };

  changeFlagImage();

  //Översättning (navbar)

  const navbarTodo = {
    sv: "Todos",
    en: "Todos",
  }

  const navbarWeek = {
    sv: "Vecka",
    en: "Week",
  }

  const navbarPlan = {
    sv: "Plan",
    en: "Plan",
  }

  const navbarTimer = {
    sv: "Timer",
    en: "Timer",
  }

  const navbarAbout = {
    sv: "Om",
    en: "About",
  }

  const monDayAbb = {
    sv: "Mån",
    en: "Mon",
  }
  const tueDayAbb = {
    sv: "Tis",
    en: "Tue",
  }
  const wedDayAbb = {
    sv: "Ons",
    en: "Wed",
  }
  const thuDayAbb = {
    sv: "Tor",
    en: "Thu",
  }
  const friDayAbb = {
    sv: "Fre",
    en: "Fri",
  }
  const satDayAbb = {
    sv: "Lör",
    en: "Sat",
  }
  const sunDayAbb = {
    sv: "Sön",
    en: "Sun",
  }

  // Get the current day of the week (0 = Sunday, 1 = Monday, ...)
  var todaysWeekdayAbbNr = new Date().getDay();

  // Get the image element by its ID
  var dailyAbbreviation;

function getTodaysDayAbbreviation(todaysWeekdayAbbNr) {

  if (todaysWeekdayAbbNr === 0) {
    dailyAbbreviation = sunDayAbb[selectedLanguage];
  }
  else if (todaysWeekdayAbbNr === 1) {
    dailyAbbreviation = monDayAbb[selectedLanguage];
  }
  else if (todaysWeekdayAbbNr === 2) {
    dailyAbbreviation = tueDayAbb[selectedLanguage];
  }
  else if (todaysWeekdayAbbNr === 3) {
    dailyAbbreviation = wedDayAbb[selectedLanguage];
  }
  else if (todaysWeekdayAbbNr === 4) {
    dailyAbbreviation = thuDayAbb[selectedLanguage];
  }
  else if (todaysWeekdayAbbNr === 5) {
    dailyAbbreviation = friDayAbb[selectedLanguage];
  }
  else if (todaysWeekdayAbbNr === 6) {
    dailyAbbreviation = satDayAbb[selectedLanguage];
  }
  return dailyAbbreviation;
}

// Översättning Top3 Todos

const top3Todos = {
  sv: `Todos - Top3`,
  en: `Todos - Top3`,
}

const placeholderTop3Text = {
  sv: `Lägg till text...`,
  en: `Add todo text...`,
}

const top3Label = {
  sv: `i:`,
  en: `Apply to:`,
}

const addButton2 = {
  sv: `Lägg till 📝`,
  en: `Add Todo 📝`,
}

const appInfo = {
  sv: `Todos`,
  en: `Todos`,
}

var appInfoWeek = {
  sv: `Vecka`,
  en: `Week`,
}

const appInfoFuture = {
  sv: `Plan`,
  en: `Future`,
}


const infoBullets = {
  sv: `<ol>
      <li><b>Återställ:</b> &nbsp Tryck "Start Reset" (applikationen startas om).</li><br>
      <li><b>Lägg till:</b> &nbsp Skriv text &nbsp &nbsp → &nbsp &nbsp tryck "Lägg till" ("Top3 list" ska stå i rullisten).</li><br>
      <li><b>Ersätt: </b> &nbsp Skriv text &nbsp &nbsp → &nbsp &nbsp Välj "#" (att ersätta) i rullisten &nbsp &nbsp → &nbsp &nbsp tryck "Lägg till".</li>
      </ol>`,
  en: `<ol>
      <li><b>Reset:</b> &nbsp Press "Start Reset" (application reactivates).</li><br>
      <li><b>Add:</b> &nbsp Write a todo text &nbsp &nbsp → &nbsp &nbsp press "Add Todo" (ensure "Top3 list" is selected in rolldown).</li><br>
      <li><b>Replace: </b> &nbsp Write a new todo text &nbsp &nbsp → &nbsp &nbsp select "#" (to replace) in rolldown &nbsp &nbsp → &nbsp &nbsp press "Add Todo".</li>
      </ol>`,
  }

// Översättning (veckoschema)
// week schedule

const weekHeading = {
  sv: `Veckoschema`,
  en: `Week schedule`,
}

const todosPDesc = {
  sv: `"Lägg till" top3 todos:`,
  en: `Add top3 todos:`,
}

const weekPDesc = {
  sv: `Lägg till uppgifter (eller "Hämta fil") i avsnitt "Framtidsplaner". <br>Planeringen presenteras i "veckoschema" (nedan):`,
  en: `Add tasks (or "Load File") in the "Future Plans" section. <br>The plan is presented in the "week schedule" (below):`,
}

const goFuturePlans = {
  sv: `Lägg till uppgifter i "Framtidsplaner",`,
  en: `Go to "Future Plans" (to add tasks)`,
}

const goFutureNavbar = {
  sv: `Scrolla ner eller klicka "Plan" (i navbar)`,
  en: `Scroll down or click "Future" (navbar)`,
}

const monWeekSchedule = {
  sv: `Mån`,
  en: `Mon`,
}
const tueWeekSchedule = {
  sv: `Tis`,
  en: `Tue`,
}
const wedWeekSchedule = {
  sv: `Ons`,
  en: `Wed`,
}
const thuWeekSchedule = {
  sv: `Tor`,
  en: `Thu`,
}
const friWeekSchedule = {
  sv: `Fre`,
  en: `Fri`,
}
const satWeekSchedule = {
  sv: `Lör`,
  en: `Sat`,
}
const sunWeekSchedule = {
  sv: `Sön`,
  en: `Sun`,
}
const currentTimeZone = {
  sv: `Aktuell tidszon: Central European Standard Time (CET)`,
  en: `Current Time Zone: Central European Standard Time (CET)`,
}

// Översättning (Future plans)

const futureHeading = {
  sv: `Framtidsplaner`,
  en: `Future Plans`,
}

const futureRememberSave = {
  sv: `"Lägg till" uppgifter eller "Hämta fil" (planering)<br> - Kom ihåg att spara!`,
  en: `"Add Task" or "Load File" (plan)<br> - Remember to save!`,
}

const futureDesc = {
  sv: `Hantera <u id="current-plan-words">Framtidsplaner</u> och visa <u id="past-tasks-words">Tidigare händelser</u>:
    <ul>
      <li id="add-list">Lägg till uppgift / Ladda upp fil (Schema).</li>
        <ul class="bullet-point-size-two">
          <li>Lägg till tider (i "Text", sorteras med format: tt:mm)</li>
          <li>Lägg till återkommande uppgifter (checka i)
              <ul>
                <li>för veckodag,</li>
                <li>veckor,</li>
                <li>månad,</li>
                <li>år,</li>
                <li>Samt: antal dagars varaktighet</li>
              </ul>
          </li>
          <li>Ta bort tillagda uppgifter via färg-knappen.</li>
          <li>Lägg till (och ta bort) en ny uppgift, om "Aktuell plan" inte uppdateras korrekt.</li>
          <li>Utförda (ej återkommande) uppgifter hamnar i "Tidigare händelser".</li>
        </ul>
      <li id="save-list">Spara fil (Schema).</li>
      <li id="dl-list">Ladda ner fil (Schema).</li>
      <li id="edit-list">Redigera schema (i tabell).</li>
      <li id="copy-clear-list">Kopiera/rensa (tidigare händelser).</li>
    </ul>
  `,
  en: `Handle <u id="current-plan-words">"Future Plans"</u> and watch <u id="past-tasks-words">Past tasks</u>:
    <ul>
      <li id="add-list">Add Task / Upload File (Schedule).</li>
        <ul class="bullet-point-size-two">
          <li>Add times (in "Task", sorted with format: hh:mm)</li>
          <li>Add recurring tasks (use checkbox)
              <ul>
                <li>for day of week,</li>
                <li>weeks,</li>
                <li>month,</li>
                <li>year,</li>
                <li>Together with: number of days duration</li>
              </ul>
          </li>
          <li>Remove added tasks through the color button.</li>
          <li>Add (and remove) a new task, if the "Current Plan" doesn't update correctly.</li>
          <li>Non-recurring tasks in the past end up in "Past Tasks."</li>
        </ul>
      <li id="save-list">Save file (Schedule).</li>
      <li id="dl-list">Download file (Schedule).</li>
      <li id="edit-list">Edit schedule (in table).</li>
      <li id="copy-clear-list">Copy/clear (past tasks).</li>
    </ul>
  `,
}

const addTaskSpan = {
  sv: 'Lägg till (nedan)',
  en: 'Add Task (below)',
}

const addDateLabel = {
  sv: 'Datum',
  en: 'Date',
}

const addTodoLabel = {
  sv: 'Text',
  en: 'Task',
}

const placeholderScheduleTask = {
  sv: `Lägg till text...`,
  en: `Add task text...`,
}

const addColorLabel = {
  sv: 'Färg',
  en: 'Color',
}

const grayPicker = {
  sv: '-',
  en: '-',
}
const yellowPicker = {
  sv: 'Gul',
  en: 'Yellow',
}
const greenPicker = {
  sv: 'Grön',
  en: 'Green',
}
const bluePicker = {
  sv: 'Blå',
  en: 'Blue',
}
const purplePicker = {
  sv: 'Lila',
  en: 'Purple',
}
const redPicker = {
  sv: 'Röd',
  en: 'Red',
}

const recHeader = {
  sv: 'Återkommande 🔁',
  en: 'Recurring Task 🔁',
}

const periodicityHeader = {
  sv: 'Intervall',
  en: 'Periodicity',
}

const periodDay = {
  sv: 'Dag-ar (per vecka)',
  en: 'Day-s (per week)',
}
const periodWeek = {
  sv: 'Vecka',
  en: 'Week',
}
const periodMonth = {
  sv: 'Månad',
  en: 'Month',
}
const periodYear = {
  sv: 'År',
  en: 'Year',
}

const dayChoices = {
  sv: 'Dagligen:',
  en: 'Day choices:',
}
const selectDays = {
  sv: 'Välj dagar &nbsp [D]',
  en: 'Select days &nbsp [D]',
}
const selectDuration = {
  sv: 'Varaktighet (dagar) &nbsp [#D]',
  en: 'Duration (days) &nbsp [#D]',
}

const recMon = {
  sv: 'Mån',
  en: 'Mon',
}
const recTue = {
  sv: 'Tis',
  en: 'Tue',
}
const recWed = {
  sv: 'Ons',
  en: 'Wed',
}
const recThu = {
  sv: 'Tor',
  en: 'Thu',
}
const recFri = {
  sv: 'Fre',
  en: 'Fri',
}
const recSat = {
  sv: 'Lör',
  en: 'Sat',
}
const recSun = {
  sv: 'Sön',
  en: 'Sun',
}

const eventDurationDay = {
  sv: 'Varaktighet (dagar)',
  en: 'Event duration (days):',
}
const eachWeek = {
  sv: 'Varje vecka',
  en: 'Every week',
}

const eventDurationWeek = {
  sv: 'Varaktighet (dagar)',
  en: 'Event duration (days):',
}
const eventDurationMonth = {
  sv: 'Varaktighet (dagar)',
  en: 'Event duration (days):',
}
const eventDurationYear = {
  sv: 'Varaktighet (dagar)',
  en: 'Event duration (days):',
}

const recEvery = {
  sv: 'Varaktighet (dagar)',
  en: 'Event duration (days):',
}
const recWeek = {
  sv: 'vecka',
  en: 'week',
}
const weekHeader = {
  sv: 'Veckovis:',
  en: 'Weekly choices:',
}
const monthHeader = {
  sv: 'Månadsvis:',
  en: 'Monthly:',
}
const yearHeader = {
  sv: 'Årligen:',
  en: 'Yearly:',
}
const addTaskToScheduleButton = {
  sv: 'Lägg till 📅',
  en: 'Add Task 📅',
}

// Edit current plan (in the table).

const currentPlanHeader = {
  sv: 'Aktuell plan',
  en: 'Current Plan',
}

const currentPlanDatePlaceholder = {
  sv: 'Datum...',
  en: 'Next date...',
}

const currentPlanTodoPlaceholder = {
  sv: 'Planerad uppg... (Lägg till)',
  en: 'Planned todo... (Add Task)',
}

const clearAllButtonTranslate = {
  sv: 'Rensa allt 🗑️',
  en: 'Clear All 🗑️',
}

const colorSwitcherHeading = {
  sv: 'Ändra färg:',
  en: 'Change color:',
}

const clearRowTranslation = {
  sv: 'Ta bort rad:',
  en: 'Clear row:',
}
const closePanelButtonTranslation = {
  sv: 'Spara val',
  en: 'Store Current',
}

// Load
const loadPlanHeading = {
  sv: 'Hämta schema (sparat)',
  en: 'Load Plan',
}
const loadFileButton = {
  sv: 'Hämta fil 🔄',
  en: 'Load File 🔄',
}

// Save
const savePlanHeading = {
  sv: 'Spara schema',
  en: 'Save Plan',
}
const saveFileName = {
  sv: 'Filnamn:',
  en: 'File Name:',
}
const downloadOpt1 = {
  sv: 'Nedladdning (Alt 1):',
  en: 'Download (option 1):',
}
const incompatibleDevices = {
  sv: 'Firefox, iOS-enheter (Apple-enheter)',
  en: 'Firefox, iOS devices',
}
const saveAsAnywhere = {
  sv: 'Spara som (välj) ⬇️',
  en: 'Save As (anywhere) ⬇️',
}

const downloadOpt2 = {
  sv: 'Nedladdning (Alt 2):',
  en: 'Download (option 2):',
}
const anyBrowserDl = {
  sv: 'Alla webbläsare (Firefox, Safari)',
  en: 'Any browser (Firefox, Safari)',
}
const saveToDownloads = {
  sv: 'Spara (hämtade filer) ⬇️',
  en: 'Save (to downloads) ⬇️',
}

// Copy/clear past tasks.
const pastTasks = {
  sv: 'Tidigare händelser',
  en: 'Past Tasks',
}

const copyOrClearPast = {
  sv: 'Kopiera eller töm (tidigare händelser)',
  en: 'Copy or clear (past tasks).',
}

const clearPastTasksButtonTranslate = {
  sv: 'Töm utfört 🗑️',
  en: 'Clear Past 🗑️',
}

// Timer
const timerLimit = {
  sv: 'Välj en tidsgräns:',
  en: 'Set a time limit:',
}
const hourList = {
  sv: 'timmar,',
  en: 'hours,',
}
const minutesList = {
  sv: 'minuter,',
  en: 'minutes,',
}
const secondsList = {
  sv: 'sekunder,',
  en: 'seconds,',
}
const tenthsList = {
  sv: 'tiondelar.',
  en: 'tenths.',
}
const timerHours = {
  sv: 'Timmar:',
  en: 'Hours:',
}
const timerMinutes = {
  sv: 'Minuter:',
  en: 'Minutes:',
}
const timerSeconds = {
  sv: 'Sekunder:',
  en: 'Seconds:',
}
const timerTenths = {
  sv: 'Tiondelar:',
  en: 'Tenths:',
}
const timerMode = {
  sv: 'Läge:',
  en: 'Mode:',
}
const countDown = {
  sv: 'Räkna ner',
  en: 'Countdown',
}
const countUp = {
  sv: 'Räkna upp',
  en: 'Count Up',
}
const timerTime = {
  sv: 'Tid:',
  en: 'Time:',
}

const triggerActionRelaxation = {
  sv: `Trigga aktivitet / avslappning`,
  en: `Trigger Action / Relaxation`,
}


// Om
const aboutHeading = {
  sv: 'Om',
  en: 'About',
}

const aboutName = {
  sv: `Namn: Filip Sjöstrand`,
  en: `Name: Filip Sjöstrand`,
}
const aboutYob = {
  sv: `Födelseår: 1985`,
  en: `Birthyear: 1985`,
}
const aboutPor = {
  sv: `Bostadsort: Växjö`,
  en: `Place of Residence: Växjö`,
}
const aboutContactInfo = {
  sv: `Kontakt: ⬇️`,
  en: `Contact: ⬇️`,
}
const filipDesc = {
  sv: `Konsult | Programmerare | Ingenjör | Läxhjälpare | Lagledare | Författare`,
  en: `Consultant | Programmer | Engineer | Homework Helper | Team Leader | Writer`,
}
const consultantButton = {
  sv: `Konsultande`,
  en: `Consulting`,
}
const employmentsButton = {
  sv: `Anställningar`,
  en: `Employments`,
}
const eduButton = {
  sv: `Utbildningar`,
  en: `Education`,
}
const refButton = {
  sv: `Referenser`,
  en: `References`,
}
const aboutIam = {
  sv: `Är`,
  en: `I am`,
}
const aboutIamOne = {
  sv: `Hjälpsam`,
  en: `Service-minded`,
}
const aboutIamTwo = {
  sv: `Analytisk`,
  en: `Analytical`,
}
const aboutIamThree = {
  sv: `Energiingenjör`,
  en: `Energy Engineer`,
}
const aboutIamFour = {
  sv: `Lösningsfokuserad`,
  en: `Solution-oriented`,
}
const aboutIamFive = {
  sv: `Programmeringskunnig.`,
  en: `Programmer`,
}
const aboutIWant = {
  sv: `Vill`,
  en: `I want to`,
}
const aboutIWantOne = {
  sv: `Göra gott`,
  en: `Do Good`,
}
const aboutIWantTwo = {
  sv: `Spara energi`,
  en: `Save energy`,
}
const aboutIWantThree = {
  sv: `Hitta glädje & enkelhet.`,
  en: `Find joy & simplicity.`,
}
const aboutICan = {
  sv: `Kan`,
  en: `I know how to`,
}
const aboutICanOne = {
  sv: `Blåställsarbete`,
  en: `Blue-collar work`,
}
const aboutICanTwo = {
  sv: `Omvandla`,
  en: `Transform`,
}
const aboutICanListOne = {
  sv: `text,`,
  en: `text,`,
}
const aboutICanListTwo = {
  sv: `siffror,`,
  en: `numbers,`,
}
const aboutICanListThree = {
  sv: `kod`,
  en: `code`,
}
const aboutICanListFour = {
  sv: `till praktisk nytta.`,
  en: `into practical use.`,
}
const iEnjoyDiv = {
  sv: `Gillar att dela kunskap, glädje och att lösa problem tillsammans med andra.`,
  en: `Appreciate sharing knowledge and joy while solving problems with others.`,
}
const aboutTools = {
  sv: `Verktyg:`,
  en: `Tools:`,
}
const aboutLanguages = {
  sv: `<u>Språk:</u>	  Svenska, Engelska, (Franska, Spanska)`,
  en: `<u>Languages:</u>	  Swedish, English, (French, Spanish)`,
}
const aboutDriving = {
  sv: `<u>Körkort:</u> 	A1 & B`,
  en: `<u>Driving license:</u> 	A1 & B`,
}
const aboutPhoto = {
  sv: `Foto: Pixabay (pexels.com)`,
  en: `Photo: Pixabay (pexels.com)`,
}

  // Översättning (Footer)

const footerContact = {
    en: `Contact`,
    sv: `Kontakt`,
  }

  const footerContactEmail = {
    en: `Send e-mail <i class="fa-solid fa-envelope"></i>`,
    sv: `Skicka e-post <i class="fa-solid fa-envelope"></i>`,
  }

// Formulär-rubrik (footer)
const footerFormTitle = {
  sv: `Kontaktformulär <i class="fa-solid fa-pencil"></i>`,
  en: `Contact Form <i class="fa-solid fa-pencil"></i>`,
}

const formTitle = {
  sv: "Kontaktformulär",
  en: "Contact Form",
}

const usernameLabel = {
  sv: "Namn",
  en: "Name",
}

const emailLabel = {
  sv: "E-post",
  en: "Email",
}

const messageLabel = {
  sv: "Meddelande",
  en: "Message",
}

const charCounterText = {
  sv: "Antal tecken (Nu/Max): 0/1000",
  en: "Characters (current/max): 0/1000",
}

const sendButtonText = {
  sv: "Skicka",
  en: "Send",
}

const usernamePlaceholder = {
  sv: "Uppge gärna namn...",
  en: "Please write name...",
}

const userEmailPlaceholder = {
  sv: "min.epost@domän.com...",
  en: "my.email@domain.com...",
}

const userSubjectPlaceholder = {
  sv: "Ämne...",
  en: "Subject...",
}

const userMessagePlaceholder = {
  sv: "(Skriv gärna något :)...",
  en: "(Please write something anything :)...",
}

    // _ _ _
      if (!selectedLanguage) {
        selectedLanguage = 'sv';
        runTranslation(selectedLanguage);
      }
    // _ _ _

        // Add a 'change' event listener to the dropdown
        languageSelectElement.addEventListener('change', function() {
            // Get the selected value
            selectedValue = languageSelectElement.value;

            // Perform some action based on the selected value
            if (selectedValue === 'sv') {
                // You selected Svenska
                selectedLanguage = 'sv';
                languageVariable = selectedLanguage;
                sessionStorage.setItem("languageVariable", languageVariable);
                languageSelectVariable = languageSelectElement.options[0].text
                runTranslation(selectedLanguage);
            } else if (selectedValue === 'en') {
                // You selected English
                selectedLanguage = 'en';
                languageVariable = selectedLanguage;
                sessionStorage.setItem("languageVariable", languageVariable);
                languageSelectVariable = languageSelectElement.options[1].text
                runTranslation(selectedLanguage);
            }
          });

        // runTranslation(selectedLanguage);
        function runTranslation(selectedLanguage) {
          
          // Navbar
          document.getElementById('top-todos').innerHTML = navbarTodo[selectedLanguage];
          document.getElementById('weekly-calendar').innerHTML = navbarWeek[selectedLanguage];
          document.getElementById('important-dates').innerHTML = navbarPlan[selectedLanguage];
          document.getElementById('timer').innerHTML = navbarTimer[selectedLanguage];
          document.getElementById('about-me').innerHTML = navbarAbout[selectedLanguage];
          document.querySelector('.info').innerHTML = infoBullets[selectedLanguage];
          
          document.getElementById('weekday-display').innerHTML = getTodaysDayAbbreviation(todaysWeekdayAbbNr);
          document.getElementById('week-display').innerHTML = appInfoWeek[selectedLanguage];

          document.querySelector('.add-button-v2').innerHTML = addButton2[selectedLanguage];
          document.getElementById('top3-label').innerHTML = top3Label[selectedLanguage];
          document.getElementById('input-box-v2').placeholder = placeholderTop3Text[selectedLanguage];
          document.getElementById('app-info').innerHTML = appInfo[selectedLanguage];
          document.getElementById('todos-heading').innerHTML = top3Todos[selectedLanguage];

          document.getElementById('todos-desc').innerHTML = todosPDesc[selectedLanguage];
          
          // Veckoschema
          document.getElementById('weekly-heading').innerHTML = weekHeading[selectedLanguage];
          document.getElementById('weekly-desc').innerHTML = weekPDesc[selectedLanguage];

          document.getElementById('go-future-plans').innerHTML = goFuturePlans[selectedLanguage];
          document.getElementById('go-future-navbar').innerHTML = goFutureNavbar[selectedLanguage];
          document.getElementById('rec-mon-day').innerHTML = monWeekSchedule[selectedLanguage];
          document.getElementById('rec-tue-day').innerHTML = tueWeekSchedule[selectedLanguage];
          document.getElementById('rec-wed-day').innerHTML = wedWeekSchedule[selectedLanguage];
          document.getElementById('rec-thu-day').innerHTML = thuWeekSchedule[selectedLanguage];
          document.getElementById('rec-fri-day').innerHTML = friWeekSchedule[selectedLanguage];
          document.getElementById('rec-sat-day').innerHTML = satWeekSchedule[selectedLanguage];
          document.getElementById('rec-sun-day').innerHTML = sunWeekSchedule[selectedLanguage];
          document.getElementById('current-time-zone').innerHTML = currentTimeZone[selectedLanguage];


          // Framtidsplaner
          document.getElementById('future-heading').innerHTML = futureHeading[selectedLanguage];
          document.getElementById('future-remember-save').innerHTML = futureRememberSave[selectedLanguage];
          document.getElementById('future-desc').innerHTML = futureDesc[selectedLanguage];
          document.getElementById('app-info-week').innerHTML = appInfoWeek[selectedLanguage];
          document.getElementById('app-info-future').innerHTML = appInfoFuture[selectedLanguage];

          document.getElementById('add-task-span').innerHTML = addTaskSpan[selectedLanguage];

          document.getElementById('add-date-label').innerHTML = addDateLabel[selectedLanguage];
          document.getElementById('add-todo-label').innerHTML = addTodoLabel[selectedLanguage];

          document.getElementById('add-todo-text').placeholder = placeholderScheduleTask[selectedLanguage];

          document.getElementById('add-color-label').innerHTML = addColorLabel[selectedLanguage];

          document.getElementById('gray-color').innerHTML = grayPicker[selectedLanguage];
          document.getElementById('yellow-color').innerHTML = yellowPicker[selectedLanguage];
          document.getElementById('green-color').innerHTML = greenPicker[selectedLanguage];
          document.getElementById('blue-color').innerHTML = bluePicker[selectedLanguage];
          document.getElementById('purple-color').innerHTML = purplePicker[selectedLanguage];
          document.getElementById('red-color').innerHTML = redPicker[selectedLanguage];

          document.getElementById('rec-text-span').innerHTML = recHeader[selectedLanguage];

          // Periodicity
          document.getElementById('periodicity-header').innerHTML = periodicityHeader[selectedLanguage];
          document.getElementById('day-period').innerHTML = periodDay[selectedLanguage];
          document.getElementById('week-period').innerHTML = periodWeek[selectedLanguage];
          document.getElementById('month-period').innerHTML = periodMonth[selectedLanguage];
          document.getElementById('year-period').innerHTML = periodYear[selectedLanguage];

          document.getElementById('day-choices').innerHTML = dayChoices[selectedLanguage];
          document.getElementById('select-days').innerHTML = selectDays[selectedLanguage];
          document.getElementById('select-duration').innerHTML = selectDuration[selectedLanguage];

          document.getElementById('mon-day').innerHTML = recMon[selectedLanguage];
          document.getElementById('tue-day').innerHTML = recTue[selectedLanguage];
          document.getElementById('wed-day').innerHTML = recWed[selectedLanguage];
          document.getElementById('thu-day').innerHTML = recThu[selectedLanguage];
          document.getElementById('fri-day').innerHTML = recFri[selectedLanguage];
          document.getElementById('sat-day').innerHTML = recSat[selectedLanguage];
          document.getElementById('sun-day').innerHTML = recSun[selectedLanguage];

          document.getElementById('event-duration-day').innerHTML = eventDurationDay[selectedLanguage];
          document.getElementById('every-week-label').innerHTML = eachWeek[selectedLanguage];

          document.getElementById('event-duration-week').innerHTML = eventDurationWeek[selectedLanguage];
          document.getElementById('event-duration-month').innerHTML = eventDurationMonth[selectedLanguage];
          document.getElementById('event-duration-year').innerHTML = eventDurationYear[selectedLanguage];

          document.getElementById('event-duration-year').innerHTML = recEvery[selectedLanguage];
          document.getElementById('week-intervall-weeks').innerHTML = recWeek[selectedLanguage];
          document.getElementById('week-header').innerHTML = weekHeader[selectedLanguage];
          document.getElementById('month-header').innerHTML = monthHeader[selectedLanguage];
          document.getElementById('year-header').innerHTML = yearHeader[selectedLanguage];

          document.getElementById('add-todo-button').innerHTML = addTaskToScheduleButton[selectedLanguage];

          // Current Plan
          document.getElementById('current-plan-text').innerHTML = currentPlanHeader[selectedLanguage];

          document.getElementById('todo-0-date').placeholder = currentPlanDatePlaceholder[selectedLanguage];
          document.getElementById('todo-0-text').placeholder = currentPlanTodoPlaceholder[selectedLanguage];
          document.getElementById('clear-all').innerHTML = clearAllButtonTranslate[selectedLanguage];

          document.getElementById('color-switcher-heading').innerHTML = colorSwitcherHeading[selectedLanguage];
          document.getElementById('clear-row').innerHTML = clearRowTranslation[selectedLanguage];
          document.getElementById('close-panel').innerHTML = closePanelButtonTranslation[selectedLanguage];

          // Load Plan
          document.getElementById('load-plan-heading').innerHTML = loadPlanHeading[selectedLanguage];
          document.getElementById('load-file-button').innerHTML = loadFileButton[selectedLanguage];

          // Save Plan
          document.getElementById('save-plan-heading').innerHTML = savePlanHeading[selectedLanguage];
          document.getElementById('file-name-label').innerHTML = saveFileName[selectedLanguage];
          document.getElementById('save-as-anywhere').innerHTML = saveAsAnywhere[selectedLanguage];
          document.getElementById('save-to-downloads').innerHTML = saveToDownloads[selectedLanguage];

          // Download
          document.getElementById('dl-1').innerHTML = downloadOpt1[selectedLanguage];
          document.getElementById('incompatible-devices').innerHTML = incompatibleDevices[selectedLanguage];
          document.getElementById('dl-2').innerHTML = downloadOpt2[selectedLanguage];
          document.getElementById('any-browser-dl').innerHTML = anyBrowserDl[selectedLanguage];

          // Past Tasks
          document.getElementById('past-tasks').innerHTML = pastTasks[selectedLanguage];
          document.getElementById('copy-or-clear-past').innerHTML = copyOrClearPast[selectedLanguage];
          document.getElementById('clear-past-tasks').innerHTML = clearPastTasksButtonTranslate[selectedLanguage];
          // document.getElementById('clear-app-data').innerHTML = clearAllAppDataButtonTranslate[selectedLanguage];


          // Timer
          document.getElementById('timer-limit').innerHTML = timerLimit[selectedLanguage];

          document.getElementById('hours-list').innerHTML = hourList[selectedLanguage];
          document.getElementById('minutes-list').innerHTML = minutesList[selectedLanguage];
          document.getElementById('seconds-list').innerHTML = secondsList[selectedLanguage];
          document.getElementById('tenths-list').innerHTML = tenthsList[selectedLanguage];

          document.getElementById('hours-label').innerHTML = timerHours[selectedLanguage];
          document.getElementById('minutes-label').innerHTML = timerMinutes[selectedLanguage];
          document.getElementById('seconds-label').innerHTML = timerSeconds[selectedLanguage];
          document.getElementById('tenths-label').innerHTML = timerTenths[selectedLanguage];
          document.getElementById('timer-mode').innerHTML = timerMode[selectedLanguage];

          document.getElementById('countdown').innerHTML = countDown[selectedLanguage];
          document.getElementById('countup').innerHTML = countUp[selectedLanguage];

          document.getElementById('timer-time').innerHTML = timerTime[selectedLanguage];

          document.getElementById('trigger-act').innerHTML = triggerActionRelaxation[selectedLanguage];


          // Om
          document.getElementById('about-heading').innerHTML = aboutHeading[selectedLanguage];

          document.getElementById('about-name').innerHTML = aboutName[selectedLanguage];
          document.getElementById('about-yob').innerHTML = aboutYob[selectedLanguage];
          document.getElementById('about-por').innerHTML = aboutPor[selectedLanguage];
          document.getElementById('about-contact-info').innerHTML = aboutContactInfo[selectedLanguage];
          document.getElementById('filip-desc').innerHTML = filipDesc[selectedLanguage];
          document.getElementById('consultant-button').innerHTML = consultantButton[selectedLanguage];
          document.getElementById('employment-button').innerHTML = employmentsButton[selectedLanguage];
          document.getElementById('edu-button').innerHTML = eduButton[selectedLanguage];
          document.getElementById('ref-button').innerHTML = refButton[selectedLanguage];
          document.getElementById('about-i-am').innerHTML = aboutIam[selectedLanguage];
          document.getElementById('about-is-li-1').innerHTML = aboutIamOne[selectedLanguage];
          document.getElementById('about-is-li-2').innerHTML = aboutIamTwo[selectedLanguage];
          document.getElementById('about-is-li-3').innerHTML = aboutIamThree[selectedLanguage];
          document.getElementById('about-is-li-4').innerHTML = aboutIamFour[selectedLanguage];
          document.getElementById('about-is-li-5').innerHTML = aboutIamFive[selectedLanguage];
          document.getElementById('about-i-want').innerHTML = aboutIWant[selectedLanguage];
          document.getElementById('about-want-li-1').innerHTML = aboutIWantOne[selectedLanguage];
          document.getElementById('about-want-li-2').innerHTML = aboutIWantTwo[selectedLanguage];
          document.getElementById('about-want-li-3').innerHTML = aboutIWantThree[selectedLanguage];
          document.getElementById('about-i-can').innerHTML = aboutICan[selectedLanguage];
          document.getElementById('about-can-li-1').innerHTML = aboutICanOne[selectedLanguage];
          document.getElementById('about-can-li-2').innerHTML = aboutICanTwo[selectedLanguage];
          document.getElementById('list-term-1').innerHTML = aboutICanListOne[selectedLanguage];
          document.getElementById('list-term-2').innerHTML = aboutICanListTwo[selectedLanguage];
          document.getElementById('list-term-3').innerHTML = aboutICanListThree[selectedLanguage];
          document.getElementById('list-term-4').innerHTML = aboutICanListFour[selectedLanguage];
          document.getElementById('i-like-div').innerHTML = iEnjoyDiv[selectedLanguage];
          document.getElementById('about-tools').innerHTML = aboutTools[selectedLanguage];
          document.getElementById('about-languages').innerHTML = aboutLanguages[selectedLanguage];
          document.getElementById('about-driving').innerHTML = aboutDriving[selectedLanguage];
          document.getElementById('about-photo').innerHTML = aboutPhoto[selectedLanguage];

          // Footer
          document.querySelector('.footer-contact h3').innerHTML = footerContact[selectedLanguage];
          document.querySelector('.footer-contact a').innerHTML = footerContactEmail[selectedLanguage];

          // Formulär-rubriker (text) [Översättning]
          document.getElementById('form-button').innerHTML = footerFormTitle[selectedLanguage];

          document.querySelector('.contact-form-title').innerHTML = formTitle[selectedLanguage];
          document.getElementById("name-label").innerHTML = usernameLabel[selectedLanguage];
          document.getElementById("email-label").innerHTML = emailLabel[selectedLanguage];
          document.getElementById("message-label").innerHTML = messageLabel[selectedLanguage];
          document.getElementById("char-counter").innerHTML = charCounterText[selectedLanguage];
          document.getElementById("send-button").innerHTML = sendButtonText[selectedLanguage];

          //Placeholders [Översättning]
          document.getElementById('user-name').placeholder = usernamePlaceholder[selectedLanguage];
          document.getElementById('user-email').placeholder = userEmailPlaceholder[selectedLanguage];
          document.getElementById('subject').placeholder = userSubjectPlaceholder[selectedLanguage];
          document.getElementById('user-message').placeholder = userMessagePlaceholder[selectedLanguage];

          changeFlagImage();
        }

runTranslation(selectedLanguage);



