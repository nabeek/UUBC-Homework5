displayEvents();        // Displays events in local storage

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

function displayEvents() {

    for (var i = 0; i < localStorage.length; i++) {
        let hour = i + 9;
        console.log(localStorage.getItem(`${hour}`))
        $(`*[data-hour="${hour}"]`).val(JSON.parse(localStorage.getItem(`${hour}`)));
    };
};
