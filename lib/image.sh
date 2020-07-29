#!/bin/bash
version=$1
appframe=nledu-web
docker build -t imageserver:8082/${appframe}:${version} . -f ./lib/Dockerfile
docker login -u admin -p admin123 imageserver:8082
docker push imageserver:8082/${appframe}:${version}
docker logout imageserver:8082

re=`docker images -f "dangling=true" -q`
if [ -n "$re" ];then
  docker rmi  -f `docker images -f "dangling=true" -q`
else
  echo ''
fi

#docker save -o  /var/lib/jenkins/workspace/nledu-web/dist/nledu-web:$version.tar imageserver:8082/nledu-web:$version
sed -i  '/xxxVersion/cexport version='$version  /var/lib/jenkins/workspace/nledu-web/lib/jenkins-deployment.sh