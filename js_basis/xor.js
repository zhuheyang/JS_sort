// ���������������������������ֵ, ����ʹ�õ���������������
function swap(arr1, arr2) {
    arr1 = arr1 ^ arr2;
    arr2 = arr1 ^ arr2;
    arr1 = arr1 ^ arr2;
}
var a = 1111; 
var b = 2222;
swap(a, b);
console.log(a);
console.log(b);
// ��swap������, �����������е���������ֵ��ȷ�����˸ı�, ��������console.log��ʱ��, 
// ����a, bȴ��ָ����ԭ����ֵ. ��Ϊ��ֵ����, call by value, �����ɶ���Ļ�, 
// ���ܹ�call by reference��
[a,b] = [b, a];
console.log(a);
console.log(b);