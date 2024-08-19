
function merge(arr, low, mid, high) {
  const leftArr = arr.slice(low, mid + 1);
  const rightArr = arr.slice(mid + 1, high + 1);

  let leftIndex = 0;
  let rightIndex = 0;
  let arrIndex = low;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      arr[arrIndex] = leftArr[leftIndex];
      leftIndex++;
    } else {
      arr[arrIndex] = rightArr[rightIndex];
      rightIndex++;
    }
    arrIndex++;
  }

  while (leftIndex < leftArr.length) {
    arr[arrIndex] = leftArr[leftIndex];
    leftIndex++;
    arrIndex++;
  }

  while (rightIndex < rightArr.length) {
    arr[arrIndex] = rightArr[rightIndex];
    rightIndex++;
    arrIndex++;
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) return;
  const mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

const arr = [7, 2, 5, 54, 99, 18, 1];
console.log("Before Sorting:");
console.log(arr.join(" "));

mergeSort(arr, 0, arr.length - 1);

console.log("\nSorted Array:");
console.log(arr.join(" "));
