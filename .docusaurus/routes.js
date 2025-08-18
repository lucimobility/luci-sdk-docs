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
    component: ComponentCreator('/luci-sdk-docs/next', 'bca'),
    routes: [
      {
        path: '/luci-sdk-docs/next/',
        component: ComponentCreator('/luci-sdk-docs/next/', 'fa8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/next/code-of-conduct', '5dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/CONTRIBUTING',
        component: ComponentCreator('/luci-sdk-docs/next/CONTRIBUTING', '78a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/How-To/Examples/examples',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/How-To/Examples/examples', 'ffd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/How-To/Examples/slam',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/How-To/Examples/slam', '837'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/How-To/Getting-Started/',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/How-To/Getting-Started/', '7bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/How-To/Getting-Started/docker',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/How-To/Getting-Started/docker', 'b9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/How-To/Installation/dependencies', '22e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/How-To/Installation/install-grpc', 'd9b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/How-To/Installation/luci-ros2-sdk-install', '65e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/ROS2 SDK/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-sdk-docs/next/ROS2 SDK/How-To/Installation/ros-install', '808'),
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
        component: ComponentCreator('/luci-sdk-docs/next/troubleshooting', 'd4f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/Using Encoders/encoders',
        component: ComponentCreator('/luci-sdk-docs/next/Using Encoders/encoders', 'ebf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/Using Encoders/firmware',
        component: ComponentCreator('/luci-sdk-docs/next/Using Encoders/firmware', '8f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/next/Using Encoders/shield',
        component: ComponentCreator('/luci-sdk-docs/next/Using Encoders/shield', 'f88'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-sdk-docs/v1.0.0',
    component: ComponentCreator('/luci-sdk-docs/v1.0.0', '658'),
    routes: [
      {
        path: '/luci-sdk-docs/v1.0.0/',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/', '55d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/How-To/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/How-To/code-of-conduct', '4ce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/How-To/CONTRIBUTING', '154'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/How-To/Examples/examples',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/How-To/Examples/examples', '173'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/How-To/Getting-Started/',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/How-To/Getting-Started/', '297'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/How-To/Installation/dependencies', 'c18'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/How-To/Installation/install-grpc', '40d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/How-To/Installation/install-protobuf', 'eb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/How-To/Installation/luci-ros2-sdk-install', '2b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/How-To/Installation/ros-install', 'ef3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/How-To/troubleshooting',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/How-To/troubleshooting', '00b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/Packages/Basic Teleop/teleop', '161'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/Packages/GRPC Interface/grpc_package', 'c6d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/Packages/Messages/msgs_package', '4e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/Packages/Third Party/placeholder',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/Packages/Third Party/placeholder', '832'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.0.0/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-sdk-docs/v1.0.0/Packages/Transforms/luci_transforms_package', '5b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-sdk-docs/v1.1.0',
    component: ComponentCreator('/luci-sdk-docs/v1.1.0', '0a0'),
    routes: [
      {
        path: '/luci-sdk-docs/v1.1.0/',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/', 'd5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/How-To/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/How-To/code-of-conduct', 'fa3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/How-To/CONTRIBUTING', '759'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/How-To/Examples/examples',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/How-To/Examples/examples', 'bcc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/How-To/Getting-Started/',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/How-To/Getting-Started/', '8ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/How-To/Installation/dependencies', 'b69'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/How-To/Installation/install-grpc', '49a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/How-To/Installation/install-protobuf', 'a26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/How-To/Installation/luci-ros2-sdk-install', '795'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/How-To/Installation/ros-install', '1ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/How-To/troubleshooting',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/How-To/troubleshooting', '2e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/Packages/Basic Teleop/teleop', '499'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/Packages/GRPC Interface/grpc_package', '382'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/Packages/Messages/msgs_package', '2e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/Packages/Third Party/placeholder',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/Packages/Third Party/placeholder', 'f5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.1.0/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-sdk-docs/v1.1.0/Packages/Transforms/luci_transforms_package', 'd48'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-sdk-docs/v1.2.0',
    component: ComponentCreator('/luci-sdk-docs/v1.2.0', '22c'),
    routes: [
      {
        path: '/luci-sdk-docs/v1.2.0/',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/', '19a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/How-To/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/How-To/code-of-conduct', '3fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/How-To/CONTRIBUTING', 'c1c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/How-To/Examples/examples',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/How-To/Examples/examples', 'e33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/How-To/Getting-Started/',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/How-To/Getting-Started/', 'fae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/How-To/Getting-Started/docker',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/How-To/Getting-Started/docker', '0fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/How-To/Installation/dependencies', 'a86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/How-To/Installation/install-grpc', 'cbb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/How-To/Installation/install-protobuf', 'af4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/How-To/Installation/luci-ros2-sdk-install', 'ed6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/How-To/Installation/ros-install', 'e4c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/How-To/troubleshooting',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/How-To/troubleshooting', '5ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/Packages/Basic Teleop/teleop', 'c2e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/Packages/GRPC Interface/grpc_package', 'a6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/Packages/Messages/msgs_package', '341'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/Packages/Third Party/placeholder',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/Packages/Third Party/placeholder', '222'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.0/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-sdk-docs/v1.2.0/Packages/Transforms/luci_transforms_package', '38b'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-sdk-docs/v1.2.1',
    component: ComponentCreator('/luci-sdk-docs/v1.2.1', '335'),
    routes: [
      {
        path: '/luci-sdk-docs/v1.2.1/',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/', '065'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/How-To/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/How-To/code-of-conduct', '62a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/How-To/CONTRIBUTING', 'b0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/How-To/Examples/examples',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/How-To/Examples/examples', 'd4f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/How-To/Getting-Started/',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/How-To/Getting-Started/', '3c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/How-To/Getting-Started/docker',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/How-To/Getting-Started/docker', '7a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/How-To/Installation/dependencies', 'd56'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/How-To/Installation/install-grpc', '9c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/How-To/Installation/install-protobuf', '8cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/How-To/Installation/luci-ros2-sdk-install', '254'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/How-To/Installation/ros-install', '3b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/How-To/troubleshooting',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/How-To/troubleshooting', '8b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/Packages/Basic Teleop/teleop', 'f75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/Packages/GRPC Interface/grpc_package', '436'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/Packages/Messages/msgs_package', 'eb5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/Packages/Third Party/placeholder',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/Packages/Third Party/placeholder', '56d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.1/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-sdk-docs/v1.2.1/Packages/Transforms/luci_transforms_package', 'bc8'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-sdk-docs/v1.2.2',
    component: ComponentCreator('/luci-sdk-docs/v1.2.2', '3b8'),
    routes: [
      {
        path: '/luci-sdk-docs/v1.2.2/',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/', '040'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/How-To/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/How-To/code-of-conduct', 'af6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/How-To/CONTRIBUTING', '513'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/How-To/Examples/examples',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/How-To/Examples/examples', '913'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/How-To/Getting-Started/',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/How-To/Getting-Started/', '51c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/How-To/Getting-Started/docker',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/How-To/Getting-Started/docker', '8ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/How-To/Installation/dependencies', 'a5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/How-To/Installation/install-grpc', 'ac6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/How-To/Installation/install-protobuf', '80f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/How-To/Installation/luci-ros2-sdk-install', 'fd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/How-To/Installation/ros-install', 'c93'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/How-To/troubleshooting',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/How-To/troubleshooting', 'cf2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/Packages/Basic Teleop/teleop', '30e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/Packages/GRPC Interface/grpc_package', 'f97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/Packages/Messages/msgs_package', 'a4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/Packages/Third Party/placeholder',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/Packages/Third Party/placeholder', '2d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v1.2.2/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-sdk-docs/v1.2.2/Packages/Transforms/luci_transforms_package', '7bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-sdk-docs/v2.0.0',
    component: ComponentCreator('/luci-sdk-docs/v2.0.0', '587'),
    routes: [
      {
        path: '/luci-sdk-docs/v2.0.0/',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/', 'a37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/code-of-conduct', '349'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/CONTRIBUTING',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/CONTRIBUTING', '06f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Examples/examples',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Examples/examples', '2a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Examples/slam',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Examples/slam', '7ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Getting-Started/',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Getting-Started/', 'c99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Getting-Started/docker',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Getting-Started/docker', '1a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Installation/dependencies', '4df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Installation/install-grpc', '42b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Installation/luci-ros2-sdk-install', 'ba7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/ROS2 SDK/How-To/Installation/ros-install', 'bc9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/ROS2 SDK/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/ROS2 SDK/Packages/Basic Teleop/teleop', '974'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/ROS2 SDK/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/ROS2 SDK/Packages/GRPC Interface/grpc_package', 'e35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/ROS2 SDK/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/ROS2 SDK/Packages/Messages/msgs_package', '5ce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/ROS2 SDK/Packages/Third Party/third_party_package',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/ROS2 SDK/Packages/Third Party/third_party_package', '7d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/ROS2 SDK/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/ROS2 SDK/Packages/Transforms/luci_transforms_package', '366'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/troubleshooting',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/troubleshooting', 'a2b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/Using Encoders/encoders',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/Using Encoders/encoders', '852'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/Using Encoders/firmware',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/Using Encoders/firmware', 'd38'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.0.0/Using Encoders/shield',
        component: ComponentCreator('/luci-sdk-docs/v2.0.0/Using Encoders/shield', '39e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-sdk-docs/v2.1.0',
    component: ComponentCreator('/luci-sdk-docs/v2.1.0', '1ec'),
    routes: [
      {
        path: '/luci-sdk-docs/v2.1.0/',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/', 'd85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/code-of-conduct',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/code-of-conduct', '078'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/CONTRIBUTING',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/CONTRIBUTING', '7d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Examples/examples',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Examples/examples', '469'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Examples/slam',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Examples/slam', 'a77'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Getting-Started/',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Getting-Started/', '2a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Getting-Started/docker',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Getting-Started/docker', '3e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Installation/dependencies', 'f98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Installation/install-grpc', '6f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Installation/luci-ros2-sdk-install', '834'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/ROS2 SDK/How-To/Installation/ros-install', '4e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/ROS2 SDK/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/ROS2 SDK/Packages/Basic Teleop/teleop', '97e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/ROS2 SDK/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/ROS2 SDK/Packages/GRPC Interface/grpc_package', '7f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/ROS2 SDK/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/ROS2 SDK/Packages/Messages/msgs_package', '2ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/ROS2 SDK/Packages/Third Party/third_party_package',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/ROS2 SDK/Packages/Third Party/third_party_package', '3a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/ROS2 SDK/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/ROS2 SDK/Packages/Transforms/luci_transforms_package', 'd32'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/troubleshooting',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/troubleshooting', '65d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/Using Encoders/encoders',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/Using Encoders/encoders', '7c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/Using Encoders/firmware',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/Using Encoders/firmware', '3f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-sdk-docs/v2.1.0/Using Encoders/shield',
        component: ComponentCreator('/luci-sdk-docs/v2.1.0/Using Encoders/shield', 'c4c'),
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
