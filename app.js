// Exercise 1 Section Print odds
function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(10); 1, 3, 5, 7, 9
printOdds(100); 1, 3, 5-99


// Exercise 2 Section
function checkAge(name, age) {
    let oldEnough = `Congrats ${name}, you can drive.`;
    let tooYoung = `Sorry ${name}, you need to wait ${16 - age} year(s) until you can drive.`;

    if (age < 16) {
        console.log(tooYoung);
    } else {
        console.log(oldEnough);
    }
}

checkAge("Ben", 12);
checkAge("Seth", 16);
checkAge("Cameron", 21);


//Exercise 3 Section
function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
    } else if (x === 0 && y !== 0) {
        console.log(`(${x}, ${y}) is on the y-axis.`);
    } else if (x !== 0 && y === 0) {
        console.log(`(${x}, ${y}) is on the x-axis.`);
    } else {
        console.log(`(${x}, ${y}) is at the origin.`);
    }
}

checkQuadrant(1, 1);
checkQuadrant(-1, 1);
checkQuadrant(-1, -1);
checkQuadrant(1, -1);


//Exercise 4 Section 
function isValidTriangle(a, b, c) {
    return (a + b > c && a + c > b && b + c > a);
}

function checkTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a === b && b === c) {
            return "Equilateral";
        } else if (a === b || b === c || a === c) {
            return "Isosceles";
        } else {
            return "Scalene";
        }
    } else {
        return "Not a valid triangle";
    }
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));


//Exercise 5 Section 
function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let remainingDays = periodLength - day;
    let remainingUsage = planLimit - usage;
    let averageDailyUsage = usage / day;

    console.log(`${day} days used, ${remainingDays} days remaining.`);
    console.log(`average daily use: ${averageDailyUsage.toFixed(3)} GB/day.`);

    if (averageDailyUsage > planLimit / periodLength) {
        let projectedOverage = (averageDailyUsage - (planLimit / periodLength)) * remainingDays;
        console.log(`you are exeeding your average daily use (${averageDailyUsage.toFixed(2)} GB/day).`);
        console.log(`continuing this high usage, you will exceed your data plan by ${projectedOverage.toFixed(1)} GB.`);
        console.log(`to stay below your data plan, use no more than ${(planLimit / periodLength).toFixed(2)} GB/day.`);
    } else {
        let remainingAverageUsage = remainingUsage / remainingDays;
        console.log(`your using data below your average daily use (${averageDailyUsage.toFixed(2)} GB/day).`);
        console.log(`you have ${remainingUsage.toFixed(1)} GB data remaining.`);
        console.log(`to make the most of your data plan, you can use up to ${remainingAverageUsage.toFixed(2)} GB/day.`);
    }
}
