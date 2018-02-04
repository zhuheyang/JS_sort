function bubbleSort(arr) {
  if(arr === null || arr.length < 2) {
    return;
  }
  let flag = 0;
  for(i = arr.length - 1; i > 0; i--) {
    flag = 0;
    for (j = 0; j < i; j++) {
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        flag = 1;
      }
    }
    if(flag === 0) {
      break;
    }
  }
}
function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[j] ^ arr[i];
  arr[i] = arr[i] ^ arr[j];
}
var arr = [12, 232, 43, 23, 112, 34];
bubbleSort(arr);
console.log(arr);
