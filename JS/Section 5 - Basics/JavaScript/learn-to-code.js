// const name = "Jack";
// const age = 23;

// const message = `Hi, my name is ${name} and I am ${age} years old`;
// const firstName = 'John';
// const lastName = 'Smith';
// const dateOfBirth = "10-09-82";
// const age = 23;
// const profileImgUrl = "www.google.com";

// const loginWelcomeMessage = `Welcome, ${firstName}. Happy ${age}rd birthday`;
// console.log(loginWelcomeMessage);

// const age = 23;

// const sum = 10 + 15,
//   sub = 15 - 10,
//   mul = 10 * 3,
//   div = 10 / 3,
//   mod = 10 % 3;

// const msg = `10 / 3 = 3 with a remainder of ${mod}`;
// const results = 10 * (5 + 3 - 4);

// console.log(msg, results);

// const val1 = 23;
// const val2 = "23";

// if (age !== jesAge) {
//   console.log("not same");
// } else {
//   console.log("same");
// }

// let myAccountBalance = 300;
// const nikeSBShoes = 790;
// const coupon = 500;
// if (nikeSBShoes <= myAccountBalance) {
//   myAccountBalance -= nikeSBShoes;
//   console.log(`Account Balance: ${myAccountBalance}`);
// } else if (nikeSBShoes - coupon <= myAccountBalance) {
//   myAccountBalance -= nikeSBShoes - coupon;
//   console.log(`Coupon, I have $${myAccountBalance} left`);
// } else {
//   console.log("No money left");
// }

// const cat1 = 5,
//   cat2 = 10,
//   cat3 = 1,
//   cat3DisabledHandicap = false;

// if (cat1 > cat2 && cat1 > cat3 && !cat3DisabledHandicap) {
//   console.log("cat1 is cutest");
// } else if (cat2 > cat1 && cat2 > cat3 && !cat3DisabledHandicap) {
//   console.log("cat2 is cutest");
// } else if ((cat3 > cat1 && cat3 > cat2) || cat3DisabledHandicap) {
//   console.log("cat3 is the cutest");
// }

// const students = ["Timmy", "Janessa", "Arun"];

// const naughtyList = [];

// naughtyList.push(students[0]);
// const index = naughtyList.indexOf("Timmy");
// console.log(naughtyList);
// if (index > -1) {
//   naughtyList.splice(index, 1);
// }

// console.log(naughtyList);
// const total = 10;
// for (var i = 0; i < total; x++) {
//   console.log(i);
// }

const students = [];

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.greeting = function() {
    return `Hi, I'm ${this.firstName} and I'm ${this.age} years old.`;
  };
}

students.push(new Student("Jenny", "Laga", 5));
students.push(new Student("Timmy", "Turner", 5));
students.push(new Student("Carl", "Jr", 4));

for (const key in students[0]) {
  if (students[0].hasOwnProperty(key)) {
    const element = students[0][key];
    console.log(element);
  }
}

// for (var i = 0; i < students.length; i++) {
//   var element = students[i];

//   console.log(element.greeting());
// }

// const student0 = {
//   firstName: "Jayne",
//   lastName: "Parko",
//   age: 7,
//   greeting: function() {
//     return `Hi, I'm ${this.firstName} and I'm ${this.age} years old.`;
//   }
// };
// const student1 = {
//   firstName: "John",
//   lastName: "Parker",
//   age: 7
// };
// const student2 = {
//   firstName: "Happy",
//   lastName: "Parker",
//   age: 7
// };
// students.push(student0);
// students.push(student1);
// students.push(student2);

// for (var i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// ======= Exercise ======= //

// for (var i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

// let res = "";
// for (let i = 0; i < 5; i++) {
//   console.log((res += "*"));
// }

// for (var i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("CodeMonkey");
//   } else if (i % 3 === 0) {
//     console.log("Code");
//   } else if (i % 5 === 0) {
//     console.log("Monkey");
//   } else {
//     console.log(i);
//   }
// }

// ========= Exercises done ========== //

// function area(length, width) {
//   return length * width;
// }

// const rectanglesAreas = [];
// rectanglesAreas.push(area(10,15));
// rectanglesAreas.push(area(14,2));
// rectanglesAreas.push(area(4,5));

// console.log(rectanglesAreas);

// let bankBalance = 500;
// const transaction = function(priceOfSale) {
//   if (priceOfSale <= bankBalance) {
//     bankBalance -= priceOfSale;
//     console.log("Successful");
//   } else {
//     console.log("Poor guy");
//   }
// };

// transaction(10);

// ======= Exercise ======= //
// function triangle(width, height) {
//   return width * height / 2;
// }
// function circle(radius) {
//   return Math.PI * radius * radius;
// }

// function area(numOfEdges, a, b) {
//   let area = 0;
//   switch (numOfEdges) {
//     case 1:
//       area = Math.PI * a * a;
//       break;
//     case 3:
//       area = a * b / 2;
//       break;
//     case 4:
//       area = a * b;
//   }
//   return area;
// }

// console.log(area(3, 5, 8));

// ========= Exercises done ========== //
