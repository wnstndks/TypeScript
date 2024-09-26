// rest parameter
// 몇개의 파라미터가 들어올 지 모를때 ... 을 사용함, 다른 파라미터 있으면 맨 뒤에만 사용가능하다
// function 함수(...a){
//     console.log(a)
// }
// 함수(1,2,3,4,5,6) // 파라미터로 들어온 걸 다 array로 출력하고 있음 rest parameter는 array 형식
// rest parameter 타입지정
// function 함수(...a: number[]){
//     console.log(a)
// }
// 함수(1,2,3,4,5,6)
// ... 세개의 첫번째 용도 - 함수 안에 쓰면 -rest parameter 만약 array나 object에쓰면 괄호 벗기기
// let arr =[1,2,3];
// let arr2 = [4,5];
// let arr3 = [...arr,...arr2]; // 이 오브젝트 안에 있는 괄호를 벗겨달라는 뜻
// destructuring 개념설명
// let arr= ['안녕',100] // 이 자료들을 변수로 빼서 쓰고 싶으면
// let [변수1, 변수2] = ['안녕',100] // 왼쪽 오른쪽 똑같이 자료를 맞추면 변수가 나옴
// console.log(변수1)
// let {student:student, age:age} =  {student:true,age:20}; 
// let {student,age}={student:true,age:20};// 이름이 같으면 생략해도 됨
// let 오브젝트 = {student:true,age:20};
// function 함수(a,b){
//     console.log(a,b)
// }
// 함수(오브젝트.student,오브젝트.age);
// function 함수({student,age}:{student:boolean,age:number}){
//     console.log(student,age)
// }
// 함수({student:true,age:20}) //파라미터 만들기 == 변수만들기
// rest parameter 문제1
// function 최댓값함수(...a:number[]){
//     let max:number=0;
//     a.forEach((i)=>{
//         if(max<i){
//             max=i;
//         }
//     })
//     return max;
// }
// rest parameter 문제2
// function 함수({user, comment, admin}:{user:number,comment:number[],admin:boolean}){
//     console.log(user, comment, admin)
// }
// 문제3
// function 마이함수([...a]:(number|string|boolean)[]){
//     console.log(a)   
// }
