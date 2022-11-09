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
    path: '/luci-ros2-sdk-docs/',
    component: ComponentCreator('/luci-ros2-sdk-docs/', '8fa'),
    routes: [
      {
        path: '/luci-ros2-sdk-docs/',
        component: ComponentCreator('/luci-ros2-sdk-docs/', '0fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/code-of-conduct',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/code-of-conduct', '723'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/CONTRIBUTING', '253'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Examples/examples',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Examples/examples', '442'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Getting-Started/',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Getting-Started/', '33a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/dependencies', '436'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/install-grpc', '032'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/install-protobuf', 'ef6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/luci-ros2-sdk-install', '7c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/ros-install', '637'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/troubleshooting',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/troubleshooting', '983'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/Basic Teleop/teleop', 'c3a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/GRPC Interface/grpc_package', '751'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/Messages/msgs_package', '274'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/Third Party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/Third Party/placeholder', '475'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/Transforms/luci_transforms_package', '78d'),
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
