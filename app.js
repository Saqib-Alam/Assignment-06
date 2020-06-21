                                //   CHAPTER 21-25

// Task no.1. Write a program that takes two user inputs for 
// first and last name using prompt and merge them in 
// a new variable titled fullName. 
// Greet the user using his full name.


// var first=prompt("Enter your First Name")
// var last=prompt("Enter your Last Name")

// var fullName=first + " " + last

// alert("Nice to see you "+fullName)



// Task No.2  Write a program to take a user input about his 
// favorite mobile phone model. Find and display the length 
// of user input in your browser

// var mob=prompt("What's your favourite Mobile Phone")

// document.write("Your favourite mobile Mobile Phone is "+mob)
// document.write("</br>Length of string is : "+mob.length)



// Task no.3 Write a program to find the index of letter “n” in 
// the word “Pakistani” and display the result in your browser .

// var string="Pakistani";

// document.write("String :"+string +"</br>Index of 'n' is "+string.indexOf("n"))



// Task No.4 Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var string="Hello World";

// document.write("String :"+string +"</br>Index of 'l' is "+string.lastIndexOf("l"))


// Task No.5 Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var string="Pakistani";

// document.write("String :"+string +"</br>Character at index 3 is :  "+string.charAt(3))


// Task no.6 Repeat Q1 using string concat() method.


// var first=prompt("Enter your First Name")
// var last=prompt("Enter your Last Name")

// var fullName=first + " " + last

// alert("Nice to see you "+first.concat(last))


// Task no. 7 Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var c="Hyderabad"

// document.write("City :"+c+"</br> After replacement : "+c.replace("Hyder","Islam"))


// Task no. 8 Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// document.write("String : "+message+"</br>After replacement : "+message.replace(/and/g,"&"))


// Task no. 9 Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


//  var string="472"
//  document.write("Value : "+string+"</br>Type : String</br>Value : "+Number(string)+"</br>Type : Number")


// Task no. 10 Write a program that takes user input. Convert and
// show the input in capital letters.

// var string=prompt("Enter any string")

// document.write("User Input : "+string+"</br>Upper case : "+string.toUpperCase())



// Task no. 11 Write a program that takes user input. Convert and
// show the input in tital case.

// var str=prompt("Enter any string")
// str = str.toLowerCase();
// var str=str.split(" ")

// for( var i=0;i<str.length;i++){
// str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 

// }
// document.write(str.join(" "))



// Task no. 12 Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36 ;
// var n=num + "";
// var n=n.replace(".","");
// document.write("Number : "+num+"</br> Result : "+n.toString())


// Task no. 13 Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// var name=prompt("Emter your name")

// for(var i=0;i<name.length;i++){

//     if(name[i]=='@' || name[i]=='!' || name[i]==',' || name[i]=='.'){

//         alert("Enter valid name")
//         break;
//     }
// }



// Task no. 14 You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var search=prompt("Welcome to ABC bakery, what do you want to Order.");

// var a=search.toLowerCase();

// for ( var j=0;j<1;j++){
//     for(var i=0 ; i<A.length ; i++){

//         if(A[i]===a){

//         alert(search+" is available in our bakery at index "+i); 
//         var find="yes";
//     } 
//   }
  
//   if(find=="yes"){
//       break;
//   }
//   else{
//     alert("Sorry "+search+" is not available"); 
//   }
// }


// Task no. 15  Write a program to take password as an input from user. 
// The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long If the password does 
// not meet above requirements, prompt the user to enter a valid password. 
// For character codes of a-z, A-Z & 0-9,
//  refer to ASCII table at the end of this document.


// var pas=prompt("Enter your Pasword")
// var number=/[0-9]/;
// var alphabet=/[a-zA-Z]/;

// if(pas.charAt(0)>=1 || pas.charAt(0)<=9){

//     alert("Sorry! Password cannot begin with a number </br> Please, Enter a valid Password")
// }

// if((pas.match(alphabet))){
    
//     var alpha=1;
// } 
// else {
//     alert("Your password should contain atleast 1 alphabet</br> Please, Enter a valid Password")
// }

// if((pas.match(number))){
    
//     var num=1;
// } 
// else {
//     alert("Your password should contain atleast 1 number </br> Please, Enter a valid Password")
// }

// if(num==1 && alpha==1 && pas.length<6){

