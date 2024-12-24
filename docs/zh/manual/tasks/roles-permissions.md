
# 用户角色与权限

Olares 支持多用户操作，允许多个用户同时访问系统。每位用户可以根据分配的角色和权限安全访问资源。

## 角色类型

Olares 提供两种默认用户角色：
- **管理员 (Admin)**：自动分配给首次激活并登录 Olares 的用户。
- **成员 (Member)**：标准用户角色，权限受限。

<table>
    <tr>
        <td><b>角色</b></td>
        <td><b>权限</b></td>
    </tr>
    <tr>
        <td>成员</td>
        <td>
            <ul>
                <li>使用系统应用：Files、Vault、Wise、Profile、Dashboard 和 Control Hub</li>
                <li>启用 VPN 访问私有入口</li>
                <li>连接 Olares Space</li>
                <li>自定义应用入口</li>
                <li>在 Market 中安装常规应用</li>
                <li>访问具有分配读/写权限的共享 Vault</li>
                <li>在控制面板查看基本系统状态</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>管理员</td>
        <td>
        成员的所有权限，此外还包括：
            <ul>
                <li>创建和管理用户账户</li>
                <li>管理 Vault 团队，创建共享 Vault，并为共享 Vault 分配读/写权限</li>
                <li>安装和管理集群范围的应用程序</li>
                <li>监控和管理系统资源</li>
                <li>设置 GPU 使用模式</li>
                <li>更新 Olares</li>
            </ul>
        </td>
    </tr>
</table>