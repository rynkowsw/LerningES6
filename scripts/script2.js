/**
 * Created by wojciech on 10.04.17.
 */

var a =1;
let b =1;
const c=1;

function myFunction(){
    var a =3;
    let b=3;
    const c = 3;
    if(true){
        var a =5;
        let b = 5;
        const c = 5;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    console.log(b);
    console.log(c);

}


myFunction();
console.log(a);
console.log(b);
console.log(c);