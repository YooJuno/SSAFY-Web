
// Prototype 생성자 (constructor) 정의
// 일반 함수와 똑같이 생겼는데, this에 접근한다는 점이 다르다.
// 일반적으로 이름은 대문자로 시작
function Dog(name, age) {
    this.name = name;
    this.age = age;
} // => 덜 만들어진 타입


// 객체 생성
const puppy = new Dog("seokyeol", 56);

// 해시처럼 추가 가능
puppy.number = "010-3792-6395";

// 메서드 생성 가능. 근데 위에서 추가는 안됨
Dog.prototype.bark = function() {
    console.log(`${this.name} 멍멍!`);
}
puppy.bark()

console.log(puppy);

// 클래스들과 뭐가 다른가?
// 객체 생성 후에 맘대로 객체나 메서드 추가 가능