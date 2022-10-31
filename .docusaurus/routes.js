import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/luci-ros2-sdk-docs/markdown-page',
    component: ComponentCreator('/luci-ros2-sdk-docs/markdown-page', '643'),
    exact: true
  },
  {
    path: '/luci-ros2-sdk-docs/next',
    component: ComponentCreator('/luci-ros2-sdk-docs/next', '57a'),
    routes: [
      {
        path: '/luci-ros2-sdk-docs/next/',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/', 'e9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/How-To/code-of-conduct',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/code-of-conduct', '8c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/CONTRIBUTING', '2e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/How-To/Examples/examples',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/Examples/examples', '0a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/How-To/Getting-Started/',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/Getting-Started/', '512'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/Installation/dependencies', '452'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/Installation/install-grpc', '795'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/Installation/install-protobuf', '761'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/Installation/luci-ros2-sdk-install', '294'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/Installation/ros-install', '53a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/How-To/troubleshooting',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/troubleshooting', 'e14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/Packages/Basic Teleop/teleop', '912'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/Packages/GRPC Interface/grpc_package', 'dfb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/Packages/Messages/msgs_package', '52f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/Packages/Third Party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/Packages/Third Party/placeholder', '4f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/Packages/Transforms/luci_transforms_package', '510'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-ros2-sdk-docs/v0.1.0-testing',
    component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing', '85d'),
    routes: [
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/', '692'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/How-To/code-of-conduct',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/How-To/code-of-conduct', '2ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/How-To/CONTRIBUTING', 'e0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/How-To/Examples/examples',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/How-To/Examples/examples', 'a71'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/How-To/Getting-Started/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/How-To/Getting-Started/', 'f34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/How-To/Installation/install-grpc', '46e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/How-To/Installation/install-protobuf', '4a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/How-To/Installation/luci-ros2-sdk-install', '199'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/How-To/Installation/ros-install', 'a7a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/How-To/troubleshooting',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/How-To/troubleshooting', '5c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/How-To/vm',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/How-To/vm', 'b37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/Nodes/grpc/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/Nodes/grpc/grpc_package', '997'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/Nodes/keyboard-teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/Nodes/keyboard-teleop/teleop', '34a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/Nodes/msgs/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/Nodes/msgs/msgs_package', '87a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/Nodes/third-party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/Nodes/third-party/placeholder', 'c3b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.0-testing/Nodes/transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing/Nodes/transforms/luci_transforms_package', '368'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-ros2-sdk-docs/v0.1.1-testing',
    component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing', '0ce'),
    routes: [
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/', '352'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/How-To/code-of-conduct',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/How-To/code-of-conduct', 'ce4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/How-To/CONTRIBUTING', '4e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/How-To/Examples/examples',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/How-To/Examples/examples', '8ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/How-To/Getting-Started/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/How-To/Getting-Started/', 'ae7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/How-To/Installation/install-grpc', 'abf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/How-To/Installation/install-protobuf', '598'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/How-To/Installation/luci-ros2-sdk-install', '304'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/How-To/Installation/ros-install', '9ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/How-To/troubleshooting',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/How-To/troubleshooting', '650'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/How-To/vm',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/How-To/vm', 'db3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/Nodes/grpc/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/Nodes/grpc/grpc_package', '574'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/Nodes/keyboard-teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/Nodes/keyboard-teleop/teleop', '899'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/Nodes/msgs/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/Nodes/msgs/msgs_package', 'f07'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/Nodes/third-party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/Nodes/third-party/placeholder', '61e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.1-testing/Nodes/transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.1-testing/Nodes/transforms/luci_transforms_package', '6af'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-ros2-sdk-docs/v0.1.2-testing',
    component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing', '437'),
    routes: [
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/', 'f35'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/How-To/code-of-conduct',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/How-To/code-of-conduct', 'e39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/How-To/CONTRIBUTING', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Examples/examples',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Examples/examples', '705'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Getting-Started/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Getting-Started/', '1dc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Installation/dependencies', 'bc5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Installation/install-grpc', '037'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Installation/install-protobuf', 'f00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Installation/luci-ros2-sdk-install', '336'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/How-To/Installation/ros-install', '9af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/How-To/troubleshooting',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/How-To/troubleshooting', 'cb1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/Nodes/grpc/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/Nodes/grpc/grpc_package', '371'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/Nodes/keyboard-teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/Nodes/keyboard-teleop/teleop', '434'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/Nodes/msgs/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/Nodes/msgs/msgs_package', 'ecc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/Nodes/third-party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/Nodes/third-party/placeholder', 'fdc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/Nodes/transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/Nodes/transforms/luci_transforms_package', 'bff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/Packages/grpc/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/Packages/grpc/grpc_package', 'a6b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/Packages/keyboard-teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/Packages/keyboard-teleop/teleop', 'f1c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/Packages/msgs/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/Packages/msgs/msgs_package', 'e05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/Packages/third-party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/Packages/third-party/placeholder', 'f92'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.2-testing/Packages/transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.2-testing/Packages/transforms/luci_transforms_package', '16e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-ros2-sdk-docs/v0.1.4-testing',
    component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing', '663'),
    routes: [
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/', 'e91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/How-To/code-of-conduct',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/How-To/code-of-conduct', '415'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/How-To/CONTRIBUTING', '3bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Examples/examples',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Examples/examples', '70e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Getting-Started/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Getting-Started/', '494'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Installation/dependencies', '06a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Installation/install-grpc', '44a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Installation/install-protobuf', '021'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Installation/luci-ros2-sdk-install', '740'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/How-To/Installation/ros-install', '31e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/How-To/troubleshooting',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/How-To/troubleshooting', 'c14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/Packages/grpc/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/Packages/grpc/grpc_package', 'ae6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/Packages/keyboard-teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/Packages/keyboard-teleop/teleop', '8a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/Packages/msgs/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/Packages/msgs/msgs_package', '7ca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/Packages/third-party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/Packages/third-party/placeholder', '9de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v0.1.4-testing/Packages/transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.4-testing/Packages/transforms/luci_transforms_package', '063'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-ros2-sdk-docs/',
    component: ComponentCreator('/luci-ros2-sdk-docs/', '688'),
    routes: [
      {
        path: '/luci-ros2-sdk-docs/',
        component: ComponentCreator('/luci-ros2-sdk-docs/', '50d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/code-of-conduct',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/code-of-conduct', '9cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/CONTRIBUTING', 'cab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Examples/examples',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Examples/examples', '8a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Getting-Started/',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Getting-Started/', 'f78'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/dependencies', 'f81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/install-grpc', 'd7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/install-protobuf', 'ce3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/luci-ros2-sdk-install', '8f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/ros-install', '779'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/troubleshooting',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/troubleshooting', 'ec2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/Basic Teleop/teleop', '443'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/GRPC Interface/grpc_package', 'dd4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/Messages/msgs_package', '876'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/Third Party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/Third Party/placeholder', 'e3e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/Transforms/luci_transforms_package', 'a97'),
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
