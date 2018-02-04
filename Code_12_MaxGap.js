// 无序数组arr[], 返回其中每个数之间的最大差
// E.G. [1, 2, 4, 7], 4与7之间的差值最大, 返回3
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
  // 构成的比较数组长度为len + 1, 所以遍历时应截止为<= len;
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
