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






                                            // new  QUESTION AND ANSWER //




// JAVASCRIPT 2nd QIESTION && ANSWER

// Question #1 Swapping Variable

var a = 10;
var b = 5;

var temp = a;

a = b;
b = temp;

console.log("a", a);
console.log("b", b);

//  ---------- End Question -------- 


// Question #2  write function which return the maximum of two number

const num1 = 10;
const num2 = 5;

function maxNumber(a, b) {
    return num1 > num2 ? a : b;
}
console.log(maxNumber(num1, num2))

//  ---------- End Question -------- 


// Question #3 write a function which checks given width and height, return true (landscpae) if width is greater than height and vice versa

const width = 500;
const height = 400;

function isLandscape(width, height) {
    if (width > height) {
        return true
    } else {
        return false;
    }
}

console.log(isLandscape(width, height));


//  ---------- End Question -------- 

// Question #4 fizzbuzz-algorithms write function which checks given input/parameter 


function isfizzBuzz(arg) {
    if (typeof arg !== 'number') {
        return (`Nan - Not a Number! Please Input Number`)
    }

    if ((arg % 3 === 0) && (arg % 5 === 0)) {
        return "FizzBuzz";
    }

    if (arg % 3 === 0) {
        return "Fizz";
    }

    if (arg % 5 === 0) {
        return "Buzz";
    } else {
        return `some odd number entered:` + arg
    }

}

console.log(isfizzBuzz());
console.log(isfizzBuzz(3));
console.log(isfizzBuzz(5));
console.log(isfizzBuzz(11));

//  ---------- End Question -------- 


// Question #5 Write a function which checks given input/parameter

// If input/parameter is below speedlimit of 70 print => 'Good Safe Driving'
// If input/parameter is above speedlimit of 70, every 5 kilometers is Penalty Point, print 'Speed Limit Crossed by Penalty Point' 
// If Driver gets more than 10 penalty points ie. above the speed limit 120, print => 'License Suspended'

const speedLimit = 70;
const kmPoint = 5;


function speedCheck(value) {
    if (value <= speedLimit) {
        return "Good Safe Driving!"
    } else {
        let penaltyPoint = Math.floor((value - speedLimit) / kmPoint);
        if (penaltyPoint < 10) {
            return `Speed Limit Crossed by Penalty Point` + penaltyPoint;
        } else {
            return "License Suspended!"
        }
    }
}

console.log(speedCheck(40))
console.log(speedCheck(70))
console.log(speedCheck(75))
console.log(speedCheck(99))
console.log(speedCheck(120))

//  ---------- End Question -------- 



// Question #6 write a function which checks number till given input/parameter is odd or even 

function isOddEvenNumber(value) {
    for (let i = 0; i <= value; i++) {

        const alermessage = (i % 2 === 0) ? "Even" : "ODD"
        console.log(alermessage);
    }
}

isOddEvenNumber(10);

//  ---------- End Question -------- 


// Question # 7 Write a function which checks and count the truthy values from an array

const valuesArray = [0, 1, '', undefined, false, true];

function checkArray(value) {
    let truthy = 0;
    for (let key of value) {
        if (key) {
            truthy++;
        }
    }
    return truthy;
}

console.log(checkArray(valuesArray));

//  ---------- End Question -------- 

// Question # 8 Write a function which checks and prints only the string type properties of an object


const Person = {
    name: 'Dinanath',
    age: 40,
    height: 5.6,
    country: 'India',
    designation: 'UI Developer'

}

const Technology = {
    name: 'JavaScipt',
    version: 6,
    purpose: 'Scripting language for Web',
    developer: 'Netscape Corporation'
}


function showStringProperties(curObj) {
    for (key in curObj) {
        if ((typeof curObj[key]) === "string") {
            console.log(key, ":", curObj[key]);
        }
    }
}

showStringProperties(Person);
console.log(`--------`);
showStringProperties(Technology);


//  ---------- End Question -------- 


// Question #9 Write a function which calculate the sum of multiples of 3 and 5 for a given limit

