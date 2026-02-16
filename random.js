function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let num = getRandomInt(1, 100);
// let user = true;

while(true) {
    let enter = Number(prompt("숫자를 입력해주세요. "));

    if(enter === num) {
        console.log('정답입니다. ');
        // user = false;
        break;
    } else if (enter > num) {
        console.log('더 낮은 숫자를 입력해주세요. ');
    } else if (enter < num) {
        console.log('더 높은 숫자를 입력해주세요. ');
    }
}