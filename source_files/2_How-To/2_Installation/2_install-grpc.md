# Install gRPC

**LUCI uses a system known as gRPC for its internal messaging system developed by google. This system uses protobuf as well. These are very version sensitive so it is very important to use the exact versions that are listed below.**

https://github.com/grpc/grpc/blob/master/BUILDING.md#build-from-source  

gRPC relies on prootbuf as such defaults to installing a version with it. We can tell the installer that we already have protobuf installed however and avoid this. (Note: If you do not tell gRPC to use the 3.17.1 version of protobuf later steps will say that the generated .proto files were generated with the wrong version of protobuf)

We will install gRPC in a special local location, this is very important because a system wide install of gRPC can be borderline impossible to change or uninstall.


`cd ~`

**The below command tells the system to install gRPC in ~/.local folder**

`export MY_INSTALL_DIR=$HOME/.local`

Make sure that directory actually exists

`mkdir -p $MY_INSTALL_DIR`

Add the bin path so it can be used at run time of the LUCI SDK packages

`export PATH="$MY_INSTALL_DIR/bin:$PATH"`

### Clone and Install:

`git clone --recurse-submodules -b v1.38.1 --depth 1 --shallow-submodules https://github.com/grpc/grpc`

`cd grpc`

`mkdir -p cmake/build`

`pushd cmake/build`

`cmake -DgRPC_INSTALL=ON \
    -DgRPC_BUILD_TESTS=OFF \
    -DCMAKE_INSTALL_PREFIX=$MY_INSTALL_DIR \
    -DgRPC_PROTOBUF_PROVIDER=package \
    -DBUILD_SHARED_LIBS=ON \
    -DABSL_ENABLE_INSTALL=ON \
    ../..`

`make -j$(nproc)`

`sudo make install`

`popd`

This should install gRPC using the protobuf version we just installed in the prior step

That should be good to go to clone and install the ROS2 SDK repo