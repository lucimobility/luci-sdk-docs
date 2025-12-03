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
    component: ComponentCreator('/luci-sdk-docs/next', '9f1'),
    routes: [
      {
        path: '/luci-sdk-docs/next/',
        component: ComponentCreator('/luci-sdk-docs/next/', 'fa8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/',
        component: ComponentCreator('/luci-sdk-docs/next/', '31a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/next/code-of-conduct', 'ba8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/contributing',
        component: ComponentCreator('/luci-sdk-docs/next/contributing', 'ba5'),
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
      },
      {
        path: '/luci-sdk-docs/next/troubleshooting',
        component: ComponentCreator('/luci-sdk-docs/next/troubleshooting', '359'),
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
    path: '/luci-sdk-docs/v3.0.1',
    component: ComponentCreator('/luci-sdk-docs/v3.0.1', '8ed'),
    routes: [
      {
        path: '/luci-sdk-docs/v3.0.1/',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/', 'bdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/code-of-conduct', '182'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/CONTRIBUTING',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/CONTRIBUTING', 'ad3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Examples/examples',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Examples/examples', '9df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Examples/slam',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Examples/slam', '462'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Getting-Started/',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Getting-Started/', '4d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Getting-Started/docker',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Getting-Started/docker', '97b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Installation/dependencies', '39c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Installation/install-grpc', '43c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Installation/luci-ros2-sdk-install', 'de2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/ROS2 SDK/How-To/Installation/ros-install', '877'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/ROS2 SDK/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/ROS2 SDK/Packages/Basic Teleop/teleop', 'a2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/ROS2 SDK/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/ROS2 SDK/Packages/GRPC Interface/grpc_package', '18e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/ROS2 SDK/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/ROS2 SDK/Packages/Messages/msgs_package', '572'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/ROS2 SDK/Packages/Third Party/third_party_package',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/ROS2 SDK/Packages/Third Party/third_party_package', 'aa8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/ROS2 SDK/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/ROS2 SDK/Packages/Transforms/luci_transforms_package', 'a31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/troubleshooting',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/troubleshooting', '261'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/Using Encoders/encoders',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/Using Encoders/encoders', '77a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/Using Encoders/firmware',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/Using Encoders/firmware', '026'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v3.0.1/Using Encoders/shield',
        component: ComponentCreator('/luci-sdk-docs/v3.0.1/Using Encoders/shield', '4db'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-sdk-docs/',
    component: ComponentCreator('/luci-sdk-docs/', '9d4'),
    routes: [
      {
        path: '/luci-sdk-docs/',
        component: ComponentCreator('/luci-sdk-docs/', 'df7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/code-of-conduct', '8fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/contributing',
        component: ComponentCreator('/luci-sdk-docs/contributing', '2ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/How-To/Examples/examples',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/How-To/Examples/examples', 'af3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/How-To/Examples/slam',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/How-To/Examples/slam', '090'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/How-To/Installation/Manual Installation/manual_installation',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/How-To/Installation/Manual Installation/manual_installation', '630'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/How-To/Installation/Quick-Start/',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/How-To/Installation/Quick-Start/', '70e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/Packages/Basic Teleop/teleop', '670'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/Packages/GRPC Interface/grpc_package', '968'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/Packages/Messages/msgs_package', '6aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/Packages/Third Party/third_party_package',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/Packages/Third Party/third_party_package', '997'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/ROS2 SDK/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-sdk-docs/ROS2 SDK/Packages/Transforms/luci_transforms_package', 'cd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/troubleshooting',
        component: ComponentCreator('/luci-sdk-docs/troubleshooting', '56f'),
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
