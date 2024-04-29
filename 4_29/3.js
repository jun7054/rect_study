let time = prompt("시간을 입력하세요");

if (time < 12) {
    alert('오전입니다');
} else {
    alert('오후입니다')
}

let exchange = prompt("달러를 입력하세요");
won = exchange * 1300;
alert(won);

let score = Number(prompt('확정을 입력하세요','확정'));
if(score == 4.5) {
    alert('신');
} else if (4.0 <= score) {
    alert('교수님');
} else if (3.0 <= score) {
    alert('인간');
} else if (2.0 <= score) {
    alert('돌고래');
} else if (1.0 <= score) {
    alert('플랑크톤');
} else {
    alert('4.5보다 크거나 1.0보다 작음');
}

for (let i = 0; i < 10; i++) {
    console.log(`${i}번 반복`)
}
