// �����汾�ĳ���ʵ��
// ��������Ͱ, һ��װ����, һ��װ����, ֻҪ���ж�ε����㼴��

// �������ȷ�������arr��ֵ������״����Ϊ��Чֵ, ������ж�Ӧ���޳����任
// ���ڳ���ʼ֮ǰ����, Ҳ���ڽ����н���, �˴���������, ��������ֵ��Ϊ���͵�������
function bucketSort(arr) {
  if(arr == null || arr.length < 2) {
    return;
  }
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  for(let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }
  let maxBucket = generate0(max + 1);
  let minBucket = generate0(-min);
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= 0) {
      maxBucket[arr[i]]++;
      console.log(maxBucket);
    } else{
      minBucket[-arr[i]]++;
    }
  }
  let i = 0;
  for(let j = minBucket.length - 1; j > 0; j--) {
    while(minBucket[j]-- > 0) {
      arr[i++] = -j;
      console.log(arr);
    }
  }
  for(let k = 0; k < maxBucket.length; k++) {
    while(maxBucket[k]-- > 0) {
      arr[i++] = k;
    }
  }
  return arr;
}

let arr = [1, -2, -1, 2, 4, 2, 4];
bucketSort(arr);
console.log(arr);

// ����һ��ֵȫΪ0������
function generate0(arrLength) {
  let arr = new Array(arrLength);
  for(let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

function generateRandomArray(maxSize, maxValue) {
  let arr = new Array(maxSize);
  for(let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * (maxValue + 1) - Math.random() * maxValue);
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