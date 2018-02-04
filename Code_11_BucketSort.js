// 桶排序, 在几亿个数中, 对某个范围内的数进行排序, 这个思想很重要
// E.G. 0 ~ 200的范围内的几亿个数, 对其进行排序, 时间复杂度O(N), 空间复杂度也为O(N)
// 有两种形式, 一种为计数排序(只计算出现的词频, 而不存储对应的次序), 另一种则为基数排序.

// 仅限0 ~ 200的范围, 其中max就是最大的数(其实就是限制最大的数吧)
// 对于负数的桶排序, 可以同时使用两个桶, 分别找出其最小及最大数, 
// 然后根据其分号分别进行排序, 增加了常数项而已, 时间复杂度仍为O(N)
function bucketSort(arr) {
  if(arr == null || arr.length < 2) {
    return;
  }
  let max = Number.MIN_VALUE;
  for(let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  // 因为包括了0的位置, 所以需要加1
  // 同时JS中新生成的数组默认值为<empty item>, 直接使用++运算符会变成NaN
  // 因此需初始化数组全部为0进行值填充
  let bucket = generate0(max + 1); 
  for(let i = 0; i < arr.length; i++) {
    bucket[arr[i]]++;
  }
  let i = 0;
  for(let j = 0; j < bucket.length; j++) {
    // 直接在arr上进行覆盖赋值
    while(bucket[j]-- > 0) {
      arr[i++] = j;
    }
  }
}
// 生成一个值全为0的数组
// ES6中的Array.prototype.fill(value, start, end)也可做到这点;
// Array.apply(null, Array(100)).map(function(item, i) { return 0; });
// arr = new Array(100); arr.map(item => 0);
// new Array(101).join(0).split('');
function generate0(arrLength) {
  let arr = new Array(arrLength);
  while(arrLength-- > 0) {
    arr[arrLength] = 0;
  }
  return arr;
}

var arr2 = generate0(2);
console.log(arr2);
var arr = [2, 4, 5, 2];
bucketSort(arr);
console.log(arr);


function comparator(arr) {
  arr.sort(function (a, b) { return a - b; });
}
function generateRandomArray(maxSize, maxValue) {
  let arr = new Array(maxSize);
  for(let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * (maxValue + 1));
  }
  return arr;
}
function copyArray(arr) {
  if(arr == null) { return null; }
  let arr2 = new Array(arr.length);
  for(let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function isEqual(arr1, arr2) {
  if(arr1 == null && arr2 != null || arr1 != null && arr2 == null) {
    return false;
  }
  if(arr1 == null && arr2 == null) {
    return true;
  }
  if(arr1.length != arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] != arr2[i]) { return false; }
  }
  return true;
}
function printArray(arr) {
  if(arr == null) { return null; }
  let array = '';
  for(let i = 0; i < arr.length; i++) {
    array += arr[i] + ' ';
  }
  console.log(array);
}
function main() {
  const testTime = 50;
  const maxSize = 100;
  const maxValue = 100;
  let success = true;
  for(let i = 0; i < testTime; i++) {
    let arr1 = generateRandomArray(maxSize, maxValue);
    let arr2 = copyArray(arr1);
    bucketSort(arr1);
    comparator(arr2);
    if(!isEqual(arr1, arr2)) {
      success = false;
      printArray(arr1);
      printArray(arr2);
      break;
    }
  }
  console.log(success ? 'Nice!' : 'Fucking Fuck!');
  let arr = generateRandomArray(maxSize, maxValue);
  printArray(arr);
  bucketSort(arr);
  printArray(arr); 
}
// main();
// 函数在使用之前声明, 这也是一个编程习惯, 叶向宇的项目实践课中就是这样介绍的