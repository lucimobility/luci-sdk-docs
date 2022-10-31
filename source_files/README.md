---
id: intro
title: SDK Documentation
slug: /
---


# Using the SDK

PLEASE NOTE THIS DOCUMENT IS A CHANGING DURING DEVELOPMENT AND IS SUBJECT TO CHANGE AS MUCH AS SEVERAL TIMES A DAY UNTIL FURTHER INDICATED

## Overview:

This page documents the overall architecture and design of the LUCI ROS2 Software Development Kit (SDK). It explains how the ROS2 packages provided interact with LUCI and how you may use them. It explains what each package is used for and how to call to it.

**NOTE: There are also examples and readmes in the public SDK repo that are good resources as well.**


# Overview

LUCI provides an SDK for use of LUCI within the ROS2 ecosystem. LUCI provides multiple deb packages containing message types, executable nodes, and URDF who’s entire purpose is to get LUCI data into ROS2 compatible formats.

As LUCI uses a different internal messaging system than ROS, the bulk of the SDK is translating between message types.

The current features of the ROS2 SDK are as follows:

- Reading of sensor point cloud data

- Reading of linear speed (chair speed from RNet)

- Reading of Joystick position

- Reading of scaling values

- Writing of Joystick values for remote operation

**Note: There are many other data streams being added soon**

## Versioning:

The SDK is a combination of multiple individual packages. Each package is a separate repo and as such has its own versioning number. The publicly provided SDK repo however is a holding place for examples and package binaries. As a developer using the SDK you will only need to concern yourself with that single repo and version. All binaries in a specific version will be tested against each other before any public release tag is generated.

New tags will be released based on aggressiveness of the changes which may include new support for an upgraded ROS version or the inclusion of new features in the form of additional package binaries.

Versioning is handled on a major.minor.patch method, until the official SDK is released all developers will be using a version < 1.0.0.

## Package Descriptions:

There are several individual packages that are designed to be as separate as possible (though some rely on the message package) so that each package can be run individually depending on the feature set and level of LUCI input needed.