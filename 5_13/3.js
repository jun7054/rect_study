// setTimeout(() =>{
//     console.log('1초 후에 실행됩니다.')
// }, i * 1000);

// let count = 0;
// setInterval(() =>{
//     console.log(`1초마다 실행됩니다.(${count}번째 시행)`);
//     count++
// }, 1 * 1000);

// let id
// let count2 = 0
// id = setInterval(() => {
//     console.log(`1초마다 실행됩니다2(${count2}번째)`);
//     count2++   
// }, 1 * 1000);

// setTimeout(() => {
//     console.log(`타이머를 종료합니다.`);
//     clearInterval(id);
// }, 5 * 1000);

// let pi = 3.14
// console.log(`main.js의 pi는${pi}`);
// function sample() {
//     let pi = 3.141592
//     console.log(`test.js의 pi는 ${pi} 입니다.`)
// }
// sample();
// (function () {
//     let pi = 3.141592
//     console.log(`test.js의 pi는 ${pi} 입니다`);
// }) ()

//엄격 모드
// 'use strict'
// data = 10;
// console.log(data);

//객체란 "실제로 존재하는 사물"을 의미하고 "이름"과 "값으로 구성된 JS 기본 데이터 타입"

console.log (typeof([]));
const array = ['사과','바나나', '감'];
//배열에는 인덱스, 요소가 있다.

const product = {
    제품명 : "건조 망고",
    유형 : "건조식품",
    성분 : "망고, 설탕, 색소",
    원산지 : "필리핀"
}

const pet = {
    name : "코코",
    eat : function (food) {
        alert(this.name+ '은/는'+food+'을/를 먹습니다.')
    }
}
pet.eat('밥');

pet.나이 = '2'
pet.종 = '고양이'