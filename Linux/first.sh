#!/bin/bash
# 1. printf
:<<!
a="hello world"
printf '%s\n' "A is: $a" # 换行>> A is: hello world
!

# 2. echo
# 2.1. 思考printf和echo的区别
if false;then
num=2
echo "this is the $numnd" # >> this is the
echo "this is the ${num}nd" # >> this is the 2nd
echo "this is the {$num}nd" # >> this is the 2nd
fi

# 3. var
:<<3 # 注释符 :<< 后面的可以跟字符或数字
var=1
var=$var+1 # +两边不要有空格
echo $var # >> 1+1
3

# 4. var C风格
((0))&&{
var=0
(( var += 1 )) # 1
(( var++ )) # 2
(( var = var + var)) # 4
let 'var = var / 3' # 1  整数除法，向0舍入
echo $(( var += 2 )) # >> 3
var=$(( var - 1 )) # 2
echo $var # >> 2
}

# 5. if
if false; then
if [ "$SHELL" == "/bin/bash" ]; then # [] 内部两边要留空格
  echo "your login shell is the bash (bourne again shell)"
else
  echo "your login shell is not bash but ${SHELL}" # >> your login shell is not bash but /bin/zsh
fi
fi

# 6. && 和 ||
if false; then
# -d 判断是否为文件夹
[ -d "/Users" ] && echo "This computer operating system is Mac OS"
# -f 判断是否为文件
[ -f "/Users/zhuyudong/Desktop/CODE/precise-application-interface/README.md" ] && echo "This is a file"
# -x 判断是否有执行权限
[ -x "/bin/ls" ] && echo "This file is excuted"
# -n 判断变量是否有值
var=v
[ -n "$var" ] && echo "var has value: ${var}"
# -r 判断文件是否可读，可读打印出以From开头的行，否则打印报错并退出
mailfolder=/var/spool/mai/james
[ -r "$mailfolder" ] || { echo "Can not read $mailfolder"; exit 1; } # >> Can not read /var/spool/mai/james
echo "$mailfolder has mail from:" # “”内$mailfolder后空格会区分变量截止
grep "^From " $mailfolder
fi

# 7. case
# 执行 ./firstsh zip.zip
if false; then
ftype="$(file "$1")" # file 判断文件类型 $1 表示第一个入参
echo $ftype # >> zip.zip: Zip archive data, at least v1.0 to extract
case "$ftype" in
"$1: Zip archive"*)
  unzip "$1" ;; # 如果zip文件夹已存在 >> Archive:  zip.zip 否则 >> Archive:  zip.zip \n    creating: zip/ 
"$1: gzip compressed"*)
  gunzip "$1" ;;
"$1: bzip2 compressed"*)
  bunzip2 "$1" ;;
*)
  echo "File $1 can not be uncompressed with smartzip";;
esac
fi

# 8. select 适合交互式场景
if false; then
echo "What is your favourite OS?"
select var in "Linux" "Gnu Hurb" "Free BSD" "Other"; do
  break;
done
echo "Your have select $var"
fi
#------输入如下内容
# What is your favourite OS?
# 1) Linux
# 2) Gnu Hurb
# 3) Free BSD
# 4) Other
# #? 2
# Your have select Gnu Hurb
#------输出截止
if false; then
pocket=()
select var in 跳跳糖 牛奶糖 软糖 企鹅糖; do
  echo "除了 $var 还要什么吗?"
  if ((RANDOM%4 == 0)); then # RANDOM 是$RANDOM 是个随机整数
    echo "呀， 时间不够了，快上车！"
    break;
  fi
  pocket+=("$var")
done
echo "你最后说的那个 $var 弄丢了..."
IFS='、'
echo "现在口袋里只有：${pocket[*]}"
IFS=$' \t\n'
fi

# 9. while/for
if false; then
for var in A B C ; do
  echo "var is $var"
done
fi
# list a content summary of a number of RPM packages
# USAGE: showrpm rpmfile1 rpmfile2 ...
# EXAMPLE: showrpm /cdrom/RedHat/RPMS/*.rpm
if false; then
for rpmpackage in "$@"; do # $@ 表示所有命令行参数
  if [ -r "$rpmpackage" ]; then
    echo "======== $rpmpackage ========"
    rpm -qi -p $rpmpackage
  else
    echo "ERROE: cannot read file $rpmpackage"
  fi
done
fi

# 10. 符号
if false; then
echo *.zip # >> 2.zip zip.zip 
# 引号 \ 都可以防止通配符*扩展，单引号更严格
echo "*.zip" # >> *.zip
echo '*.zip' # >> *.zip
echo $SHELL # >> /bin/zsh
echo "$SHELL" # >> /bin/zsh
echo '$SHELL' # >> $SHELL
echo \*.zip # >> *.zip
echo \$SHELL # >> $SHELL
fi

# Here Document

# 函数
# xtitlebar 改变终端窗口的名称
help() {
  cat << HELP
  xtitlebar -- change the name of an xterm, gnome-terminal or kde konsole
  USAGE: xtitlebar [-h] "sting_for_titlebar"
  OPTIONS: -h help text
  EXAMPLE: xtitlebar "cvs"
HELP
  exit 0
}
if [[ $1 == '' || $1 == '-h' ]]; then
  help
fi
echo -e "\033]0;$1\007"
 # HELP 必须顶格写，里面不能写注释
if false; then
help() {
  cat << HELP
  rotatefile -- rotate the file name
  USAGE: rotatefile [-h] filename
  OPTIONS: -h help text
  EXAMPLE: rotatefile out

  This will e.g rename out.2 to out.3, out.1 to out.2, out to out.1
  and create an empty out-file

  version $ver
HELP
  exit 0
}
help
fi
# 命令行参数

# 调试 sh -x strangescript
# 检查语法 sh -n strangescript

# example