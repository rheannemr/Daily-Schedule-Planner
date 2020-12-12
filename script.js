// Create rows
// Create buttons
// Add event listeners
// Get reference to existing HTML element
// Get current time
// Display current date
// Store schedule notes in local storage
// Get schedule notes from local storage

function displayDate() {
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
}
displayDate();

var displayHour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

for (i = 9; i < 18; i++) {
    $(".container").append(`
    <div id = "hour-${i}" class = "row time-block">
    <div class = "col-md-1 hour">${displayHour[i - 9]}</div>
    <textarea class = "col-md-10 description"/>
    <button class = "button saveBtn col-md-1">Save</button>
    </div>
    `)

    if (moment().format("H") == i) {
        $(`#hour-${i}`).addClass("present");
    } else if (moment().format("H") > i) {
        $(`#hour-${i}`).addClass("past");
    } else {
        $(`#hour-${i}`).addClass("future");
    }
}

$(".button").on('click', function() {
    var key = $(this).attr("hour-${i}")
    var value = $(this).siblings('textarea').val(); 
    localStorage.setItem(key, JSON.stringify(value));

});


// Add onclick on save button to save to local storage
// Write a single onclick for saveBtn
// Inside onlick, set local storage
// Get local storage