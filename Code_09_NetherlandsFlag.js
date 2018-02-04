// 荷兰旗问题, 一个数组, 指定其中的一个数为划分值, 要求比它小的放在数组左边
// 比它大的放在数组右边, 与它相等的则放在数组中间
// 与其相关的问题还有数组去重, 以及数值的无效值去除, 就涉及到正则表达式的应用了
var arr1 = [23, 434, 232, 545, 1212, 22, 221];
netherlandsFlag1(arr1);
console.log(arr1);
var arr2 = [23, 434, 232, 545, 1212, 22, 221];
netherlandsFlag2(arr2);
console.log(arr2);
function netherlandsFlag1(arr) {
  if(arr == null || arr.length < 2) {
    return;
  }
  partition1(arr, 0, arr.length - 1);
}
function netherlandsFlag2(arr) {
  if(arr == null || arr.length < 2) {
    return;
  }
  partition2(arr, 0, arr.length - 1);
}
function partition1(arr, L, R) {
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
// 这个是简化版本, 仅仅将比arr[R]小的放在左边, 与它相等或比它大的就放在右边, 仅此而已
function partition2 (arr, L, R) {
  let less = L - 1;
  while(L < R) {
    if(arr[L] < arr[R]) {
      swap(arr, ++less, L++);
    } else {
      L++;
    }
  }
  // 返回less区的结尾与more区的开头
  return [less, less + 1];
}
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}