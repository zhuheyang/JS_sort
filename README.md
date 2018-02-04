<!-- TOC -->

- [1. �����㷨](#1-�����㷨)
    - [1.1. ð������](#11-ð������)
    - [1.2. ѡ������](#12-ѡ������)
    - [1.3. ��������](#13-��������)
    - [1.4. �鲢����](#14-�鲢����)
    - [1.5. ��������](#15-��������)
    - [1.6. ������](#16-������)
    - [1.7. Ͱ����](#17-Ͱ����)
        - [1.7.1. ����Ͱ�����ҳ���ͬ��֮�����Ĳ�ֵ](#171-����Ͱ�����ҳ���ͬ��֮�����Ĳ�ֵ)

<!-- /TOC -->

# 1. �����㷨

���ݸ��ӶȽ���������Ҫ������, O(N^2)�Լ�O(N * logN), ���и��Ӷ�ΪO(N^2)����ð������, ѡ���������������;  
���Ӷ�ΪO(NlogN)����Ҫ�й鲢����, ���������Լ�������.  
���������ʱ�临�Ӷ�������˳���йص�Ϊ: �����������(������ΪO(N^2)), �Լ���������(��ȫ����ʱΪO(N));
�����޹ص������㷨��: ð��, ѡ��, ������, �鲢�����Լ��������������.

## 1.1. ð������

ð���������������. ��Ҫ���еĲ�����ͨ��ѭ���ıȽ�, �����������ϵ��Ƶ������.

```js
for(i = arr.length - 1; i > 0; i++) {
   for(j = 0; j < i && arr[j] > arr[j + 1]; j++) {
       swap(arr, j, j + 1);
   }
}
```

����ԭʼ�İ汾, �������޹�, ������ⲿ����һ��flag���жϵĻ�, ���������й���.

## 1.2. ѡ������

```js
for(i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for(j = i; j < arr.length; j++) {
        minIndex = arr[j] > arr[j + 1] ? j + 1 : j;
    }
    swap(arr, i, minIndex);
}
```

��ð�����������, һ���ǽ����ķŵ��������, �������ν���; һ���Ǳ���һ��minIndex, ��0��ʼȷ������������.  

## 1.3. ��������

```js
for(i = 1; i < arr.length; i++) {
    for(j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
        swap(arr, j, j + 1);
    }
}
```

��������arr[j] > arr[j + 1]���ж�����д����ѭ����, ����õ�����Ǹ������ѴӴ�С����, ���ʱ���Ÿ��Ӷ�ΪO(N), ���Բ��������������йص�.

## 1.4. �鲢����

�鲢�����Լ��Լ������ܶ����, �ܶ���Ҫע��ĵط�:  
mergeSort(arr) => sortProcess(arr, L, R) => merge(arr, L, M, R)  
��ʵ�Լ���Сд��l, m, r��úܶ�, �Ͼ����������õ�shift��.

```js
// ��Ҫ��������:
function sortProcess(arr, L, R) {
    // �趨��׼����, �����ݹ�
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

1. �ڽ���arr��������ʱҪ����`arr == null && arr.length < 2`;
2. sortProcess��������ֵMʱҪ��ֹ���, �ҿ���ʹ��λ���������ٶ�;
3. merge����ֱ����ԭ�����н���ָ������ȷ��help����;
4. �ڽ���ָ������ʱ, ע��߽��λ����: `p1 <= M, p2 <= R`, ���еȺŵ�!
4. ���Ҫ���˽�help����ʹ��forѭ����ԭ��ԭarr��, for����i++, ѭ����Ͳ�Ҫ�ټ�i++��!

## 1.5. ��������

��Ҫ����Ϊpartition, �ɽ��������������, ��һ������, ��ĳ��ֵΪ��׼, ���ڸ�ֵ�����ұ�, С�ڵ������, �������������м�(�����䱾��)

```js
function sortPorcess(arr, L, R) {
    // �趨�ݹ�Ļ�׼���
    if(L < R) {
        let pointer = partition(arr, L, R); // ����������Ŀ�ͷ���β
        sortProcess(arr, L, pointer[0] - 1);
        sortProcess(arr, pointer[1] + 1, R);
    }
}
function partition(arr, L, R) {
    // �൱�ں���������Ľ��
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

## 1.6. ������

��������Ҫ��Ϊ��������, һ��ΪheapInsertion�γɴ����, ֮��������heapSize����whileѭ��, ���Ͻ����ֵ��������ĩβ, Ȼ��ѭ���γɴ����;  
ʱ�临�Ӷ�ΪO(NlogN), �ռ临�Ӷ�ΪO(1); ��������ϴ�, ���Թ�����ʹ�ù鲢�������������϶�.  
���п���������������ֵΪ����ֵ�����, ����int, char, long��, ���鲢�����������Զ����ֵ�϶�.  
��Ϊ�鲢����ĳ��������, �������ȶ���, �����������ǲ��ȶ���, ��������С, ������ֵ������һ�㲻�����ȶ���  
E.G. 1, 3, 5, 6, 3, 3, 9, ��������3��3, ���ĸ�3����ǰ�涼��û��ϵ��. ��һ��.

```js
// �����Ĺ���
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
// JS�еĳ��������Զ�ȡ��, �������ŵ�, Ҳ��ĳ��ȱ��
// ��JS�н���HeapSort, �γɴ����ʱ, һ��Ҫע������ȡ��
function heapInsert(arr, index) {
    while(arr[index] > arr[Math.floor((index - 1) / 2)]) {
        swap(arr, index, Math.floor((index - 1) / 2));
        index = Math.floor((index - 1) / 2);
    }
}
function heapify(arr, index, heapSize) {
    let left = index * 2 + 1;
    // �ȽϵĻ�, ����ͳһʹ�ô��ںŵ�, Ҳ�����⵽С�ںž���ʾ�Ҽ����Ų�����?
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

## 1.7. Ͱ����

Ͱ����ͼ򵥵ض���, ��Ҫȷ��Ͱ�Ĵ�С, Ȼ��������м���, ����ٸ���Ͱ��˳����и�ԭ����. ��Ϊ���������������������. ���Ľ��ܵ�Ϊ��������.

```js
// ����Ѱ�������, ���и�������Ѱ����С��
let max = Number.MIN_VALUE;
for(let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
}

// ֮����������ȷ������Ϊmax+1, ֵȫ��Ϊ0������, ������arrȷ��bucket����ļ���ֵ
let bucket = new Array(100);
bucket.map(item => 0);
for(let i = 0; i < arr.length; i++) {
    bucket[arr[i]]++;
}

// �ٸ���bucket�еļ���ֵ, ѭ���滻��arr�е�ֵ
// �������0��ĳ����Χ��ֵ, ���������������, ��j�滻�ɶ�Ӧ����ֵ
let i = 0;
for(let j = 0; j < bucket.length; j++) {
    while(bucket[j]-- > 0) {
        arr[i++] = j;
    }
}
```

### 1.7.1. ����Ͱ�����ҳ���ͬ��֮�����Ĳ�ֵ

����ʹ�������㷨, �����ø볲ԭ��, �趨len + 1��Ͱ, Ҳ��len + 1������, ��ͨ������, �ȽϺ�һ��Ͱ����Сֵ��ȥǰһ��Ͱ���ֵ�Ĳ�, ���ɵõ����Ĳ�ֵ. ����Ͱ��������, ����ȥ��Ͱ�ڲ�ֵ�ĸ��Ӷ�, �Ӷ�֮�Ƚ�Ͱ֮��Ĳ�ֵ����.

```js
// ����ȷ��arr�е�max��minֵ
// ����hasNum, maxs��mins��������ֱ�����¼: Ͱ�Ƿ���ֵ, Ͱ�����ֵ����Сֵ
// ����arr, ����ÿ������, �������bucket��ȷ�������������ֵ
for(let i = 0; i < len; i++) {
    bid = bucket(num, len, min, max);
    maxs[bid] = hasNum[bid] ? Math.max(maxs[bid], num[bid]) : num[bid];
    mins[bid] = hasNum[bid] ? Math.min(mins[bid], num[bid]) : num[bid];
    hasNum[bid] = true;
}
// �Ե�һ��Ͱ�����ֵΪlastMax, Ҳ��maxs[0], ѭ��������ֵ���ֵ
let res = 0;
let lastMax = maxs[0];
for(let i = 1; i <= len; i++) { // �ӵڶ���Ͱ��ʼ���������һ��Ͱ, ����Ϊlen, һ��len + 1 - 1 = len��Ͱ
    res = Math.max(mins[i] - lastMax, res);
    lastMax = maxs[i];
}
return res;
```