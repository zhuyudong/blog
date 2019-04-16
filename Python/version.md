```bash
# mac 安装 Xcode Command Line Tools
xcode-select --install
# mac安装 Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# 安装
brew install openssl readline xz

# 通过brew安装的pyenv默认在 /usr/local/var/pyenv
# 安装pyenv-virtualenv
git clone https://github.com/pyenv/pyenv-virtualenv.git $PYENV_ROOT/plugins/pyenv-virtualenv
echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.zshrc

# 重启shell
exec $SHELL
```