//     alert("Password length Must be greater than 6 </br> Please, Enter a valid Password")
// }

// else if(num==1 && alpha==1 && pas.length>=6){

//     alert("Congrats! Your password meet all requirements.")
// }


// Task no. 16 Write a program to convert the following 
// string to an array using string split method. 
// var university = “University of Karachi”;
//  Display the elements of array in your browser.

// var university="University of Karachi";

// var arr=university.split('');
// document.write(arr);


// Task no. 17 Write a program to display the last character of a user input.

// var str=prompt("Enter an string")

// lastChar=str.charAt(str.length-1)

// document.write("User input : "+str+"</br> Last character : "+lastChar)



// Task no 18 You have a string “The quick brown fox jumps over the lazy dog
// Write a program to count number of occurrences of word “the” in given string.

// var str="The quick brown fox jumps over the lazy dog";
// var a=0;
// s=str.toLowerCase();
// for(var i=0; i<str.length;i++){

//     if(s.slice(i,i+3)=="the")
//     var a=a+1
// }

// document.write("Text : "+str+"</br>There are "+a+" Occuranes of the word 'the' .")



                                    // CHAPTER 26-30

//  Task no.1 Write a program that takes a positive integer 
//  from user & display the following in your browser. 
//  a. number 
//  b. round off value of the number 
//  c. floor value of the number 
//  d. ceil value of the number

// var int=+prompt("Enter positive Integer")

// document.write("Number : "+int)
// document.write("</br>Round off value : "+Math.round(int))
// document.write("</br>Floor value : "+Math.floor(int))
// document.write("</br>Ceil value : "+Math.ceil(int))


// Task no. 2Write a program that takes a negative floating
//  point number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number


// var int=+prompt("Enter negative Integer")

// document.write("Number : "+int)
// document.write("</br>Round off value : "+Math.round(int))
// document.write("</br>Floor value : "+Math.floor(int))
// document.write("</br>Ceil value : "+Math.ceil(int))


// Task no. 3 Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var int=+prompt("Enter any Integer")

// document.write("Number : "+int)
// document.write("</br>Absolute value : "+Math.abs(int))


// Task no. 4 Write a program that simulates a dice using random() method of JS 
// Math class. Display the value of dice in your browser.:


// var a=Math.round((Math.random()*5)+1);
// document.write("Random dice value : "+a)


// Task no. 5 Write a program that simulates a coin toss
//  using random() method of JS Math class.
//  Display the value of coin in your browser

// var a=Math.round(Math.random()*1);

// if(a==0){
//     alert("Heads")
// }
// else if(a==1){
//     alert("Tails")
// }

//  Task no.6 Write a program that shows a random number
//   between 1 and 100 in your browser.

// var random=Math.round((Math.random()*99)+1);
// document.write("Random number between 1 and 100  : "+random)

// Task no.7 Write a program that asks the user about his weight. 
// Parse the user input and display his weight in your browser.
//  Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms

// var weigth=prompt("Enter your weigth")
// var weigh=parseInt(weigth);
// alert(weigh+" Kilograms")



// Task no. 8 Write a program that stores a random secret number 
// from 1 to 10 in a variable. Ask the user to input a number between 1 and 10.
//  If the user input equals the secret number, congratulate the user.


// var a=Math.round((Math.random()*9)+1);

// var guess=prompt("Guess the secret number from 1-10")

// if(a==guess){

//     alert("Congrats! you guessed the correct number")
// }
// else(

//     alert("Try again!")
// )


                                // CHAPTER 31-34

//  Task no. 1 Write a program that displays current date and time in
//  your browser.  

// var date=new Date();

// document.write("Current date : "+date)

// Task no. 2 Write a program that alerts the current month in words.
// For example December.

// var months=["january","february","march","april","may","june","july","august","september","october","november","december"]

// var date=new Date();
// var month = date.getMonth();
// currMonth=months[month];
// document.write("Current month : "+currMonth)


// Task no. 3 Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var day = new Date();
// var theDay = day.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("Current day: "+nameOfToday)


// Task no. 4 Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var day = new Date();
// var theDay = day.getDay();
// var nameOfToday = dayNames[theDay];
// if(theDay==0 || sat==7){

