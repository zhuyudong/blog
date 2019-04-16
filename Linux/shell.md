```bash
cat /etc/shells
#
# /bin/sh
# /bin/bash
# /sbin/nologin
# /usr/bin/sh
# /usr/bin/bash
# /usr/sbin/nologin
# /bin/zsh
#
sudo yum install zsh
# 初次使用zsh
zsh
# 查看当前使用的shell #
# 1
echo $SHELL # /bin/zsh

# 2
echo $0 # -zsh

# 3
env | grep SHELL # SHELL=/bin/zsh

# 4
ps

# 5
# 查看当前shell pid
echo $$ # 711
ps -ef | grep 711
ps -ef | grep `echo $$` | grep -v grep | grep -v ps # yudong.+   711   710  0 05:14 pts/0    00:00:00 -zsh

# 6 输入一个不存在的指令看shell提示
tom
```

### zsh
```bash
git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
cp ~/.zshrc ~/.zshrc.orig
cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc 
cd ./oh-my-zsh/tools
./install.sh

# 或者
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
# 或者
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

# 修改主题
ZSH_THEME="ys"
# 修改插件
plugins=(git bundler)
```

oh-my-zsh 
  - 主题列表 https://github.com/robbyrussell/oh-my-zsh/wiki/themes
  - 插件列表 https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins