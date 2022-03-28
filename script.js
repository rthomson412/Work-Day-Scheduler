$(document).ready(function() {

    var currentDate = moment().format("dddd, MMMM Do, YYYY, LT");
        $("#currentDay").text(currentDate);

    var time = [
        {sTime: "7am", nTime: 0700},
        {sTime: "8am", nTime: 0800},
        {sTime: "9am", nTime: 0900},
        {sTime: "10am", nTime: 1000},
        {sTime: "11am", nTime: 1100},
        {sTime: "Noon", nTime: 1200},
        {sTime: "1pm", nTime: 1300},
        {sTime: "2pm", nTime: 1400},
        {sTime: "3pm", nTime: 1500},
        {sTime: "4pm", nTime: 1600},
        {sTime: "5pm", nTime: 1700},
        {sTime: "6pm", nTime: 1800}
    ];
