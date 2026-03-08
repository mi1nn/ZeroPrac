// 클로저: 내부 함수가 외부 함수의 변수에 접근할 수 있는 매커니즘

function outerFunc() {
    let num = 0;
    function innerFunc() {
        num = num + 1;
        console.log(num);
    }
    return innerFunc;
}

const inner = outerFunc();

inner();
// 디버깅: 스크립트 내의 에러를 찾아내는 과정

const calculatorFunc = function() {
    let num = 0;
    return {
        plus: function() {
            return num = num + 1;
        },
        minus: function() {
            return num = num - 1;
        },
    };
};

const calculator = calculatorFunc();
const calculator2 = calculatorFunc();

console.log(calculator.plus());
console.log(calculator.plus());
console.log(calculator.plus());
console.log(calculator2.minus());

// console.log(num); 접근불가