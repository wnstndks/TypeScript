// TypeScript로 HTML 조작 가능 - but 조금 다름
// 쌩자바스크립트
var 제목 = document.querySelector('#title');
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
if (제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) {
    제목.innerHTML = '반가워요';
}
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
