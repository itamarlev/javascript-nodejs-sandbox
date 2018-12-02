const firstName = 'William';
const lastName = 'Johnson';
const age = 30;
const str = 'hello there how are you?'
const tags = 'modern dancing, ballet dance, hip hop, indian dance'

let val;

val = firstName + ' ' + lastName;

//append
val = 'Hello ';
val += ' World';

val = 'Hello, my name is ' + firstName + ' I\'m ' + age + ' years old';

//Length
val = firstName.length;

//concat
val = firstName.concat(' ',lastName);

val = firstName.toUpperCase();
val = firstName.toLowerCase();

//indexOf
val = firstName[0];
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt
val = firstName.charAt(2);
//get last character
val = firstName.charAt(firstName.length - 1);
val = firstName.substring(0,4);
val = firstName.slice(-3); //like substring but can go from the end back
val = firstName.slice(-5, -2); 

//split
val = str.split(' ');
val = tags.split(',');

//replace
val = str.replace('how are you', 'good morning');

//includes
val = str.includes('how');
console.log(val);