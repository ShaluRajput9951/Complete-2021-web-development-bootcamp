// --- Challenge: Leap year calculator challenge
// Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February.
// This is how to work out whether if a particular year is a leap year:
// A year is a leap year if it is evenly divisible by 4;
// except if that year is also evenly divisible by 100;
// unless that year is also evenly divisible by 400.

var getYear=prompt("Enter Year");
 if((getYear%4)!==0){
     alert("Not leap year");
 }else if ((getYear%100!==0)){
     alert("Leap year");
 }else if((getYear%400!==0)){
     alert("Not leap year");
 }else{
     alert ("Leap year");
 }