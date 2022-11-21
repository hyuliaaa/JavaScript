function findMax(){
    var maxNum = 0;

    if(arguments.length <= 0) {
        console.log("No args given")
    }
    for(var i = 0 ; i < arguments.length; i++) {
        if(arguments[i] > maxNum) {
            maxNum = arguments[i];
        }
    }

    console.log(maxNum);
}


findMax(0);
findMax(6,2,9);

