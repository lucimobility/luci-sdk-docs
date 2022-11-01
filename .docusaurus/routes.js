import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/test-sdk-docs/markdown-page',
    component: ComponentCreator('/test-sdk-docs/markdown-page', '882'),
    exact: true
  },
  {
    path: '/test-sdk-docs/next',
    component: ComponentCreator('/test-sdk-docs/next', '3b4'),
    routes: [
      {
        path: '/test-sdk-docs/next/',
        component: ComponentCreator('/test-sdk-docs/next/', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/How-To/code-of-conduct',
        component: ComponentCreator('/test-sdk-docs/next/How-To/code-of-conduct', '8c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/How-To/CONTRIBUTING',
        component: ComponentCreator('/test-sdk-docs/next/How-To/CONTRIBUTING', '461'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/How-To/Examples/examples',
        component: ComponentCreator('/test-sdk-docs/next/How-To/Examples/examples', '515'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/How-To/Getting-Started/',
        component: ComponentCreator('/test-sdk-docs/next/How-To/Getting-Started/', 'a1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/How-To/Installation/install-grpc',
        component: ComponentCreator('/test-sdk-docs/next/How-To/Installation/install-grpc', '7bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/How-To/Installation/install-protobuf',
        component: ComponentCreator('/test-sdk-docs/next/How-To/Installation/install-protobuf', '6d4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/test-sdk-docs/next/How-To/Installation/luci-ros2-sdk-install', 'a15'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/How-To/Installation/ros-install',
        component: ComponentCreator('/test-sdk-docs/next/How-To/Installation/ros-install', 'c2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/How-To/troubleshooting',
        component: ComponentCreator('/test-sdk-docs/next/How-To/troubleshooting', '3f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/How-To/vm',
        component: ComponentCreator('/test-sdk-docs/next/How-To/vm', 'f80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/Nodes/grpc/grpc_package',
        component: ComponentCreator('/test-sdk-docs/next/Nodes/grpc/grpc_package', 'fc7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/Nodes/keyboard-teleop/teleop',
        component: ComponentCreator('/test-sdk-docs/next/Nodes/keyboard-teleop/teleop', '0c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/Nodes/msgs/msgs_package',
        component: ComponentCreator('/test-sdk-docs/next/Nodes/msgs/msgs_package', 'd15'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/Nodes/third-party/placeholder',
        component: ComponentCreator('/test-sdk-docs/next/Nodes/third-party/placeholder', '5d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/next/Nodes/transforms/luci_transforms_package',
        component: ComponentCreator('/test-sdk-docs/next/Nodes/transforms/luci_transforms_package', 'bd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/test-sdk-docs/',
    component: ComponentCreator('/test-sdk-docs/', '170'),
    routes: [
      {
        path: '/test-sdk-docs/',
        component: ComponentCreator('/test-sdk-docs/', 'bc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/How-To/code-of-conduct',
        component: ComponentCreator('/test-sdk-docs/How-To/code-of-conduct', '5c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/How-To/CONTRIBUTING',
        component: ComponentCreator('/test-sdk-docs/How-To/CONTRIBUTING', 'f29'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/How-To/Examples/examples',
        component: ComponentCreator('/test-sdk-docs/How-To/Examples/examples', 'fa8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/How-To/Getting-Started/',
        component: ComponentCreator('/test-sdk-docs/How-To/Getting-Started/', 'a31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/How-To/Installation/install-grpc',
        component: ComponentCreator('/test-sdk-docs/How-To/Installation/install-grpc', 'f45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/How-To/Installation/install-protobuf',
        component: ComponentCreator('/test-sdk-docs/How-To/Installation/install-protobuf', '369'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/test-sdk-docs/How-To/Installation/luci-ros2-sdk-install', 'a40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/How-To/Installation/ros-install',
        component: ComponentCreator('/test-sdk-docs/How-To/Installation/ros-install', '255'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/How-To/troubleshooting',
        component: ComponentCreator('/test-sdk-docs/How-To/troubleshooting', 'd9f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/How-To/vm',
        component: ComponentCreator('/test-sdk-docs/How-To/vm', '533'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/Nodes/grpc/grpc_package',
        component: ComponentCreator('/test-sdk-docs/Nodes/grpc/grpc_package', 'daa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/Nodes/keyboard-teleop/teleop',
        component: ComponentCreator('/test-sdk-docs/Nodes/keyboard-teleop/teleop', 'de4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/Nodes/msgs/msgs_package',
        component: ComponentCreator('/test-sdk-docs/Nodes/msgs/msgs_package', 'f0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/Nodes/third-party/placeholder',
        component: ComponentCreator('/test-sdk-docs/Nodes/third-party/placeholder', '621'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/test-sdk-docs/Nodes/transforms/luci_transforms_package',
        component: ComponentCreator('/test-sdk-docs/Nodes/transforms/luci_transforms_package', 'c0d'),
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
