// var taskRowEl = $('.container-fluid').append('<div class="row"></div>');
// var taskUlEl = $('.row').append('<ul class = "list-group"></ul>');
// var taskLiEl = $(".list-group").append('<li class="list-group-item"></li>');
// var saveButtonEl = $('.container-fluid').append('<button id="save" class="saveBtn">Save</button>');

// $(".container-fluid").append(
//     `<div class ="row">
//         <div class="col-2 p-0">
//         Time
//         </div>
//         <div class="col-8 p-0">
//             <ul class="list-group">
//                 <li class="list-group-item p-0">Blah</li>
//             </ul>           
//         </div>
//         <div class="saveBtn col-2 p-0">
//         </div>
//     </div>`)

for (var i = 1; i < 9; i++) {
    $(".container-fluid").append(
        `<div class ="row">
            <div class="col-2 p-0">
            Time
            </div>
            <div class="col-8 p-0">
                <ul class="list-group">
                    <li class="list-group-item p-0">Blah</li>
                </ul>           
            </div>
            <div class="saveBtn col-2 p-0">
            </div>
        </div>`)
}

var currentDay = function() {
    var currentDayEl = $('#currentDay.lead');
    var today = moment().format('LLL');

    $(currentDayEl).html(today);
    };


var taskList = function () {


}



    // Create 8 time blocks for standard business hours 9am-5pm

    
    // Navigate the DOM (this) 



    // Each time block is color-coded to indicate whether it is in the past, present, or future

    //When I click into a time block, I can enter text(event)

    //When I click the save button, the text for that event is saved in local storage

    //When I refresh the page, the saved events still exist

























currentDay();