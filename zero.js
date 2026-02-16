console.log(typeof null);

function tel(name) {
    console.log(name);
    console.log('안녕하세요' + name + '님');
}

tel('길동');

let money = 1000000;

function tax(money) {
    return money * 0.1;
}

let realTax = tax(money);

function realSalary(money, tax) {
    console.log(money - tax);
}

realSalary(money, realTax);