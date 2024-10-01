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
import {함수타입} from './index8';

let 함수:함수타입=function(a){
    console.log(a)
}