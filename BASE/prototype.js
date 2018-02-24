/**
 * 不同的对象在底层都表示为二进制，在 JavaScript 中二进制前三位都为 0 的话会被判 断为 object 类型，null 的二进制表示是全 0，自然前三位也是 0，所以执行 typeof 时会返回“object”。
 * 
 * 基本类型存储在栈中，复制时复制值，比较时按值比较，创建并读取基本类型时会默认创建一个对应的基本包装类型对象来对其进行操作（字符串方法等），即相当于String、Number、Boolean等实例，
 *   基本包装类型与引用类型的区别在于对象的生存周期，使用 new 操作符创建的引用类型的实例，在执行流离开当前作用域之前一直都保存在内存中，而自动创建的基本包装类型的对象，
 *   则只存在与一行代码的执行瞬间，然后被立即销毁。这也就是不能给基本类型添加属性和方法的原因了。
 * 对象类型存储在堆内存和栈内存中，复制时复制引用，比较时按引用比较
 */

Function.prototype.constructor === Function.constructor; // true
Function.constructor === Function; // true
Function.prototype.__proto__ === Object.prototype;
function Parent(){}
Parent.prototype.constructor === Object;

Object.constructor === Function;
