
/**
 * Created by wojciech on 10.04.17.
 */

function test1() {
    let object = {"name": "John", "age": 23};
    let name, age;
    p = ({name, age} = object);

    console.log(name);
    console.log(age)
    console.log(p)
}
function test2() {
    let {["first" + "Name"]: x} = {firstName: "Eden"};
    console.log(x);
}
function test3() {
    let {name, other} = {name: "nameText", other: {age: 23}}
    let age;
    ({age} = other);
    console.log(name);
    console.log(age);
    console.log(other);
}

test1();
test2();
test3();