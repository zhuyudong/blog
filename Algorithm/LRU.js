// least recently used
// https://github.com/isaacs/node-lru-cache
/**
 * 配置化：最大长度、最大生命周期（自动删除）、是否stale、
 * 大量使用Object.defineProperty() 语法
 * set() 替换或新增，次数加1
 * get() 取，次数加1
 * equal() 是否相等
 * reset() 清空
 * del()
 * has()
 * keys()
 * values()
 * length
 * itemCount
 * load(cacheEntriesArray)
 * prune()
 */