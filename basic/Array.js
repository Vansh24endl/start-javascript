let arr = [2,9,8,1,1,2,1,87,"hello",true,false];
console.log(arr[8]);

let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.length);

let L = arr.length;
for(let i = 4; i < L-1; i+=2){
    console.log(arr[i]);
}

for (let i in arr) {
    console.log(arr[i]);
}

for (let i of arr){
    console.log(i);
}

for (let i in arr) {
    console.log(i ,arr[i]);
}
let Data = {};
