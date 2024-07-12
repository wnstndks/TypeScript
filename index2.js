// 문자 or 숫자 들어올수 있는 변수는?
var 회원 = 123; //변수에 number또는 string이 들어갈수 있다.
// Union type 타입 2개 이상 합친 새로운 타입 만들기
// 문자를 할당했으면 확정이 됨
// 숫자 or 문자가 가능한 array 타입지정은?
// 숫자 or 문자가 가능한 array 타입지정은?
var 회원들2 = [1, '2', 3];
var 오브젝트 = { a: '123' };
// any 타입 - 모든 자료형 허용해줌
var 이름2;
// 그럼 타입스크립트 쓰는 이유가 없음 -> 타입실드 해제 문법
// unknown 타입- 모든 자료형 허용해줌
var 이름3;
이름3 = 123;
이름3 = {};
var 변수1 = 이름;
// 타입스크립트의 엄격함에 대해- 간단한 수학 연산도 타입 맞아야함
// unknown은 number타입이 아님
// 타입스크립트는 타입 엄격하게 지켜야함
// let 나이2: string|number;
// 나이2+1;
// string타입+1 - 허용
// number타입+1 - 허용
// string|number타입 - 안됨
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
