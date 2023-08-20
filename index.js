// // let a = 10;
// // let b = 20;
// //airthmetic operators
// // +,-,/,%,**,*,++,--

// // const c = a + b;
// // console.log(c);
// // const s = b - a;
// // console.log(s);
// // const m = a * b;
// // console.log(m);
// // const d = b / a; 2
// // const mod = b%a == 3
// // a++ ==postfix

// // let a = 10;
// // console.log(--a);
// // console.log(a);
// // console.log(a);
// // let a = 20;
// // a = a + 2;//a+=2
// // a = a-2 //a-=2
// // a  = a*2 // a*=2
// // a++ , a=a+1
// // a-- a-=1
// // ++a,a++
// // ternary operator ? :
// // let a = 3;
// // let b = 5;
// // const result = a > b ? "a is greater" : "b is greater";
// // console.log(result);

// // var a; //undefined declare program
// // console.log(a);
// // //access
// // console.log(x); //refrence error not  defined
// // var a;
// // console.log(a); //undefined
// // let a = null;
// // a = 5;
// // console.log(a);
// // let person = {
// //   name: "zeba ",
// //   age: 25,
// // };
// // console.log(person.age);

// // const names = ["a", "v", "v1", 1, 2, 4, 5]; //collection of data
// // const names = ["zeba ", "ali", "ze"];
// // console.log(typeof names); //ali

// // const date = new Date(); //object type
// // console.log(typeof date);

// // {
// //     //block of code
// // }

// // function myFunc() {
// //   //static function
// //   const a = 10;
// //   const b = 20;
// //   console.log(a + b);
// // }
// // myFunc(); //invoke call
// // myFunc(); //invoke call
// // myFunc(); //invoke call
// // myFunc(); //invoke call
// // myFunc(); //invoke call
// // myFunc(); //invoke call
// // add two number static
// // function add() {
// //   let a = 10;
// //   let b = 20;
// //   let c = a + b;
// //   console.log(c);
// // }
// // a  =2 b = 3 //function parameter
// // function add(a, b) {
// //   let c = a + b;
// //   return c;
// // }
// // function add(a, b) {
// //   c = a + b; //5
// //   console.log(c); //5
// //   return c;
// // }

// // let add1 = add(2, 3); //5 // function invoke function argument
// // let add2 = add(10, 20); // 30
// // console.log(add1);
// // console.log(add2);

// // function add(a,b) {
// //     //local variables

// // }
// // console.log(a);
// // console.log(b);

// // const person = {
// //   name: "zehra",
// //   age: 20,
// //   gender: "Female",
// //   marks: [80, 90, 75, 60],
// //   getFullName: function () {
// //     console.log("my full name is " + this.name);
// //   },
// //   getAllMarks: function () {
// //     console.log(this.marks);
// //   },
// // };

// // console.log(person.name); //zehra
// // console.log(person.age); //20
// // console.log(person.gender); //female
// // // person.getFullName();
// // console.log(person["name"]);
// // person["getFullName"]();
// // console.log(person.marks[2]);
// // person.getAllMarks();

// const name = "zeba ali"; //
// console.log(name.toUpperCase()); //ZEBA ALI
// console.log(name.toLowerCase());
// console.log(typeof name);
// console.log(name);
// const name1 = new String("zeba ali"); //object
// console.log(typeof name1); //object
// console.log(name1);

// console.log(name == name1); //true
// console.log(name === name1); //false

// console.log(name.length);
// //slice
// const str = "Apples, Banana, Grapes,Banana";
// console.log(str.slice(8));
// console.log(str.slice(-6));
// console.log(str.slice(-14, -8));

// //substring
// console.log(str.substring(5)); //nagative //0
// const newStr = str.replace("Banana", "Orange");
// //substr slice
// console.log(newStr);
// const newStr1 = str.replaceAll("Banana", "Orange");
// console.log(newStr1);

// const str1 = "        Hello               ";
// const str2 = "World"; //Hello World
// // // const newStr = str1 + " " + str2;
// // const newStr = str1.concat(" ", str2, " ", "App");
// // console.log(newStr);
// console.log(str1.trim()); // trim space remove
// const num = "5";
// console.log(num.padStart(9, "*"));
// console.log(num.padEnd(5, "0"));
// // a -97 b -98 c -99 d 100
//  A -65 B -66
// const arr = [1, 2, 3, 4];
// console.log(arr[2]);
// let name = "zeba Ali Ali";
// console.log(name.charAt(6));
// console.log(name.charCodeAt(5));
// console.log(name[3]);
// console.log(name.split(""));
// searches javascript string

