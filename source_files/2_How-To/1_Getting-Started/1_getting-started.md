# Getting Started

Setting up your development machine:
Due to the nature of the current packages, some require dependencies before they can be installed or run. These packages are built and tested to support ROS2 Galactic with Ubuntu 20.04. New packages can be developed to fit other ROS2 version and OS needs in the future.

Currently there are two recommended approaches to getting setup to use the LUCI ROS2 SDK

- Install dependencies manually or with `system-setub.sh` script

- Use the provided VM template

## Manual dependencies:

To manually set up an existing system to use the LUCI ROS2 SDK follow the below instructions. Please note that some of these are system wide installs and could have conflicts with other libraries already installed on your system. If you are concerned about that please either plan on running the SDK packages on a separate clean system or use the VM provided in the instructions below.

**Note: You can also install all of these automagically with the system-setup.sh script in the SDK repo though it is not guaranteed to work %100 of the time.**

## General items:

### Install the basic libraries below

`sudo apt install -y cmake`

`sudo apt install -y build-essential autoconf libtool pkg-config`

`sudo apt-get install libspdlog-dev`