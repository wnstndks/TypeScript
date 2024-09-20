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

