let ob = {
    1:"Hello",
    2:"Motu",
    3:"Chotu"
}
let k = Object.keys(ob)
let m = Object.values(ob)
console.log(`${k},  ${m}`)

console.log(Object.entries(ob))

console.log(ob.hasOwnProperty(3))
