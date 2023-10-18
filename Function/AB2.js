function shopping(shopObj){
    return `user name: ${shopObj.user} and Price: ${shopObj.price}`;
}
let s = shopping({
    user:"Manish",
    price:78790
})
console.log(s)


function greeting(...member){
    return  member;
}
console.log(greeting("Ramu","Manish","Shivam","Tanmay","Mannu"))