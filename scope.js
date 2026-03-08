// const codeunion = 1; <- 전역스코프

function fn() {
    const codeUnion = 1;  //지역스코프
    console.log(codeUnion)
}

fn();

// console.log(codeUnion); //에러, 지역스코프는 함수 내부에서만 접근 가능

/**
 * 1. 전역 스코프 (global scope) : 모든 범위
 * 2. 지역 스코프 : 블록스코프, 함수스코프
 * 3. 렉시컬 스코프: 함수의 상위스코프는 자신이 정의된 위치에 따라 결정된다.
 */

function fn2() {
    const union = 1;

    function fn3() {
        const inner = 2;
        console.log("1: ", union);  //스코프 안쪽에서 바깥쪽으로 접근 가능
    }

    fn3() 
        console.log("2: ", union);
        // console.log("3: ", inner); //inner 접근 불가, 바깥쪽에서 내부로 접근 불가
}

fn2();

// console.log("4: ", union); //에러, union은 fn2의 지역스코프에서 선언된 변수이므로 fn2의 바깥에서는 접근 불가


function fnc() {
    if (true) { 
        var str = 'function scope'. 
        //let과 const로 선언된 변수는 함수를 포함한 모든 블록을 스코프로 따르지만 var키워드는 블록을 무시하고 함수스코프만 따른다. 
        //그래서 함수 내부에서 var 키워드로 선언된 함수는 함수 내부 어디서든 접근 가능
    }

    console.log(str);
};
fnc();

// 렉시컬 스코프
let str = 'lexical';

function foo() {
    let str = 'scope'
    bar();
}

function bar() {
    console.log(str);
}

foo();
bar();