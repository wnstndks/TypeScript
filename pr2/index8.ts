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

// 파라미터로 타입을 입력하는 함수
// function 함수<MyType>(x:MyType[]):MyType{
//     return x[0]
// }

// let a= 함수<number>([4,2]) // number라는 타입을 MyType에 넣어주세요라는 의미
// let b= 함수<string>(['4','2']) 
// console.log(a)

// 타입파라미터 제한두기 - 여기서 extends는 체크의 개념으로 보기
// function 함수<MyType extends number>(x: MyType) {
//     return x - 1
//   }
  
// let a = 함수<number>(100)

// // let a = 함수<number>(100); //number타입 이용해서 지정되었다해도 mytype은 불확실한거기에, 에러를 내주는것

// interface LengthCheck{
//     length: number
// }

// function 함수<MyType extends number>(x:MyType){
//     return x.length
// }

// Generic 문제1.
// interface lenghCheck{
//     length:number
// }

// function 함수<MyType extends lenghCheck>(a:MyType){
//     console.log(a.length)
// }

// 함수<string>('hello')
// 함수<string[]>(['hello','park'])

// 문제2.
// interface Animal{
//     name:string;
//     age:number
// }

// let data = '{"name" : "dog", "age" : 1 }';

// function 함수<MyType>(a:string):MyType{
//     return JSON.parse(a)
// }

// let result = 함수<Animal>(data)
// console.log(result)

// 문제3.
class Person<MyType>{
    name;

    constructor(a:MyType){
        this.name=a
    }
}

let a = new Person<string>('예');
a.name;
