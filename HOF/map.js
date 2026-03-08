let arr = [1, 2, 3];
let doubleArr = arr.map(el => el * 2);
console.log(doubleArr);   //[2, 4, 6]

// 1. map 메서드는 배열의 각 요소에 대해 주어진 함수를 호출하여 새로운 배열을 생성하는 고차 함수입니다.
// 2. map 메서드는 원본 배열을 변경하지 않고, 새로운 배열을 반환합니다.
// 3. map 메서드는 콜백 함수에서 반환된 값을 새로운 배열의 요소로 사용합니다.
// 4. map 메서드는 콜백 함수에서 세 개의 인자를 전달합니다: 현재 요소, 현재 요소의 인덱스, 원본 배열
// 5. map 메서드는 배열의 모든 요소에 대해 콜백 함수를 호출하므로, 원본 배열과 동일한 길이의 새로운 배열을 반환합니다.

let result = arr.map((element, index, array) => {
    console.log('현재요소: ', element);
    console.log('현재 요소의 인덱스: ', index);
    console.log('map 메서드를 호출한 원본배열: ', array);
    return element + 1;
});

console.log(result);   //[2, 3, 4]

const arr2 = [1,2,3,4,5];
const oddArr = arr2.map(el => {
    if(el % 2 ===0) {
        return el;
    }

    return el - 1;
});
console.log(oddArr);   //[0, 2, 2, 4, 4]
