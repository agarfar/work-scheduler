// define query selectors and global variables

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
var nineSaveButton = document.querySelector('.nineAM');
var tenSaveButton = document.querySelector('.tenAM');
var elevSaveButton = document.querySelector('.elevenAM');
var twelveSaveButton = document.querySelector('.twelvePM');
var oneSaveButton = document.querySelector('.onePM');
var twoSaveButton = document.querySelector('.twoPM');
var threeSaveButton = document.querySelector('.threePM');
var fourSaveButton = document.querySelector('.fourPM');
var fiveSaveButton = document.querySelector('.fivePM');
var hourArray = [[hour9, 09, 'hour-09'], [hour10, 10, 'hour-10'], [hour11, 11, 'hour-11'], [hour12, 12, 'hour-12'], [hour13, 13, 'hour-13'], [hour14, 14, 'hour-14'], [hour15, 15, 'hour-15'],
[hour16, 16, 'hour-16'], [hour17, 17, 'hour-17']];
var currentHour;
var timeArray;

// Background color of time blocks changes in relation to the present hour
var currentHourFunc = function () {
    currentHour = moment().format('HH');
    for (i = 0; i < hourArray.length; i++) {
        if (currentHour == hourArray[i][1]) {
            hourArray[i][0].classList.add('present');
            // console.log(hourArray[i][1])
            hourArray[i][0].classList.remove('past');
            hourArray[i][0].classList.remove('future');
        }
        else if (currentHour > hourArray[i][1]) {
            hourArray[i][0].classList.add('past');
            hourArray[i][0].classList.remove('present');
            hourArray[i][0].classList.remove('future');

        }
        else if (currentHour < hourArray[i][1]) {
            hourArray[i][0].classList.add('future');
            hourArray[i][0].classList.remove('present');
            hourArray[i][0].classList.remove('past');
        }
    }
};

currentHourFunc();

var time = moment().format("MMMM Do, YYYY h:mm:ss a");
currentDay.textContent = time;

// updates current time on page
var timerInterval = setInterval(function () {
    time = moment().format("MMMM Do, YYYY h:mm:ss a");
    currentDay.textContent = time;
    currentHourFunc();
}, 1000);


// adds local storage functionality to each time block's save button
nineSaveButton.addEventListener('click', function () {
    var input = hour9.value;
    var inputArray = JSON.stringify(['hour-09', input]);
    localStorage.setItem('hour-09', inputArray);
});

tenSaveButton.addEventListener('click', function () {
    var input = hour10.value;
    var inputArray = JSON.stringify(['hour-10', input]);
    localStorage.setItem('hour-10', inputArray);
});

elevSaveButton.addEventListener('click', function () {
    var input = hour11.value;
    var inputArray = JSON.stringify(['hour-11', input]);
    localStorage.setItem('hour-11', inputArray);
});

twelveSaveButton.addEventListener('click', function () {
    var input = hour12.value;
    var inputArray = JSON.stringify(['hour-12', input]);
    localStorage.setItem('hour-12', inputArray);
});

oneSaveButton.addEventListener('click', function () {
    var input = hour13.value;
    var inputArray = JSON.stringify(['hour-13', input]);
    localStorage.setItem('hour-13', inputArray);
});

twoSaveButton.addEventListener('click', function () {
    var input = hour14.value;
    var inputArray = JSON.stringify(['hour-14', input]);
    localStorage.setItem('hour-14', inputArray);
});

threeSaveButton.addEventListener('click', function () {
    var input = hour15.value;
    var inputArray = JSON.stringify(['hour-15', input]);
    localStorage.setItem('hour-15', inputArray);
});

fourSaveButton.addEventListener('click', function () {
    var input = hour16.value;
    var inputArray = JSON.stringify(['hour-16', input]);
    localStorage.setItem('hour-16', inputArray);
});

fiveSaveButton.addEventListener('click', function () {
    var input = hour17.value;
    var inputArray = JSON.stringify(['hour-17', input]);
    localStorage.setItem('hour-17', inputArray);
});

// writes saved localStorage content to page
for (i = 0; i < hourArray.length; i++) {
    timeArray = JSON.parse(localStorage.getItem(hourArray[i][2])) ?? '';
    console.log(hourArray[i][2]);
    console.log(timeArray);
    hourArray[i][0].textContent = timeArray[1];
}