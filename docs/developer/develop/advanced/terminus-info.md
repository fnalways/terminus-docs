# Terminus Info

`Terminus-info` is an API without authentication. It displays publicly available system information. You can think of it as a house number sign.

## API Call

```
https://<username>.myterminus.com/terminus-info
```

## Data Structure

```json
interface TerminusInfo {
    terminusName: string;
    wizardStatus: string;
    selfhosted: boolean;
    tailScaleEnable: boolean;
    osVersion: string;
    avatar: string;
    loginBackground: string;
    terminusId: string;
}
```

## API Field Definitions

| Field            | Description                                                                                                                                                                                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| terminusName    | The user's Terminus Name follows a format like `pengpeng@snowinning.com`. |
| wizardStatus    | Activation status of Terminus, possible statuses includes: `wait_activate_vault`, `vault_activating`, `vault_activate_failed`, `wait_activate_system`, `system_activating`, `system_activate_failed`, `wait_activate_network`, `network_activating`, `network_activate_failed`, `wait_reset_password`, `completed`. When the status displays `completed`, it indicates that the system has been successfully activated. We advise against third-party programs executing excessive business-related logic before the system is fully activated. |
| selfhosted      | Whether the Terminus is running on Terminus Space  |
| tailScaleEnable | Whether the TailScale is activated. If so, all private entrances can only be accessed through the VPN. <br> Note: This field does not affect whether TermiPass uses local access when connecting to Terminus.|
| osVersion       | Terminus OS version |
| avatar          | User's Avatar  |
| loginBackground | Background image of the login interface    |
| terminusId      | Every time the user activates Terminus, a new unique ID is generated.    |
