console.log("안녕 JS");

const name1 = "juno1";
const name2 = "juno2";

console.log(name1);
console.log(name2);



// [let] 
// let은 변경 가능하다!
let name3 = "juno3";
name3 = "juno3-1";
console.log(name3); // "juno3-1"



// [const]
const name4 = "juno4";
// name4 = "juno4-1";
console.log(name4); // Error
// let 대신에 const를 사용해야함
// 프론트엔드 (클라이언트) 개발의 본질은 데이터를 변경하지 않음
//  ===> immutability



// [for] js에선 사용하지 않음
// 대신 map, filter, reduce 사용



// [var]
// 요즘엔 let, const 나와서 도태됨.
var a = 1;
var a = 2;
console.log(a); // 2



// [자료형] - camelCase
const nameString = 'juno5'; // char, string _ 작은 따옴표 가능
const numInt = 1; // int
const numFloat = 1.0; // float
const flagBool = true // boolean



// [조건문]
// === 세 개를 써야 타입까지 비교함
const pet = "고양이";
if (pet === "고양이") {
    console.log("야옹야옹");
}



// [비교 연산자]
// <  >  <=  >=



// [배열]
const arr = [1, 2, 3];
console.log(arr[4]); // undefined

arr[1] = 999; // 값 변경은 가능
console.log(arr); // (3) [1, 999, 3]

// arr = [4, 5, 6] // Error , let은 에러 안남
// console.log(arr); 


// [string]
// immutable
const name5 = "juno5";
console.log(name5); // juno5
console.log(name5.length); // 4
console.log(name5[1]); // u



// [function]
function introduce(name) {
    const result = `${name} 안녕`;
    console.log(`${name} 안녕`); // juno5 안녕
    console.log(name + "안녕"); // juno5안녕

    return result;
}
const returnValue = introduce(name5);
console.log("함수 리턴 : " + returnValue); // 함수 리턴 : juno5 안녕