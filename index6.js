const a = [21, 58, 69, 20, 47, 55, 7, 36, 91, 75];
const b = [12, 34, 46, 22, 67, 89];
let c = a.concat(b);
console.log("The merge of two array: "+c);
c.sort(function(a, b){return a - b});
console.log("Merged array elements in ascending order:"+c);