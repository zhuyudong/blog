```bash
# 查看全局安装的package
npm list -g --depth=0
```

命令行：
- -v --version
- -h --help
- -e --eval "script"
- -p --print "scipt"
- -c --check 检查脚本语法
- -i --interactive 打开终端
- -r -require module 遵循 require() 模块解析规则
- --inspect[=[host:]port] 默认 127.0.0.1:9229
- --inpsect-brk[=[host:]port]
- --inspect-port[host:]port
- --no-description 静默废弃的警告
- --trace-deprecation 打印废弃的堆栈跟踪
- --throw-deprecation
- --pending-deprecation
- --no-warnings 静默一切进程警告
- --expose-http2 开启http2
- --abort-on-uncaught-exception 
- --trace-warnings
- --rediect-warnings=file
- --trace-sync-io 每当事件循环的第一帧之后检测到同步I/O，打印堆栈跟踪
- --force-async-hooks-checks
- --trace-events-enableed
- --trace-event-categories
- --zero-fill-buffers
- --preserve-symlinks
- --trace-heap-objects
- --prof-process 处理v8分析器的输出
- --v8-options

老生代，采用 scavenge 算法 只复制活着得对象
node --max-old-space-size=1700 sort.js // MB
新生代 Mark-Sweep & Mark-Compact 只清理死亡对象
node --max-new-space-size=1024 sort.js // KB
全停顿 stop-the-world
增量标记 incremental marking
延迟清理 lazy sweeping
增量式清理 incremental compaction
node --trace_gc -e "var a = []; for(var i = 0; i < 10000000; i++) a.push(new Array(100));" > gc.log

node --prof test-memory.js
linux-tick-processor v8.log

内存泄露：
- 缓存，加入过期策略，限制缓存的无限增长，模块化也可能导致内存不释放
- 队列消费不及时，日志文件写入代替数据库写入，但是突然激增会导致内存泄露，要加入超时机制或拒绝模式
- 作用域未释放

排查内存泄露：
- v8-profiler
- node-heapdump 向进程发送SIGUSR2信号，生成堆内存快照，用chrome profiler面板看
- node-mtrace
- dtrace
- node-memwatch

使用stream进行大内存操作

