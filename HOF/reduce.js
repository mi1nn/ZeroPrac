// reduce 메서드는 배열의 각 요소에 대해 주어진 함수를 호출하여 단일 값으로 줄이는 고차 함수입니다.
// accumulator는 콜백 함수에서 반환된 값을 누적하여 다음 요소에 전달하는 역할을 합니다.
// currentValue는 현재 처리 중인 요소를 나타냅니다.

const arr = [1, 2, 3, 4];
const result = arr.reduce((accumulator, currentValue, index, array) => {
    console.log('누적값: ', accumulator);
    console.log('현재 요소: ', currentValue);
    console.log('현재 요소의 인덱스: ', index);
    console.log('reduce 메서드를 호출한 원본배열: ', array);
    return accumulator + currentValue;
}, 5);

// 1. reduce 메서드는 배열의 각 요소에 대해 주어진 함수를 호출하여 단일 값으로 줄이는 고차 함수입니다.
// 2. reduce 메서드는 원본 배열을 변경하지 않고, 단일 값을 반환합니다.
// 3. reduce 메서드는 콜백 함수에서 반환된 값을 누적하여 다음 요소에 전달합니다.
// 4. reduce 메서드는 콜백 함수에서 네 개의 인자를 전달합니다: 누적값, 현재 요소, 현재 요소의 인덱스, 원본 배열
// 5. reduce 메서드는 배열의 모든 요소에 대해 콜백 함수를 호출하므로, 원본 배열과 동일한 길이의 새로운 배열을 반환할 수 있습니다.

const arr2 = [3, 4, 5, 6];
const result2 = arr2.reduce((acc, cur) => {
    console.log('누적값: ', acc);
    console.log('현재 요소: ', cur);
    if (cur % 2 === 0) {
        return acc;
    }

    return acc * cur;
}, 1);
console.log(result2);   //15