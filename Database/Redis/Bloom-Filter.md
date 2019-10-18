```bash
docker pull redislabs/rebloom
docker rum -p 6379:6379 redislabs/rebloom
redis-cli

bf.add codehole user1 # -> 1
bf.add codehole user2 # -> 1
bf.add codehole user3 # -> 1
bf.exists codehole user1 # -> 1
bf.exists codehole user2 # -> 1
bf.exists codehole user3 # -> 1
bf.exists codehole user4 # -> 0
bf.madd codehole user4 user5 user6
bf.mexists codehole user4 user5 user6 user7
```
