class Person{
    // constructer에서는 각각의 인스턴스들에 대한 변수들을 만들어놓아야 함
    // data=0; // 필드값 -> 모든 자식들은 data라는 값을 가질 수 있음 - 타입지정 가능
    name:string;
    age:number;

    constructor(a:string,b:number){
        // return은 굳이 해줄필욘 없음 - 복제되는게 다 object이기에 그리고 rest parameter, default parameter도 가능
        this.name=a
        this.age=b
    }

    // prototype에 함수도 만들어줄 수 있음
    함수(a:string){
        console.log('안녕'+a);
    }
}


// console.log(사람1.data)

let 사람1= new Person('홍길동',20);
let 사람2= new Person('아무개',24);


// class 문제1

class Car{
    model:string;
    price:number;

    constructor(name,price){
        this.model=name;
        this.price=price;    
    }

    tax():number{
        return this.price/10;
    }
}


let car1= new Car('소나타',3000);
console.log(car1)
console.log(car1.tax())


// class 문제2

class Word{
    num:number[];
    str:string[];

    constructor(...param:(number|string)[]){
        
        let 숫자들:number[]=[];
        let 문자들:string[]=[];

        param.forEach((a)=>{
            if(typeof a==='number'){
                숫자들.push(a);
            }else{
                문자들.push(a);
            }
        })

        this.num=숫자들;
        this.str=문자들;
    }
}

let obj=new Word('kim',3,5,'park');

console.log(obj.num);
console.log(obj.str);