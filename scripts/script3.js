/**
 * Created by wojciech on 10.04.17.
 */

let array1 = [2,3];
let array2 = [1, ...array1, 5,6,7];
let array3 = [... array2] ;
array3.push(... array1);



console.log(array2);
console.log(array3);

let a, c;
[a, ,c =3] = array1;
console.log(a);
console.log(c);

let[e, ,...f ] = array3;
console.log(e);
console.log(f);