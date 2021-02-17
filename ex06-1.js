const calc1 = x => x * 100 - 5
const calc2 = x => x + 3
const calc3 = x => x * 8


const n = 3
console.log(calc1(n))
console.log(calc2(calc3(calc2(n))))