var today = moment().format( "dddd, MMM Do");
// $("currentDay").text(today.format("dddd, MMM Do"));
$("#currentDay").text(today);

var timeDisplayEl = $('#time-display');
// handle displaying the time
function displayTime() {
    var rightNow = moment().format('dddd, MMM DD');
    timeDisplayEl.text(rightNow);
  }