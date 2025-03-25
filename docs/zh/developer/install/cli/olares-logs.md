# `olares logs`

## 命令说明
`olares logs` 命令用于获取 Olares 组件和服务的日志，无论这些组件是否在本地安装。可获取的日志包括：

* K3s/Kubelet 日志
* Containerd 日志
* JuiceFS 日志
* Redis 日志
* MinIO 日志
* etcd 日志
* olaresd 日志
* Kubernetes Pod 信息和日志
* Kubernetes 节点信息

```bash
olares-cli olares logs [选项]
```

## 选项

| 名称	                    | 简写   | 用途                                                                                                                                           |
|------------------------|------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `--components`         |      | 指定要收集日志的组件（用逗号分隔）。<br/>支持的组件：`k3s`、`containerd`、`olaresd`、`kubelet`、`juicefs`、`redis`、`minio`、`etcd`、`NetworkManager`。<br/> 默认收集所有可检测到的组件日志。 |
| `--help`               | `-h` | 显示命令帮助信息。                                                                                                                                    |
| `--ignore-kube-errors` |      | 忽略 `kubectl` 命令的错误（例如无法连接 Kubernetes API）并继续收集其他日志。                                                                                          |
| `--max-lines`          |      | 限制每个组件日志的最大行数，避免日志文件过大。<br/> 默认值为 `3000` 行。                                                                                                  |
| `--output-dir`         |      | 设置日志保存目录。如果目录不存在则自动创建。<br/> 默认保存到 `./olares-logs`。                                                                                           |
| `--since`              |      | 设置日志收集的时间范围（例如 `5s`、`2m`、`3h`）。<br/> 默认收集最近 `7d`（7天）的日志。                                                                                     |

## 使用示例
```bash
# 使用默认设置收集所有日志
olares-cli olares logs

# 收集指定组件的日志
olares-cli olares logs --components k3s,redis,minio

# 只收集最近 3 小时的日志
olares-cli olares logs --since 3h
```