const users = [
    {
        id: 1,
        name: "보라돌이",
        hasJob: false,
    },
    {
        id: 2,
        name: "뚜비",
        hasJob: true,
    },
    {
        id: 3,
        name: "나나",
        hasJob: false,
    },
];

// filter : 리턴이 true 라면 새로운 배열 추가
const jobUsers1 = users.filter((user) => user.hasJob);
console.log(jobUsers1);

users[2].hasJob = true;

const jobUsers2 = users.filter((user) => {
    return user.hasJob;
});

console.log(jobUsers2);

// !!! 얕은 복사를 방지하기 위해서라도 써야함 !!!
// map, filter는 새로은 객체를 만들어서 리턴하기 때문에 얕은 복사로 인한 원본 손상을 방지할 수 있음.

// [문제] 배열의 모든 값을 합하라
// [1,2,3,4,5]
// forEach, map, filter만 사용해서

[1,2,3,4,5].forEach(element => {
    
});
let sum = 0;
[1,2,3,4,5].forEach((num) => {
    sum += num;
});
console.log(sum);
