// let 이름4:string;
// 더 엄격한 타입지정가능 - Literal type

let 이름4:123;
// 123이라는 타입만 들어갈 수 있다.
// 이미 들어갈수있는 자료형을 literal 타입이라고 한다

let 접니다:'대머리' | '솔로';
// literal types - 변수에 뭐가 들어올지 더 엄격하게 관리가능
// 자동완성 힌트 굿
접니다 = '솔로'

// 무조건 1과 0만 literal type으로 리턴한다.
function 함수(a:'hello') : 1|0{
    return 1
}

함수('hello')


// 가위바위보라는 문자만 파라미터로 입력가능
// 가위바위보만 들어갈수있는 array를 return 해야함
// return 값은 무조건 array여야함

function 가위바위보함수(a:'가위'|'바위'|'보'):('가위'|'바위'|'보')[]{
    return ['가위']
}

// const변수의 한계 - 변하면 안되는 값들을 저장하고 싶을때
// 1. object안에 있는 내용물은 바꿀수 있음 - 확장성이 없음
// 2. Literal type은 const 변수와 유사하게 사용가능















