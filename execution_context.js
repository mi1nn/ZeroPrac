// 실행 컨텍스트와 스택
// 전역 실행 컨텍스트와 함수 실행 컨텍스트
// 전역 실행 컨텍스트: 전역 변수와 함수를 생성하고, 이들을 관리하기 위해 최상위 스코프인 전역 스코프를 생성하여 전역 변수와 함수들을 등록한다. 이 전역 실행 컨텍스트는 코드가 끝까지 실행되면 제거된다. 
// 함수 실행 컨텍스트: 함수가 호출될 때마다 생성되는 실행 컨텍스트이다. 함수의 매개변수와 지역변수등이 해당 실행 컨텍스트가 관리하는지 지역 스코프에 등록된다. 이 함수 실행 컨텍스트는 함수가 종료되면 제거된다. 
// 이 실행 컨텍스트들은 스택으로 관리된다. 스택은 실행 컨텍스트 스택 또는 콜스택으로도 자주 불린다. 스택에서 코드가 실행되는 흐름에 따라 실행 컨텍스트들이 추가되고 제거된다. 

function first() {
    console.log(1, "Inside first function");
    second();
    console.log(2, 'Again inside first function');
}

function second() {
    console.log(3, 'Inside second function');
}

first();

console.log(4, 'Inside Global Execution Context');
//first와 second가 전역 실행 컨텍스트에 저장된다. 


//호이스팅 복기
console.log(x);
console.log(y);

let x = 1;
var y = 2;  //var키워드는 선언과 초기화가 동시에 일어남

function fn() {
    const z = 3;
}

fn();
console.log(x);
console.log(y);

/**
 * 전역 코드의 평가와 실행
 * 1-1. 전역 객체 생성 (WEB: window, Node.js: global)
 */