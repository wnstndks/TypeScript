// export var 이름 ='kim';
// export var 나이 = 20;
// 숨기고 싶은 타입변수는 object 자료 안에 숨김
// namespace 네임스페이스 {
//     export type Name=string|number;
// } //object와 다르게 생겼지만 같은 것
// let 변수 :네임스페이스.Name ='kim';

// export 문제 1.
// export type Car={
//     wheel:number,
//     model:string
// }

// export interface Bike{
//     wheel:2,
//     model : string
// }


// 문제2.
// export type 함수타입=(a?)=>void

// 문제3.

// type Dog = string;
// namespace 네임스페이스{
//     export interface Dog{name:string};
// }

// let dog1 :Dog = 'bark';
// let dog2 :네임스페이스.Dog = { name : 'paw' }