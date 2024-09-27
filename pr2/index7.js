// 함수에 return값에 붙일수 있는 never type
// 1. 함수가 절대  return 값이 없어야함
// 2. 함수실행이 끝나지 않아야함(endpoint)가 없어야 함
// function 함수():never{
// // Error를 내주면 조건 1 조건 2 충족
//     throw new Error()
// }
// function 함수():never{
//     while(true){
//     }    
// }
// 코딩에서 never 타입 쓰는 법 - 대부분 void로 대체하기에 쓸데는 없다
//  코드를 이상하다 짜면 출몰하긴 함 -> 
// function 함수(parameter:string){
//     if (typeof parameter == 'string'){
//         console.log(parameter)
//     }else{
//         console.log(parameter) //이럴때 파라미터 타입이 never로 변경    
//     }
// }
// let 함수 = function(){
//     throw new Error()
// } // 나오면 이상하다는 것만 이해해주면 됨
// class 많이 만들어서 개발하려면 public private protected static 키워드 이용
// class User{
//     // public 붙으면 모든 자식들이 이용가능 근데 있으나 없으나 상관없어서 public 키워드를 일부로 붙일필욘없음
//     public name='kim';
//     constructor(a){
//         this.name=a
//     }
//     public 함수(){
//     }
// }
// let 유저1 = new User('park')
// 유저1.name ='안녕'
// class User{
//     // private는 class안에서만 수정, 이용가능
//     // 클래스 내에서만 수정하고 싶은거는 private 사용
//     name:string;
//     private familyName:string = 'kim';
//     constructor(a){
//         this.name=a + this.familyName;
//     }
//     이름변경함수(a){
//         this.familyName =a;
//     }
// }
// // 함수 만들어서 속성 변경하기
// let 유저1 = new User('park')
// 유저1.이름변경함수('ㅗㅑ')
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        // public 쓰면 this.어쩌구 생략 가능
    }
    return Person;
}());
var 자식 = new Person('kim');
console.log(자식);
