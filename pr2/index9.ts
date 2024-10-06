// import {이름} from './index8';

// console.log(이름);

// 변수 명 겹침 
// --> 다른 파일에서 쓸 변수들을 export import 로 선택가능

// export 문제 1.
// import {Car,Bike} from './index8';

// let newCar:Car={
//     wheel:20,
//     model : 'bmw'
// }

// let newBike:Bike={
//     wheel:2,
//     model:'santafe'
// }

// 문제2.
// import {함수타입} from './index8';

// let 함수:함수타입=function(a){
//     console.log(a)
// }

// tuple type
// 첫자료는  무조건 string
// 둘째 자료는 무조건 boolean
// let 멍멍:[string,boolean]=['dog',true]
// 튜플안에서도 옵션 표시 가능 대신 물음표는 맨 뒤에서만 칠수 있음
// let 멍멍:[string,boolean?,number?]=['dog',true]

// function 함수(...x:number[]){
//     console.log(x)
// }

// rest parameter 타입지정시 tuple 가능
// 함수(1,'2222')

// function 함수(...x:[number,string]){
//     console.log(x)
// }

// let arr = [1,2,3];
// array 합칠 때 ...이거 사용 만약 타입지정시?
// let arr2 = [4,5,...arr]

// let arr2:[number,number,...number[]] = [4,5,...arr]

// tuple 타입 문제 1
// let arr:[string,number,boolean] = ['맛있는이름',5000,true]

// tuple 타입 문제 2
// let arr:[string,number,...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true]

// tuple 타입 문제 3
// function 함수(...rest:[string,boolean,...(number|string)[]]){

// }

// 함수('a',true,6,3,'1',4)

// tuple 타입 문제 4
// function 함수(...rest:[...(number|string)[]]){
//     let result :[string[],number[]]=[[],[]];

//     rest.forEach((a)=>{
//         if (typeof a ==='string'){
//             result[0].push(a);        
//         }else{
//             result[1].push(a);
//         }
//     })
//     return result;
// }

// import 해온것이 아니라 일단 에러가 띄움
// 변수,함수 재정의 - declare
// declare let a:number; // 어딘가에 분명 변수 a가 있으니 에러내지 말아달라라는 뜻

// console.log(a+1);






