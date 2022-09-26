
// ! IIFE


// * a
let arraa = [1, 2, 3, 4, 5];

(function foo() {
    for (let i = 0; i < arraa.length; i++) {

        if (arraa[i] % 2 !== 0) {
            // pu.push(arra[i])
            console.log(`odd num  IIFE function ${arraa[i]}`);
        }
    }
}());


// *C
let addNum = [12, 13, 14, 15, 18];

(function fo() {
    var sum = 0;
    for (var i = 0; i < addNum.length; i++) {
        sum = sum + addNum[i];
    }

    console.log(sum);

}())


// ! Arow Function  =>

// *a    

let arrAroww = [1, 2, 3, 4]
let oddArow = () => {

    for (let i = 0; i < arrAroww.length; i++) {
        if (arrAroww[i] % 2 != 0) {

            // console.log(arrArow[i]);
            console.log(`odd num  arow function ${arrAroww[i]}`);
        }
    }
}

oddArow();



// * c
let rest = [12, 13, 14, 15, 190];

var foo = () => {
    var sum = 0;
    for (var i = 0; i < rest.length; i++) {
        sum = sum + rest[i];
    }
    return sum;

}
console.log(foo(...rest))

// function na(a, b) {
//     console.log(a, b)
// }
// na(...arr)
// *d

let a = [2, 3, 4, 5, 6]
let b = [5, 41, 33, 11, 111]

let primeXray = (num) => {
    if (num < 2)
        return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

let choosePrimes = (nums) => {
    let primeBlock = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (primeXray(num))
            primeBlock.push(num);
    }
    return primeBlock;
}


console.log(choosePrimes(a));
console.log(choosePrimes(b));

// *e
let palindromesAA = "gaaag";
let palindromesBB = "vasanth";

let palindromes = (value) => {
    let left = 0;
    let right = value.length - 1;
    while (left < right) {
        if (value[left] != value[right]) {
            return false
        }
        left++;
        right--;

    }
    return true
}
console.log(palindromes(palindromesAA))