function sumOfMultiples(currLimite) {
    let sum = 0;
    for (let i = 1; i <= currLimite; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum
}

console.log(sumOfMultiples(10));


//  ---------- End Question -------- 


// Question # 10 Write a function which Prints/Shows star-aestrikes (or any pattern) for the number of times and rows provided

function showPattern(value) {
    for (let i = 1; i <= value; i++) {
        var sum = '';
        for (let b = 0; b < i; b++) {
            sum += '*'
        }
        console.log(sum);
    }
}

showPattern(5)

//  ---------- End Question -------- 


// Question # 11 Write a function which Calculate the sum of marks provided in an array, average it and also show Grade


const MARKSARRAY = [55, 85, 55, 65];

function calculateAverage(values) {
    let total = 0;
    for (const i of values) {
        total += i;
    }

    let average = total / MARKSARRAY.length;

    let grade = "";

    if (average < 70) {
        return "D"
    }
    if (average < 80) {
        return "C"
    }
    if (average < 90) {
        return "B"
    }
    if (average < 100) {
        return "A"
    }

    return { average, grade }
}

console.log("Grade", calculateAverage(MARKSARRAY));


//  ---------- End Question -------- 

// Question # 12 Write a function to create a Bingo Card with Random numbers upto 75

window.onload = createBingo;

function createBingo() {
    for (let index = 1; index <= 24; index++) {

        let newRandom = Math.floor(Math.random() * 75)

        document.getElementById(`Square` + index).innerHTML = newRandom;
    }
}

//  ---------- End Question -------- 

// Question # 13 Write a function which show or print Prime Number upto provided range



// Question # 14 or 15 Write a function which show or print Sum of Arguments passed

function sumOfArguments(...number) {
    return number.reduce((sumTotal, number) => {
        return sumTotal += number;
    });
}

console.log(sumOfArguments(10, 2, 8, 4, 6));

//  ---------- End Question -------- 

// Question # 16 Create an object with read only propety named 'area'


let obj = {
    name: 'mainCircle',
    lineColor: 'red',
    bgColor: 'gray',
    radius: 1,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
}

console.log(obj.area());

//  ---------- End Question -------- 


// Question # 17 Create an array of the values from the 'min' and 'max' (start & end) range provided

function generateArrayFromRange(startNum,endNum) {
        const arr = [];
    for (curNum = startNum; curNum<=endNum; curNum++) {
        arr.push(curNum);
    }

    return arr;
}

console.log(generateArrayFromRange(1,5));
console.log(generateArrayFromRange(1,10));

//  ---------- End Question -------- 


// Question # 18 Create a method named 'includes' which checks an element exists in an array

const arr = [1,2,3,4,5,6,7]

function include(value) {
    if(arr.includes(value)) {
        return `True ${value}`;
    }else{
        return false
    }
}

console.log(include(5));

//  ---------- End Question -------- 

// Question # 19 Create a method named 'excludes' which cut/excludes values from existing array and push to new array

function excludes(arr1,Point) {

    const outputArray = [];
  for (const curElement of arr1) {
//    console.log(curElement);
    if (!Point.includes(curElement)) {
        outputArray.push(curElement);
    }    
  }
  return outputArray;
}
const arr1 = [1, 2, 5, 7, 2];
const arr2 = (excludes(arr1,[1,2]))
console.log(arr2);

//  ---------- End Question -------- 

// Question # 20 Create a function which counts the search occurances from an array

function countSearchOccurances(abc,numberCheck) {
    let count= 0;
     for (const curElement1 of abc) {
        // console.log(curElement1);
        if (curElement1 === numberCheck) {
            count++;
        }
     }
     return count;
}

let abc = [1,2,3,4,5,2,1];
console.log(countSearchOccurances(abc,2));

//  ---------- End Question -------- 


// Question # 21 Create a function which returns the maximum ie. largest number from an array

function largestNumber(maximum) {
    let largest = 0;
    for (const curElement of maximum) {
        if (curElement>largest) {
            largest = curElement
        }
    }
    return largest;
};

let maximum = [1,2,3,4,5,6,7];
console.log(largestNumber(maximum));

//  ---------- End Question -------- 

// Question # 22 Array: Filter the array of students with Higest Ranking, Sort on Ranking, finally Show the Names

const studentsArray = [
    { name: 'Suraj', year: 2019, ranking: 4 },
    { name: 'Amit', year: 2019, ranking: 5 },
    { name: 'Akash', year: 2018, ranking: 4 },
    { name: 'Dinanath', year: 2019, ranking: 7 },
    { name: 'Sagar', year: 2017, ranking: 3 },
  ]
  let filterStudent = studentsArray.filter(student=>{
        return student.year=== 2019 && student.ranking>=5
    })
    let mapStudent = filterStudent.map(student => student.name)
//   console.log(`Higest Rank Holders: ${mapStudent}`);

//  ---------- End Question -------- 

// Question # 23  Create an Object for Students and Address with various Properties and Methods

const Students = {
    name: 'Dinanath',
    age: 35,
    rank: 5,
    country: 'India',
  }
  
  const Address = {
    street: 'Sir DJ Road',
    city: 'Mumbai',
    pinCode: 401209,
    state: 'MH',
    country: 'India',
  }

  function showObjectDetails(obj) {
    for (let key in obj) {
        console.log(key, ":" ,obj[key]);
       
    }
  }
  
  showObjectDetails(Students)
  console.log(`---------`);
  showObjectDetails(Address)

//  ---------- End Question -------- 


// Question # 24 Create an Object of Students by using Factory and Constructor methods

// Factory method

function factory(name,age,rank,country) {
    return {
        name,age,rank,country
    }
}

let fact = factory("Junaid",22,5,"pakistan")
console.log(fact);


// Constructor methods
function student(name,age,rank,country) {
    this.name = name
    this.age = age
    this.rank = rank
    this.country = country
}

let student2 = new student("Adnan",29,4,"Pakistan");
console.log(student2);

//  ---------- End Question -------- 


// Question # 24 Write function to check object equality

function student(name,age,rank,country) {
    this.name = name
    this.age = age
    this.rank = rank
    this.country = country
}

let students1 = new student("adnan",21,4,"England");
console.log(students1);
let students2 = new student("adnan",21,4,"England");
console.log(students2);


function objEquality(obj1,obj2) {
    return (obj1.name === obj2.name ) && (obj1.age === obj2.age )
         &&(obj1.rank === obj2.rank) && (obj1.country === obj2.country);  
}

console.log(`is Equal`,objEquality(students1,students2));

//  ---------- End Question -------- 

let obj22 = {
    name : "adnan",
    age : 21,
    // my Field : "web DEV",
}

console.log(obj22["name"],obj22["age"]);

function name(params) {
    
}