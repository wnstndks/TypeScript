// // tsc -w
// let 이름 :string ="kim";
// // 타입지정은 변수명:타입명
// // 이름=123; 타입이 실수로 변경될 때 에러냄
// // 변수에 타입지정 = 변수에 실드 씌우는 것
// let 나이 : number = 50;
// let 결혼했니 :boolean =true;
// // undefined, null도 있음
// // 변수하나에 여러자료 집어넣고 싶으면 array 자료형 쓰면 됨
// // let 회원들 : string[] = ['kim','park']
// // =>회원들에는 문자만 담긴 값들만 들어갈 수 있다.
// // 변수하나에 여러자료 집어넣고 싶다 - object 자료형 써도 가능
// let 회원들:{member: string, member2:string} = {member: 'kim',member2:'park'}
// // 이 변수엔 object만 들어올수 있음 - object자료형에도 타입지정 가능
// // 타입스크립트의 경우 타입지정을 굳이 할 필요없음 - 타입지정 원래 자동으로 됨
// let 내이름:string='누구임'
// let 내나이:number=26
// let 출생지역:string="서울"
// let 내가좋아하는거:{곡:string,가수:string}={곡:'talk',가수:'khalid'}
// let product:{member:string[],days:number,started:boolean}={
//   member : ['kim', 'park'],
//   days : 30,
//   started : true
// }
