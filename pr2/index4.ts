// TypeScript로 HTML 조작 가능 - but 조금 다름

// 쌩자바스크립트
// let 제목 = document.querySelector('#title');
// 제목.innerHTML ='반가워요'
// 그러나 제목이라는 변수가 union 타입이기에 함부로 바꿀수 없다
// => 타입을 하나로 narrowing 해주어야한다.
// if (제목 != null){
    // 제목.innerHTML='반가워요'
// }

// 2번째 narrowing 방법 - instanceof
// 오른쪽에 클래스명 왼쪽에 오브젝트 기입
// if(제목 instanceof Element){
//     제목.innerHTML = '반가워요'
// }


// 3번쨰 방식 as - type assertion 쓰기 - 타입 사기치기
// let 제목 = document.querySelector("#title") as Element;
// 제목.innerHTML ="반가워요"

// 4번째 오브젝트에 붙이는 ?.
// if (제목?.innerHTML){
//     제목.innerHTML = '반가워요'
// }

// 5번째 tsconfig.json에서 strict 모드 끄기









// a태그의 href 속성 바꾸기
// let 링크 = document.querySelector('.link');
// if (링크 instanceof HTMLAnchorElement){
//     링크.href= 'https://kakao.com';
// }

// Element 타입에서 파생되는 타입들이 많음  
// -> Anchor, Heading, Button 타입등등으로 바꾸어야됨

// button 속성
// let 버튼 = document.querySelector('#button');
// 버튼?.addEventListener('click',()=>{

// })


// html - typescript 문제1
// let 버튼 = document.querySelector("#button");

// 버튼?.addEventListener('click',()=>{
//     let 이미지 = document.querySelector("#image");
//     if(이미지 instanceof HTMLImageElement){
//         이미지.src="new.jpg";
//     }
// })

// html - typescript 문제2
// let 링크 = document.querySelectorAll(".naver");

// // forEach 반복문을 이용해서 한개씩 꺼내오기
// 링크.forEach((x)=>{
//     if(x instanceof HTMLAnchorElement){
//         x.href="https://kakao.com";
//     }
    
// })


// class 설명
// object 자료형으로 Lol 캐릭터들의 정보를 정리하기
// var nunu={
//     q:'consume',
//     w:'snowabll'
// }

// var garen={q:'strike',w:'courage'}
// var dd={q:'strike',w:'courage'}
// -> 만약에 100개의 캐릭터라면???


// =>비슷한 object 많이 만들일 있으면 class 만들어 쓰기
// this라는 게 존재하면 function은 클래스 역할 가능 - 옛날 문법
// this는 기계로 부터 생성되는 object - instance
// function 기계(q,w){
//     this.q=q;
//     this.w=w;
// }

// var nunu= new 기계("consume","snowball") //오브젝트 자료
// var garen = new 기계("strike","courage")

// 신문법 사용
// class Hero{
//     constructor(구멍,구멍2){
//         this.q=구멍;
//         this.w=구멍2;
//     }
// }

// var nunu=new Hero("strike","courage");

// // prototype써도 자식 object 에게 데이터를 물려줄수 있다
// // Hero.prototype을 하면 기계는 자동으로 prototype이라는 공간을 만듦 - prototype 은 유전자로 생각하기

// Hero.prototype.name="kim" // object 자료에 이런식으로 추가할 수 있음 => 그럼 자식들도 사용 가능

// var 어레이 = [4,3,1];
// 어레이.sort() // 왜 메소드들을 사용할 수 있는 걸까? -> 자바스크립트에서 어레이를 만들때
// var 어레이 = new Array(4,2,1); // 컴퓨터는 이런식으로 만듦 -> Array라는 기계로 부터 만들어짐
// 어레이.sort() // Array라는 부모 유전자에 저장되어있음

// 모든 Array 자료에 쓸수 있는 함수 추가 - 유전자 수정하기
// Array.prototype.함수=function(){

// }