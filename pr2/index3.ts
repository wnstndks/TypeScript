// 더 엄격한 타입지정 가능 - Literal types - 들어올수 있는 타입을 정의해두는 것
// 정확히 내가 사전에 등록했던 문자만 들어올수 있게 만들기
// let 이름 : 'kim';
// let 접니다 : '대머리'|'솔로';
// 접니다 = '대머리';

// 함수 Literal Type 사용
// function 함수(a:'hello') : (1 | 0){
//     return 1
// }
// 함수('hello')

// type 뭐낼거냐 = '가위' |'바위'|'보'
// function 가위바위보(x:뭐낼거냐):뭐낼거냐[]{
//     return ['가위']
// }

// Literal type는 자료를 여러개 저장할 수 있는 const변수의 업그레이드 버전

// Literal Type 의 문제점
var 자료 ={
    name:'kim'
} as const 
// x타입지정을 literal type 지정 알아서 해주는 것 - object value값을 그대로 타입으로 지정, 속성 모두 readonly 붙여줌, 


function 내함수(a:'kim'){
// =>a라는 파라미터에 kim이라는 타입만 들어올수 있다는 뜻
}





