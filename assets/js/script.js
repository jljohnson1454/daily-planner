// var taskRowEl = $('.container-fluid').append('<div class="row"></div>');
// var taskUlEl = $('.row').append('<ul class = "list-group"></ul>');
// var taskLiEl = $(".list-group").append('<li class="list-group-item"></li>');
// var saveButtonEl = $('.container-fluid').append('<button id="save" class="saveBtn">Save</button>');

// var timeofDay = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

var timeofDay = [
{
    military: "9",
    hour: "9",
    meridiem:"am"},
{
    military: "10",
    hour:"10",
    meridiem:"am"},
{
    military: "11",
    hour:"11",
    meridiem:"am"
},
{
    military: "12",
    hour:"12",
    meridiem:"pm"
},
{
    military: "13",
    hour:"1",
    meridiem:"pm"},
{
    military: "14",
    hour:"2",
    meridiem:"pm"},
{
    military: "15",
    hour:"3",
    meridiem:"pm"
},
{
    military: "16",
    hour:"4",
    meridiem:"pm"
},
{
    military: "17",
    hour:"5",
    meridiem:"pm"
}]

// Current time

    var currentDayEl = $('#currentDay.lead');
    var today = moment().format('LLL');

    $(currentDayEl).html(today);

// Time Blocks
    for (var i = 0; i < 9; i++) {

        $(".container-fluid").append(
            `<div class ="row">
                <div id=time class="hour col-1 m-0 p-0 border border-dark border-right-0 rounded-left">
                    ${timeofDay[i].hour}
                </div>
                <div id=textArea class="col-10 p-0 border border-dark"></div>
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


// Past, Present, Future color coding
if(timeofDay < moment().format("HH")) {
    $('#textArea').addClass("past");
} else if(timeofDay > moment().format("HH")){
    $('#textArea').addClass("future");
} else if(timeofDay === moment().format("HH")) {
    $('#textArea').addClass("future");
}


// Load tasks from local storage
// var loadTasks = function() {
    // localStorage.getItem("timeofDay")
//}


// Save button in local storage
$(".saveBtn").on("click", function(){

    var textValue = $(this).siblings("#textArea").val();
    var timeValue = $(this).siblings("#textArea").attr("hour");

    localStorage.setItem(timeValue, textValue)

})

localStorage.getItem(11)


    var saveTasks = function() {
    localStorage.setItem("timeofDay",)
}

function loadStorage() {
    var array = [9,10,11,12,1,2,3,4,5];
    array.forEach(function(e){
        $("textarea[hour='" + e + "']").val(localStorage.getItem(e));
    })
}



loadStorage();