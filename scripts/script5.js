/**
 * Created by wojciech on 10.04.17.
 */

function test1() {
    let x = 1, y = 2;
    let object = {x, y};

    console.log(x);
    console.log(y);
    console.log(object);
}

function test2(){
    let object ={
        ["firs"+"second"]:"ciacho"
    }

    console.log(object["firs"+"second"]);
}


test1();
test2();
