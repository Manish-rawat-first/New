const val = (...num)=>{
    return num;
}
console.log(val(5,6,9))

const val2 = (...num)=>(num)
console.log(val2(1,2,3,5,6))

const obj = ()=>({1:"Ram",2:"Seeta",3:"Jai Shree Ram"})
console.log(obj())