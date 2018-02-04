// partition过程, 利用less与more来进行迭代控制, 设定好基准条件
// 随机与经典的区别在于arr[R]的选取是否为random
// swap过程不可使用异或, 因为涉及自身的比较
let arr = [23, 434, 232, 545, 1212, 22, 221];
quickSort(arr);
console.log(arr);
function quickSort(arr) {
  if(arr == null && arr.length < 2) {
    return;
  }
  sortProcess(arr, 0, arr.length - 1);
}
function sortProcess(arr, L, R) {
  if(L < R) {
    swap(arr, R, Math.floor(L + Math.random() * (R - L + 1)));
    let pointer = partition(arr, L, R);
    sortProcess(arr, L, pointer[0] - 1);
    sortProcess(arr, pointer[1] + 1, R);
  }
}
function partition(arr, L, R) {
  let less = L - 1;
  let more = R;
  let index = L;
  // 与划分值做比较, 较小则less部分右移,索引自加移动, 较大则more部分左移, 索引不动, 相等则只动索引.
  while(index < more) {
    if(arr[index] < arr[R]) {
      swap(arr, ++less, index++);
    } else if(arr[index] > arr[R]) {
      swap(arr, --more, index);
    } else {
      index++;
    }
  }
  // 将划分值arr[R]与more位置的值交换, 并返回相等数组序列的两端索引
  swap(arr, R, more);
  return [less + 1, more];
}
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}