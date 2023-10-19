const map = new Map();
map.set("name","Manish");
map.set("lname","Rawat");
map.set("name","Tarun");
console.log(map);

for (const [key,value] of map) {
    console.log(key,' ',value)
    
}

for (const key of map) {
    console.log(key)
    
}