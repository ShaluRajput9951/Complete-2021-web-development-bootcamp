// --- Changing casing (toUpperCase and toLowerCase)

// Create a prompt that asks for a name, then show the name with the first character in upper case and the rest in lower case:

var person=prompt("What is your name?");
//First-Character
var firstChar=person.slice(0,1);
var firstChar=firstChar.toUpperCase();
// Rest-Characters
var restCharacters=person.slice(1,person.length);
var restCharacters=restCharacters.toLowerCase();

alert("Hello "+firstChar+restCharacters);
