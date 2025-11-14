# Installing Dyalog

!!! abstract "This part will cover"
    
    - Setting up Dyalog APL on your computer
    - Installing Dyalog RIDE

---

We promised in the beginning of the course that you would get to learn APL: A Programming Language.
Now, we finally get to the "Programming" part!
In this chapter, we will install the Dyalog APL interpreter and Dyalog's cross-platform IDE to write larger, more organized programs.

Dyalog is an implementation of APL, while RIDE is an IDE that gives you a nice-looking interface to edit and run APL code.
By the end of the tutorial, you will be able to run RIDE, which looks something like this:

![A picture of Dyalog RIDE](../assets/7_1_ride.png)

!!! tip "Choose your warrior"

    This part is split up into different sections based on your operating system.
    Choose the one that you're using:

    - Ubuntu / Debian
    - Nix / NixOS
    - Arch
    - Windows
    - macOS

---

## Ubuntu / Debian

First, let's install Dyalog:

1. Visit the Dyalog downloads page <https://www.dyalog.com/download-zone.htm>
1. Accept the conditions for a free license to use Dyalog
1. Click on `Download Unregistered` to download Dyalog without registering
    - You may of course choose to register your license. This will have no effect on the installation process.
1. Click on the `for Linux (DEB)` download link
    - This will download a `.deb` software package
1. Open a terminal
1. Navigate to your downloaded file
    - In most cases this is done with `cd Downloads`
1. Run `sudo apt update`
1. Run `sudo apt install ./filename`
    - Replace `filename` with the name of the downloaded `.deb` file

Then, let's install RIDE:

1. Visit the RIDE releases page <https://github.com/Dyalog/ride/releases/latest>
1. Download the package that ends with `amd64.deb`
    - If you have a Raspberry Pi or ARM-based device, download the `aarch64.deb` or `armhf.deb` version.
1. Open a terminal
1. Navigate to your downloaded file
1. Run `sudo apt update`
1. Run `sudo apt install ./filename`
    - Again, replace `filename` with the name of the downloaded `.deb` file

Now, you can start RIDE by searching for `RIDE` in your program menu.
That's it!

## Nix / NixOS

Add the following lines to your NixOS config:

```nix
packages = with pkgs; [
    (dyalog.override {acceptLicense = true;})
    ride
];
```

If you are using HomeManager, replace `packages` with `home.packages`.
The override is required, as Nix will not let you install Dyalog without accepting their 3rd-party license.

If for whatever reason Dyalog fails to install, try replacing the above configuration with this:

```nix
packages = with pkgs; [
    ((dyalog.override {acceptLicense = true;}).overrideAttrs (old: {
        src = fetchurl {
        url = "https://download.dyalog.com/download.php?file=19.0/linux_64_19.0.50027_unicode.x86_64.deb";
        hash = "sha256-3uB102Hr0dmqAZj2ezLhsAdBotY24PWJfE7g5wSmKMA=";
        };
    }))
    ride
];
```

Then, rebuild as usual and you should be done!
You can launch Dyalog RIDE by searching for `RIDE` in your program menu, or by typing `ride` in the terminal.

## Arch

There are community packages that install RIDE on the Arch User Repository, for example [ride-bin](https://aur.archlinux.org/packages/ride-bin), these installations are not verified by Dyalog.

Manual instructions were however provided on Stack Exchange <https://stackoverflow.com/questions/66729267/how-to-get-dyalog-apl-on-arch>.

## Windows

First, let's install Dyalog:

1. Visit the Dyalog downloads page <https://www.dyalog.com/download-zone.htm>
1. Accept the conditions for a free license to use Dyalog
1. Click on `Download Unregistered` to download Dyalog without registering
    - You may of course choose to register your license. This will have no effect on the installation process
1. Click on the `for Windows` download link
    - This will download a `.zip` file
1. Navigate to your downloaded file
1. Extract the downloaded file
1. Run `setup.exe` in the extracted folder
1. If prompted, restart the installer with administrator privileges
1. To proceed with a default installation, keep the settings the way they are and click `Default install`
    - If you would not want APL Keyboard IMEs, make sure to uncheck the option
1. Accept the terms and proceed with the installation
1. Press `Finish`
1. If prompted, restart your computer

Then, let's install RIDE:

1. Visit the RIDE releases page <https://github.com/Dyalog/ride/releases/latest>
1. Download the file that ends with `windows.zip`
    - This will download a `.zip` file
1. Navigate to your downloaded file
1. Extract the downloaded file
1. Run `setup_ride.exe` in the extracted folder
1. If prompted, restart the installer with administrator privileges
1. To proceed with a default installation, keep the settings the way they are and click `Default install`
1. Press `Finish`

Now, you can start Dyalog RIDE by searching for `RIDE` in the start menu.
That's it!

## macOS

First, determine whether your device uses an ARM or Intel processor.

1. Click on the Apple logo in the top right of your screen
1. Click on `About This Mac`
    - If there is a `Chip` label, then your device uses an ARM processor
    - If there is a `Processor`label, then your device uses an Intel processor

Then, let's install RIDE.

1. Visit the Dyalog downloads page <https://www.dyalog.com/download-zone.htm>
1. Accept the conditions for a free license to use Dyalog
1. Click on `Download Unregistered` to download Dyalog without registering
    - You may of course choose to register your license. This will have no effect on the installation process
1. Click on the `for macOS` download link corresponding to your processor
    - This will download a `.pkg` package file
1. Run the downloaded file and follow the instructions given by the installer

Now, you can start Dyalog RIDE by searching for `Dyalog` in spotlight.
That's it!
