[mongoose学习笔记（超详细）](https://segmentfault.com/a/1190000010688972)  
[mongoose api](http://www.nodeclass.com/api/mongoose.html)


```bash
docker search mongo
docker pull mongo
docker images mongo
# 运行容器，使用镜像mongo，容器名mongodb，宿主数据路径 ~/db/mongodb ，如不存在自动创建
docker run -d --name mongodb -p 27017:27017 -v $PWD/db/mongodb:/data/db mongo
docker ps
# 进入容器内部mongo命令行
docker run -it mongo mongo --host 127.0.0.1
exit
# 进入 mongodb 容器shell
docker exec -it a4db96e29447 bash
# 退出shell
exit
# 查看容器日志
docker logs a4db96e29447
```