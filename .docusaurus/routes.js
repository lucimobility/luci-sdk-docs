import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/luci-sdk-docs/markdown-page',
    component: ComponentCreator('/luci-sdk-docs/markdown-page', '866'),
    exact: true
  },
  {
    path: '/luci-sdk-docs/next',
    component: ComponentCreator('/luci-sdk-docs/next', '79f'),
    routes: [
      {
        path: '/luci-sdk-docs/next/',
        component: ComponentCreator('/luci-sdk-docs/next/', '31a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/docs/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/docs/code-of-conduct', '9a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/docs/contributing',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/docs/contributing', '7be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/docs/Examples/examples',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/docs/Examples/examples', '768'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/docs/Examples/slam',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/docs/Examples/slam', '9f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/docs/Installation/Manual Installation/manual_installation',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/docs/Installation/Manual Installation/manual_installation', '0d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/docs/Installation/Quick-Start/',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/docs/Installation/Quick-Start/', '394'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/docs/troubleshooting',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/docs/troubleshooting', 'c50'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/Packages/Basic Teleop/teleop', '0db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/Packages/GRPC Interface/grpc_package', 'c35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/Packages/Messages/msgs_package', 'fc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/Packages/Third Party/third_party_package',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/Packages/Third Party/third_party_package', '322'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/Packages/Transforms/luci_transforms_package', '02b'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-sdk-docs/v3.0.0',
    component: ComponentCreator('/luci-sdk-docs/v3.0.0', '14e'),
    routes: [
      {
        path: '/luci-sdk-docs/v3.0.0/',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/', '5df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/code-of-conduct', 'd4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/CONTRIBUTING',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/CONTRIBUTING', '429'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Examples/examples',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Examples/examples', 'e0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Examples/slam',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Examples/slam', '430'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Getting-Started/',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Getting-Started/', 'f00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Getting-Started/docker',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Getting-Started/docker', 'e79'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Installation/dependencies', 'e25'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Installation/install-grpc', '8ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Installation/luci-ros2-sdk-install', '2e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/ROS2 SDK/How-To/Installation/ros-install', '672'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/ROS2 SDK/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/ROS2 SDK/Packages/Basic Teleop/teleop', 'e6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/ROS2 SDK/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/ROS2 SDK/Packages/GRPC Interface/grpc_package', 'aa9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/ROS2 SDK/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/ROS2 SDK/Packages/Messages/msgs_package', '12f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/ROS2 SDK/Packages/Third Party/third_party_package',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/ROS2 SDK/Packages/Third Party/third_party_package', '9f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/ROS2 SDK/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/ROS2 SDK/Packages/Transforms/luci_transforms_package', '363'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/troubleshooting',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/troubleshooting', '7b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/Using Encoders/encoders',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/Using Encoders/encoders', '930'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/Using Encoders/firmware',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/Using Encoders/firmware', '0b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.0/Using Encoders/shield',
        component: ComponentCreator('/luci-sdk-docs/v3.0.0/Using Encoders/shield', 'a36'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-sdk-docs/',
    component: ComponentCreator('/luci-sdk-docs/', 'a6d'),
    routes: [
      {
        path: '/luci-sdk-docs/',
        component: ComponentCreator('/luci-sdk-docs/', '7c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/code-of-conduct', '55b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/CONTRIBUTING',
        component: ComponentCreator('/luci-sdk-docs/CONTRIBUTING', 'a8b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/How-To/Examples/examples',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/How-To/Examples/examples', '058'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/How-To/Examples/slam',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/How-To/Examples/slam', '1d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/How-To/Getting-Started/',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/How-To/Getting-Started/', '688'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/How-To/Getting-Started/docker',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/How-To/Getting-Started/docker', '40f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/How-To/Installation/dependencies', '2b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/How-To/Installation/install-grpc', '416'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/How-To/Installation/luci-ros2-sdk-install', '4af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/How-To/Installation/ros-install', '268'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/Packages/Basic Teleop/teleop', '844'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/Packages/GRPC Interface/grpc_package', '695'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/Packages/Messages/msgs_package', '1a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/Packages/Third Party/third_party_package',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/Packages/Third Party/third_party_package', '3ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/Packages/Transforms/luci_transforms_package', '200'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/troubleshooting',
        component: ComponentCreator('/luci-sdk-docs/troubleshooting', '1dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/Using Encoders/encoders',
        component: ComponentCreator('/luci-sdk-docs/Using Encoders/encoders', 'd72'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/Using Encoders/firmware',
        component: ComponentCreator('/luci-sdk-docs/Using Encoders/firmware', '9e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/Using Encoders/shield',
        component: ComponentCreator('/luci-sdk-docs/Using Encoders/shield', 'd06'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
