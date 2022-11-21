
var successReaction = function() {
    console.log("Eto, zaredi");
}



//arrow function
var failReaction = () => {
    console.log("Emii, nqma rezultat")
}

function load(onSuccess, onFail){

    //play animation
    //wait 5 seconds for it to be loaded
    var success = Math.random() < 0.5;
    if(success) {
        successReaction();
    } else{
        failReaction();
    }

}


load();