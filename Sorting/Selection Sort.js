
function selectionSort(arr,n){
    for(let i = 0; i < n-1; i++){
        let min = i;
        for(let j = i+1; j < n; j++){
            if( arr[j] < arr[min] ){
                min = j;
            }
        }
        swap(i,min,arr);
    }
    return arr;
}

function swap(i,j,arr){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}   

const arr = [64,34,25,12,22,11,90];
let n = arr.length;
console.log(selectionSort(arr,n)) // [ 11, 12, 22, 25, 34, 64, 90 ]