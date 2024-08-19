// Best sorting technique for small data sets or nearly sorted data sets

// Selecting key element and comparing it with the elements on the left 

// if a key element is smaller than the element on the left, then the elements are moved to the right until the correct position is found

function insertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length;
console.log(insertionSort(arr, n)); // [ 11, 12, 22, 25, 34, 64, 90 ]
