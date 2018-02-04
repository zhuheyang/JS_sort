// 返回右侧比它小的数的和, 例如下例应当为: 0, 1, 1+3, 0, 加起来为5
let test = [1, 3, 5, 1];
const sum = smallSum(test);
console.log(sum);
function smallSum(arr) {
  if(arr == null || arr.length < 2) {
    return 0; // diff form mergeSort, there demands smallSum totallly
  }
  return sumProcess(arr, 0, arr.length - 1);
}
function sumProcess(arr, L, R) {
  if(L == R) {
    return 0; // as above, return the sum, if equals, there is 0, not undefined any more
  }
  const M = L + ((R - L) >> 1);
  return sumProcess(arr, L, M) + sumProcess(arr, M + 1, R) + merge(arr, L, M, R);
}
function merge(arr, L, M, R) {
  let help = new Array(R - L + 1);
  let i = 0;  // record the help Array's index
  let p1 = L;  // record the left Array
  let p2 = M + 1;  // recorde the right Array
  let res = 0;  // record the merge smallSum
  while (p1 <= M && p2 <= R) {
    res += arr[p1] < arr[p2] ? (R - p2 + 1) * arr[p1] : 0;
    // if asked to count the descending-pair, change to :
    // res += arr[p2] > arr[p1] ? (R - p2 + 1) : 0;
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= M) {
    help[i++] = arr[p1++];
  }
  while (p2 <= R) {
    help[i++] = arr[p2++];
  }
  // do not forget return the help Array, or else your res will be weird
  for(i = 0; i < help.length; i++) {
    arr[L + i] = help[i++];
  }
  console.log('arr is ' + arr);
  console.log('res:' + res);
  return res;
}