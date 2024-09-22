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
// var 자료 ={
//     name:'kim'
// } as const 
// // x타입지정을 literal type 지정 알아서 해주는 것 - object value값을 그대로 타입으로 지정, 속성 모두 readonly 붙여줌, 
// function 내함수(a:'kim'){
// // =>a라는 파라미터에 kim이라는 타입만 들어올수 있다는 뜻
// }
// type alias에 함수 type 저장해서 쓰는 법
// 
// type 함수타입 = (a:string) =>{number} //함수 타입지정 형식 - 이 함수 타입은 string 타입의 파라미터, number 타입의 return 값
//  함수 타입을 부착하려면 함수 표현식을 써야됨
// let 함수 = function (){
// }
// 함수를 만들때 type alias를 부착하고 싶다면 밑의 방식으로
// let 함수: 함수타입 = function(){
// }
// object 안에 함수 만들기도 가능
// let  회원정보 ={
//     name:'kim',
//     // 파라미터 하나는 number, return 값은 number
//     plusOne (){
//     }
// }
// object 안에 함수 저장해서 가져다 쓰는 방식
// 회원정보.plusOne()
// 함수 타입지정 문제1
// type member={
//     name:string,
//     age:number,
//     plusOne : (x:number)=>number,
//     changeName:()=>void,
// }
// let 회원정보={
//     name:'kim',
//     age:30,
//     plusOne(x){
//         return x+1
//     },
//     changeName : ()=>{
//         console.log('hi')
//     }
// }
// 회원정보.plusOne(1);
// 회원정보.changeName();
// 함수타입지정 문제2
// 뒤에 부분에 중괄호 쓰면 object 형식으로 반환하는 것
// type 함수타입1 = (x:string)=>string
// type 함수타입2 = (x:string)=>number
// let cutZero:함수타입1=function(x){
//     if ('0' === x[0]){
// slice - 첫번째 문자를 잘라내는 방식
//         return x.slice(1)
//     }else{
//         return x
//     }
// }
// let removeDash:함수타입2=function(x){
//     if (x.indexOf('-')){
//         x=x.replace('-','');
//         return parseInt(x)
//     }else {
//         return parseInt(x); // '-'가 없더라도 숫자로 변환
//     }
// }
// // 함수타입지정 문제3
// type 함수타입3 = (string,함수타입1,함수타입2)=>number;
// let 함수 : 함수타입3 = function(x,cutZero,removeDash){
//     let y=cutZero(x);
//     let z=removeDash(y);
//     return z
// }
