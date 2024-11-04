# User roles and permissions

Terminus supports multi-user operations, allowing multiple users to access the system simultaneously. Each user can securely access resources based on their assigned role and permissions.

## Role types
Terminus has two default user roles:
- **Admin**: Automatically assigned to the first user who activates and logs into Terminus
- **Member**: Standard user role with limited permissions

<table>
    <tr>
        <td><b>Role</b></td>
        <td><b>Permissions</b></td>
    </tr>
    <tr>
        <td>Member</td>
        <td>
            <ul>
                <li>Use system apps: Files, Vault, Wise, Profile, Dashboard, and Control Hub</li>
                <li>Enable VPN for private entrances</li>
                <li>Connect to Terminus Space</li>
                <li>Customize app entrances</li>
                <li>Install regular apps in Market</li>
                <li>Access shared vaults with assigned read/write permissions</li>
                <li>View basic system status in Control Hub</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Admin</td>
        <td>
        All Member permissions, plus:
            <ul>
                <li>Create and manage user accounts</li>
                <li>Manage vault teams, create shared vaults, and assign read/write permissions for shared vaults</li>
                <li>Install and manage cluster-scoped applications</li>
                <li>Monitor and manage system resources</li>
                <li>Set GPU usage mode</li>
                <li>Update Terminus</li>
            </ul>
        </td>
    </tr>
</table>
