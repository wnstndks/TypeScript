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
function 이름적어(x) {
    if (x) {
        console.log('이름이 없습니다.');
    }
    else {
        console.log('안녕하세요 ' + x);
    }
}
// function 함수(x: number | string):void {
//     if (typeof(x):number)
// }
function 자릿수세기(x) {
    return x.toString().length;
}
function 결혼할수있나(x, y, z) {
    var sum = 0;
    sum += x;
    if (y) {
        sum += 500;
    }
    if (z == '상') {
        sum += 100;
    }
    if (sum >= 600) {
        return '결혼가능';
    }
}
console.log(결혼할수있나(100, true, '상'));
// type 이 하나로 확정되지 않았을 경우 Type Narrowing 써야함
// 어떤 변수가 타입이 아직 불확실하다면 if문등으로 Narrowing 해줘야 조작가능
function 함수이다(x) {
    if (typeof x === 'number') {
        return x + 1;
    }
    else {
        return x + '1';
    }
}
function 함수이다2(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    } //else, else if 안쓰면 에러로 잡을수도 있어서 if문은 끝까지
}
// assertion문법 - 타입 덮어쓰기
function 함수이다3(x) {
    var array = [];
    array[0] = x; //number타입됨 - if문필요없음
    // assertion 문법의 용도 1. Narrowing 할때 사용 
    // 2. 무슨 타입이 들어올지 100%확실할 때 사용
    // 3. 남이 짠 코드 수정, 왜 타입에러가 나는지 모르겠을때만 비상용으로..
}
var 동물; // 위의 타입들만 동물에 들어갈 수 있다 -> 타입키워드로 변수 만드는 것= type alias
var 동물2 = { name: 'kim', age: 20 };
// const 변수 특징 - 절대 바꿀수 없는 변수(재할당금지)
var 출생지역2 = { region: 'seoul' };
출생지역2.region = 'busan';
var 여친 = {
    name: '엠버'
};
var position = { x: 10, y: 20 };
var position2 = { x: 10 };
var 테스트용변수3 = {
    size: 123,
    position: [1, 2, 3]
};
var 테스트용변수4 = {
    name: '하이',
    phone: 123456
};
var 테스트용변수5 = {
    name: '예스',
    phone: 1234,
    어른: true
};
