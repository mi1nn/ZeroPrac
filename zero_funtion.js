/**
 *  1. 함수선언식
 *  2. 함수표현식
 *  3. 화살표함수
 */

// 1. 함수선언식
function make() {
    return '빵'
}

function plus(x, y) { 
    return x + y
}

// 2. 함수표현식
const make2 = function() {
    return '빵'
}

const plus2 = function(a, b) {
    return a + b
}

// 3. 화살표함수
const make3 = () => {
    return '빵'
}

const plus3 = (a, b) => {
    return a + b
}

const plus4 = (a, b) => a + b

const make4 = () => '빵'

console.log(make());
console.log(make2());
console.log(make3());
console.log(make4());

console.log(plus(1, 2));
console.log(plus2(1, 2));
console.log(plus3(1, 2));
console.log(plus4(1, 2));