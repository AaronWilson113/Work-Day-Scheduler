//Selecting TimeBlock Variables
var timeBlock = $(".time-block")
var saveBtn = $(".saveBtn");
var timeContainer = $(".container")


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



usePlanner();



