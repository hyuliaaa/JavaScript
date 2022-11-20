
//if else
console.log("hello");

var s = 5;

console.log(s)


var inf = Infinity; // the biggest number
var mInf = -Infinity; //the smallest number

console.log(typeof s);

var bool = true; //true and false are keywords

console.log(bool); 


var x;

console.log(x) //undefined


var b = null;
console.log(typeof b) ; //returnt object


var a ="5";
console.log(a==5); //true

// === checks the values but also the types


console.log(a===5); //false


//Arrays - have dynamic size
var arr = [3, 4, 4, 2]; //4 variables of type number
arr[5] = 6;


console.log("Array looping: ")
for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log(arr); //[ 3, 4, 4, 2, <1 empty item>, 6 ]

//if we expand the array, the missing elements will be undefined

//the elements in an array can be of any type

var arr2 = new Array(3,4,1); //an array with elements [3,4,1];
var arr3 = new Array(5); //create an array with 5 cells



var arr4 = [1,2,3];

arr4["Ivan"] = 5; //като добавим иван ->5 получаваме асоциативен масив
//с ключ и стойност


console.log(arr4); //[ 1, 2, 3, Ivan: 5 ]

var isArray = Array.isArray(arr4);
console.log(isArray);

