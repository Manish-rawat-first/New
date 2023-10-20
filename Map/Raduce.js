let arr = [
  {
    phone: "Iphone",
    price: 150000
  },
{
    phone: "Samshung",
    price: 85000
},
{
    phone: "Vivo",
    price: 23490
}];

let val = arr.reduce((accumulator,item)=>accumulator+item.price,0);
console.log(`BILL ${val}`);
