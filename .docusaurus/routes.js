import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/luci-ros2-sdk-docs/markdown-page',
    component: ComponentCreator('/luci-ros2-sdk-docs/markdown-page', '8cf'),
    exact: true
  },
  {
    path: '/luci-ros2-sdk-docs/next',
    component: ComponentCreator('/luci-ros2-sdk-docs/next', '8cf'),
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
        path: '/luci-ros2-sdk-docs/next/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/Installation/install-grpc', '60f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/Installation/install-protobuf', '8f9'),
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
        path: '/luci-ros2-sdk-docs/next/How-To/vm',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/vm', '8e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/Nodes/grpc/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/Nodes/grpc/grpc_package', '4b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/Nodes/keyboard-teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/Nodes/keyboard-teleop/teleop', 'b0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/Nodes/msgs/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/Nodes/msgs/msgs_package', 'a98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/Nodes/third-party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/Nodes/third-party/placeholder', '709'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/next/Nodes/transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/Nodes/transforms/luci_transforms_package', '00b'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-ros2-sdk-docs/v0.1.0-testing',
    component: ComponentCreator('/luci-ros2-sdk-docs/v0.1.0-testing', 'af8'),
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
    path: '/luci-ros2-sdk-docs/',
    component: ComponentCreator('/luci-ros2-sdk-docs/', '33b'),
    routes: [
      {
        path: '/luci-ros2-sdk-docs/',
        component: ComponentCreator('/luci-ros2-sdk-docs/', 'e1d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/code-of-conduct',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/code-of-conduct', 'de4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/CONTRIBUTING', '9d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Examples/examples',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Examples/examples', '445'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Getting-Started/',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Getting-Started/', '62b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/install-grpc', '6ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/install-protobuf', 'c3e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/luci-ros2-sdk-install', '056'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/ros-install', 'a31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/troubleshooting',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/troubleshooting', 'c5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/vm',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/vm', '033'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Nodes/grpc/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/Nodes/grpc/grpc_package', 'aee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Nodes/keyboard-teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/Nodes/keyboard-teleop/teleop', 'df8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Nodes/msgs/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/Nodes/msgs/msgs_package', '95d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Nodes/third-party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/Nodes/third-party/placeholder', 'ade'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Nodes/transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/Nodes/transforms/luci_transforms_package', '096'),
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