// const str = "hello how are you How?";
// console.log(str.length);
// // console.log(str.indexOf("do", 10));
// // console.log(str.lastIndexOf("h", 5));

// // // search;
// // console.log(str.search("do"));
// // match
// // console.log(Array.from(str.matchAll(/how/gi)));

// // console.log(str.includes("hello", 10));

// //startsWith

// console.log(str.startsWith("h", 11)); //start searching
// console.log(str.endsWith("?", 21));

// template literal
// let a = 10;
// const str = "hello world app " + a;
// console.log(str);
// const str1 = `hello world app ${a + 10 + "abc"}`;
// console.log(str1);
// const firstname = "firstname";
// const secondname = "secondname";

// console.log("welcome " + firstname + " " + secondname);
// console.log(`welcome ${firstname} ${10 + 20 + secondname} `);
// let x =10 integer
// let x=10.09 //decimal value float value

// let x1 = 25e5;250000 positive
// let x2 = 0.000025; 25e-6 nagative value

// const x = 9e-1;
// const y = 9e-2;
// console.log(x + y);
// const y1 = 10;
// const z1 = 20;
// console.log(y1 + z1); //30

// const x1 = "10";
// const y1 = "20";
// console.log(x1 + y1);
// const x = 10;
// const y = "20";
// console.log(x + y);
// const x = 10;//number
// const y = 20;
// const z = "30";//string
// console.log(x + y + z);
// const x = 100; //string
// const y = "10"; //string
// const checkNumber = x / y;
// console.log(isNaN(checkNumber)); //boolean
// const a = NaN; //typof
// const b = "5";
// console.log(a + b);
// console.log(typeof NaN); //number
// c = 2 / 0; //error
// console.log(typeof c);
// let c = 88888888888888888888;
// console.log(typeof c);
// let x = Number.MAX_SAFE_INTEGER;
// console.log(x);
// let y = Number.MAX_VALUE;
// console.log(y);
// let z = Number.MIN_SAFE_INTEGER;
// console.log(z);
// let z1 = Number.MIN_VALUE;
// // console.log(z1);
// let x = 123;
// console.log(typeof x.toString());
// console.log((10 + 123).toString());
// let x = 9.666543466464;
// console.log(x.toExponential(0));
// console.log(x.toExponential(2)); 9.67e+0//
// console.log(x.toExponential(4));
// console.log(x.toExponential(6));

// console.log(x.toFixed(0)); //10
// console.log(x.toFixed(2)); 9.67
// console.log(x.toFixed(4));
// console.log(x.toFixed(6));

// console.log(x.toPrecision(5));9.6665
// console.log(x.toPrecision(7));
// console.log(x.toPrecision(10));
// let x = 9999999999999999999;
// console.log(Number.isInteger(x));
// console.log(Number.isSafeInteger(x));
// let str = x.toString();
// console.log(typeof str);

// let x1 = "123";

// console.log(Number(x1));
// console.log(Number(true)); //1
// console.log(Number(false)); //0
// console.log(Number.parseInt("100"));
// console.log(Number("10.99"));

// const names = ["name1", "name2", "name3"];
// names[3] = "name4";
// console.log(names[0]); //name1
// console.log(names[1]); //name2
// console.log(names[2]); //
// console.log(names.length);
// console.log(names);
// const posts = [];
// posts[0] = "first post";
// posts[1] = "second post";
// posts[2] = "third post";
// console.log(posts);

// const arr2 = [
//   [1, 2], //0
//   [3, 4, 5, 6], //1
//   [5, 6], //2
// ];
// rest operator

// const arr5 = [1, 2, 3, 5, 6, 7, 8];
// const [one, two, three, ...othervalue] = arr5; //array destructure

// console.log(one, two, three, othervalue);

// for (let k of arr2) {
//   const [e1, e2, e3, e4] = k;
//   console.log(e1, e2, e3, e4);
// }
//rest operator
// const person = {
//   name: "zeba ali",
//   age: 25,
//   qualification: "MCA",
// };
// // const { name, age } = person; //object destructure
// // console.log(name);
// //rest operator
// //spread operator
// const newPerson = { ...person, gender: "Female" };
// console.log(newPerson);
// function add(a, b, ...rest) {
//   console.log(a, b);
//   console.log(rest);
// }
// add(1, 2, 3, 4);
// for (let k in arr2) {
//   console.log(k);
// }

