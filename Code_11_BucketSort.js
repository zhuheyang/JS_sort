// Ͱ����, �ڼ��ڸ�����, ��ĳ����Χ�ڵ�����������, ���˼�����Ҫ
// E.G. 0 ~ 200�ķ�Χ�ڵļ��ڸ���, �����������, ʱ�临�Ӷ�O(N), �ռ临�Ӷ�ҲΪO(N)
// ��������ʽ, һ��Ϊ��������(ֻ������ֵĴ�Ƶ, �����洢��Ӧ�Ĵ���), ��һ����Ϊ��������.

// ����0 ~ 200�ķ�Χ, ����max����������(��ʵ����������������)
// ���ڸ�����Ͱ����, ����ͬʱʹ������Ͱ, �ֱ��ҳ�����С�������, 
// Ȼ�������ֺŷֱ��������, �����˳��������, ʱ�临�Ӷ���ΪO(N)
function bucketSort(arr) {
  if(arr == null || arr.length < 2) {
    return;
  }
  let max = Number.MIN_VALUE;
  for(let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  // ��Ϊ������0��λ��, ������Ҫ��1
  // ͬʱJS�������ɵ�����Ĭ��ֵΪ<empty item>, ֱ��ʹ��++���������NaN
  // ������ʼ������ȫ��Ϊ0����ֵ���
  let bucket = generate0(max + 1); 
  for(let i = 0; i < arr.length; i++) {
    bucket[arr[i]]++;
  }
  let i = 0;
  for(let j = 0; j < bucket.length; j++) {
    // ֱ����arr�Ͻ��и��Ǹ�ֵ
    while(bucket[j]-- > 0) {
      arr[i++] = j;
    }
  }
}
// ����һ��ֵȫΪ0������
// ES6�е�Array.prototype.fill(value, start, end)Ҳ���������;
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
// ������ʹ��֮ǰ����, ��Ҳ��һ�����ϰ��, Ҷ�������Ŀʵ�����о����������ܵ