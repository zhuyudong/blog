```bash
# 测试连接
ssh -vT git@github.com

cd ~/.ssh && ssh-genkey
sudo yum install xclip
# Linux
cat id_rsa.pub | xclip 
# Mac
cat id_rsa.pub | phcopy
# Windows
cat id_rsa.pub | clip
```