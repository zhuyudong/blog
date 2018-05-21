## 使用 coding 源
```bash
cd "$(brew --repo)" && git remote set-url origin https://git.coding.net/homebrew/homebrew.git
cd $home && brew update
```

## 设置全局代理
```bash
echo 'export ALL_PROXY=socks5://127.0.0.1:1080' >> ~/.zshrc
source ~/.zshrc
```

## 使用中科大源
```bash
# 替换中科大 brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git
# 替换 Homebrew Bottles源
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
cd $home && brew update
#替换 homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
```

## 使用清华源
```bash
cd "$(brew --repo)"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
cd $home && brew update
# 或使用 homebrew-science
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-science"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-science.git
# 或使用 homebrew-python
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-python"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-python.git
```

## 重置官方源
```bash
# brew.git:
cd "$(brew --repo)"
git remote set-url origin https://github.com/Homebrew/brew.git
# homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://github.com/Homebrew/homebrew-core.git
```

## 常用软件安装
```bash
brew install tree
brew install git-flow
```

##不要使用`brew install nvm`安装node