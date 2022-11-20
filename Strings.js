var text = "test string"; //strings are immutable
text = text + "!" //a brand new string value in memory
//the original value stays intact

console.log(text);
text = text.toUpperCase();

console.log(text);


var host = "Vankata"
//template Strings
var result = `Otivam da piq rakiq vav ${host}`;

console.log(result)

console.log(result.charAt(0));

var masiv = result.split(" ");
console.log(masiv);