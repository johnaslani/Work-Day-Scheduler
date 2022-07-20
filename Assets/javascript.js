$(document).ready(function () {
  // GLobal variable
  var record = $("#container");

  // handle displaying the day and date
  var today = moment().format("dddd, MMM Do");
  // $("currentDay").text(today.format("dddd, MMM Do"));
  $("#currentDay").text(today);

  var timeDisplayEl = $("#time-display");
  // handle displaying the time
  function displayTime() {
    var rightNow = moment().format("dddd, MMM DD");
    timeDisplayEl.text(rightNow);
  }

  // Get the local current hour
  var currentTime = moment().format("HH");
  console.log($(".saveBtn"));

  // Compare each hour of schedule against current hour and assign a class acccordingly.
  function setClass() {
    for (let i = 8; i < 18; i++) {
      var temp = $(`#${i}`);
      if (i < currentTime) temp.addClass("past");
      if (i > currentTime) temp.addClass("future");
      if (i === currentTime) temp.addClass("present");
      // Display Stored values
      temp.children(".description").val(localStorage.getItem(i));
    }
  }
  setClass();

  // Check the time every 5 minutes
  window.setInterval(function () {
    currentTime = moment().format("HH");
    console.log("set interval");
    setClass();
  }, 300000);

  //Capture information from each block
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    console.log("Value is =", value);
    // var details = $(this).attr().text();
    var time = $(this).parent().attr("id");
    console.log("time is= ", time);
    // Save inputs in local sotrage
    localStorage.setItem(time, value);
    // $(".notification").addClass("show");
    // remove class by time, transition out in css
  });
});
