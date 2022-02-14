let arr = [];



function fizzBuzz() {
    for (let x = 1; x < 101; x++) {
        if (x % 3 === 0 && x % 5 === 0) {
            arr.push("Fizz Buzz");

        } else if (x % 5 === 0) {
            arr.push("Buzz");
        } else if (x % 3 === 0) {
            arr.push("Fizz");


        } else {
            arr.push(x);
        }
    }
    return arr;
}

console.log(fizzBuzz())