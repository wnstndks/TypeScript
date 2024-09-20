// type이 아직 하나로 확정되지 않았을 경우 Type Narrowing 사용
// function 내함수(x:number|string){
//     if(typeof x === 'string'){
//         return x+1
//     }else{
//         return x+1
//     }
// }

// function 내함수(x:number|string){
//     let array: number[]=[];
//     if (typeof x==='number'){
//         array[0]=x;
//     }
// }

// Narrowing 으로 판정해주는 문법들
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모
// 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정해줌

// type assertion 문법
// function 내함수(x:number|string){
//     let array: number[]=[];
//     array[0] = x as number;
//     // as 문법의 용도
//     // 1 여러개의 union 타입을 하나의 타입으로 확정할 때(Narrowing 할 때)
//     // 2. 어떤 타입이 들어올지 100프로 확신할 때 사용

// }

// Type Narrowing 문제
// 문제 1
// function 클리닝함수(x:(string|number)[]):number[]{
    
//     let rx :number[]=[]

//     x.forEach((a)=>{
//         if(typeof a=='string'){
//             rx.push(parseFloat(a))
//         }else rx.push(a)
//     })

//     return rx
// }

// function 만들함수(x:{subject:string|string[]}){
//     if (typeof x.subject === 'string') {
//         return x.subject;
//     } else if(Array.isArray(x.subject)) {
//         return x.subject[x.subject.length-1] 
//     }
// }

// let 철수쌤={subject:'math'};
// let 영희쌤={subject:['science','english']};
// let 민수쌤={subject:['science','art','korean']};

// type alias 만드는 법 - 영어대문자로, 그리고 뒤에 Type붙이기
// type AnimalType = string|number|undefined;
// let 동물:AnimalType;

// const라는 변수 -> 절대 바꿀수가 없음 그러나 등호로 재할당만 막는 역할, const로 담은 object 수정은 바꿀수 있음
// object 자료 수정 막는 법

// type GirlfriendType ={
//     readonly name?:string //readonly를 사용시 수정 불가능 -> 오류남
// }

// const 여친:GirlfriendType = {
//     name:'엠버'
//     // ?는 undefined가 들어올수 있다의 약자
// }

// 여친.name='유라';

// type 변수는 union 타입으로 합치기 가능
// type Name=string;
// type Age=number;
// type Person = Name|Age;

// type PositionX = {x:number};
// type PositionY = {y:number};

// object 두개합치기
// type Position = PositionX & PositionY;

// type Alias 문제
// type one ={name:'number'};
// type two ={name:'number'};
// type three = one &two;

// 문제2
// type Quest2Type = {color?:string,size:number,readonly position:number[]}

// 문제3
// type Quest3Type ={name:string,phone:number,email:string}

// 문제4
// type PlusType = {kidsoradults:boolean}
// type Quest4Type=Quest3Type & PlusType;