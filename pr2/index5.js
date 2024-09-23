var Person = /** @class */ (function () {
    function Person(a, b) {
        // return은 굳이 해줄필욘 없음 - 복제되는게 다 object이기에 그리고 rest parameter, default parameter도 가능
        this.name = a;
        this.age = b;
    }
    // prototype에 함수도 만들어줄 수 있음
    Person.prototype.함수 = function (a) {
        console.log('안녕' + a);
    };
    return Person;
}());
// console.log(사람1.data)
var 사람1 = new Person('홍길동', 20);
var 사람2 = new Person('아무개', 24);
// class 문제1
var Car = /** @class */ (function () {
    function Car(name, price) {
        this.model = name;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
// class 문제2
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (a) {
            if (typeof a === 'number') {
                숫자들.push(a);
            }
            else {
                문자들.push(a);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num);
console.log(obj.str);
