displayEvents() || [];        // Displays events in local storage

// Set current date in header

$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Change color of inputs based on current time

const currentHour = moment().hour();
let plannerInput = $(".row input[type=text]");

$(plannerInput).each(function() {
       
    let plannerInputNum = parseInt($(this).attr("data-hour"));

    if (plannerInputNum < currentHour) {
        $(this).addClass("past")
    }

    else if (plannerInputNum == currentHour) {
        $(this).addClass("present")
    }

    else if (plannerInputNum > currentHour) {
        $(this).addClass("future")
    }

});

// Store text entered into an input when clicking save button

$(".saveBtn").click(function() {
    event.preventDefault();

    var hourValue = $(this).attr("data-value")
    var eventEntered = $(this).prev().val();

    localStorage.setItem(hourValue, JSON.stringify(eventEntered));
});


// Paste events in local storage to correlated hour-block

const keys = Object.keys(localStorage);
keys.forEach(displayEvents);

function displayEvents(item) {
    $(`*[data-hour="${item}"]`).val(JSON.parse(localStorage.getItem(`${item}`)));
};


// Function to clear schedule

$("#clearSchedule").click(function() {
    localStorage.clear();
    window.location.assign("./index.html");
});