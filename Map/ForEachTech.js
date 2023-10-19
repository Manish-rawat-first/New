let arr = [12,3,45,67,8,90]
arr.forEach(item => console.log(item*2));

arr.forEach((item,index,arr)=>console.log(`value: ${item} Index: ${index} ArrayList:${arr}`))