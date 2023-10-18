const s = {
    1:"A",
    2:"B",
    3:"C"
}
console.log(s)
s[4] = "Hello"
console.log(s)
let m = [12,45,67,89]
const obj = {...s,...m}
console.log(obj)