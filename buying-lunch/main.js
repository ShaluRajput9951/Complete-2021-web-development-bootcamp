// Challenge: Who's buying lunch

// Write a function which will select a random name from a list of names. 
// The person selected will have to pay for everybody's food bill.
// Important: The output should e returned from the function and you do not need alert, prompt or console.log.
// The output should match the example output exactly, including capitalisation and punctuation.

function whosPaying(names) {

    
    var randomPersonPosition = Math.floor(Math.random() * names.length); 
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}
