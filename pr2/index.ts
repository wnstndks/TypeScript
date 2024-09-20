// let 이름 : string ='kim';
// 이름=123; // 타입 변경 상황으로 발생하는 오류들 해결가능

// let 이름:string[]=['kim','park']; // 이름이라는 변수엔 string이라는 변수가 담긴 array만 담길수 있다

// let 이름 : {name:string}={name:'kim'} //이름이라는 변수에는 꼭 name이라는 변수를 가진 딕셔너리만 담길수 있음
// let 이름 : {name?:string}={name:'kim'} //이름이라는 변수에는 name이라는 변수를 가진 딕셔너리를 담길수도 있음


// 타입 변수를 만들고 싶으면
// type Name = string|number;
// let 이름 : Name = 123;

// 함수에 타입 지정 가능 - 밑의 함수는 파라미터로 number, return 값으로 number
// function 함수(x : string) : number{
//   return x*2
// }

// array에 쓸수 있는 tuple 타입
// type Member =[number, boolean];
// let john :Member =[]

// object에 타입지정해야할 속성이 너무 많으면
// type Member = {
//   [key :name]: string
// }

// let john : Member = {name : 123}

// class User {
//   name:string;
//   constructor(name:string){
//     this.name=name
//   }
// }



// Js문법 그대로 Ts에서 사용가능

//  변수에 타입지정가능
//  장점- 타입이 실수로 변경될 때 에러 내줌 => 변수에 실드씌우는 것
// let 이름: string='kim';
// let 나이: number = 50;
// let 결혼했니: boolean = true;

// array 자료형 - 타입지정
// let 회원들: string[] = [ 'kim','park']

// object자료형 - 타입지정
// let 회원들 :{member1:string,member2:string} ={member1:'kim',member2:'park'}

// 타입스크립트는 타입지정을 원래 자동으로 해줌 => 타입지정 문법 생략 가능하긴 함


// 문제1
// let 이름: string = '아무개';
// let 나이: number = 20;
// let 출생지: string = 'seoul';


// 문제2
// let 최애 :{name : string,song:string}= {name : '폴블랑코',song:'summer'}

// 문제3
// let project :{member:string[],days:number,started:boolean}= {
//     member:['kim','park'],
//     days:30,
//     started:true,
// }


// 문자 - 타입지정을 할 때 or 기호쓰기 => union 타입
// let 회원 : number| string =123;

// let 회원들 : (string|number)[] = [1,'hi',123];
// let 오브젝트 :{a:string|number}= {a:'123'};

// unknown  => 타입실드 해제문법 -> 일반 자바스크립트 처럼 사용해야됨
// let 이름 : any;
// 타입스크립트는 정확한 자료형의 연산만 가능함 - 간단한 수학연산도 타입이 맞아야됨

// 강의 2
// 문제1 
// let user:string='kim';
// let age:unknown= undefined;
// let married:boolean = false;
// let 철수:(string|unknown|boolean)[] = [user,age,married];

// // 문제2
// let 학교 :{
//     score : (number|boolean)[],
//     teacher: string,
//     friend: string | string[]
// }= {
//     score : [100,97,53],
//     teacher: 'Phil',
//     friend:'John'
// }

// 학교.score[4]=false;
// 학교.friend=['Lee',학교.teacher]


// 함수에 파라미터 자리에 타입지정
// 괄호안의 파라미터 타입  뒤는 return 값의 타입
// 함수에서 void 타입도 사용가능 - 어떤값을 return 할게 없을 때는 void라고 하면 됨
// function 함수(x:number):number{
//     return x*2
// }
// + 타입스크립트에서 함수 만들었으면 타입지정된 파라미터는 필수
// 만약에 파라미터변수? 하면 파라미터를 안써도 되긴 하다
// function 함수(x?:number):void{
// }
// x?number 는 x:number|undefined와 같은 뜻이다


// 강의 3 문제1
// function 이름함수(x?:string):void{
//     if(x?.length==0){
//         console.log('이름이 없습니다.')
//     }
//     else{
//         console.log('안녕하세요 '+x)
//     }
// }

// 문제2
// function 자릿수세기(x:string|number):number{
//     return x.toString().length
// }

// 문제3
// function 결혼가능확률(x:number,y:boolean,z:string):(void|number){
//     let sum:number=0
//     if(y){
//         sum+=500
//     }
//     if (z=='상'){
//         sum+=100
//     }
//     sum+=x

//     if(sum>=600){
//         return '결혼가능'
//     }
// }
