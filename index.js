// Question # 1 : Write a JavaScript program to display the current day and time in the following format

function getTime(today) {

    let hour = today.getHours() % 12 ? today.getHours() : 12;
    let ampm = today.getHours() > 12 ? "pm" : "am";
    let minutes = today.getMinutes() < 10 ? `0 ${today.getMinutes()}` : today.getMinutes();
    let sends = today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();

    return `${hour} ${ampm} ${minutes} ${sends}`
}
function getDay(today) {
    return [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ][today.getDay()]
}

let time = new Date()
console.log(`today is ${getDay(time)}`)
console.log(`today current time ${getTime(time)}`);

//  ---------- End Question -------- 


// Question #2 : Write a JavaScript program to find the area of a triangle


function area(a, b) {
    return a * b / 2
}

console.log(area(20, 3));

//  ---------- End Question -------- 


// Question #3 : Write a JavaScript exercise to get the extension of a filename.

function adnan(filename) {
    return filename.substring(filename.lastIndexOf("."))
}

console.log(adnan("adnan.jsx"));
console.log(adnan("adnan.md"));
console.log(adnan("adnan.xd"));
console.log(adnan("adnan.php"));
console.log(adnan("adnan.html"));

//  ---------- End Question -------- 


// Question #4 : Write a JavaScript program to calculate days left until next Christmas

function getChrismis() {
    let today = new Date()
    let diffrence = new Date(today.getFullYear(), 11, 25) - new Date();
    let sec = 1000 * 3600 * 24;

    return diffrence / sec;
}

console.log(getChrismis());

//  ---------- End Question -------- 



// Question #5 Write a JavaScript program to compare two objects

function matches(obj1, obj2) {
    return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]);
}

const car = {
    color: 'red',
    type: 'suv',
};

obj1 = {
    name: 'john doe',
    car,
};
obj2 = {
    name: 'john doe',
    car,
};

console.log(matches(obj1, obj2)); // true
console.log(matches(obj1, { color: 'red', type: 'suv' })); // false
console.log(matches(obj1, { name: 'john doe', car })); // true
console.log(matches(obj1, { name: 'jane doe', car })); // false

//  ---------- End Question -------- 



// Question #6 Write a JavaScript program to convert an array of objects into CSV string

const array = [
    { name: 'India', city: 'Pune', continent: 'Asia' },
    { name: 'Kenya', city: 'Mombasa', continent: 'Africa' },
    {
        name: 'Canada',
        city: 'Waterloo',
        continent: 'North America',
        captial: 'Ottawa',
    },
    { name: 'France', city: 'Paris', continent: 'Europe' },
]


array.forEach((obj) => {
    for (var key in obj) {
        console.log(`${key} - ${obj[key]}`)

    }
})


//  ---------- End Question -------- 



// Question # 7 Write a JavaScript program to convert a number to array of digits

function numberToArray(num) {
    if (typeof num === 'number') {
        return `${num}`.split('').map((n) => parseInt(n));
    } else {
        return NaN;
    }
}

console.log(numberToArray(1234))
console.log(numberToArray('abc'))

//  ---------- End Question -------- 


// Question #8 Write a JavaScript program to capitalize first letter of a string

function capital(str) {
    return `${str.charAt(0).toUpperCase()}${str.substring(1)}`
}

console.log(capital("javascript"))

//  ---------- End Question -------- 


// Question #9 Write a JavaScript program to determine if a variable is array

function is_array(check) {
    return Object.getPrototypeOf(check) === Array.prototype;
}


console.log(is_array([1, 2, 3, 4])); // true
console.log(is_array('abcd')); // false

//  ---------- End Question -------- 


// Question #10 Write a JavaScript program to reverse a string

function reverse(str) {
    return str.split("").reverse().join();
}

console.log(reverse("hellow world"))

//  ---------- End Question -------- 










