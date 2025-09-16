//<-----slice----->
let str = "JavaScript";

console.log(str.slice(0, 4));
console.log(str.slice(4));   
console.log(str.slice(-6, -3));

//<-----substring----->
let text = "HelloWorld";

console.log(text.substring(0, 5));
console.log(text.substring(5));   
console.log(text.substring(5, 2));

//<-----replace----->
let msg = "I love JavaScript";

console.log(msg.replace("JavaScript", "Python" , "Html" , "CSS")); 
console.log(msg.replace(/love/i, "like")); 

//<-----includes----->
let name = "Yogesh Sharma";

console.log(name.includes("Sharma"));
console.log(name.includes("Raj"));
console.log(name.includes("Yogesh"));

//<-----split----->
let fruits = "apple,banana,orange";

console.log(fruits.split(",")); 

let sentence = "Hello World";
console.log(sentence.split(" ")); 

//<-----trim----->
let data = "   JavaScript   ";

console.log(data.trim());  
console.log(data.trimStart());
console.log(data.trimEnd()); 


