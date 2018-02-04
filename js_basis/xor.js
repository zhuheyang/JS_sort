// 利用异或运算来交换两个变量的值, 但不使用第三个变量来进行
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
// 在swap函数中, 函数作用域中的两个参数值的确发生了改变, 但在外面console.log的时候, 
// 变量a, b却仍指向了原本的值. 因为是值传递, call by value, 如果变成对象的话, 
// 就能够call by reference了
[a,b] = [b, a];
console.log(a);
console.log(b);