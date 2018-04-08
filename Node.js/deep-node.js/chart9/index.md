spawn() 启动一个子进程来执行命令
exec() 启动一个子进程来执行命令，比spawn多回调函数获知子进程，可以指定超时时间
execFile() 启动子进程来执行可执行文件（文件开头有 #!/usr/bin/env node），可以指定超时时间
fork() 创建子进程只需要指定要执行的JS文件

| 类型 | 回调/异常 | 进程类型 | 执行类型 | 可设置超时 |
|:-----|:-------|:-------|:-------|:-------|
| spawn() | ||||
| exec()|||||
| execFile() |||||
| fork() |||||

集群
- 性能问题
- 多个工作进程的存活状态管理
- 工作进程的平滑重启
- 配置或静态数据的动态重新载入
- 其它细节

kill -l
HUP INT QUIT ILL TRAP ABRT EMT FPE KILL BUS SEGV SYS PIPE ALRM TERM URG STOP TSTP CONT CHLD TTIN TTOU IO XCPU XFSZ VTALRM PROF WINCH INFO USR1 USR2