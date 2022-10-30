var currentDay = document.querySelector('#currentDay');

var hour9 = document.querySelector('.hour-09');
var hour10 = document.querySelector('.hour-10');
var hour11 = document.querySelector('.hour-11');
var hour12 = document.querySelector('.hour-12');
var hour13 = document.querySelector('.hour-13');
var hour14 = document.querySelector('.hour-14');
var hour15 = document.querySelector('.hour-15');
var hour16 = document.querySelector('.hour-16');
var hour17 = document.querySelector('.hour-17');
var saveButton = document.querySelector('.saveBtn');
var timeDiv = document.querySelector('.time-div');

var hourArray = [[hour9, 09], [hour10, 10], [hour11, 11], [hour12, 12], [hour13, 13], [hour14, 14], [hour15, 15],
[hour16, 16], [hour17, 17]];
var currentHour;

var currentHourFunc = function () {
    currentHour = moment().format('HH');
    for (i = 0; i < hourArray.length; i++) {
        if (currentHour == hourArray[i][1]) {
            hourArray[i][0].classList.add('present');
            // console.log(hourArray[i][1])
            // hourArray[i][0].classList.remove('past');
            // hourArray[i][0].classList.remove('future');
        }
        else if (currentHour > hourArray[i][1]) {
            hourArray[i][0].classList.add('past');
            // hourArray[i][0].classList.remove('present');
            // hourArray[i][0].classList.remove('future');

        }
        else if (currentHour < hourArray[i][1]) {
            hourArray[i][0].classList.add('future');
            // hourArray[i][0].classList.remove('present');
            // hourArray[i][0].classList.remove('past');
        }
    }
};

var timerInterval = setInterval(function () {
    var time = moment().format("MMMM Do, YYYY h:mm:ss a");
    currentDay.textContent = time;
    currentHourFunc();
    // console.log(currentHour);
}, 1000);

