//Defining TimeBlock Variables
var timeBlock = $(".time-block")
var saveBtn  = $(".savebtn");
var timeContainer = $(".container")

//on click event to save contents of timeblocks to local storage

saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
    
});