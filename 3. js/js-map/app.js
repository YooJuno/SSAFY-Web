const names = ["juno1", "juno2", "juno3"];

// map은 리턴을 모아서 새로운 배열을 리턴한다.
const newNames = names.map((name) => `${name} 안녕`);
console.log(newNames);
