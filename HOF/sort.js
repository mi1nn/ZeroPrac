// sort
// sort() 메서드는 배열의 요소를 문자열로 변환하여 유니코드 코드 포인트 순서에 따라 정렬합니다.
// sort() 메서드는 원본 배열을 변경합니다.

let arr = [3, 4, 2, 1, 5];
arr.sort((a, b) => a - b); // 오름차순 정렬
console.log(arr);   //[1, 2, 3, 4, 5]
arr.sort((a, b) => b - a); // 내림차순 정렬
console.log(arr);   //[5, 4, 3, 2, 1]

