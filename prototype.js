const obj = {}
obj.toString(); //내장메서드
//최상위 오브젝트 Object.prototype를 가지고 있다. 원형객체이며 자신의 속성과 메서드를 불특정 객체에게 제공한다. 

console.log(obj.toString === Object.prototype.toString); //계층적으로 연결되어 있으며 이러한 연결을 프로토타입 체인이라고 한다. 

// 정적메서드: 객체 자체에 속한 함수, 객체, assign, method, array.isArray 해당 객체에서만 접근 가능
//Array.assign() , Object.isArray() 에서 에러 발생

const codeunion = {
    name: 'minsu'
};

console.log(codeunion.__proto__);

const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
