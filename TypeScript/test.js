var message = 'hello world';
console.log(message);
// 面向对象编程
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('ooo');
    };
    return Site;
}());
var obj = new Site();
obj.name();
// 定义变量
var aa = [1, 3, 4]; // 任意类型
var bb = 1;
var cc = '1';
var dd = true;
var ee = [1, 3, 4];
var ee1 = [1, 2];
var ee2 = [1, 2];
