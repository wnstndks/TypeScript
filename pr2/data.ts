// ts 파일 -> ts 파일로
// 변수를 가져다쓰고 싶을 땐 import export 

// var a=10;
// 모든 ts 파일은 글로벌 모듈이기에 굳이 import 안써도 되긴 함

// 로컬 모듈로 만들땐?
// import export하기
let a=10;
export {}

// 만약 다시 글로벌 변수를 만들고 싶을땐?
declare global{
    type Dog=string;
}