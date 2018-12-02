let val;
// Number to String
val = String(123);
val = String(4 + 4);

//Boolean to a String
val = String(true);

//Date to a String
val = String(new Date());

//Array to String
val = String([1,2,3,4]);

//toString()
val = (5).toString();
val = (true).toString();

//output
console.log(val);
console.log(typeof val);
console.log(val.length);

//String to Number
val = Number('4.6');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); //NaN
val = Number([1,2,3,4]); //NaN

//parseInt
val = parseInt('100');
val = parseInt('100.76');//still 100

//parseFloat
val = parseFloat('100.78');

//output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

//type coercion
 const val1 = 5;
 const val2 = '6';
 const sum = Number(val1 + val2);
 console.log(sum); //Change to a String
 console.log(typeof sum);