//Nullish Collashing Operator.
let val = null ?? undefined;
console.log(val)
val = 5 ?? undefined;
console.log(val)
val = 10 ?? null;
console.log(val)
val = 10 ?? 5
console.log(val)