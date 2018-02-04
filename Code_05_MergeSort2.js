var arr = [23, 434, 232, 545, 1212, 22, 221];
mergeSort(arr);
console.log(arr);
function mergeSort(arr) {
    if (arr == null || arr.length < 2) {
      return;
    }
    sortProcess(arr, 0, arr.length - 1);
}
function sortProcess(arr, L, R) {
	if(L == R) {
		return;
	}
	// ֮ǰ��sortProcess��ֵ������Ϊarr1��arr2ʵ�ڲ�����,
	// ֱ����ָ���������, ����Ҫ���Ᵽ��arr1, arr2, �ռ临�Ӷ�һ���Ӿ���ȥ��
	var mid = L + ((R - L) >> 1);
	sortProcess(arr, L, mid);
	sortProcess(arr, mid + 1, R);
	merge(arr, L, mid, R);
}
function merge(arr, L, M, R) {
	var help = new Array(R - L + 1);
	let i = 0;
	let p1 = L;
	let p2 = M + 1;
	// ifֻ��ѭ��һ��, ������Ҫ��while
	// �򵥵�if-else�ṹ��������Ԫ������?����
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
		arr[L + i] = help[i];
	}
}