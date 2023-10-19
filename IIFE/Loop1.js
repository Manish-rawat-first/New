const s = [1, 2, 3, 4, 5, 6];
console.log("For Loop");
for (let i = 1; i < s.length; i++) {
  console.log(s[i]);
  if (i == 3) {
    break;
  }
}
console.log("While Loop");
// while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i += 2;
}
