var test2 = [83, 234, 1231, 4353, 1224, 121, 12, 1212];
heapSort(test2);
console.log(test2);
function heapSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (var i = 0; i < arr.length; i++) {
    heapInsert(arr, i);
    console.log(i + ' '+ arr);
  }
  var heapSize = arr.length;
  swap(arr, 0, --heapSize);
  while (heapSize > 0) {
    heapify(arr, 0, heapSize);
    swap(arr, 0, --heapSize);
  }
}
// JS中的除法不会自动取整, 是它的优点, 也是某种缺点
// 在JS中进行HeapSort, 形成大根堆时, 一定要注意主动取整
function heapInsert(arr, index) {
  while (arr[index] > arr[Math.floor((index - 1) / 2)]) {
    swap(arr, index, Math.floor((index - 1) / 2));
    index = Math.floor((index - 1) / 2);
  }
}
function heapify(arr, index, heapSize) {
  let left = index * 2 + 1;
  while (left < heapSize) {
    let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest == index) {
      break;
    }
    swap(arr, largest, index);
    index = largest;
    left = index * 2 + 1;
  }
}
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

