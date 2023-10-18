const sy = Symbol("Mykey");
const s = {
  user: "manishrawat4876@gmail.com",
  password: "Manish$789",
  pincode: 471001,
  dob: 20042002,
  mob: 7879775525,
  Name:"Manish Rawat",
  Branch:"CSE",
  [sy]:"Rohan"
};
console.log(s["dob"])
console.log(s["Name"])
console.log(s["pincode"])
console.log(s["Branch"])
console.log(s)
s.Class = 5
Object.freeze(s);// Freeze Object Cannot change value.
s.Name = "Mohan";
console.log(s)
