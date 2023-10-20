let s = [1,23,5,2,1,8];
let num = s.map(item=>item+1).map(item=>item*2).filter(item => item>5)
console.log(num)