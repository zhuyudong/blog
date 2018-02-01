`nginx -V` 编译配置参数

#### 安装目录或路径
-prefix=/etc/nginx
--sbin-path=/usr/sbin/nginx
--modules-path=/usr/lib64/nginx/modules
--conf-path=/etc/nginx/nginx.conf
--error-log-path=/var/log/nginx/error.log
--http-log-path=/var/log/nginx/access.log
--pid-path=/var/run/nginx.pid
--lock-path=/var/run/nginx.lock
#### 执行对应模块时，Nginx所保留的临时性文件
--http-client-body-temp-path=/var/cache/nginx/client_temp
--http-proxy-temp-path=/var/cache/nginx/proxy_temp
--http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp
--http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp
--http-scgi-temp-path=/var/cache/nginx/scgi_temp
#### 设定Nginx进程启动的用户和组用户
--user=nginx
--group=nginx
#### 设置额外的参数江北添加到CFLAGS变量
--with-cc-opt=parameters
#### 设置附加的参数，链接系统库
--with-ld-opt=parameters


### 请求频率限制
limit_conn_limit # 连接请求限制
limit_req_limit # 请求连接限制

| HTTP协议版本 | 连接关系 |
|：-----------|：-------|
| HTTP1.0 | TCP不能复用 |
|HTTP1.1 | 顺序性TCP复用 |
|HTTP1.0 | 多路复用TCP复用 |
