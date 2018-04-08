基础知识
docker run -d -p 8088:80 --name ngnix_8088:lastest /sbin/init
四项确认
- 确认系统网络
- 确认yum可用 `yun list | grep gcc`
- 确认关闭iptables `sudo iptables -F`
- 确认停用selinux
安装配套
`yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake`
`yum -y install wget httpd-tools vim`
初始化
`cd /opt`
`mkdir app download logs work backup`
确定 nginx 源
`cd /etc/yum.repos.d`
`vim nginx.repo`
```repo
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
```
安装
`yum list | grep nginx`
`yum install nginx`
基本命令
```bash
# 安装目录
rpm -ql nginx
curl -v http://www.baidu.com
nginx -v
# 查看nginx编译的参数
nginx -V 
nginx -c /etc/nginx/nginx.conf
systemctl restart nginx.service
# 柔和启动
nginx -s reload -c /etc/nginx/nginx.conf
# 检查配置文件
nginx -t -c /etc/nginx/nginx.conf
```
目录
| 路径 | 类型 | 作用 |
|:-----|:-------|:---------|
| /etc/logrotate.d/nginx | 配置文件 | 日志轮转 | 
| /etc/nginx/fastcgi.conf | | | 
| /etc/nginx/fastcgi.conf.default | | | 
| /etc/nginx/fastcgi_params | | | 
| /etc/nginx/fastcgi_params.default | | | 
| /etc/nginx/koi-utf | | | 
| /etc/nginx/koi-win | | | 
| /etc/nginx/mime.types | | | 
| /etc/nginx/mime.types.default | | | 
| /etc/nginx/nginx.conf | | | 
| /etc/nginx/nginx.conf.default | | | 
| /etc/nginx/scgi_params | | | 
| /etc/nginx/scgi_params.default | | | 
| /etc/nginx/uwsgi_params | | | 
| /etc/nginx/uwsgi_params.default | | | 
| /etc/nginx/win-utf | | | 
| /usr/bin/nginx-upgrade | | | 
| /usr/lib/systemd/system/nginx.service | | | 
| /usr/lib64/nginx/modules | | | 
| /usr/sbin/nginx | | | 
| /usr/share/doc/nginx-1.10.2 | | | 
| /usr/share/doc/nginx-1.10.2/CHANGES | | | 
| /usr/share/doc/nginx-1.10.2/README | | | 
| /usr/share/doc/nginx-1.10.2/README.dynamic | | | 
| /usr/share/doc/nginx-1.10.2/UPGRADE-NOTES-1.6-to-1.10 | | | 
| /usr/share/licenses/nginx-1.10.2 | | | 
| /usr/share/licenses/nginx-1.10.2/LICENSE | | | 
| /usr/share/man/man3/nginx.3pm.gz | | | 
| /usr/share/man/man8/nginx-upgrade.8.gz | | | 
| /usr/share/man/man8/nginx.8.gz | | | 
| /usr/share/nginx/html/404.html | | | 
| /usr/share/nginx/html/50x.html | | | 
| /usr/share/nginx/html/index.html | | | 
| /usr/share/nginx/html/nginx-logo.png | | | 
| /usr/share/nginx/html/poweredby.png | | | 
| /usr/share/vim/vimfiles/ftdetect/nginx.vim | | | 
| /usr/share/vim/vimfiles/indent/nginx.vim | | | 
| /usr/share/vim/vimfiles/syntax/nginx.vim | | | 
| /var/lib/nginx | | | 
| /var/lib/nginx/tmp | | | 
| /var/log/nginx | | | 

io多路复用：多个描述符的i/o操作都能在一个线程内并发地交替顺序完成
实现方式：select、poll、epoll
cpu亲和（affinity）:把每个worker进程固定在一个cpu上执行，减少切换cpu的cache miss
sendfile

模块

基础配置语法

日志输出

默认配置模块

http代理

负载均衡

缓存

常用配置

rewrite

geoip模块

https

secure_link_module的防盗链

