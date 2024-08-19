function bubbleSort(arr,n){
    let swapped = false;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(j,j+1,arr);
                swapped = true;
            }
        }
        if(swapped === false){
            break;
        }
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
console.log(bubbleSort(arr,n)) // [ 11, 12, 22, 25, 34, 64, 90 ]   