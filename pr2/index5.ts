// class Person{
//     // constructer에서는 각각의 인스턴스들에 대한 변수들을 만들어놓아야 함
//     // data=0; // 필드값 -> 모든 자식들은 data라는 값을 가질 수 있음 - 타입지정 가능
//     name:string;
//     age:number;

//     constructor(a:string,b:number){
//         // return은 굳이 해줄필욘 없음 - 복제되는게 다 object이기에 그리고 rest parameter, default parameter도 가능
//         this.name=a
//         this.age=b
//     }

//     // prototype에 함수도 만들어줄 수 있음
//     함수(a:string){
//         console.log('안녕'+a);
//     }
// }


// // console.log(사람1.data)

// let 사람1= new Person('홍길동',20);
// let 사람2= new Person('아무개',24);


// // class 문제1

// class Car{
//     model:string;
//     price:number;

//     constructor(name,price){
//         this.model=name;
//         this.price=price;    
//     }

//     tax():number{
//         return this.price/10;
//     }
// }


// let car1= new Car('소나타',3000);
// console.log(car1)
// console.log(car1.tax())


// // class 문제2

// class Word{
//     num:number[];
//     str:string[];

//     constructor(...param:(number|string)[]){
        
//         let 숫자들:number[]=[];
//         let 문자들:string[]=[];

//         param.forEach((a)=>{
//             if(typeof a==='number'){
//                 숫자들.push(a);
//             }else{
//                 문자들.push(a);
//             }
//         })

//         this.num=숫자들;
//         this.str=문자들;
//     }
// }

// let obj=new Word('kim',3,5,'park');

// console.log(obj.num);
// console.log(obj.str);


// type 키워드로 타입변수 생성가능 및 interface 키워드로도 타입변수 생성가능

// type 네모타입={color:string,width:number};
// interface 네모타입2{
//     color:string,
//     width:number
// }; // 일종의 class 만드는 법과 유사함 - 차이는??

// let 네모:네모타입 = {color:'red',width:100}


// interface Student{
//     name:string;
// }

// interface Teacher{
//     name:string;
//     age:number;
// }

// let 학생:Student= {name:'kim'};
// let 선생:Teacher= {name:'kim',age:20};

// 인터페이스를 쓰면 extends로 복사가능
// Student와 Teacher이 중복됨 -> Student에 있던걸 복사해서 Teacher에 쓰기

interface Student{
    name:string;
}

interface Teacher extends Student{
    age:number;
}

type Animal={name:string}
type Cat={age:number} & Animal //intersection type을 써서 타입을 추가해주기 - 두 타입을 전부 만족하는 타입
// interface도 &기호를 써서 교차타입을 만들수 있음
let 선생2:Cat={name:'kim',age:20}


// interface와 type
// interface는 중복선언 가능 -자동 익스텐드가됨
// type은 중복선언 불가능

interface Student{
    name:string
}
interface Student{
    score:number
}

// 외부 라이브러리의 경우 interface 를 많이 사용
//  다른 사람이 이용많이 할것 같으면 object 타입 지정할 때 interface 사용
// extends쓸때 중복 속성 발생시 에러
// &기호쓸때 중복 속성 발생시 미리 에러가 나지 않음

// interface 문제1
interface Product{
    brand:string;
    serialNumber:number;
    model:string[]
}

let 상품:Product={brand:'Samsung',serialNumber:1360,model:['TV','Phone']}

// 문제2
interface Product2{
    product:string;
    price:number;
}

// let 장바구니:(Product2:Product3)[]=[{product:'청소기',price:7000},{product:'삼다수',price:800}]

// 문제3
interface Product3 extends Product2{
    card:boolean
}

let 장바구니:(Product2|Product3)[]=[{product:'청소기',price:7000},{product:'삼다수',price:800},{product:'청소기',price:80000,card:false}]

// 문제4

interface PlusType{
    plus:(x:number , y:number)=>number;
    minus:(x:number , y:number)=>number;
}

let 오브젝트:PlusType={

    plus(a,b){
        return a+b
    },
    minus(a,b){
        return a-b
    }
}