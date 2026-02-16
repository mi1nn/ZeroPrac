const miin = {
    name: "승민",
    age: 28,
    city: "ulsan",
    key: 'value',
    sayHi: function() {     //메서드
        console.log(`${miin.name} Hello!`);
    }
    // sayHi() {
    //     console.log(`${this.name} Hello!`);
    // }
};

console.log("age" in miin);

miin.fat = true;

console.log(miin.age);
console.log(miin['age']);
miin.sayHi()

for (let key in miin) {
    console.log(key);
}

delete miin.fat;
console.log(Object.keys(miin));