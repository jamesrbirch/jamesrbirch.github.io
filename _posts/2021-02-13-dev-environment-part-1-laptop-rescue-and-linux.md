# Time to setup a dev environment

I had some spare time this weekend and decided it was time to dust off the old laptop I had in a draw and see what we can use it for. It's a HP Envy 4 core / 8 thread 12Gb Ram machine so it's perfect for firing up some semi-permanent test / dev / "I'm making this for my fiánce" projects.

## 📜 The plan

The idea of having a Docker platform with enough power to run multiple (read MANY) things for the house is a very attractive idea.

As an aside there are a lot of other bonuses:

-   Improve my command line competence
-   Become familiar with Linux
-   Learn new technology
-   Revive a laptop

## 🤓 Linux

This particular model of the Envy is notorious for having really bad cooling, running Windows 10 this had 70-80 celsius cpu cores temperatures downloading a Windows update. I did a clean of the fan and general case clean, I should have replaced the thermal paste as well but I didn't have any to hand.

So! Linux time.. hopefully that will be a little nicer to our old girl. It also gives me an excuse to try using linux to achieve a goal, instead of giving up with it after an hour or two as I have done in the past.

### 💾 Installation

Installing linux is fairly straight forward.

Requirements:

-   Make a bootable USB with Ubuntu on (other flavours are available)
-   Make sure your machine can boot from a USB

> _If you are installing a dual boot partition go into the Windows Disk Manager and resize your hard drive there. I've broken more than one laptop install by trying to do this in the linux installer!_

### 🥾 Boot it!

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

## 🤫 SSH

We can remote onto linux and execute commands by using ssh. We first need to configure an ssh server on the linux machine.

[Configure SSH](https://vitux.com/how-to-remotely-manage-a-ubuntu-server-with-ssh/)

Once setup we can

```shell
ssh 192.168.1.81
```

## 🏆 Bonus: A nice theme

A new combined shell is Oh My Posh 3. Giving a common experience across all shells now, I like it! Let's give it a go!

[Oh My Posh - Installation](https://ohmyposh.dev/docs/installation)

If you've installed a basic version of Ubuntu you might need the unzip command:

```shell
sudo apt-get install unzip
```

The only thing I've found with that guide is setting the permissions of the config files wasn't working as I had to sudo the previous commands to install the needed files. I'll need to look into this further.

So..

```shell
chmod 666 ~/.poshthemes/*.json
```

😬

## Step 3: Other Linux Config options

Set the IP address

```shell
ip addr show
```

Make sure the laptop doesn't turn off when the lid is closed.

[Lid action config](https://askubuntu.com/questions/15520/how-can-i-tell-ubuntu-to-do-nothing-when-i-close-my-laptop-lid)
