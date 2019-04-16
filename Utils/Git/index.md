```bash
git init
git status
git show [十六进制码]
git log # 查看提交历史
git bisect
gitk
git ls-files -u # 查看冲突未处理的文件列表

# key #
ssh-keygen -t rsa -C "zhuyudong@aliyun.com"
ssh -T git@github.com

# config #
git config -e [--global]
git config --global user.name jedi_knight
git config --global user.email zhuyudong@aliyun.com
git config --global core.autocrlfinput # 自动将换行符转换
git config --global alias.st status # 配置别名
git config --list
git help config

# remote #
git remote # 显示全部远程仓库
git remote -v
git remote rename [origin] [origin2]
git remote rm origin
git remote show origin
git remote add origin [https://github.com/zhuyudong/blog.git]
git remote set-url origin [https://github.com/zhuyudong/blog.git] # 修改远程仓库的url

# clone #
git clone https://github.com/zhuyudong/blog.git

# pull #
git pull origin master

# add #
git add .
git stash list # 获取暂存列表

# commit #
git commit -m "message"

# push #
git push --set-upstream origin master
git push -u origin master
git push -f origin master

# reset #
git reset --hard 11d881aea55e844dc0ebf0f3e5bf12a3ca999001 # 还原指定的提交之前的状态
git revert HEAD ~ # 还原前一次提交的操作
git checkout -- file # 取消对文件的修改
git checkout -- . # 从暂存区取出文件覆盖工作区
git diff file #
git diff --stat
git diff # 比较工作区和暂存区的差异
git diff --cached # 比较Index和HEAD之间的差异
git diff HEAD # 比较 Worktree 和 HEAD 间的差异
git diff branch # 比较Worktree和branch的差异
git diff branch1 branch2 # 比较两个分支的差异
git diff commit commit # 比较两次提交间的差异

# log #
git log --pretty=oneline
git log graph
git log --abbrev-commit # 显示log id的缩写
git log -[num]
git log --stat
git log --follow [file]
git log -p [file]
git log --all --grep="" # 查找
git reflog # 查看本地执行过的git命令
git whatchanged --since="2 weeks ago"
git ls-files --others -i --exclude-standard # 展示所有忽略的文件
git clean -X -f # 清除gitignore文件中记录的文件
git status --ignored # 展示忽略的文件

# stash #
git stash
git stash list
git stash apply
git stash drop
git stash pop # 恢复后删除stash内容
git stash apply [stash@{0}] # 恢复指定

# merge #
git merge [branch]
git merge --squash [branch] # 合并压缩branch的commit为1条
git cherry-pick commit # 拣选合并，将commit合并到当前分支
git cherry-pick -n commit # 拣选多个提交，合并完可以继续拣选下一个提交

# rebase #
git rebase master # 将master分支上超前的提交，变基到当前分支
git rebase --onto master 1196a # 限制回滚范围
git rebase --interactive
git rebase --continue # 处理完冲突继续合并
git rebase --skip # 跳过
git rebase --abort # 取消合并

# branch #
git branch -b test # 创建并切换test分支
git branch # 列出本地
git branch -r
git branch -a
git branch -v # 查看各个分支最后一个提交对象的信息
git branch --merge # 查看已经合并到当前分支的分支
git branch --no-merger # 查看未合并到当前分支的分支
git branch branch [branch|commit|tag] # 从指定位置新建分支
git branch --track [branch] [remote-branch] # 新建一个分支并与远程分支建立关系
git branch -m [old] [new]
git branch -d [branch] 
git branch -D [branch]
git branch --set-upsteam [dev] [origin/dev]
git branch --set-upstream-to=origin/master master # 追踪远程分支

# git tag #
git tag
git tag -a [v0.1] -m "my version"
git checkout [tagname]
git push origin v1.5
git push origin --tags
git tag -d [v0.1]
git push origin
git push origin :refs/tags/v.01 # 删除远程标签

# checkout #
git checkout [branch]
git checkout -b [branch1] [branch]
```    

https://docs.gitlab.com/runner/
https://blog.csdn.net/lusyoe/article/details/52714121

