// Two types of data types 1 primitive and second non-primitive.
//primitive data types value copy karte hain.
// Non primitive ref share earch other.
//primitive: String,Number,BigInt,Boolean,Undefined,null,Symbol;
//Non-Primitive: Array,Object,Function.
let a = 56;
let b = a;
// Data copy in b
let arr = {
    1:"Mohan",
    2:"Tinku",
    3:"Shreya"
}

let brr = arr;
arr[1] = "Deewana"
console.log(brr)