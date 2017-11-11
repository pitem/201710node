## git本地操作
- 不停的创造文件进行备份(没有修改的提示) git可以帮我们管理我们的代码保证代码不丢失
- 记录历史只要代码提交到git上就永久不会丢失，可以随时“穿越”
- 团队协作 俩个人修改了同一个文件的同一行，也需要手动解决冲突，可以实现自动合并 （模块化，组件化）
- git拥有强大“分支”管理系统

## 分布式
- svn(集中式) 需要一台中央服务器
- git的区别
- 速度比svn快
- svn中每个文件夹都有一个文件.svn文件，git有一个单独的文件.git文件夹

## git安装
- windows http://git-scm.com
- mac 如果安装过xcode自带git，homebrew是wmac的包管理器
- http://ohmyz.sh/
- http://www.iterm2.com/

## 配置用户(不配置用户不能提交代码)
```
git config --list
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

## 初始化git
- 一个项目初始化一次，不能嵌套
```
git init 告诉git哪个文件夹被git所管理
```


## linux命令
- pwd print working directory
- rm -rf 文件夹 删除文件
- rm 文件名 删除文件
- mkdir 文件夹名字 创建目录
- cd 目录名 change directory
- ls -al显示目录下所有的文件
- touch 文件名 创建文件
- cat 文件名
- vi 文件名
 - i:插入模式 esc退出编辑模式 :q!强制退出 :wq 保存并退出

http://man.linuxde.net/vi
