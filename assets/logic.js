var todayDate = moment().format("LLL");
var hour = moment(moment().format("hh A"), "hh a");

$("#currentDay").append(todayDate);

for (i = 0; i < 10; i++) {
  var description = $($(".description")[i]);
  var hourEl = moment($(".hour")[i].innerHTML.trim(), "hh a");
  var diff = hour.diff(hourEl);

  if (diff === 0) {
    description.addClass("present");
  } else if (diff < 0) {
    description.addClass("future");
  } else if (diff > 0) {
    description.addClass("past");
  }
}

$(".saveBtn").on("click", function () {
  var input = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  if (input === "") {
    alert("You must enter something before saving!");
  } else {
    localStorage.setItem(time, input);
  }
});

window.onload = function () {
  for (i = 0; i < 10; i++) {
    var timeBlock = $(".time-block")[i];
    var timeBlockId = $(timeBlock).attr("id");
    var description = $(timeBlock).find(".description");
    var timeBlockReturn = localStorage.getItem(timeBlockId);
    description.val(timeBlockReturn);
  }
};
