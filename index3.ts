// // funciton 함수(){
// //     코드~~
// // }

// // 함수()

// // 길고 복잡한 코드 한단어로 축약가능
// // 숫자 집어넣으면 다른 숫자나오는 블랙박스 역할

// // 파라미터= 숫자 input역할
// // return 할 값 =output 되는 값


// // let y ; 변수만 만들면 any 자동할당 return 되는 값, 파라미터 타입지정 가능
// // funciton 함수(x:number) : number {
// //     코드~~
//     // return x*2
// // }


// // 함수에서 void 타입 활용가능
// // function 함수(x:number):void{
//     // 함수에서 void 타입 활용가능 - 실수로 뭔가 return 하는 것을 사전에 막을 수 있음
//     // void는 함수를 쓰고나서 뭔가 뱉고 싶지 않을 때 사용
// // }

// // 자바스크립트와 다른 점 - 타입지정된 파라미터는 필수
// // 파라미터가 옵션일 경우엔 파라미터변수?:타입
// //  ?연산자는 -> 변수?:number 변수 number|undefined와 같다
// // function 함수(x?:number):void{
// // }

// // 타입스크립트는 엄격한걸 좋아함 string+number, number+number 이외엔 불가능

// function 이름적어(x?:string):void{
//     if(x!){
//         console.log('이름이 없습니다.')
//     }
//     else{
//         console.log('안녕하세요 '+x)
//     }

// }

// // function 함수(x: number | string):void {
// //     if (typeof(x):number)
// // }

// function 자릿수세기(x:number|string):number{
//     return x.toString().length
// }

// function 결혼할수있나(x:number,y:boolean,z:string):string|void{
//     let sum:number=0
//     sum+=x
//     if (y){
//         sum+=500
//     }
//     if(z=='상'){
//         sum+=100
//     }
//     if(sum>=600){
//         return '결혼가능'
//     }
// }

// console.log(결혼할수있나(100,true,'상'))

// // type 이 하나로 확정되지 않았을 경우 Type Narrowing 써야함
// // 어떤 변수가 타입이 아직 불확실하다면 if문등으로 Narrowing 해줘야 조작가능
// function 함수이다(x: number | string) {
//     if (typeof x==='number'){
//         return x+1
//     }else{
//         return x+'1'
//     }
// }


// function 함수이다2(x: number | string) {
//     let array:number[]=[];
//     if(typeof x==='number'){
//         array[0]=x;
//     }  //else, else if 안쓰면 에러로 잡을수도 있어서 if문은 끝까지
// }

// // assertion문법 - 타입 덮어쓰기

// function 함수이다3(x: number | string) {
//     let array:number[]=[];
//     array[0] = x as number; //number타입됨 - if문필요없음
//     // assertion 문법의 용도 1. Narrowing 할때 사용 
//     // 2. 무슨 타입이 들어올지 100%확실할 때 사용
//     // 3. 남이 짠 코드 수정, 왜 타입에러가 나는지 모르겠을때만 비상용으로..
// }



// // type alias 만드는 법
// // let 동물:string|number| undefined;
// // union 타입으로 동물이 들어감

// type Animal = string| number|undefined;
// let 동물:Animal // 위의 타입들만 동물에 들어갈 수 있다 -> 타입키워드로 변수 만드는 것= type alias

// // union 타입 뿐만 아니라, object타입도 변수에 담을 수 있음
// // type 변수 작명 관습 - 일반변수와 다르게 대분자로 쓰기
// type AnimalType={name:string, age: number}
// let 동물2: AnimalType = {name:'kim',age:20}

// // const 변수 특징 - 절대 바꿀수 없는 변수(재할당금지)
// const 출생지역2={region:'seoul'}
// 출생지역2.region='busan'
// // const변수는 등호로 재할당만 막는 역할
// // const로 담은 object 수정은 자유롭게 가능

// // typescript 쓰면 object 자료 수정도 막을 수 있음
// type Girlfriend={
//     // 읽기전용으로 바꿔줌- 수정 불가능 - 수정시 에러남
//     readonly name:string
// }

// const 여친:Girlfriend= {
//     name:'엠버'
// }


// // 여친.name='유라' 
// // 타입스크립트 에러는 에디터& 터미널에서만 존재
// // 실제 변환된 js파일은 에러없음

// // type Girlfriend={
// //     name?:string -> string|undefined가 들어갈수 있다는 뜻
// // }

// type Name=string;
// type Age= number;

// // type 변수 - 당연히 union type으로 합치기 가능
// type Person = Name | Age;

// type PositionX = {x:number};
// type PositionY = {y:number};

// // &연산자로 object 타입 합치기(extend하기)
// type NewType=PositionX&PositionY;
// let position:NewType={x:10,y:20}

// // 타입키워드는 재정의는 불가능


// type 내타입={x:number}
// type 내타입2={x:number}

// type NewType2=내타입&내타입2
// let position2:NewType2={x:10}


// type 내타입3={
//     color?:string,
//     size:number,
//     readonly position: number[]
// }

// let 테스트용변수3:내타입3={
//     size:123,
//     position:[1,2,3]
// }

// type 내정보={
//     name:string,
//     phone:number,
//     email?:string
// }

// let 테스트용변수4:내정보={
//     name:'하이',
//     phone:123456
// }

// type 미성년자여부={어른:boolean}
// type 뉴타입=내정보&미성년자여부
// let 테스트용변수5:뉴타입={
//     name:'예스',
//     phone:1234,
//     어른:true
// }














