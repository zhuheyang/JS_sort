var arr = [23, 434, 232, 545, 1212, 22, 221];
quickSort(arr);
console.log(arr);
function quickSort(arr) {
  if(arr == null || arr.lenght < 2) {
    return;
  }
  sortProcess(arr, 0, arr.length - 1);
}
function sortProcess(arr, L, R) {
  if(L < R) {
    swap(arr, L + Math.floor((R - L + 1) * Math.random()), R);
    let pointer = partition(arr, L, R);
    sortProcess(arr, L, pointer[0] - 1);
    sortProcess(arr, pointer[1] + 1, R);
  }
}
// 利用while循环, 直接使用L当作循环变量, 还省掉了一个变量
// 之前会习惯性let i = L; while(i < more) {}
function partition(arr, L, R) {
  let less = L - 1;
  let more = R;
  while(L < more) {
    if(arr[L] < arr[R]) {
      swap(arr, ++less, L++);
    } else if(arr[L] > arr[R]) {
      swap(arr, --more, L);
    } else {
      L++;
    }
  }
  swap(arr, more, R);
  return [less + 1, more];
}
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}