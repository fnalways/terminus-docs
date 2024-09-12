# Running Vault On Terminus For The First Time

为了使得 Vault 在各端的账号都保持一致并正常工作，你需要设置 Vault 的锁定密码并绑定正确的 Terminus Name 之后才能正常使用 Vault。

第一步：设置 Vault 的锁定密码

![image](/images/how-to/terminus/vault_web1.jpg)

为了保证密码的健壮与安全，我们的密码规则如下：

- 长度 8-32 个字符
- 包含小写字母
- 包含大写字母
- 包含数字
- 包含符号

如果你输入了不符合规则的密码，将无法完成密码设置步骤。



第二步：导入你的 Terminus Name 的助记词

![image](/images/how-to/terminus/vault_web2.jpg)

在这里，你只能绑定已经和这台 Terminus 绑定了的 Terminus Name 账号。如果你忘记了助记词，请在登录了 Terminus 的 TermiPass 移动客户端中查找。

具体请参考[助记词丢了怎么办？](../../../overview/introduction/faq.md#助记词丢了怎么办)，以及如何在 TermiPass 上[Backup Mnemonic Phrase](../../termipass/account/index.md#backup-mnemonic-phrase)，
