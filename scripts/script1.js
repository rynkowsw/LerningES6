/**
 * Created by wojciech on 10.04.17.
 */


let a =12;
function myFunctionLet(){
    console.log("let "+a);

    let b =1;

    if(true){
        let c =2;

        console.log("let "+b);
    }
    console.log("let "+c);
}


function myFunctionVar(){
    console.log("var "+a);

    var b =1;

    if(true){
        var c =2;

        console.log("var "+b);
    }
    console.log("var "+c);
}

myFunctionLet();
myFunctionVar();

