"use strict";
function insertionSort (arr) {
  if(arr === null || arr.length < 2) {
    return;
  }
  for(i = 1; i < arr.length; i++) {
    for(j = i; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
}
function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[j] ^ arr[i];
  arr[i] = arr[i] ^ arr[j];
}
var arr = [12, 232, 43, 23, 112, 34];
insertionSort(arr);
console.log(arr);