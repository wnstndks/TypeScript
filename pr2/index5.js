// class Person{
//     // constructer에서는 각각의 인스턴스들에 대한 변수들을 만들어놓아야 함
//     // data=0; // 필드값 -> 모든 자식들은 data라는 값을 가질 수 있음 - 타입지정 가능
//     name:string;
//     age:number;
// interface도 &기호를 써서 교차타입을 만들수 있음
var 선생2 = { name: 'kim', age: 20 };
var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'Phone'] };
var 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }, { product: '청소기', price: 80000, card: false }];
var 오브젝트 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
