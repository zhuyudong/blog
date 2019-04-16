查看shell列表
cat /etc/shells
安装zsh
sudo yum install -y zsh
安装oh-my-zsh
wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O - | sh
为root用户设置zsh为系统默认
chsh -s /bin/zsh root
恢复默认
chsh -s /bin/bash root
看有多少个插件
ls -l ~/.oh-my-zsh/plugins |grep "^d"|wc -l