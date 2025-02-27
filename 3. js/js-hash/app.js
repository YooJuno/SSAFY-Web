const userInfo = {
    name: "david",
    age: 40,
    hasjob: true,
    address: "서울시",
    password: "1q2w3e4r",
    family: ["아빠", "엄마", "고양이"],
};

console.log(userInfo);
console.log(userInfo.family);
console.log(userInfo.hasjob);
console.log(userInfo.family[1]);
console.log(userInfo.address);
console.log(userInfo.password);


// const로 선언했기 때문에 변경 불가능
// userInfo = {}

// 하지만 그 안의 property는 변경 가능
userInfo.name = "juno";

// 추가도 가능
userInfo.gender = "male";