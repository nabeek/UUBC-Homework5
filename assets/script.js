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

// Save text entered into an input on clicking save button

$(".saveBtn").click(function() {
    event.preventDefault();

    var hourValue = $(this).attr("data-value")
    var eventEntered = $(this).prev().val();

    localStorage.setItem(hourValue, JSON.stringify(eventEntered));

    for (var i = 0; i < localStorage.length; i++) {
        
        let hour = i + 9;
        console.log(localStorage.getItem(hour))

        // pick up here trying to use hour to set text

    }
});


// $(`*[data-hour="${hourValue}"]`).text()