// for (let x in arr2) {
//   const arr3 = arr2[x];
//   for (let y in arr3) {
//     console.log(arr3[y]);
//   }
// }

// const names = new Array(4);["","","", ""]
// ["", "", "", "", "name1"];
// names[0] = "nam2"; //intialize []
// names.push("name1");
// console.log(names);
// const name = [1, 2, 3]; //refrence address
// const name1 = [1, 2, 3];
// console.log(name == name1);
// console.log(typeof name);
// console.log(typeof name1);
// const name11 = {
//   name: "aki",
// };
// console.log(name instanceof Array);
// console.log(Array.isArray(name11));
// console.log(Number.parseInt(name1.toString().split(",")[1]));
// const products = ["prod1", "prod2", "prod3"];

// console.log(products.length);
// console.log(products.toString());
// console.log(products.join("-"));
// products[products.length] = "prod4";
// const deletedIndex = products.push("prod4");
// console.log(deletedIndex); //length return of array
// console.log(products);
// const popIndex = products.pop();
// console.log(popIndex);
// console.log(products);
// const prodIdnex = products.unshift("newProduct");
// console.log(prodIdnex);
// console.log(products);
// const prod = products.shift();
// console.log(prod);
// console.log(products);

// delete products[1];
// console.log(products);

// const arr1 = [1, 2, 3, 4];
// console.log(arr1.concat(5, 6, 7));
// [1, 2, 3, 4, 5, 6];
// const arr2 = [
//   [1, 2],
//   [3, 4],
//   [4, 5],
// ];
// console.log(arr2.flat());
// console.log(arr1.slice(1, 3));
// // const msg = "Hello world";
// // console.log(msg.slice(5, 7));
// // const arr2 = [5, 6, 7, 8, 9];
// // const arr3 = [10, 11, 12, 13, 14];
// // console.log(arr1 + arr2 + arr3);
// // const newArr = arr1.concat(arr2, arr3);
// // console.log(newArr);

// // insert data perticular remove perticular index
// const idx = arr1.splice(0, 2); // removing and adding
// console.log(idx);
// console.log(arr1);

const arr1 = [1, 2, 3, 4, 5]; //5  0<5 1<5 2<5 3
//looping
// arr1[0];
// while
// do-while
// for loop  ,
// for of
// for in
// 0; //1

// for (let count = 0; count < arr1.length; count++) {
//   if (arr1[count] == 3) break;
//   console.log(arr1[count]);
// }

// console.log("Out Of Loop");

// let count = arr1.length - 1;
// // 4>=0 true
// // 3 > =0 true
// // -1 >=0 false
// while (count >= 0) {
//   console.log(arr1[count]); // 5 4 3 2 1
//   count--; //3 //2 //1//0 -1
// }

// console.log("Out Of The Loop");
// const arr2 = [1];
// let count = 0;
// do {
//   console.log(arr2[count]);
//   count++;
// } while (count < arr2.length);

// const hello5 = 0;
// let count1 = 0;
// do {
//   console.log("Hello World ");
//   count1++;
// } while (count1 < hello5);

//syntax

// let initialization ;

// while(expression){
//   //body of the code
// increment
// }

// let initialization
// do {
//  //body of the code
//  //increment
// }while(expression)
// const arr = [1, 2, 3, 4, 5];
// // let count = 0;
// // while(count < arr.length) {
// //     console.log(arr[count]);
// //     count++;
// // }

// for (let count = 0; count < arr.length; count++) {
//   console.log(arr[count]);
// }
// console.log("OUT OF THE LOOP");

// const person = {
//   name: "zeba ali",
//   age: 25,
//   qualification: "MCA",
// };
// // console.log(Object.keys(person));
// // console.log(Object.values(person));
// // console.log(Object.entries(person));
// // for in loop

// for (let per in person) {
//   console.log(per);
//   console.log(person[per]);
// }

// const arr = [1, 2, 3, 4, 5];

