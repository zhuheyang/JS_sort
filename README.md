<!-- TOC -->

- [1. 排序算法](#1-排序算法)
    - [1.1. 冒泡排序](#11-冒泡排序)
    - [1.2. 选择排序](#12-选择排序)
    - [1.3. 插入排序](#13-插入排序)
    - [1.4. 归并排序](#14-归并排序)
    - [1.5. 快速排序](#15-快速排序)
    - [1.6. 堆排序](#16-堆排序)
    - [1.7. 桶排序](#17-桶排序)
        - [1.7.1. 利用桶排序找出不同数之间最大的差值](#171-利用桶排序找出不同数之间最大的差值)

<!-- /TOC -->

# 1. 排序算法

根据复杂度进行区分主要有两类, O(N^2)以及O(N * logN), 其中复杂度为O(N^2)的有冒泡排序, 选择排序与插入排序;  
复杂度为O(NlogN)的主要有归并排序, 快速排序以及堆排序.  
其中排序的时间复杂度与序列顺序有关的为: 经典快速排序(逆序是为O(N^2)), 以及插入排序(完全有序时为O(N));
序列无关的排序算法有: 冒泡, 选择, 堆排序, 归并排序以及随机快速排序了.

## 1.1. 冒泡排序

冒泡排序是最基础的. 主要进行的操作是通过循环的比较, 将最大的数不断地推到数组底.

```js
for(i = arr.length - 1; i > 0; i++) {
   for(j = 0; j < i && arr[j] > arr[j + 1]; j++) {
       swap(arr, j, j + 1);
   }
}
```

这是原始的版本, 与序列无关, 如果在外部增加一个flag作判断的话, 就与序列有关了.

## 1.2. 选择排序

```js
for(i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for(j = i; j < arr.length; j++) {
        minIndex = arr[j] > arr[j + 1] ? j + 1 : j;
    }
    swap(arr, i, minIndex);
}
```

与冒泡排序很相似, 一个是将最大的放到数组后面, 索引依次降低; 一个是保留一个minIndex, 从0开始确定到最后的索引.  

## 1.3. 插入排序

```js
for(i = 1; i < arr.length; i++) {
    for(j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
        swap(arr, j, j + 1);
    }
}
```

插入排序将arr[j] > arr[j + 1]的判断条件写在了循环里, 则最好的情况是该序列已从大到小有序, 则此时最优复杂度为O(N), 所以插入排序是序列有关的.

## 1.4. 归并排序

归并排序自己以及打错过很多次了, 很多需要注意的地方:  
mergeSort(arr) => sortProcess(arr, L, R) => merge(arr, L, M, R)  
其实自己用小写的l, m, r会好很多, 毕竟不会老是用到shift键.

```js
// 主要过程如下:
function sortProcess(arr, L, R) {
    // 设定基准条件, 结束递归
    if(L == R) {return;}
    let M = L +  ((R - L) >> 1);
    sortProcess(arr, L, M);
    sortProcess(arr, M + 1, R);
    merge(arr, L, M, R);
}
function merge(arr, L, M, R) {
    let i = 0;
    let p1 = L;
    let p2 = M + 1;
    let help = new Array(R - L + 1);
    // do not forget the "="
    while(p1 <= M && p2 <= R) {
        help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
    }
    while(p1 <= M) {
        help[i++] = arr[p1++];
    }
    while(p2 <= R) {
        help[i++] = arr[p2++];
    }
    for(i = 0; i < help.length; i++) {
        arr[L + i] = help[i];  // no more i++!
    }
}
```

1. 在进行arr参数输入时要检验`arr == null && arr.length < 2`;
2. sortProcess过程求中值M时要防止溢出, 且可以使用位运算增加速度;
3. merge部分直接在原数组中进行指针外排确定help数组;
4. 在进行指针外排时, 注意边界的位置是: `p1 <= M, p2 <= R`, 是有等号的!
4. 最后不要忘了将help数组使用for循环还原到原arr中, for中有i++, 循环里就不要再加i++了!

## 1.5. 快速排序

主要过程为partition, 可解决荷兰国旗问题, 将一组数据, 以某个值为标准, 大于该值的在右边, 小于的在左边, 而等于它的在中间(包括其本身)

```js
function sortPorcess(arr, L, R) {
    // 设定递归的基准情况
    if(L < R) {
        let pointer = partition(arr, L, R); // 返回相等区的开头与结尾
        sortProcess(arr, L, pointer[0] - 1);
        sortProcess(arr, pointer[1] + 1, R);
    }
}
function partition(arr, L, R) {
    // 相当于荷兰旗问题的解决
    let less = L - 1;
    let more = R;
    swap(arr, R, L + Math.floor(Math.random() * (R - L + 1)));
    while(L < more) {
        if(arr[L] < arr[R]) {
            swap(arr, ++less, L++);
        } else if(arr[L] > arr[R]) {
            swap(arr, --more, L);
        } else {
            L++;
        }
    }
    swap(arr, R, more);
    return [less + 1, more];
}
```

## 1.6. 堆排序

堆排序主要分为两个过程, 一个为heapInsertion形成大根堆, 之后是利用heapSize控制while循环, 不断将最大值推想数组末尾, 然后循环形成大根堆;  
时间复杂度为O(NlogN), 空间复杂度为O(1); 但常数项较大, 所以工程上使用归并排序与快速排序较多.  
其中快速排序用于排序值为基本值的情况, 例如int, char, long等, 而归并排序则用于自定义的值较多.  
因为归并排序的常数项不够好, 但它是稳定的, 而快速排序是不稳定的, 但常数项小, 而基本值的排序一般不关心稳定性  
E.G. 1, 3, 5, 6, 3, 3, 9, 这里面有3个3, 但哪个3排在前面都是没关系的. 都一样.

```js
// 基本的过程
function heapSort(arr) {
    if (arr === null || arr.length < 2) {
        return;
    }
    for(i = 0; i < arr.length; i++) {
        heapInsert(arr, i);
    }
    let heapSize = arr.length;
    swap(arr, 0, --heapSize);
    while(heapSize > 0) {
        heapify(arr, 0, heapSize);
        swap(arr, 0, --heapSize);
    }
}
```

```js
// JS中的除法不会自动取整, 是它的优点, 也是某种缺点
// 在JS中进行HeapSort, 形成大根堆时, 一定要注意主动取整
function heapInsert(arr, index) {
    while(arr[index] > arr[Math.floor((index - 1) / 2)]) {
        swap(arr, index, Math.floor((index - 1) / 2));
        index = Math.floor((index - 1) / 2);
    }
}
function heapify(arr, index, heapSize) {
    let left = index * 2 + 1;
    // 比较的话, 都是统一使用大于号的, 也方便检测到小于号就提示右尖括号不是吗?
    while (heapSize > left) {
        let largest = heapSize > left + 1 && arr[left + 1] > arr[left] ? left + 1 : left;
        largest = arr[largest] > arr[index] ? left : index;
        if(largesrt == index) { break; }
        swap(arr, largest, index);
        index = largest;
        left = index * 2 + 1;
    }
}
```

## 1.7. 桶排序

桶排序就简单地多了, 主要确定桶的大小, 然后遍历进行计数, 最后再根据桶的顺序进行复原即可. 分为计数排序与基数排序两种. 本文介绍的为计数排序.

```js
// 遍历寻找最大数, 如有负数则还需寻找最小数
let max = Number.MIN_VALUE;
for(let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
}

// 之后根据最大数确定长度为max+1, 值全部为0的数组, 并遍历arr确定bucket数组的计数值
let bucket = new Array(100);
bucket.map(item => 0);
for(let i = 0; i < arr.length; i++) {
    bucket[arr[i]]++;
}

// 再根据bucket中的计数值, 循环替换掉arr中的值
// 如果不是0到某个范围的值, 则具体情况具体分析, 将j替换成对应的数值
let i = 0;
for(let j = 0; j < bucket.length; j++) {
    while(bucket[j]-- > 0) {
        arr[i++] = j;
    }
}
```

### 1.7.1. 利用桶排序找出不同数之间最大的差值

不能使用排序算法, 则利用鸽巢原理, 设定len + 1个桶, 也即len + 1个区域, 则通过遍历, 比较后一个桶的最小值减去前一个桶最大值的差, 即可得到最大的差值. 利用桶这种区域, 可以去掉桶内差值的复杂度, 从而之比较桶之间的差值即可.

```js
// 遍历确定arr中的max与min值
// 建立hasNum, maxs与mins三个数组分别来记录: 桶是否有值, 桶的最大值与最小值
// 遍历arr, 根据每个数组, 算出所属bucket并确定其三个数组的值
for(let i = 0; i < len; i++) {
    bid = bucket(num, len, min, max);
    maxs[bid] = hasNum[bid] ? Math.max(maxs[bid], num[bid]) : num[bid];
    mins[bid] = hasNum[bid] ? Math.min(mins[bid], num[bid]) : num[bid];
    hasNum[bid] = true;
}
// 以第一个桶的最大值为lastMax, 也即maxs[0], 循环遍历差值最大值
let res = 0;
let lastMax = maxs[0];
for(let i = 1; i <= len; i++) { // 从第二个桶开始遍历到最后一个桶, 索引为len, 一共len + 1 - 1 = len个桶
    res = Math.max(mins[i] - lastMax, res);
    lastMax = maxs[i];
}
return res;
```