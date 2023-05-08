// var a;
// console.log(a)

// var b=null;
// console.log(b)

// var a=100000000n
// console.log(typeof a)

// var StudentName = "Justin"
// console.log(StudentName)

// var StudentRegNumber = "S1913344"
// console.log(StudentRegNumber)

// var StudentId = 101
// console.log(StudentId)


// var a = 2
// var b = 3
// console.log(`addition of ${a} and ${b} is ${a+b}
// subtraction of ${a} and ${b} is ${a-b}
// multiplication of ${a} and ${b} is ${a*b}
// modulus of ${a} and ${b} is ${a%b}
// square of ${a} is ${a**b}
// square of ${b} is ${b**a}`)

// console.log(a+=b)
// console.log(a*=b)
// console.log(a-=b)
// console.log(a/=b)
// console.log(a%=b)


// ADDITION OPERATOR

// console.log("harry" + 1);
// console.log("harry"+"potter");
// console.log("justin"+1);
// console.log(true-false);
// console.log("harry"-undefined);
// console.log("harry"+null);
// console.log("harry"+1);
// console.log("bull"+undefined);   
// console.log(undefined + null)      


//SUBTRACTION OPERATOR

// console.log("5"-"1")
// console.log(8-"5")
// console.log(2 - "2")


//LOGICAL OPERATOR

// console.log("2">3)
// console.log("2"<"3")
// console.log("2"=="3")
// console.log("2"=="2")

//NaN(not a number)

// console.log(7-"color")
// console.log(7*"helo")
// console.log(7*"7")


// var a=Number(prompt('enter a :'));
// var b=Number(prompt('enter b:'));
// a+b;


// console.log("Nan"=="Nan");
// console.log(NaN===NaN)
// // console.log(1=="1")
// console.log("1"===1)



// console.log((2<3)&&(3>2));
// console.log((2>4)||(1<2));
// console.log((3>4)&&(3<2));
// console.log(2>3<4>2<8)

// ZERO VALUES IN JAVASCRIPT

// console.log(0&&4);
// console.log(false&&5);
// console.log(undefined&&8);
// console.log(null&&1);
// console.log(""&&2);
// console.log(NaN&&4);

// console.log(true && false)
// console.log(2 && 4);
// console.log(true && 5);
// console.log(5 && 8);
// console.log("null" && 1);
// console.log(" " && 2);
// console.log("NaN" && 4); 

// console.log(0||4);
// console.log(false||5);
// console.log(undefined||8);8
// console.log(null||1);
// console.log(""||2);
// console.log(NaN||4);




// PROGRAMES USING CONDITIONAL STATMENTS

// var a=Number(prompt('enter a'));

// if(a%2==0)
// {
//     console.log(prompt(`even`))
// }
// else if(a%2==1)
// {
//     console.log(prompt(`odd`))
// }



// var a=Number(prompt('enter the marks'))
// if(a>=80 && a<=100)
// {
//     console.log(`A`)
// }
// else if(a>=50 && a<=79)
// {
//     console.log('B')
// }
// else if(a>=35 && a<=49)
// {
//     console.log(`c`)
// }
// else if(a<35)
// {
//     console.log(`failed`)
// }
// else
// {
//     console.log(`enter a valid input`)
// }



// SWITCH STATEMENT

// var a=Number(prompt('enter the number:'))
// switch(a)
// {
//     case 1 : console.log('monday')
//     break;

//     case 2 : console.log('tuesday')
//     break;

//     case 3 : console.log('wednesday')
//     break;

//     case 4 : console.log('thursday')
//     break;

//     case 5 : console.log('friday')
//     break;

//     case 6 : console.log('saturday')
//     break;

//     case 7 : console.log('sunday')
//     break;

    // default : console.log('enter a valid number') //we can insert this anywhere we want but use break if used in between's.
// }

// var a=(prompt('enter the day:')).toLowerCase()
// switch(a)
// {
//     case "monday" : console.log('day1')
//     break;

//     case "tuesday" : console.log('day2')
//     break;

//     case "wednesday" : console.log('day3')
//     break;

//     case "thursday"  : console.log('day4')
//     break;

//     case "friday" : console.log('day5')
//     break;

//     case "saturday"  : console.log('day6')
//     break;

//     case "sunday" : console.log('day7')
//     break;
// }


// DEBBUGGING

// var a="30"
// var b=20
// console.log(a * b)


//WHILE LOOP

// var a=3
// while(a<=100)
// {
//     console.log(a)
//     a+=3
// }

//DO WHILE

// var a=1
// do
// {
//     console.log('hello')
//     console.log(a)
//     a++
// }
// while(a)

// for(I=1;I<=5;i++)
// {
//     console.log('ah')
// }



// FUNCTIONS:

//WHEN WE HAVE ONE CONDITION OR STATMENT
// var demo = () => console.log('hello world')
// demo()

//FOR MULTIPLE CONDITION OR STATMENTS:
// var demo = (a, b)=> {
//     console.log(a+b)
//     console.log("hello world");
// }
// demo()

//
// var demo = x => console.log("justin")
// demo()


//reutrn keyword is not mandatory in arrow function
// var arrow1 = (a,b) => console.log(a + b)
// arrow1(10,20)

//OR

// var arrow1 = (a,b) => a + b;
// console.log(arrow1(10,20))


 //DIFFERENCE BETWEEN VAR, LET, CONST

// GLOBAL SCOPE
// {
//  var a = 10;
//  console.log(a)
// }
// console.log(a)



//BLOCK SCOPE

// {
//     let a = 20;
//     console.log(a)
// }
// console.log(a)


// {
//     const a = 30;
//     console.log(a)
// }
       

//2nd difference in var let and const

// var a;
// console.log(a) //without initialization we can declare var

// let b;
// console.log(b) //without initialization we can declare let

// const c=10;
// console.log(c) //value should be initialzed ,.m;


//3rd difference in var let const


//in var we can overrite the value by using the same varibale name
// var a=10;
// console.log(a)

// var a=20;
// console.log(a)

//in let we cannnot overrite the value by using the same varibale name
// let b=10;
// console.log(b)

// let d=20;
// console.log(b)

//in const we cannot overrite the value by using the same varibale name
// const c = 10;
// console.log(c)

// const u = 20
// console.log(c)



// var a = Number(prompt('enter the number:'))
// var factorial = 1
// while (a > 0 ) {
//     factorial*=a
//     a-=1
// }
// console.log(`factorial of is ${factorial}`);

// var a = Number(prompt('enter the number:'))
// var out = 1
// for (var i=a; i>0; i--){
//     out*=i
// }
// console.log(out )

// var a = Number(prompt('enter the number'))
// if (a%2==0)
// {
//     console.log(`even number`)
// }
// else
// {
//     console.log(`odd number`)
// }













