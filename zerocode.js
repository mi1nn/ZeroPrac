// let enter = Number(prompt("비밀번호를 입력해주세요")); //텍스트를 입력할 수 있는 창을 띄워줌
// let password = 1234;

// console.log(typeof enter) //String type

// if(enter === password) {
//     console.log("현금 인출 가능")
// } else {
//     console.log("패스워드가 다릅니다.")
// }

//비교연산자
console.log(Number('일이삼'));
console.log(typeof NaN);
console.log(isNaN(20));

console.log(null == undefined);

/**
 * falsy: false로 평가되는 값
 * 
 * 1. false
 * 2. null
 * 3. undefined
 * 4. 0
 * 5. NaN
 * 6. ""
 */

/**
 * 논리연산자
 * 
 * 1. || (또는)
 * 2. && (그리고)
 * 3. ! (아니다)
 */

// alert("" || "0" || true); 0을 출력 -> 좌측부터 값을 확인해서 truthy한 값을 발견하면 출력
// alert(0 && false && NaN); 0 출력 -> falsy한 값을 발견하면 출력

// const age = prompt(Numbr("나이를 입력해주세요"));

// if(age < 20) {
//     console.log("나이가 어려서 대상자가 아닙니다. ");
// } else if(21 <= age && age <= 29) {
//     console.log("워홀 대상자입니다. ");
// } else if(age === 20 || age === 30) {
//     console.log("계획서를 제출하세요.");
// } else {
//     console.log("대상자가 아닙니다. ");
// }

console.log('hello, I\'m codeunion');