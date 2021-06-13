var todayDate = moment().format("MMM Do YY");

var currentTime = moment().format("LTS");


$(document).ready(function() {
    $(".saveBtn").on("click", function(){
        var description = $(".description").val;

        console.log(description)


        var time = $(".hour").get[0];

        console.log(time);

        localStorage.setItem(time, "userInput")

    })
});

