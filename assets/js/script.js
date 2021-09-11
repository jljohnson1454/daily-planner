// var taskRowEl = $('.container-fluid').append('<div class="row"></div>');
// var taskUlEl = $('.row').append('<ul class = "list-group"></ul>');
// var taskLiEl = $(".list-group").append('<li class="list-group-item"></li>');
// var saveButtonEl = $('.container-fluid').append('<button id="save" class="saveBtn">Save</button>');

var timeofDay = ["9AM","10AM","11AM","12PM", "1PM", "2PM", "3PM", "4PM", "5PM"] 

// Current time
var currentDay = function() {
    var currentDayEl = $('#currentDay.lead');
    var today = moment().format('LLL');

    $(currentDayEl).html(today);
    };

// Time Blocks
    for (var i = 1; i < 9; i++) {

        $(".container-fluid").append(
            `<div class ="row">
                <div id=time class="col-2 m-0 p-0 border border-dark border-right-0">
                    ${timeofDay[i]}
                </div>
                <div class="col-8 p-0 border border-dark">
                    <ul class="list-group">
                        <li class="list-group-item p-0">Blah</li>
                    </ul>           
                </div>
                <div class="saveBtn col-2 p-0 border border-dark">
                <span class="oi oi-hard-drive"></span>
                </div>
            </div>`)      
}


//Edit Text in Time Blocks

$(".list-group").on("click", "li", function() {
    var text = $(this)
      .text()
      .trim();
      var textInput = $("<textarea>")
      .addClass("form-control")
      .val(text);
      $(this).replaceWith(textInput);
      textInput.trigger("focus");
      });

$(".list-group").on("blur", "textarea", function() {
    var text=$(this)
        .val()
        .trim();

    var status = $(this)
        .closest(".list-group")
        .attr("id")
        .replace("list-", "");
    
    var index = $(this)
        .closest(".list-group-item")
        .index();
})


// Load tasks from local storage
// var loadTasks = function() {
    // localStorage.getItem("timeofDay")
//}


// Save button in local storage
$(".saveBtn").on("click", function(){
    
})

// var saveTasks = function() {
    //localStorage.setItem("timeofDay")
//}





    // Create 8 time blocks for standard business hours 9am-5pm

    
    // Navigate the DOM (this) 



    // Each time block is color-coded to indicate whether it is in the past, present, or future

    //When I click into a time block, I can enter text(event)

    //When I click the save button, the text for that event is saved in local storage

    //When I refresh the page, the saved events still exist

