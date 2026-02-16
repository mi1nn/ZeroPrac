/**
 * for(초기화식; 조건식; 증감식) {
 *  실행할 코드
 * }
 * 
 * 초기화식은 반복문이 진입할 때를 나타내고 딱 한번만 실행된다.
 * 조건식은 언제 반복문이 멈춰야만 하는 지를 알려준다. 
 * 증감식은 반복문이 전체 반복을 한 번 한 이후 실행된다.
 */

// for (let i = 0; i < 4; i++){
//     console.log(i);
// }

// function make(num) {
//     for(let i = 1; i <= 9; i++) {
//         console.log(num * i);
//     }
// }
// make(7);

// for (let i = 1; i < 4; i++) {
//     for (let j = 1; j < 4; j++){
//         console.log(i, j);
//     }
// }

// function make() {
//     for(let i = 1; i <= 9; i++) {
//         for (let j = 1; j <= 9; j ++){
//             console.log(i * j);
//         }
//     }
// }
// make();

// continue: 현재 남은 코드를 건너 뛰고, 다음 반복문으로 넘어간다. 

for (let i  = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue
    }

    console.log(i);
}

let i = 0;
while(i < 4) {
    console.log(i);
    i++;
}

//for문은 반복횟수가 명확할 때, while은 반복횟수가 불명확할 때 사용
