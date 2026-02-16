let name = '승민';
let age = 28;
const birth = 11.5;

console.log(`안녕하세요 제 이름은 ${name}이고 나이는 ${age}살 입니다. `);

function makeBun() {
    return '🍞'
}

function addMeat(bun) {
    return `${bun} + 🥩`
}

function makeBurger(meat) {
    return `${meat} = 🍔`
}

let bun = makeBun();
let meat = addMeat(bun);
console.log(meat);

let burger = makeBurger(meat);
console.log(burger);