// //function expression  [израз, връщащ ф-я]
// var myFunction = function() {
//     console.log("This is some nasty stuff") //anonymous func
// }

// //caling
// myFunction();

var reaction = function(){
    console.log("otivam do drugiq magazin")
}
var angryReact = function(){
    console.log("iskam da govorq s maganera");
}

function buySomething(products, reactsIfMissing) {
    var hasQuantity = Math.random() < 0.5;
    if(!hasQuantity) {
        reactsIfMissing(); //callback [ф-и, к/о подаваме някъде и те ще се извикат след известно време - извикване на по-късен етап]
    }
}


buySomething("kartofi", reaction);
buySomething("morkovi", angryReact);