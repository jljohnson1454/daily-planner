// var taskRowEl = $('.container-fluid').append('<div class="row"></div>');
// var taskUlEl = $('.row').append('<ul class = "list-group"></ul>');
// var taskLiEl = $(".list-group").append('<li class="list-group-item"></li>');
// var saveButtonEl = $('.container-fluid').append('<button id="save" class="saveBtn">Save</button>');

var timeofDay = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

// var timeofDay = [
// {
//     hour: "9",
//     meridiem:"am"},
// {
//     hour:"10",
//     meridiem:"am"},
// {
//     hour:"11",
//     meridiem:"am"
// },
// {
//     hour:"12",
//     meridiem:"pm"
// },
// {
//     hour:"1",
//     meridiem:"pm"},
// {
//     hour:"2",
//     meridiem:"pm"},
// {
//     hour:"3",
//     meridiem:"pm"
// },
// {
//     hour:"4",
//     meridiem:"pm"
// },
// {
//     hour:"5",
//     meridiem:"pm"
// }]

// Current time

    var currentDayEl = $('#currentDay.lead');
    var today = moment().format('LLL');

    $(currentDayEl).html(today);

// Time Blocks
    for (var i = 1; i < 9; i++) {

        $(".container-fluid").append(
            `<div class ="row time-block">
                <div id=time class="col-1 m-0 p-0 border border-dark border-right-0">
                    ${timeofDay[i]}
                </div>
                <div id=textArea class="col-10 p-0 border border-dark">         
                </div>
                <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
            </div>`)    
        }


//Edit Text in Time Blocks

$("div").on("click", function(e) {
    if(e.target.getAttribute('id') === 'textArea'){
      var textInput = $("<textarea>")
      .addClass("col-md-10 description")
      $(e.target).replaceWith(textInput);
      textInput.trigger("focus");
    }

      });

$(".list-group").on("blur", "textarea", function() {
    text=$(this)
        .val()
        .trim();
})

// Past,Present, Future color coding
if(timeofDay[i] < moment().format("HH")) {
    $('#time').attr(".past");
} else if(timeofDay[i] > moment().format("HH")){
    $('#time').attr(".future");
} else if(timeofDay[i] === moment().format("HH")) {
    $('#time').attr(".future");
}


// Load tasks from local storage
// var loadTasks = function() {
    // localStorage.getItem("timeofDay")
//}


// Save button in local storage
$(".saveBtn").on("click", function(){
    saveTasks();

    var description = $(this).siblings[".description"].val();
})

    var saveTasks = function() {
    localStorage.setItem("timeofDay",)
}


    // Navigate the DOM (this) 



    // Each time block is color-coded to indicate whether it is in the past, present, or future

    //When I click the save button, the text for that event is saved in local storage

    //When I refresh the page, the saved events still exist

