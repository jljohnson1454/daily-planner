
// Created an array to hold both military and regular time
var timeofDay = [
{
    id: "9",
    military: "09",
    hour: "9am",
},
{
    id: "10",
    military: "10",
    hour:"10am",
    
},
{   
    id:"11",
    military: "11",
    hour:"11am",
    
},
{
    id: "12",
    military: "12",
    hour:"12pm",
    
},
{   
    id: "1",
    military: "13",
    hour:"1pm",
},
{
    id: "2",
    military: "14",
    hour:"2pm",
},
{
    id: "3",
    military: "15",
    hour:"3pm",
    
},
{   
    id: "4",
    military: "16",
    hour:"4pm",
    
},
{   
    id: "5",
    military: "17",
    hour:"5pm",

}]

// Current time

    var currentDayEl = $('#currentDay');
    var today = moment().format('LLL');

    $(currentDayEl).html(today);

// Function to create time blocks
var timeBlocks = function() {
        for (var i = 0; i < 9; i++) {

                $(".container-fluid").append(
                    `<div class ="row">
                        <div id=time class="hour col-1 m-0 p-0 border border-dark border-right-0 border-left-0">
                            ${timeofDay[i].hour}
                        </div>
                        <textarea id=${timeofDay[i].military} hour=${timeofDay[i].hour} class="textArea col-10 p-0 border border-dark"></textarea>
                        <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
                    </div>`)
        }
        saveTasks();
     }


// Checking times for Past, Present, and Future events
$(document).ready(function(){

    // Loop through each div element with the textarea
    $("textarea").each(function(){

        
        if($(this).attr("id") == moment().format('HH')) {
                    $(this).addClass("present")
            } else if($(this).attr("id") < moment().format('HH')){
                    $(this).addClass("past")
            } else if($(this).attr("id") > moment().format('HH')) {
                    $(this).addClass("future")
        }    
    });
});

var saveTasks = function() {


$(".saveBtn").on("click", function(){

    console.log("string")
    var textValue = $(this).siblings("textarea").val();
    var timeValue = $(this).siblings("textarea").attr("hour");

    localStorage.setItem(timeValue, textValue);

})
}

function loadStorage() {
    var array = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];
    array.forEach(function(e){
        $("textarea[hour='" + e + "']").val(localStorage.getItem(e));
    })
}

timeBlocks();
loadStorage();