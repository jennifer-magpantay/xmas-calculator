// 1) set interval, caaling the function which will calculate the remaining days till the target

setInterval(function () { countDaysDown() }, 1000)

// 2) create the function for the calculation
function countDaysDown() {
    // declare the current day
    currentDay = new Date();

    // declate the current year
    year = currentDay.getFullYear();

    // declare the xmas day, using the variable year as param   
    xmasDay = Date.parse(`December 24, ${year}`);

    // declare a variable to hold the result between today and christmas
    daysLeft = xmasDay - currentDay;

    // declare the calculations by days:
    days = Math.ceil(daysLeft / (1000 * 60 * 60 * 24));

    // so, if the days is == 0, then set the calculation to the following year
    if (days <= 0) {
        year = year + 1;
        nextXmasDay = Date.parse(`December 24, ${year}`);

        daysLeft = nextXmasDay - currentDay;
        days = Math.ceil(daysLeft / (1000 * 60 * 60 * 24));
    }

    // adding a last condition to dispay day or days - single or plural -, acording to the results
    document.getElementById("results").innerHTML = days + (days <= 1 ? " day" : " days");
}