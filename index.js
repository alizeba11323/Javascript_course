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
