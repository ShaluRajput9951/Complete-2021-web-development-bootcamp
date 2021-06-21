// --- String lengths and retrieving the number of characters

// Create a prompt where the user can enter a long string such as a paragraph of text and you will tell them how many characters they have written

var tweet=prompt("Write here and you will see the number of characters you have written and the remaining ones");
var tweetCount=tweet.length;
alert("You have written "+tweetCount+" characters, you have "+(140-tweetCount)+" characters left.");

// Create a prompt that, when I paste a text, cuts it to 140 characters

var tweetCut=prompt("Write here and your text will be cut down to 140 characters");
var tweetUnder140=tweetCut.slice(0,140);
alert(tweetUnder140);