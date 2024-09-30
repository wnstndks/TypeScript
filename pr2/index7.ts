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

// class Person{
//     constructor(public name){
//         // public 쓰면 this.어쩌구 생략 가능
//     }
// }

// let 자식 = new Person('kim')
// console.log(자식)




// classs가 여러개 필요시 복붙하는 문법
// class User{
//     x =10;
// }

// class NewUser extends User{
//     // 여기에 User에 있던거 다 복붙
// }

// let 사람 = new NewUser();
// console.log(사람)

// private는 class{} 안에서만 사용 가능
// class User{
//     protected x =10; //마찬가지로 protected쓰면 class안에서만 사용 가능
// }

// class NewUser extends User{
//     // 그러나 private과 달리 protected를 쓰면, 여기서 사용 가능
//     doThis(){
//         this.x=10;
//     }
//     // 클래스를 여러개 만들때 속성 공유 - protected
// }

// protected - extends 된 class는 사용가능, 자식들 사용불가능 - 클래스 여러개 만들때 굿
// private - extends 된 class는 사용불가능, 자식들 사용불가능

// class User{
//     static x=10; //x는 없어짐 - > static 키워드 붙이면 부모 class에 직접 부여됨(+자식에게 안물려줌, extends 하면 잘 따라옴)
//     y=20; 
// }

// let 자식 = new User();
// // console.log(자식.x) -> 오류남
// console.log(User.x)

// class User{
//     static skill = 'js'; 
//     intro= User.skill+'전문가입니다'; // static 키워드 붙이면 this. 못씀
// }

// let 철수 = new User();
// console.log(철수)

// // skill 명 변경
// User.skill='typescript'; //static 키워드이므로 바꿀수 있음

// let 철수2 = new User();
// console.log(철수)

// protected, static 키워드 문제1
// class User{
//     private static x=10;
//     public static y=20;
//     protected z=30;
// }

// let 철수2 = new User();
// console.log(철수2);

// class newuser extends User{

// }
// let 철수 = new newuser();
// console.log(철수);


// 문제2
class User{
    private static x = 10;
    public static y=20;

    public static addOne(num:number){
        User.x+=num;
    }
    public static printX(){
        console.log(User.x);
    }
}

User.addOne(3);
User.addOne(4);
User.printX();

// 문제3
class Square{
    public x;
    public y;
    public z;

    constructor(x,y,z){
        this.x=x;
        this.y=y;
        this.z=z;
    }
    

    draw(){
        const div= document.createElement('div');
        div.style.width=`${this.x}px`;
        div.style.height=`${this.y}px`;
        div.style.backgroundColor=this.z;

        // 랜덤한 위치에 배치
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        
        div.style.left = `${randomX}px`;
        div.style.top = `${randomY}px`;
        
        document.body.appendChild(div);

    }
}

let 네모 = new Square(30,30,'red');
네모.draw();
네모.draw();
네모.draw();
네모.draw();