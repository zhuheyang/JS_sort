// partition����, ����less��more�����е�������, �趨�û�׼����
// ����뾭�����������arr[R]��ѡȡ�Ƿ�Ϊrandom
// swap���̲���ʹ�����, ��Ϊ�漰����ıȽ�
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
  // �뻮��ֵ���Ƚ�, ��С��less��������,�����Լ��ƶ�, �ϴ���more��������, ��������, �����ֻ������.
  while(index < more) {
    if(arr[index] < arr[R]) {
      swap(arr, ++less, index++);
    } else if(arr[index] > arr[R]) {
      swap(arr, --more, index);
    } else {
      index++;
    }
  }
  // ������ֵarr[R]��moreλ�õ�ֵ����, ����������������е���������
  swap(arr, R, more);
  return [less + 1, more];
}
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}