//     document.write("It’s Fun day")
// }
// else {
// document.write("Current day: "+nameOfToday)
// }

// Task no. 5 Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// var fullDate = new Date();
// var date = fullDate.getDate();

// if(date>=1 && date<=15){
 
//     document.write("First fifteendays of the month")
// }

// else(
//     document.write("Last days of the month")
// )


// Task no. 6 Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var fullDate = new Date();
// document.write("Current Date : "+fullDate )
// var milliSeconds = fullDate.getTime();
// document.write("</br>Elapsed milliseconds since 'January 01, 1970' : "+milliSeconds )
// seconds=milliSeconds /(1000*60*60);
// document.write("</br>Elapsed Minutes since 'January 01, 1970' : "+seconds)



// Task no. 7 Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var fullDate = new Date();
// var hour = fullDate.getHours();

// if(hour>=0 && hour<12){
//     document.write("It's AM")
// }
// else{
//     document.write("It's PM")
// }


// Task no. 8 Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate=new Date("May 31, 2020")



// Task no. 9 Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015 

// var Ramzan=new Date("April 25, 2020");
// var day=Ramzan.getTime();

// var currentDate = new Date();
// var days=currentDate.getTime();

// var daysPast=days-day;
// var d=daysPast/(1000*60*60*24);
// document.write(d+" Days past since 1st Ramzan, 2020")


// Task no. 10 Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.


// var currentDate = new Date();
// document.write(currentDate)

// var pastDate = new Date();
// pastDate.setFullYear(2015)
// pastDate.setMonth(11)
// pastDate.setDate(05)
// pastDate.setHours(22)
// pastDate.setMinutes(50)
// pastDate.setSeconds(16)

// document.write("</br>"+pastDate)

// var currentDate = currentDate.getTime();
// var pastDate = pastDate.getTime();

// var milliSeconds=currentDate-pastDate;
// document.write("</br>"+pastDate/(1000*60)+" Seconds has passed since reference date of 2015")


// Task no. 11) Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var currentDate = new Date();
// document.write("CurrentDate : "+currentDate)
// var hour=currentDate.getHours();
// var h=hour-1;

// currentDate.setHours(h)
// document.write("</br>1 Hour ago it was : "+currentDate)



// Task no. 12) Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date();
// document.write("CurrentDate : "+currentDate)
// var year=currentDate.getFullYear();
// var y=year-100;

// currentDate.setFullYear(y)
// document.write("</br>100 years back it was  : "+currentDate)


// Task no 13) Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var age=prompt("Enter your age ")
// var currentDate = new Date();
// document.write("Youe age is : "+age)
// var year=currentDate.getFullYear();
// var y=year-age;

// document.write("</br>Your birth year is  : "+y)


// Task no 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var currentDate = new Date();
// var m=currentDate.getMonth();
// var months=["january","february","march","april","may","june","july","august","september","october","november","december"]
// month=months[m]

// document.write("<h2>K-Electric Bill</h2>")

// var name=prompt("Enter customer name")
// var units=prompt("Enter number of units consumed.")
// var charges=5.79

// document.write("Customer Name : "+name)
// document.write("</br>Current Month : "+month)
// document.write("</br>Number of Units : "+units)
// document.write("</br>Charges per Unit : "+charges)

// netAmmount=(units*charges)
// document.write("</br>Net Amount Payable (within Due Date) : "+netAmmount.toFixed(2))

// surcharges=(netAmmount*10)/100
// document.write("</br>Late amount Surcharges : "+surcharges.toFixed(2))

// document.write("</br>Gross Amount Payable (after Due Date) : "+(surcharges+netAmmount).toFixed(2))



                                // CHAPTER 35-38

// Task no 1 Write a function that displays current date & time in your
// browser.                              

// function currentDate() {
//     var cDate = new Date();
//     document.write("Current Date and Time : "+cDate)

// }

// currentDate();


// Task no 2 Write a function that takes first & last name and then it
// greets the user using his full name.

// function greeting(){

//     var firstName=prompt("Enter your first Name")
//     var lastName=prompt("Enter your last Name")
//     var fullName=firstName +" "+ lastName;
//     alert("Hi! "+fullName)
// }

// greeting();


// Task no 3 Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function sum(a,b){

//     var d=a+b;
//     alert(d)
    
// }

//     var a=+prompt("Enter first number to add")
//     var b=+prompt("Enter second number to add")

