//Selecting TimeBlock Variables
var timeBlock = $(".time-block")
var saveBtn = $(".saveBtn");
var timeContainer = $(".container")

//moment.js to display current day
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


//on click event to save contents of timeblocks to local storage
saveBtn.on("click", function() {

   
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    
    localStorage.setItem(time, plan);
});

//function to call local storage info back to relavant empty block upon refresh
function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}

//function to set the color of block depending on hour
function hourTracker() {
   
    var currentHour = moment().hour(); 

  
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

      
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
 


usePlanner();
hourTracker();


