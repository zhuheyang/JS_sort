let test = [1, 3, 5, 1];
const sum = mergeSort(test);
console.log(sum);
function mergeSort(arr) {
  if(arr == null || arr.length < 2) {
    return 0; // diff form mergeSort, there demands smallSum totallly
  }
  return sortProcess(arr, 0, arr.length - 1);
}
function sortProcess(arr, l, r) {
  if(l == r) {
    return 0;
  }
  const mid = l + ((r - l) >> 1);
  return sortProcess(arr, l, mid) + sortProcess(arr, mid + 1, r) + merge(arr, l, mid, r);
}
function merge(arr, l, m, r) {
  let help = new Array(r - l + 1);
  let i = 0;
  let p1 = l;
  let p2 = m + 1;
  let res = 0;
  while(p1 <= m && p2 <= r) {
    res += arr[p1] < arr[p2] ? (r - p2 + 1) * arr[p1] : 0;
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  } 
  while(p1 <= m) {
    help[i++] = arr[p1++];
  }
  while(p2 <= r) {
    help[i++] = arr[p2++];
  }
  // 期待输出[1, 3, 1, 5], 却得到[1, 3, 1, 1], 出现输出错误的原因: 
  // 在i的for循环内, 如果仍使用i++, 就会导致第一个值更换了, 但是在这里的第二次循环之后就越界了
  // E.G: [1, 3, 5, 1], [1, 3]merge的时候不需要更换位置, 所以即便arr与help没有赋值都没错, 但[1, 5]的时候, 
  // 本来[1 ,3, 5, 1]中将[1, 5] 赋予给[5, 1]的位置的, 但由于重复i++, 第二次赋值时就变成:
  // arr[l + 2] = help[2++]; 而help.length = 2, 因此谁也没有赋予谁, 则就保持[1, 3, 1, 1]了. 
  for(i = 0; i < help.length; i++) {
    // arr[l + i] = help[i++]; // This is wrong!
    // 不要再发生以上这种错误了! 真是醉了, 看起来一模一样, 但结果就不是自己想要的
    // 写各种++ 写上瘾了, 怪不得Airbnb中禁止使用++符号, 尽管它让程序变得简洁了, 但出现错误时总会让人摸不着头脑
    // ++, --, 不管前置还是后置, 一律都要将其明确地写出来了! 
    arr[l + i] = help[i];
  }
  return res;
}
// 下次再发现别人的代码可以运行无误, 但在自己这里结果就是错误的话, 尽量不要在自己的原本代码中找了, 浪费太多时间了
// 先拿别人的代码调试好并拿来使用后, 闲下来再处理自己的错误吧, 当然还是按照方应杭的说法, 忘掉之前的代码, 重新coding一遍, 有对比才能有进展撒!