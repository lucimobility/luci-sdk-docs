# luci_ros2_grpc

## summary:

This is the primary package used in the SDK. This package also allows for the bidirectional transfer of information between LUCI and the ROS ecosystem. This package's node allows for you to read sensor data as well as send remote joystick commands to the system.

This package points at a LUCI gRPC server and operates on a multi-threaded approach which will grab all specified LUCI sensor streams then pass them through a message type conversion and then publish them on ROS topics.

You are likely to always use this node if using the LUCI SDK.

| Package | Node |
|---------|------|
| luci_grpc_interface | luci_grpc_interface_node |

| Currently Implemented | Topics | Subscription / Publish | Message Type | Description |
|-----------------------|--------|----------------------|--------------|------------|
| YES | luci/joystick_topic | subscription | luci_messages::msg::LuciJoystick | Joystick values used to drive the chair (FB: xxx, LR: xxx). Value Range: [-100, 100] |
| Yes | luci/drive_mode | subscription | luci_messages::msg::LuciDriveMode | Mode of chair for drive controls (Normal = user drives with joystick, Engaged = remote command drive the chair if user is holding joystick forward, Auto = remote commands drive chair no matter what user is doing) |
| no | luci/joystick_position | publisher | luci_messages::msg::LuciJoystick | Joystick values of the chair (FB:xxx, LR: xxx) |
| no | luci/chair_velocity | publisher | geometry_msgs::msg::Twist | Linear and angular velocity of the chair according to onboard AHRS **Note: “linear velocity” will be speed not velocity** |
| coming soon | luci/all_sensor_points | publisher | sensor_msgs::msg::PointCloud2 | Full pointcloud (All LUCI sensors) |
| no | luci/odom | publisher | nav_msgs::msg::Odometry | IMU odom reading |
| coming soon | luci/ultrasonic_points | publisher | sensor_msgs::msg::PointCloud2 | Ultrasonic pointcloud |
| coming soon | luci/radar_points | publisher | sensor_msgs::msg::PointCloud2 | Radar pointcloud |
| YES | luci/camera_points | publisher | sensor_msgs::msg::PointCloud2 | Camera poincloud |
| coming soon | luci/scaling | publisher | luci_messages::msg::LuciScaling | Scaling percentage of each zone LUCI sees (100% => full ability to drive) |
| no | luci/ir_left_camera | publisher | sensor_msgs::msg::Image | Left camera’s IR frame |
| no | luci/ir_right_camera | publisher | sensor_msgs::msg::Image | Right camera’s IR frame |
| no | luci/ir_back_camera | publisher | sensor_msgs::msg::Image | Back camera’s IR frame |