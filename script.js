// Create rows
// Create buttons
// Add event listeners
// Get reference to existing HTML element
// Get current time
// Display current date
// Store schedule notes in local storage
// Get schedule notes from local storage

// buttons.addEventListener('click', storeNotes);

function displayDate() {
    var currentDate = moment().format("MMM Do YY");
    $("#currentDay").text(currentDate);
}
displayDate();

function renderRows() {
    // get current time
    // get stored notes
    // render rows with colors and notes
}

var displayHour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

for (i = 9; i < 18; i++) {
    $(".container").append(`
    <div id = "hour-${i}" class = "row time-block">
    <div class = "col-md-1 hour">${displayHour[i-9]}</div>
    <textarea class = "col-md-10 description"/>
    <button class = "button saveBtn col-md-1">Save</button>
    </div>
    `)
if (moment().format("H")==i) {
    $(`#hour-${i}`).addClass("present");
} else if (moment().format("H")>i) {
    $(`#hour-${i}`).addClass("past");
} else {
    $(`#hour-${i}`).addClass("future");
}
}
// Add onclick on save button to save to loacal storage
// Write a single onclick for saveBtn
// Inside onlick, set local storage
// Get local storage

