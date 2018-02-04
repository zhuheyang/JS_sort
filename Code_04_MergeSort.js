function mergeSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  sortProcess(arr, 0, arr.length - 1);
}
function sortProcess(arr, l, r) {
  if (l == r) {
    return;
  }
  const mid = l + ((r - l) >> 1);
  sortProcess(arr, l, mid);
  sortProcess(arr, mid + 1, r);
  merge(arr, l, mid, r);
}
function merge(arr, l, m, r) {
  let help = new Array(r - l + 1);
  let i = 0;
  let p1 = l;
  let p2 = m + 1;
  while (p1 <= m && p2 <= r) {
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= m) {
    help[i++] = arr[p1++];
  }
  while (p2 <= r) {
    help[i++] = arr[p2++];
  }
  for (i = 0; i < help.length; i++) {
    arr[l + i] = help[i];
  }
}
function comparator(arr) {
  arr.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
}
function generateRandomArray(maxSize, maxValue) {
  arr = new Array(Math.floor((maxSize + 1) * Math.random()));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor((maxValue + 1) * Math.random() - (maxValue + 1) * Math.random());
  }
  return arr;
}
function copyArray(arr1) {
  if (arr == null) {
    return null;
  }
  const arr2 = new Array(arr1.length);
  for (i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }
  return arr2;
}
function isEqual(arr1, arr2) {
  if ((arr1 == null && arr2 != null) || (arr1 != null && arr2 == null)) {
    return false;
  }
  if (arr1 == null && arr2 == null) {
    return ture;
  }
  if (arr1.length != arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}

function printArray(arr) {
  if (arr == null) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} `);
  }
  console.log('\n');
}

function main() {
  const testTime = 50000;
  const maxSize = 100;
  const maxValue = 100;
  let success = true;
  for (let i = 0; i < testTime; i++) {
    const arr1 = generateRandomArray(maxSize, maxValue);
    const arr2 = copyArray(arr1);
    mergeSort(arr1);
    comparator(arr2);
    if (!isEqual(arr1, arr2)) {
      success = false;
      printArray(arr1);
      printArray(arr2);
      break;
    }
  }
  console.log(success ? 'Nice!' : 'Fucking Fuck!');
  const arr = generateRandomArray(maxSize, maxValue);
  printArray(arr);
  mergeSort(arr);
  printArray(arr);
}
main();
