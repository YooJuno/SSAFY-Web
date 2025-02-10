// forEach? => 배열 순회
const numbers = [1,2,3,4,5];
numbers.forEach(function (number) {
    console.log(number);
});
numbers.forEach((number) => {
    console.log(number);
});

// 리턴 존재함? ... => forEach는 리턴이 없다
names.forEach((name) => console.log(`${name} 안녕`));

// 그냥 출력만 함.
names.forEach((name) => {
    return console.log(`${name} 안녕`);
})