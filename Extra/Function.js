function sum(a = 0,b = 0){
    return a+b;
}
let s = [23,45,67,89,sum(5,8)]
for(let a = 0;a<s.length;a++){
    console.log(s[a])
}
console.log(typeof sum)