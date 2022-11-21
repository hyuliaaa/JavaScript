var a = 123;

function funct() {
    console.log(a); //error, we are looking for the let a,
    //which here is undefined
    let a = 1;
    console.log(a)
}

function func(){
    console.log(a); //undefined
    var a = 1;
    console.log(a); //1
}

//funct();

func();