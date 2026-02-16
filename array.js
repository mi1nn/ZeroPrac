let list = ['짱구', '철수', '훈이', '맹구', '유리'];
console.log(list[2]);
console.log(list.length);

// push를 사용하면 배열의 마지막에 리스트 추가, pop을 사용하면 마지막 배열 리스트 제거
list.push('신형만');
console.log(list);
list.pop()
console.log(list);

// unshift는 배열의 첫번째에 추가, shift는 제거
list.unshift('신형만');
console.log(list);
list.shift();
console.log(list);

console.log(typeof list);
console.log(Array.isArray(list));

// indexof(우리가 찾고 싶은 요소, 탐색을 시작할 인덱스)

console.log(list.indexOf('훈이')); //존재하지 않으면 -1을 반환

// includes(우리가 찾고 싶은 요소, 탐색을 시작할 요소)
console.log(list.includes('훈이', 1));

// slice(); 첫번째 인자의 넣은 인덱스 요소부터 두번째 인덱스의 요소 전까지를 복사해서 새로운 배열로 반환한다. 
console.log(list.slice(0,3));
console.log(list.slice(1));
console.log(list.slice());
console.log(list.slice(7));

console.log('====================================================================================');


// for (let i = 0; i < list.length; i++) {
//     if (list[i] === '훈이'){
//         list[i] = '신형만';
//     }
//     console.log(list[i]);
// }

// console.log(list);

console.log('====================================================================================');

for (let el of list) {
    if (el === '훈이') {
        el = '신형만';
    }
    console.log(el)
}

console.log(list);
