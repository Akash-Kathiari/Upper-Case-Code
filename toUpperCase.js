//ask user for name, then format first letter of name to be capitalized and the rest of the characters to be lowercase
var name= prompt("what is your name?");
var firstChar=name.slice(0,1).toUpperCase();
var otherChar=name.slice(1,name.lenth).toLowerCase();
var capFullName=firstChar+otherChar
alert("Hello "+capFullName);