// Display current day and time
function displayDate() {
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
}
displayDate();

// Array of hours displayed on schedule
var displayHour = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// Display columns/rows with text area and save button
for (i = 9; i < 18; i++) {
    $(".container").append(`
    <div id = "hour-${i}" class = "row time-block">
    <div class = "col-md-1 hour">${displayHour[i - 9]}</div>
    <textarea class = "col-md-10 description"/>
    <button class = "button saveBtn col-md-1">Save</button>
    </div>
    `)

// Rows are color coordinated and separated by present, past, and future hours
    if (moment().format("H") == i) {
        $(`#hour-${i}`).addClass("present");
    } else if (moment().format("H") > i) {
        $(`#hour-${i}`).addClass("past");
    } else {
        $(`#hour-${i}`).addClass("future");
    }
}

// Save notes to local storage
$(".button").on('click', function() {
    var key = displayHour;
    var value = $(this).siblings('textarea').val(); 
    localStorage.setItem(key, JSON.stringify(value));

});