let lucky = 23;
let unlucky; // gets assigned "any" type
lucky = '23';
unlucky = '22';
let font;
// font = "something" - would not be assignable to type
font = 'bold'; // good
const person = {
    first: 'Dan',
    last: 'Miller',
};
/*
this would fail:

const person: Person = {
  first: "Dan",
  last: "Miller"
  email: "d@d.com"
}
*/
//////////////////
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(2, 10);
///////////////////////
function noReturn() {
    console.log('Hi');
}
//////////////////
const arr = [];
arr.push(1);
// string? is optional
// this would fail
// const myListArr: MyList = []
const myListArr = [1];
///////////////////
// <T> 
class Test {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
let t = new Test("Dan");
