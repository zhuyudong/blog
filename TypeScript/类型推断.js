// 定义变量
var type1 = 123;
var type2 = 'hello';
// type1 = type2 error TS2322: Type 'string' is not assignable to type 'number'.
// 函数返回类型
function add(a, b) {
    return a + b;
}
var obj1 = function (a, b) {
    // a = 'hello' 不能将类型“ "hello" ”分配给类型“number”
    return a + b;
};
function iTakeAnAdder(adder) {
    return adder(1, 2);
}
iTakeAnAdder(function (a, b) {
    // a = 'hello' error TS2322 : Type '"hello"' is not assignable to type 'number'.
    return a + b;
});
// 结构化
var obj2 = {
    a: 123,
    b: 456
};
// obj2.a = 'hello' error TS2322 : Type '"hello"' is not assignable to type
// 'number'.
var arr2 = [1, 2, 3];
arr2[0] = 'hello';
