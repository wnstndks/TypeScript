// funciton 함수(){
//     코드~~
// }

// 함수()

// 길고 복잡한 코드 한단어로 축약가능
// 숫자 집어넣으면 다른 숫자나오는 블랙박스 역할

// 파라미터= 숫자 input역할
// return 할 값 =output 되는 값


// let y ; 변수만 만들면 any 자동할당 return 되는 값, 파라미터 타입지정 가능
// funciton 함수(x:number) : number {
//     코드~~
    // return x*2
// }


// 함수에서 void 타입 활용가능
// function 함수(x:number):void{
    // 함수에서 void 타입 활용가능 - 실수로 뭔가 return 하는 것을 사전에 막을 수 있음
    // void는 함수를 쓰고나서 뭔가 뱉고 싶지 않을 때 사용
// }

// 자바스크립트와 다른 점 - 타입지정된 파라미터는 필수
// 파라미터가 옵션일 경우엔 파라미터변수?:타입
//  ?연산자는 -> 변수?:number 변수 number|undefined와 같다
// function 함수(x?:number):void{
// }

// 타입스크립트는 엄격한걸 좋아함 string+number, number+number 이외엔 불가능

function 이름적어(x?:string):void{
    if(x!){
        console.log('이름이 없습니다.')
    }
    else{
        console.log('안녕하세요 '+x)
    }

}

// function 함수(x: number | string):void {
//     if (typeof(x):number)
// }

function 자릿수세기(x:number|string):number{
    return x.toString().length
}

function 결혼할수있나(x:number,y:boolean,z:string):string|void{
    let sum:number=0
    sum+=x
    if (y){
        sum+=500
    }
    if(z=='상'){
        sum+=100
    }
    if(sum>=600){
        return '결혼가능'
    }
}

console.log(결혼할수있나(100,true,'상'))




