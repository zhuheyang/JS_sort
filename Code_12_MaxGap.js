// ��������arr[], ��������ÿ����֮�������
// E.G. [1, 2, 4, 7], 4��7֮��Ĳ�ֵ���, ����3
function maxGap(numArray) {
  if (numArray == null || numArray.length < 2) {
    return 0;
  }
  let len = numArray.length;
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < len; i++) {
    max = Math.max(numArray[i], max);
    min = Math.min(numArray[i], min);
  }
  let hasNum = new Array(len + 1);
  let maxs = new Array(len + 1);
  let mins = new Array(len + 1);
  let bid = 0;
  for (let i = 0; i < len; i++) {
    bid = bucket(numArray[i], len, max, min); // 0 ~ len
    mins[bid] = hasNum[bid] ? Math.min(mins[bid], numArray[i]) : numArray[i];
    maxs[bid] = hasNum[bid] ? Math.max(maxs[bid], numArray[i]) : numArray[i];
    hasNum[bid] = true;
  }
  let res = 0;
  let lastMax = maxs[0];
  // ���ɵıȽ����鳤��Ϊlen + 1, ���Ա���ʱӦ��ֹΪ<= len;
  for (i = 1; i <= len; i++) {
    if (hasNum[i]) {
      res = Math.max(res, mins[i] - lastMax);
      lastMax = maxs[i];
    }
  }
  return res;
}
function bucket(num, len, max, min) {
  return Math.floor(len * (num - min) / (max - min)); // 0 ~ len
}

let arr = [1, 2, 4, 56, 9];
console.log(maxGap(arr));
