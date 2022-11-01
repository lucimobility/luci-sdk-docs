# luci_ros2_transforms

## summary

This package handles the transformation of raw sensor points that are all referenced at sensor origin to a common chair center origin.

_**Note: All the sensors from LUCI streams are already set relative to the chair center so the transforms below are an identity matrix that is only here to provide other tools such as nav\_2 and rviz2 with knowledge of the frames used**_

| Package | Node |
|---------|------|
| luci_sensors_tf | luci_permobil_m3_transforms_node |
| luci_sensors_tf | luci_quickie_500m_transforms_node |

| Topics | Subscription / Publish | Message Type | Description |
|--------|------------------------|--------------|-------------|
| luci/camera_transform | publish | geometry_msgs::msg::TransformStamped | Transformation from front camera pointcloud to chair center <br/><br/> (base_link = chair center, base_camera = camera stream) |
| luci/ultrasonic_transform | publish | geometry_msgs::msg::TransformStamped | Transformation from ultransonic pointcloud to chair center <br/><br/> (base_link = chair center, base_ultrasonic = ultrasonic stream) |
| luci/radar_transform | publish | geometry_msgs::msg::TransformStamped | Transformation from radar pointcloud to chair center <br/><br/> (base_link = chair center, base_radar = radar stream) |