// sum(a,b);


// Task no 4  Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// function calculator(num1,operator,num2){

// if(operator==="+"){
//     return num1 + num2;
// }
  
// else if(operator==="-"){
//     return num1 - num2;
// }
  
// else if(operator==="*"){
//     return num1 * num2;
// }
  
// else if(operator==="/"){
//     return num1 / num2;
// }
// else{
//     return "Incorrect Operator"
// }

// }

//     var num1=+prompt("Enter first number")
//     var num2=+prompt("Enter second number")
//     var operator=prompt("Enter Operator")


// alert(calculator(num1,operator,num2));

// Task no 5. Write a function that squares its argument.

// function square(a){
       
//     return a*a
// }

// num=+prompt("Enter any number to square")
// alert("Square of given number is : "+square(num))


// Task no 6. Write a function that computes factorial of a number.

// function factorial(n){
// var fact=1;
//     for(var i=n; i>=1;i--){
       
//         fact=fact*i;
//     }
//     return fact;

// }

// var num=prompt("Enter any number to find is factorial")
// alert("Factorial of number is : "+factorial(num))


// Task no 7 Write a function that take start and end number as inputs
// & display counting in your browser.

// function counting(a,b){

//     for(var i=a;i<=b;i++){
//      if()
//         document.write(i+" ")
//     }
// }

// var start=prompt("Enter starting number for counting")
// var end=prompt("Enter end number for counting")

// counting(start,end);


// Task no 8 Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function calculateHypotenuse(b,p){


//     function calculateSquare(b,p){
        
//           var base=b*b;
//           var per=p*p;
//           return base+per;

//     }
//     var hyp=calculateSquare(b,p);
//     alert ((Math.sqrt(hyp)).toFixed(2));
// }

// var x=+prompt("Enter base")
// var y=+prompt("Enter perpendicular")


// calculateHypotenuse(x,y);



// Task no 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// function rectangle(w,h){

//      alert("Area of rectangle is : "+(w*h))

// }

// var h=prompt("To calculate area of rectangle enter value of heigth since width is 22 by default.")

// rectangle(22,h);



// Task no 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.


// function palindrome(word){

//   var palin="";
//       for(var i=word.length - 1;i>=0;i--){

//         palin +=word[i]
//       }
//       if(word===palin){
//           alert("Given word is palindrome")
//       }

//       else{
//           alert("Given word is not palindrome")
//       }
// }

// var word=prompt("Enter word to check whether it is pelindrome")

// palindrome(word);


// Task no 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// function titleCase(str){

//   str = str.toLowerCase();
//   var str=str.split(" ")
//   for( var i=0;i<str.length;i++){
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    
//     }

//     return str


// }
// var str=prompt("Enter any string to cenvert in title case");

// alert("Tile case of string is : "+titleCase(str).join(" "))


// Task no 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// function findLongestWord(str) {
//   return str.length;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");


// function longestWord(str){

//   var split=str.split(" ");
//   var longestWord=0;

//   for(var i=0;i<split.length;i++){

//     if(split[i].length>longestWord){

//       longestWord=split[i].length;
//     }
//   }

//     for(var j=0;j<split.length;j++){

//       if(split[j].length==longestWord){

//         alert("The longest word is : "+split[j])
//       }
//     }
// }

// var str="The quick brown fox jumped over the lazy dog";
// longestWord(str);




// Task no 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


// function occurences(str,occ){

//   var a=0;
//   var s=str.toLowerCase();
//   for(var i=0; i<str.length;i++){
  
//       if(s.slice(i,i+(occ.length))==occ){
//       var a=a+1
//       }
//   }
  
//   document.write("Text : "+str+"</br>There are "+a+" Occuranes of the word "+occ)

// }

// var str="The quick brown fox jumps over the lazy dog";
// var occ="the";

// occurences(str,occ);


// Task no 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

//  function calcCircumference(r){
       
//      document.write("The Circumference of circle is : "+(2*3.142*r).toFixed(2))

//  }

// function calcArea(r){
   
//   document.write("</br>The Area of circle is : "+(3.142*r*r).toFixed(2))

// }

//  var r=prompt("Enter radius to calculate circumference and Area of circle")

//  calcCircumference(r);
//  calcArea(r);
