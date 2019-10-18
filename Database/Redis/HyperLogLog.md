Philippe Flajolet

### 使用场景

- 统计页面 UV

> 数据小用稀疏矩阵、超过阈值用稠密矩阵，占用 12k 空间

- `pfadd`
- `pfcount`
- `pfmerge`

python pftest.py

```python
# coding: utf-8
import redis
client redis.StrictRedis()
for i in range(1000):
  client.pfadd('codehole', "user%d" % i)
  total = client.pfcount("codehole")
  if total != i+1:
    print total, i+1
    break
```

```java
public class PfTest {
  public static void main(String[] args) {
    Jedis jedis = new Jedis();
    jedis.pfadd("codehole", "user" + i);
    long total = jedis.pfcount("codehole")
    if (toal != i + 1) {
      System.out.printf("%d %d\n", total, i + 1);
      break;
    }
  }
  jedis.close()
}
```
