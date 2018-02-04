// ����������, һ������, ָ�����е�һ����Ϊ����ֵ, Ҫ�����С�ķ����������
// ������ķ��������ұ�, ������ȵ�����������м�
// ������ص����⻹������ȥ��, �Լ���ֵ����Чֵȥ��, ���漰��������ʽ��Ӧ����
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
// ����Ǽ򻯰汾, ��������arr[R]С�ķ������, ������Ȼ������ľͷ����ұ�, ���˶���
function partition2 (arr, L, R) {
  let less = L - 1;
  while(L < R) {
    if(arr[L] < arr[R]) {
      swap(arr, ++less, L++);
    } else {
      L++;
    }
  }
  // ����less���Ľ�β��more���Ŀ�ͷ
  return [less, less + 1];
}
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}