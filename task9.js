function mySlice(arr, start, end){
    if(start === undefined) start = 0;
    if(end === undefined) end = arr.length;
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(arr[i]);
    }
    return result;
}

console.log(mySlice([1, 2, 3, 4, 5], 2, 3)); // [3, 4]

function myIndexOf(arr, item){
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return i;
        }
    }
}

console.log(myIndexOf([1, 2, 3, 4, 5], 3)); // 2

function myIncludes(arr, item){
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {
            return true;
        }
    }
    return false;
}

console.log(myIncludes([1, 2, 3, 4, 5], 3)); // true

