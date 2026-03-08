class Car {
    constructor(brand, color) {
        this.brand = brand;  //생성자 함수에서 this는 해당함수가 반환할 인스턴스
        this.color = color;
    }

    introduce() {  //함수여서 ()
        console.log(`제 자동차 브랜드는 ${this.brand}이고, 색상은 ${this.color}입니다. `);
    }
}

class Option extends Car {
    constructor(brand, color, seat) {
        super(brand, color)  //자식 클래스에서 부모 클래스 외의 다른 속성을 추가해야 하는 경우 생성자 Override를 할 때 super 키워드 사용
        this.seat = seat
    }

    auto() {
        console.log('자동 주행 중...');
    }
}

const firstCar = new Car('hyundai', 'green');
const secondCar = new Car('Kia', 'black');
const thirdCar = new Option('Tesla', 'white', 'leather');

firstCar.introduce();
secondCar.introduce();
thirdCar.auto();

console.log(firstCar, secondCar, thirdCar);

console.log(firstCar.introduce === Car.prototype.introduce);