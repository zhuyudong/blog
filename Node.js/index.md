| I/O类型 | 花费的CPU时钟周期 |
|:--------:|:---------------:|
| CPU一级缓存 | 3 |
| CPU二级缓存 | 14 |
| 内存 | 250 |
| 硬盘 | 41000000 |
| 网路 | 240000000 |

I/O是昂贵的，分布式I/O更昂贵
多线程的代价在于创建线程和执行期线程上下文切换的开销较大，还有锁、状态同步等问题
node.js利用单线程远离多线程死锁、状态同步等问题，利用异步I/O，让单线程远离阻塞，以更好的利用CPU
内核在进行文件I/O操作时，通过文件描述符进行管理，而文件描述符类似于应用程序和内核之间的凭证
轮询技术
- read 重复检查I/O状态
- select 通过对文件描述符上的事件状态来进行判断，采用1024长度的数组来存储状态，所以最多有1024个
- poll 相对select，将数组换为链表，避免不必要的检查（链表算法复杂度比数组低）
- epoll 执行回调的方式
- kqueue FreeBSD 下的epoll

prcess.nextTick() 属于idle观察者，回调保存在数组中，每轮循环后会将数组中的回调全部执行
setImmediate() 属于check观察者，结果保存在链表中，每轮循环后执行链表中的一个回调
每个线程都有自己独立的堆栈
影响事件驱动服务模型性能的点在于CPU的计算能力


- `spawn()` 启动一个子进程来执行命令
  - options.detached 父进程死后是否允许子进程存活
  - options.stdio 指定子进程的三个标准流
- `spawnSync()` 同步版的spawn，可指定超时，返回的对象可获得子进程的情况
- `exec()` 启动一个子进程来执行命令，带回调参数获知子进程的情况，可指定进程运行的超时时间，直接调用bash来解释命令
- `execSync()`，返回子进程的输出(stdout)，直接调用bash来解释命令
- `execFile()` 启动一个子进程来执行一个可执行文件
- `execFileSync()` 同步版的execFile()，返回子进程的输出，如果超时或exit code不为0，会直接 throw Error
- `fork()` 加强版的 spawn() ，返回值是 ChildProcess 对象，可以与子进程交互

- `child.kill` 基于信号系统
- `child.send` 基于IPC
- 子进程死亡不会影响父进程，但是最后一个子进程死亡时会向它的父进程发送死亡信号，反之父进程死亡会让子进程一起死亡，如果此时子进程在运行或处于僵尸状态，子进程将会被init进程收养，从而成为孤儿进程。子进程死亡时（终止状态），父进程没有及时调用wait() 或 waitpid() 来返回死亡进程的相关信息，此时子进程还有一个 PCB 残留在进程表中，成为僵尸进程

- Cluster 利用 `child_process.fork()` 实现，所以子进程间通过IPC通讯，并且没有拷贝父进程的空间，而是通过加入cluster.isMaster 来标识
- 父子进程通过时间片轮转法（round-robin）分发连接，父监听端口后将socket句柄传递给worker处理
- 主进程创建socket监听端口，将socket句柄直接分发给相应worker，然后连接进来时就直接由相应的worker来接收连接处理
- node.js 中IPC通过libuv的管道技术实现，windows下由命名管道（named pipe）实现，*nix由UDS（Unix Domain Socket）实现
- 启动子进程时主进程先建立IPC频道，然后将IPC频道的fd通过环境变量（`NODE_CHANNEL_FD`）传递给子进程，子进程通过fd连上IPC与父进程建立连接

TCP连接会启用延迟传送算法（Nagle），即发送数据前可能缓存，攒够了再发，处理粘包
1. 多次发送前间隔一个等待时间
2. 关闭Nagle算法 `socket.setNoDelay()`
3. 进行封包/拆包（最优方案）

可靠传输依赖发送方携带SYN（Synchronize packet）和接收方的ACK（Acknowledgement）

w 命令查看当前tty
ps -x 可以看到带tty信息的输出
`node -p -e "Boolean(process.stdout.isTTY)"` 查看当前进程是否处于TTY环境
node -p -e "Boolean(process.stdout.isTTY)" | cat