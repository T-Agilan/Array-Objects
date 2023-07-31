const numbers = [12, 34, 45, 12, 67, 89, 12];
let index=[];
function myFunction(){
for(let i=0;i<numbers.length;i++){
if(numbers[i]===12)
index.push(i);
}
}
myFunction();
console.log("The index for element 12 are:  "+index);