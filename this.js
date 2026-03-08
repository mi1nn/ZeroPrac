/**
 * 1. 전역에서의 this
 * 2. 함수와 메서드에서의 this
 * 3. 생성자에서의 this
 * 4. Arrow Function에서의 this
 * =========================================
 * 5. call, apply, bind에서의 this
 * 6. Strict Mode에서의 this
 * 7. DOM 이벤트 핸들러에서의 this
 * 8. 클래스에서의 this
 * 9. 모듈에서의 this
 * 10. this와 프로토타입 체인
 */

// 1. 전역에서의 this
console.log(this);   //브라우저에서는 window 객체를 가리킴

// 2. 함수와 메서드에서의 this
function func() {
    console.log(this);   //함수에서의 this는 전역 객체를 가리킴
}
func();  //전역 객체 (브라우저에서의 window, Node.js에서의 global)

const obj = {
    method: function() {
        console.log(this);   //메서드에서의 this는 해당 메서드를 호출한 객체를 가리킴
    }
};
obj.method() === obj;  //true, obj 객체의 method 메서드를 호출했으므로 this는 obj를 가리킴
obj.method();  //obj 객체

const obj2 = {
    fullName: 'codeunion', 
    sayName: function() {
        return this.fullName;  //this는 obj2 객체를 가리킴
    }
}
console.log(obj2.sayName());  //codeunion

// 3. 생성자에서의 this
function Person(name, age) {
    this.name = name;   //생성자 함수에서 this는 해당함수가 반환할 인스턴스
    this.age = age;
}
const person1 = new Person('minsu', 28);
console.log(person1);   //Person { name: 'minsu', age: 28 }

// 4. Arrow Function에서의 this
const arrowFunc = () => {
    console.log(this);   //Arrow Function에서는 this가 상위 스코프의 this를 가리킴
};
arrowFunc();   //전역 객체 (브라우저에서의 window, Node.js에서의 global)

// 8. 클래스에서의 this
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    displayInfo() {
        console.log(this);   //this는 Car 클래스의 인스턴스를 가리킴
    }
}
const myCar = new Car('Toyota', 'Camry');
myCar.displayInfo();   //Car { brand: 'Toyota', model: 'Camry' }

// 10. this와 프로토타입 체인
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);   //this는 Animal 인스턴스를 가리킴
};
const dog = new Animal('Dog');
dog.speak();   //Dog makes a sound. 

// this는 객체의 메서드가 호출될 때 결정되며, 객체의 프로토타입 체인에서도 this는 해당 객체를 가리킴
// this에서 문제가 되는 패턴
// const obj3 = {
//     name: 'codeunion',
//     regularFunction: function() {
//         console.log(this);   //this는 obj3 객체를 가리킴
//     },
//     arrowFunction: () => {
//         console.log(this);   //this는 상위 스코프의 this를 가리킴 (전역 객체)
//     }
// };
// obj3.regularFunction();  //obj3 객체
// obj3.arrowFunction();    //전역 객체 (브라우저에서의 window, Node.js에서의 global)

const obj4 = {
    fullName: 'codeunion',
    sayName: function() {
        return this.fullName;  //this는 obj4 객체를 가리킴
    }
}
console.log(obj4.sayName());  //codeunion
const say = obj4.sayName;
console.log(say());   //undefined, say 함수는 obj4 객체의 메서드가 아니므로 this는 전역 객체를 가리킴, 전역 객체에는 fullName이 없으므로 undefined 반환
//const say = function() {
//    return this.fullName;
//}   //say 함수는 obj4 객체의 메서드가 아니므로 this는 전역 객체를 가리킴, 전역 객체에는 fullName이 없으므로 undefined 반환

// 1. 메서드로 정의되어 있는 함수는 굳이 변수에 할당할 필요 없이 메서드로 사용
// 2. 함수를 실행시킬 때 this 값을 임의로 설정해줄 수 있는 자바스크립트 내장 메서드들을 사용

// this 설정 메서드
/**
 * 1. call: 함수를 호출하면서 this 값을 명시적으로 설정할 수 있는 메서드
 * 2. apply: call과 유사하지만, 인수를 배열 형태로 전달하는 메서드
 * 3. bind: 함수를 호출하지 않고 this 값을 영구적으로 설정하는 메서드, 새로운 함수를 반환
 * ===========================================================================================
 * 4. Strict Mode: 엄격 모드에서는 this가 undefined로 설정되어, 의도치 않은 전역 객체 참조를 방지
 * 5. DOM 이벤트 핸들러: 이벤트 핸들러에서 this는 이벤트가 발생한 요소를 가리킴
 * 6. 클래스에서의 this: 클래스 내부에서 this는 해당 클래스의 인스턴스를 가리킴
 * 7. 모듈에서의 this: 모듈에서는 this가 undefined로 설정되어, 모듈 자체를 참조하지 않도록 함
 * 8. this와 프로토타입 체인: 객체의 메서드가 호출될 때, this는 해당 객체를 가리키며, 프로토타입 체인에서도 this는 해당 객체를 가리킴
 */

