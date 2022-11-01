# Keyboard Teleop

The teleop_py package runs a node that publishes messages that can be used to drive LUCI using the arrow keys on your keyboard. ctrl+c or q to terminate. Compatible with Linux.

Node name: `/keyboard_commands`

Topic name: `/joystick_topic`

Topic message type: `[luci_messages/msg/LuciJoystick]`

## Usage ##

After correctly sourcing ROS2, Run the following to start the node:

`ros2 run teleop_py keyboard_control`

This node was created to communicate with the `luci_grpc_interface`



| Package | Node |
|---------|------|
| teleop_py | keyboard_commands |

| Topics | Subscription / Publish | Message Type | Description |
|--------|------------------------|--------------|-------------|
| joystick_topic | publish | luci_messages::msg::LuciJoystick | The remote JS values that are processed by LUCI for remote drive operations

