// 1. 선언단계 - 변수 이름을 메모리에 등록한다. 
// 2. 초기화단계 - 값을 저장하기 위해 공간을 확보하고 최초의 값을 변수에 할당한다. 


//var 키워드의 호이스팅
console.log(codeunion);  //codeunion이 아직 uninitialized, 즉 선언되었지만 할당이 되지 않은 상태
var codeunion = 'Awesome';

//let 키워드의 호이스팅
// console.log(test);
// let test = 'Hello'; //error, let은 호이스팅 과정에서 값의 초기화가 일어나지 않음, 호이스팅은 일어나 변수선언은 되었지만 초기화가 안된 상태

// 함수선언식 호이스팅
console.log(add(1,1));
function add(x,y) {
    return x + y;
}

// 함수표현식의 호이스팅
// console.log(add1(1,1));   //함수 호이스팅이 아닌 변수 호이스팅이 일어남
// const add1 = function(x,y) {.  // var로 선언하면 TypeError가 발생함, console.log(add)로 하면 undefined로 호이스팅이 발생하는걸 알 수 있다.
//     return x + y;
// } //const 선언으로 호이스팅은 일어났지만 마찬가지로 초기화가 없어서 에러 발생