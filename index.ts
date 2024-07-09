let 이름 :string ='kim';
// 이 변수에는 string 타입의 문자열만 들어올수 있다

let 이름2 : {name? : string} = {name : 'kim'}
// object 타입

let 이름3 : string | number=123;
// 더 다양한 타입 - union

// 타입은 변수에 담아쓸수있음
// type alias

type 내타입 = string | number;

let 이름4 : 내타입 =123;


function 함수(x: number) : number{
    return x*2
}


// array에 쓸수 있는 tuple 타입 - 무조건 첫째는 number 두번째는 boolean
type Member = [number, boolean]
let john :Member = [123,true]


// object에 타입지정해야할 속성이 너무 많을시
type Member2 = {
    // 글자로 된 모든 object 속성의 타입은 string
    [key: string] :string,

}


// class 타입 지정 가능
class User{
    name: string;
    constructor(name : string){
        this.name=name;
    }
}


let myinfo ={
    이름:'안준수',
    나이: 26 ,
    출생지역:'서울'
}

let myinfo2 ={
    song:'fancy',
}

