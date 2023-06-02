https://docs.docker.com/build/guide/intro/

# 允许容器后删除

`docker run -it --rm [name] 进入容器执行命令`

# 清理 none

`docker rmi $(docker images -f "dangling=true" -q)`

# docker compose yaml 传递环境变量

`target=client docker compose build`
