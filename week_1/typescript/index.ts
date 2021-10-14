let lucky: any = 23;
let unlucky; // gets assigned "any" type

lucky = '23';
unlucky = '22';

//////////////////

type Style = 'bold' | 'italic' | 'opaque';

let font: Style;

// font = "something" - would not be assignable to type

font = 'bold'; // good

///////////////////

interface Person {
  first: string;
  last: string;
}

const person: Person = {
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

function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

pow(2, 10);

///////////////////////

function noReturn(): void {
  console.log('Hi');
}

//////////////////

const arr: number[] = [];

arr.push(1);

// these will fail:

// arr.push("23")
// arr.push(false)

////////////////////

type MyList = [number, string?, boolean?];

// string? is optional
// this would fail
// const myListArr: MyList = []

const myListArr: MyList = [1];

///////////////////

// <T> 

class Test<T> {
  constructor(public name: T) {
    this.name = name;
  }
}

let t = new Test("Dan")