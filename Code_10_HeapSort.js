var arr = [23, 434, 232, 1223, 2322, 121];
heapSort(arr);
console.log(arr);
function heapSort(arr) {
  if (arr == null || arr.length < 2) {
    return;
  }
  for (i = 0; i < arr.length; i++) {
    heapInsert(arr, i);
  }
  let heapSize = arr.length;
  swap(arr, 0, --heapSize);
  while (heapSize > 0) {
    heapify(arr, 0, heapSize);
    swap(arr, 0, --heapSize);
  }
}
/// �γɴ����
function heapInsert(arr, index) {
  while (arr[index] > arr[Math.floor((index - 1) / 2)]) {
    swap(arr, index, Math.floor((index - 1) / 2));
    index = Math.floor((index - 1) / 2);
  }
}
// �����ֵȥ�������¼����γɴ����, ���Ӷ�ΪO(logN)
function heapify(arr, index, heapSize) {
  let left = index * 2 + 1;
  while (left < heapSize) {
    // ��ȷ���ӽڵ����е����ֵʱ, ��Ҫȷ���ҽڵ�û��Խ��(heapSize)
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