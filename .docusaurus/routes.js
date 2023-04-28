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
    component: ComponentCreator('/luci-ros2-sdk-docs/next', 'af8'),
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
        path: '/luci-ros2-sdk-docs/next/How-To/Getting-Started/docker',
        component: ComponentCreator('/luci-ros2-sdk-docs/next/How-To/Getting-Started/docker', '9c7'),
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
    path: '/luci-ros2-sdk-docs/v1.0.0',
    component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0', '283'),
    routes: [
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/', '437'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/How-To/code-of-conduct',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/How-To/code-of-conduct', '92a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/How-To/CONTRIBUTING', '437'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/How-To/Examples/examples',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/How-To/Examples/examples', '406'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/How-To/Getting-Started/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/How-To/Getting-Started/', '6f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/How-To/Installation/dependencies', '02c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/How-To/Installation/install-grpc', '83a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/How-To/Installation/install-protobuf', 'f12'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/How-To/Installation/luci-ros2-sdk-install', '091'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/How-To/Installation/ros-install', 'e1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/How-To/troubleshooting',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/How-To/troubleshooting', 'd1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/Packages/Basic Teleop/teleop', '139'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/Packages/GRPC Interface/grpc_package', '31b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/Packages/Messages/msgs_package', '76a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/Packages/Third Party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/Packages/Third Party/placeholder', '7b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.0.0/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.0.0/Packages/Transforms/luci_transforms_package', 'b7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-ros2-sdk-docs/v1.1.0',
    component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0', 'e8b'),
    routes: [
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/', 'f9d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/How-To/code-of-conduct',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/How-To/code-of-conduct', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/How-To/CONTRIBUTING', '35b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/How-To/Examples/examples',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/How-To/Examples/examples', 'd1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/How-To/Getting-Started/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/How-To/Getting-Started/', 'c65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/How-To/Installation/dependencies', '8c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/How-To/Installation/install-grpc', '2d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/How-To/Installation/install-protobuf', 'f0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/How-To/Installation/luci-ros2-sdk-install', '796'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/How-To/Installation/ros-install', 'cef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/How-To/troubleshooting',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/How-To/troubleshooting', 'd3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/Packages/Basic Teleop/teleop', 'ead'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/Packages/GRPC Interface/grpc_package', 'cf3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/Packages/Messages/msgs_package', 'ea6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/Packages/Third Party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/Packages/Third Party/placeholder', 'c2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.1.0/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.1.0/Packages/Transforms/luci_transforms_package', '06f'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-ros2-sdk-docs/v1.2.0',
    component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0', 'b7c'),
    routes: [
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/', '6a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/How-To/code-of-conduct',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/How-To/code-of-conduct', '1f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/How-To/CONTRIBUTING', 'e4f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/How-To/Examples/examples',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/How-To/Examples/examples', '730'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/How-To/Getting-Started/',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/How-To/Getting-Started/', '173'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/How-To/Getting-Started/docker',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/How-To/Getting-Started/docker', '47b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/How-To/Installation/dependencies', '0da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/How-To/Installation/install-grpc', 'd37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/How-To/Installation/install-protobuf', '019'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/How-To/Installation/luci-ros2-sdk-install', 'bb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/How-To/Installation/ros-install', '09b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/How-To/troubleshooting',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/How-To/troubleshooting', '55b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/Packages/Basic Teleop/teleop', 'd2a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/Packages/GRPC Interface/grpc_package', 'fcd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/Packages/Messages/msgs_package', 'ba7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/Packages/Third Party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/Packages/Third Party/placeholder', 'bc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/v1.2.0/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/v1.2.0/Packages/Transforms/luci_transforms_package', 'f65'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/luci-ros2-sdk-docs/',
    component: ComponentCreator('/luci-ros2-sdk-docs/', '3fd'),
    routes: [
      {
        path: '/luci-ros2-sdk-docs/',
        component: ComponentCreator('/luci-ros2-sdk-docs/', '993'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/code-of-conduct',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/code-of-conduct', '2e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/CONTRIBUTING',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/CONTRIBUTING', 'bc3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Examples/examples',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Examples/examples', '5f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Getting-Started/',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Getting-Started/', '211'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Getting-Started/docker',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Getting-Started/docker', 'c22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/dependencies',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/dependencies', 'a17'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/install-grpc',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/install-grpc', '578'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/install-protobuf',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/install-protobuf', '14f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/luci-ros2-sdk-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/luci-ros2-sdk-install', '160'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/Installation/ros-install',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/Installation/ros-install', '087'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/How-To/troubleshooting',
        component: ComponentCreator('/luci-ros2-sdk-docs/How-To/troubleshooting', 'f59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/Basic Teleop/teleop',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/Basic Teleop/teleop', '260'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/GRPC Interface/grpc_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/GRPC Interface/grpc_package', '55b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/Messages/msgs_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/Messages/msgs_package', '806'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/Third Party/placeholder',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/Third Party/placeholder', '93c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/luci-ros2-sdk-docs/Packages/Transforms/luci_transforms_package',
        component: ComponentCreator('/luci-ros2-sdk-docs/Packages/Transforms/luci_transforms_package', '9ea'),
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
