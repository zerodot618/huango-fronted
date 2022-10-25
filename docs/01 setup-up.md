# 在 后端仓库初始化 dist 子模块

## 前端

构建前端应用将生成 dist 文件夹：

```
yarn build
```

这将创建 "dist "分布文件夹，其中有所有需要提供的文件，以便前端应用程序工作。下一步是将其作为一个不同的分支推送到 github，为了简便起见，我使用了一个插件 "push-dir"，它实际上可以让你推送单个目录的内容。要做到这一点，请安装该插件：

```
yarn add -D push-dir
```

在 package.json 中添加一个脚本，像这样：

```
"deploy": "push-dir --dir=dist --branch=production --cleanup"
```

调用命令, 实际上将为我们做所有的工作。

```
yarn deploy
```

## 后端

现在，在后端文件夹中，我们可以像这样创建子模块：

```
git submodule add -b production https://your_frontend_repository dist
```

用以下方式初始化子模块：

```
git submodule update --init
```

然后用：

```
git submodule update --remote
```

> 为了便于使用，我们也可以在后台文件夹中添加一个 package.json 文件，将这两条命令作为脚本。
