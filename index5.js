var 제목2 = document.querySelector('#title');
if (제목2 != null) {
    // 타입을 narrowing 해주어야함    
    제목2.innerHTML = 'hi hello~';
}
// narrowing 방법5개
// 2. instanceof 연산자
// 3. as로 사기 치기
// 4. 오브젝트에 붙이는 ?.
// 5. strict모드 끄기 - 이건 그냥 typescript안쓰는 것
var 링크2 = document.querySelector('.link');
if (링크2 instanceof HTMLAnchorElement) {
    링크2.href = 'https://kakao.com';
}
var 버튼2 = document.querySelector('#button');
버튼2 === null || 버튼2 === void 0 ? void 0 : 버튼2.addEventListener('click', function () {
});
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'change.jpg';
}
var 링크3 = document.querySelectorAll('.naver');
링크3.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
});
var Person2 = /** @class */ (function () {
    function Person2() {
        this.data = 0;
    }
    return Person2;
}());
var john = new Person2();
var kim = new Person2();
console.log(john.data);
console.log(kim.data);
var Person3 = /** @class */ (function () {
    function Person3() {
        this.name = 'kim';
        this.age = 20;
    }
    return Person3;
}());
var Person4 = /** @class */ (function () {
    function Person4() {
    }
    Person4.prototype.add = function (숫자) {
        console.log(숫자 + 1);
    };
    return Person4;
}());
var 네모 = { color: 'red', width: 100 };
var 변수 = { name: 'kim', age: 90 };
var 변수 = { name: '멍멍' };
