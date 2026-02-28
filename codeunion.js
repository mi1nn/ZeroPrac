let list = ['짱구', '철수', '맹구', '훈이', '유리'];

let [a, b, c, ,e] = list

console.log(a, b, c, e);

let obj = {
    name: '짱구',
    age: 5,
    gender: 'man'
}

let { name } =obj

let objName = obj.name;

console.log(name);

let arr1 = [1, 2, 3, 7, 9];
let arr2 = [...arr1];

console.log(arr2);

console.log(Math.max(...arr1));

let copiedobj = {...obj};
console.log(copiedobj);
console.log(copiedobj === obj);

function test(...rest) {
    console.log(rest)
}

test(1,2,3,4,5);