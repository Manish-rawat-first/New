const val = (...num)=>{
    return num;
}
console.log(val(5,6,9))

const val2 = (...num)=>(num)
console.log(val2(1,2,3,5,6))