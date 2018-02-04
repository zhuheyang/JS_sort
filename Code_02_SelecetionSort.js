"use strict";
function selectionSort(arr) {
  if(arr === null || arr.length < 2) {
    return;
  }
  // ������ܳ���minIndexΪ��Сֵ, ��minIndex for j ѭ������Ϊi, �൱��swap(arr, i, i)
  for(let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j++) {
      minIndex = arr[minIndex] > arr[j] ? j : minIndex;
    }
    swap(arr, i, minIndex);
  }
}
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
let arr = [12, 232, 43, 23, 112, 34];
selectionSort(arr);
console.log(arr);