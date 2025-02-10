// 이름이 없다? => lambda

// lambda function
const introduce1 = function (name, age) {
    return `${name} 안녕, 나이는 ${age}`;
};

// lambda function with arrow function
const introduce2 = (name, age) => {
    return `${name} 안녕, 나이는 ${age}`;
};

// 축약 가능
// 1. 전체 내용이 한 줄이고
// 2. 그 한 줄 마저 리턴일 때
(name, age) => `${name} 안녕, 나이는 ${age}`; // return string
(name, age) => {`${name} 안녕, 나이는 ${age}`}; // return void
 
/* 
[화살표 함수 사용 목적]
일회용 함수
*/

console.log(introduce2("juno", 28));

