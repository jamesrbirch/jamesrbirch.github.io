# Time to setup a dev environment

### Also known as let's play with linux and docker

I had some spare time this weekend and decided it was time to dust off the old laptop I had in a draw and see what we can use it for. It's a HP Envy 4 core / 8 thread 12Gb Ram machine so it's perfect for firing up some semi-permanent test / dev / "I'm making this for my fiánce" projects.

## Step 1: Linux

This particular model of the Envy is notorious for having really bad cooling, running Windows 10 this had 70-80 celsius cpu cores temperatures downloading a Windows update. I did a clean of the fan and general case clean, I should have replaced the thermal paste as well but I didn't have any to hand.

So! Linux time.. hopefully that will be a little nicer to our old girl. It also gives me an excuse to try using linux to achieve a goal, instead of giving up with it after an hour or two as I have done in the past.

Installing linux is fairly straight forward.

Requirements:

-   USB with x storage
-   Make sure your machine can boot from a USB
-   If you are installing a dual boot partition go into the Windows Disk Manager and resize your hard drive there. I've broken more than one laptop install by trying to do this in the linux installer!

Alter the bios to boot from the USB, I needed to jump through a few hoops with the HP Envy bios.

1.  Have the Ubuntu USB drive prepared and in the USB port then turn on the computer
2.  As soon as the laptop is on keep pressing the Escape key which will present a start up menu
3.  Press F10 to go into the BIOS
4.  In the Boot Menu make sure:
    -   Secure boot is disabled
    -   Legacy Support is enabled
    -   In System Configuration set USB3.0 Config in Pre-Boot is Auto
5.  F10 to Save and Restart
6.  Press Escape repeatedly once the system has restarted to get back to the start up menu
7.  Press F9 to open the Boot Device menu
8.  Select USB drive to boot from
9.  Follow the installation steps

## Step 2: SSH

We can remote onto linux and execute commands by using ssh. We first need to configure an ssh server on the linux machine.

[Configure SSH](https://vitux.com/how-to-remotely-manage-a-ubuntu-server-with-ssh/)

Once setup we can

```shell
ssh 192.168.1.81
```

### Bonus: A nice theme with Oh my zsh

Oh my zsh allows more customisation than the default bash shell.

Install the prerequisites:

```shell
sudo apt update
sudo apt install git zsh -y
```

Install Oh my zsh:

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

When prompted say yes to switching your shell to zsh.

Pick your theme of choice by editing `~/.zshrc`

A new combined shell is Oh My Posh 3. Giving a common experience across all shells now, I like it, let's give it a go!

[Oh My Posh 3](https://ohmyposh.dev/)

## Step 3: Other Linux Config options

Set the IP address

```shell
ip addr show
```

Make sure the laptop doesn't turn off when the lid is closed.

[Lid action config](https://askubuntu.com/questions/15520/how-can-i-tell-ubuntu-to-do-nothing-when-i-close-my-laptop-lid)

## Step 4: Docker Install

[Install Docker](https://docs.docker.com/engine/install/ubuntu/)

[Install and use Docker](https://phoenixnap.com/kb/install-docker-on-ubuntu-20-04)

## Step 5: Testing out Docker

## Step 6: Remote Deployment

[Remote Docker](https://www.docker.com/blog/how-to-deploy-on-remote-docker-hosts-with-docker-compose/)

## Step 7: Typing an IP address sucks

Install DNS server under docker

## Step 8: How do we manage the other container addresses?

Use DNS to route other addresses to different containers

## Step 9: CI / CD Pipeline

## Step 10: Pushing code through the pipeline