say.call(obj4);   //codeunion, call 메서드를 사용하여 say 함수의 this를 obj4 객체로 설정
say.apply(obj4);  //codeunion, apply 메서드를 사용하여 say 함수의 this를 obj4 객체로 설정
const boundSay = say.bind(obj4);
console.log(boundSay());   //codeunion, bind 메서드를 사용하여 say 함수의 this를 obj4 객체로 영구적으로 설정, boundSay 함수는 obj4 객체의 fullName을 반환


// 3. 생성자 new 에서의 this
/**
 * 1. 생성자 함수가 실행되기 전에 빈 객체를 만듭니다. 
 * 2. 생생된 빈 객체가 생성자 함수의 this로 바인딩됩니다. 즉, this는 빈 객체를 가리킵니다.
 * 3. this로 접근하는 프로퍼티와 메서드는 빈 객체에 생성합니다. 
 * 4. return 문이 만들어진 객체를 반환합니다. 만약 return 문이 명시적으로 객체를 반환하지 않으면, this로 바인딩된 객체가 반환됩니다.
 * ===========================================================================================
 * 5. Strict Mode에서의 this: 엄격 모드에서는 생성자 함수에서 this가 undefined로 설정되어, 의도치 않은 전역 객체 참조를 방지
 * 6. 클래스에서의 this: 클래스 내부에서 this는 해당 클래스의 인스턴스를 가리킴
 * 7. 모듈에서의 this: 모듈에서는 this가 undefined로 설정되어, 모듈 자체를 참조하지 않도록 함
 * 8. this와 프로토타입 체인: 객체의 메서드가 호출될 때, this는 해당 객체를 가리키며, 프로토타입 체인에서도 this는 해당 객체를 가리킴
 */

//4. 화살표 함수에서의 this
/**
 * 1. 화살표 함수는 자신만의 this 바인딩을 가지지 않습니다. 대신, 화살표 함수는 상위 스코프의 this를 캡처하여 사용합니다.
 * 2. 화살표 함수가 정의된 위치에서의 this 값을 상속받습니다. 즉, 화살표 함수 내부에서 this는 화살표 함수가 정의된 위치의 this와 동일합니다.
 * ===========================================================================================
 * 3. Strict Mode에서의 this: 엄격 모드에서는 화살표 함수에서 this가 undefined로 설정되어, 의도치 않은 전역 객체 참조를 방지
 * 4. DOM 이벤트 핸들러에서의 this: 이벤트 핸들러에서 화살표 함수를 사용할 때, this는 이벤트가 발생한 요소를 가리키지 않고 상위 스코프의 this를 가리킴
 * 5. 클래스에서의 this: 클래스 내부에서 화살표 함수를 사용할 때, this는 해당 클래스의 인스턴스를 가리킴
 * 6. 모듈에서의 this: 모듈에서는 화살표 함수를 사용할 때, this가 undefined로 설정되어, 모듈 자체를 참조하지 않도록 함
 * 7. this와 프로토타입 체인: 객체의 메서드가 호출될 때, 화살표 함수를 사용할 때, this는 해당 객체를 가리키지 않고 상위 스코프의 this를 가리킴
 */
const obj5 = {
    name: 'codeunion',
    regularFunction: function() {
        console.log(this);   //this는 obj5 객체를 가리킴
    },
    arrowFunction: () => {
        console.log(this);   //this는 상위 스코프의 this를 가리킴 (전역 객체)
    }
};
obj5.regularFunction();  //obj5 객체
obj5.arrowFunction();    //전역 객체 (브라우저에서의 window, Node.js에서의 global)

const obj6 = {
    fullName: 'codeunion',
    showThis: function foo1() {
        const foo2 = () => {
            console.log(this.fullName);  //this는 foo1 함수의 this를 가리킴, foo1 함수는 obj6 객체의 메서드이므로 this는 obj6 객체를 가리킴
        }
        foo2();  //codeunion, foo2 함수는 화살표 함수이므로 this는 상위 스코프의 this를 가리킴, 상위 스코프는 foo1 함수이므로 this는 obj6 객체를 가리킴 
    }
}

obj6.showThis();  //codeunion, showThis 함수는 obj6 객체의 메서드이므로 this는 obj6 객체를 가리킴, foo2 함수는 화살표 함수이므로 this는 상위 스코프의 this를 가리킴, 상위 스코프는 foo1 함수이므로 this는 obj6 객체를 가리킴    