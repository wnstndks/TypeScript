// let 이름4:string;
// 더 엄격한 타입지정가능 - Literal type
var 이름4;
// 123이라는 타입만 들어갈 수 있다.
// 이미 들어갈수있는 자료형을 literal 타입이라고 한다
var 접니다;
// literal types - 변수에 뭐가 들어올지 더 엄격하게 관리가능
// 자동완성 힌트 굿
접니다 = '솔로';
// 무조건 1과 0만 literal type으로 리턴한다.
function 함수(a) {
    return 1;
}
함수('hello');
// 가위바위보라는 문자만 파라미터로 입력가능
// 가위바위보만 들어갈수있는 array를 return 해야함
// return 값은 무조건 array여야함
function 가위바위보함수(a) {
    return ['가위'];
}
// const변수의 한계 - 변하면 안되는 값들을 저장하고 싶을때
// 1. object안에 있는 내용물은 바꿀수 있음 - 확장성이 없음
// 2. Literal type은 const 변수와 유사하게 사용가능
var 제목 = document.querySelector('#title');
if (제목 != null) {
    제목.innerHTML = '반갑소';
}
var 링크 = document.querySelector('#link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com'; //잘됨
}
var 버튼 = document.getElementById('button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    console.log('안녕');
});
// 특정글자나 숫자만 가질수 있게 제한을 두는 타입 = literal type
//  => 더욱 엄격한 실드
function rock(a) {
    return ['가위', '보'];
}
var 자료 = {
    name: 'kim'
};
// as const는 타입을 object의 value로 바꿔줌 => 타입을 kim으로 바꿔줌
// object 안에 있는 모든 속성을 readonly로 바꿔줌 - 변경나면 에러나게
function 내함수(a) {
}
내함수(자료.name);
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
// 이 함수타입은 return으로 number만 가져다 쓸수 있음
// ()=>{return 10}
// 함수 정의하는 다른방법
var 함수2 = function () {
    // 함수를 만들때 type alias를 가져다 쓰고 싶다면 변수에 담아서 사용
    return 10;
};
회원정보.plusOne(2);
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
}
function 만들함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
만들함수('010-1111-2222', cutZero, removeDash);
