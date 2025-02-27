const numbers = [1,2,3,4,5];

// acc(accumualte) : 누적값
// cur(current) : 현재 값
// reduce(CallBack, 누적값의 초기값);
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

// const double = [2,4,6,8];
const double = numbers.reduce((acc, cur) => {
    acc.push(cur * 2); 
    return acc;
}, []);
console.log(double);
