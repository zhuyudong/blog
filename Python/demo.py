#!/usr/bin/env python3
# -*- coding: utf-8 -*-
print('demo');
print('first', 'second', 'three');
print(100 + 200);
print('100 + 200 =', 100 + 200);
print('\\\t\\'); # \    \
# r'' 表示其内不转译
print(r'\\\t\\'); # \\\t\\
# '''...''' 折行
print('''line
... line2
... lin3''');
print(r'''hello, \n
world'''); 
# hello, \n
# world

# name = input(); # 接受输入
# print(name);
# age = input('Please input your age: ');
# print(age);

a = 100;
if a >= 0:
  print(a);
else:
  print(-a);

# 获得字符的整数表示
print(ord('A')); # 65
print(ord('中')); # 20013
print(chr(66)); # B
print(chr(25991)); # 文
print('\u4e2d\u6587'); # 中文
# bytes 类型的数据
x = b'ABC';
print(x);
print('ABC'.encode('ascii')); # b'ABC'
print('中文'.encode('utf-8')); # b'\xe4\xb8\xad\xe6\x96\x87'
# print('中文'.encode('ascii')); # UnicodeEncodeError: 'ascii' codec can't encode characters in position 0-1: ordinal not in range(128)
print(b'ABC'.decode('ascii')); # 'ABC'
print(b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')); # 中文
# 包含无法解码的字节，报错
# print(b'\xe4\xb8\xad\xff'.decode('utf-8')); # UnicodeDecodeError: 'utf-8' codec can't decode byte 0xff in position 3: invalid start byte
# 忽略错误的字节
print(b'\xe4\xb8\xad\xff'.decode('utf-8', errors='ignore')); # '中'

# 函数
print(len('ABC')); # 3
print(len('中文')); # 2
print(len(b'ABC')); # 3
# 一个中文占3个字节
print(len(b'\xe4\xb8\xad\xe6\x96\x87')); # 6
print(len('中文'.encode('utf-8'))); # 6

# 格式化 %s 字符 %d 整数 %f 浮点数 %x 十六进制整数 %? 占位符
print('Hello, %s' % 'world'); # Hello, world
print('Hi, %s, you have $%d.' % ('Michael', 100000)); # Hi, Michael, you have $100000.
print('%2d-%02d' % (3, 1)); # 3-01
print('%.2f' % 3.1415926); # 3.14
print('growth rate: %d %%' % 7); # growth rate: 7 %
print('Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125)); # Hello, 小明, 成绩提升了 17.1%

# list 类型
classmates = ['Michael', 'Bob', 'Tracy'];
len(classmates);
classmates[-1]; # 获取最后一个元素
classmates[-2]; # 获取倒数第二个元素
classmates.append('Adam');
classmates.insert(1, 'Jack');
# 删除末尾元素
classmates.pop(); 
# 删除指定位置
classmates.pop(1);
p = ['asp', 'php'];
s = ['python', 'java', p, 'scheme'];
len(s); # 4

# tuple元组，不可变，只能以数组的方式取值
t = (1) # 1
t = (1,) # (1,)
t = () # ()
t = (1, 2) # （1, 2)
# 可变tuple
t = ('a', 'b', ['A', 'B']);
t[2][0] = 'X';
t[2][1] = 'Y';

# 循环
list(range(5)) # [0, 1, 2, 3, 4]
# 求和
sum1 = 0
for x in range(10)
  sum1 = sum1 + x
print('for in sum: %d' % sum1);
# 求和
sum2 = 0
wn = 99
while wn > 0
  sum2 = sum2 + wn
  wn = wn - 2
print(sum2)
# 只打印奇数
n = 0
while n < 10
  n = n + 1
  if n % 2 == 0:
    continue
  print(n)
print('continue END')
# 结束循环
m = 1
while m <= 100
  if n > 10
    break
  print(m)
  m = m + 1
print('break END')

# 函数 默认返回 None
def my_abs(x):
  if x >= 0:
    return x
  else:
    return -x
print(my_abs(-99))
# 空函数
if age >= 18:
  pass


# 面向对象，类中第一个参数永远是实例变量 self
class Student(object):
  def __init__(self, name, score):
    self.name = name
    self.score = score
  def print_score(self):
    print('%s: %s' % (self.name, self.score))
  def get_grade(self):
    if self.score >= 90:
      return 'A'
    elif self.score >= 60:
      return 'B'
    else:
      return 'C'
bart = Student('Bart Simpson', 59)
lisa = Student('Lisa Simpson', 87)
bart.print_score()
lisa.print_score()