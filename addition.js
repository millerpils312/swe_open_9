// procedural progamming (imperative)

/*

do this
  then do that
  then do this
end

*/

function addition(numbers) {
  // result variable
  let result = 0;

  // numbers.length = length of numbers array
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i];

    // += compound operator
    // result = result + number[i]
  }

  // return the result
  return result;
}

console.log(addition([1, 2, 5, 6]));

/*
  mutable = able to change
  immutable = not able to be changed, e.g primitives strings, integers etc

  objects / arrays = mutable

  value vs reference js
*/
