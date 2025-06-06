---
title: Mac SSH setup with github
date: "2023-02-05"
categories: 
  - "ssh"
  - "command line"
  - "git"
excerpt: A concise guide to ssh key setup for MacOS and Github hacked together from the docs...
---

Original Github guide: [SSH Setup for github](
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
)


## Check for an existing SSH key
1. Open the terminal
2. Enter ls -al ~/.ssh to see if existing SSH keys are present.
```shell
$ ls -al ~/.ssh
```
3. Check the directory listing to see if you already have a public SSH key. By default, the filenames of supported public keys for GitHub are one of the following.

- id_rsa.pub
- id_ecdsa.pub
- id_ed25519.pub

## Generate a new key
1. Open the terminal
2. Paste the text below, substituting in your GitHub email address.

```shell
$ ssh-keygen -t ed25519 -C "your_email@example.com"
```

This creates a new SSH key, using the provided email as a label.

```shell
> Generating public/private ALGORITHM key pair.
```

When you're prompted to "Enter a file in which to save the key", you can press Enter to accept the default file location. Please note that if you created SSH keys previously, ssh-keygen may ask you to rewrite another key, in which case we recommend creating a custom-named SSH key. To do so, type the default file location and replace id_ssh_keyname with your custom key name.

```shell
> Enter a file in which to save the key (/Users/YOU/.ssh/id_ALGORITHM: [Press enter]
```
3. At the prompt, type a secure passphrase.
```shell
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
```

## Adding a new SSH key to your github account
1. Copy the SSH public key to your clipboard.

If your SSH public key file has a different name than the example code, modify the filename to match your current setup. When copying your key, don't add any newlines or whitespace.

```shell
$ pbcopy < ~/.ssh/id_ed25519.pub
```
2. In the upper-right corner of any page, click your profile photo, then click Settings.
3. In the "Access" section of the sidebar, click  SSH and GPG keys.
4. Click New SSH key or Add SSH key.
5. In the "Title" field, add a descriptive label for the new key. For example, if you're using a personal laptop, you might call this key "Personal laptop".
6. Select the type of key, either authentication or signing.
7. Paste your public key into the "Key" field.
8. Click Add SSH key.
9. If prompted, confirm access to your account on GitHub.

## Add SSH key to the ssh-agent
This set of instructions should stop prompting for the passphrase on every git operation.

1. Start the ssh-agent in the background.

```shell
$ eval "$(ssh-agent -s)"
```

Depending on your environment, you may need to use a different command. For example, you may need to use root access by running sudo -s -H before starting the ssh-agent, or you may need to use exec ssh-agent bash or exec ssh-agent zsh to run the ssh-agent.

2. If you're using macOS Sierra 10.12.2 or later, you will need to modify your ~/.ssh/config file to automatically load keys into the ssh-agent and store passphrases in your keychain.

- First, check to see if your ~/.ssh/config file exists in the default location.

```shell
$ open ~/.ssh/config
```

- If the file doesn't exist, create the file.

```shell
$ touch ~/.ssh/config
```

- Open your ~/.ssh/config file, then modify the file to contain the following lines. If your SSH key file has a different name or path than the example code, modify the filename or path to match your current setup.

```shell
Host *.github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

3.  Add your SSH private key to the ssh-agent and store your passphrase in the keychain. If you created your key with a different name, or if you are adding an existing key that has a different name, replace id_ed25519 in the command with the name of your private key file.

```shell
$ ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```