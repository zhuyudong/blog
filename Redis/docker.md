```bash
docker search redis
docker pull redis
docker images redis
docker run -p 8279:6379 -v ~/data/redis:/data -d redis:latest redis-server --appendonly yes
docker ps # 1e68bcc246dd
docker exec -it 1e68bcc246dd redis-cli
info
docker
```