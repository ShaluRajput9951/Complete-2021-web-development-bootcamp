// --- Challenge: love calculator
// Create a love calculator for the user to introduce 2 names and get a random "compatibility percentage".

prompt("What is your name?");
prompt("What is your crash's name?");

var loveScore=Math.floor(Math.random()*100)+1;


// Add customized message depending on the love score obtained

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%." + " You love each other like Kanye loves Kanye");
}

if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%.");
}

if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%." + " You get together like oil and water");
}