// for (let x in arr) {
//   console.log(x);
//   console.log(arr[x]);
// }
// const arr = Object.entries(person);
// //   arr[1][1]
//   [[0,1],[0,1],[0,1]]
// //[["name","zeba ali"],["age",25],["quanlification","MCA"]]
// arr[2][0];
// let arr = ["name", "age", "qualification"];
// for (let key in arr) {
//   //0/1/2
//   const arr1 = arr[key];
//   console.log(arr1);
// }

// conditinals

//Number()
//parseInt()
// +number
// const age = parseInt(prompt("enter your age")); //string
// if (age >= 18) {
//   console.log("You are eligible for vote");
// } else {
//   console.log("you are not eligible for vote");
// }

// let a = 10;
// let b = 20;
// if (a > b) {
//   console.log("a is greater");
// } else {
//   console.log("b is greater");
// }

// let age = 40;
// let status = false;

// if (age <= 30) {
//   if (status) {
//     console.log("you are in");
//   } else {
//     console.log("you are out");
//   }
// } else {
//   if (status) {
//     console.log("40s in");
//   } else {
//     console.log("40s out");
//   }
// }

// let a = 10; //a>b a>c
// let b = 40; //b>a b>c
// let c = 30; //c >a c>b
// //10>20 && 10>30 f && f == f
// // c is greater
// // 20>10 t && 20>30 f ==false
// if (a > b && a > c) {
//   console.log("a is greatest");
// } else if (b > a && b > c) {
//   console.log(" b is greatest");
// } else {
//   console.log("c is greatest");
// }

//switch case
const weekName = "mon";
// if (weekName === "mon") {
//   console.log("mon");
// } else if (weekName === "tues") {
//   console.log("tues");
// } else if (weekName == "wed") {
//   console.log("wed");
// } else if (weekName == "thus") {
//   console.log("thus");
// } else if (weekName == "fri") {
//   console.log("fri");
// } else if (weekName == "sat") {
//   console.log("sat");
// } else if (weekName == "sun") {
//   console.log("sun");
// } else {
//   console.log("not matched ");
// }

// switch (weekName) {
//   case "sun":
//     console.log("Sun");
//     break;
//   case "mon":
//     console.log("mon");
//     break;
//   case "tues":
//     console.log("tues");
//     break;
//   default:
//     console.log("Not matched");
//     break;
// }
//for in loop for object
// const person1 = {
//   name: "zeba ",
//   age: 25,
//   gender: "Female",
// };

// for (let x of person1) {
//   console.log(x);
// }
// for (let p in person1) {
//   console.log(person1[p]);
// }
// const arr = [1, 2, 3, 4, 5];

// for (let x in arr) {
//   if (x == 3) {
//     arr[x] = 10;
//   }
// }
// console.log(arr);

// for (let x of arr) {
//   if (x == 10) {
//     console.log("10");
//   }
// }
// 1. getElementById in document access tag
// 2.innerText
// const div = document.getElementById("div");
// div.addEventListener("click", function () {
//   this.classList.toggle("heading");
// });
// div.innerHTML = "<h2>Updated Div</h2>";
// div.style.color = "red";
// div.style.textAlign = "center";
// div.setAttribute("title", "Hello WOrld App");
// div.setAttribute("data-title", "Hi Title is here");
// div.setAttribute("class", "heading");

// div.innerHTML = "<h2>Updated Div</h2>";

// const div = document.getElementsByClassName("divclass");
// for (let x = 0; x < div.length; x++) {
//   console.log(div[x].innerText);
// }

// const h1 = document.getElementsByTagName("h1");
// h1[0].innerText = "Hello World Updated";

// document.write("Hello");
// console.log("Hello");
// alert("hello");
// prompt("ENter Your Age");
// const header = document.createElement("h1");
// header.className = "head";
// header.innerText = "Hello World from document";
// header.addEventListener("click", function () {
//   this.className = "heading";
// });
// const div = document.getElementById("div");
// div.appendChild(header);

console.dir(document);
// console.log(document.URL);
// const body = document.all[6];
// body.style.background = "green";
// console.log(document.anchors);
// console.log(document.body);
// console.log(document.domain);
// console.log(document.doctype);
// console.log(document.forms);
// document.forms.myform.username.classList.toggle("styles");
// console.log(document.forms["myform"]["password"].value);
// console.log(document.links);
// console.log(document.images);
// document.body.style.backgroundColor = "red";

const mydiv = document.querySelectorAll("p:nth-child(even)");
console.log(mydiv);
mydiv[0].style.color = "red";
