#!/bin/bash
xxxVersion
export app_name=nledu-web

kubectl delete -f deployment-$app_name.yaml
sleep 60
sed -i  '/image:/c\ \ \ \ \ \ \ \ image:\ imageserver:8082/'$app_name:$version deployment-$app_name.yaml
kubectl create -f deployment-$app_name.yaml

dmin=`kubectl get svc | grep 28098  | awk -F ' ' '{ print $1 }'`
if [ $dmin ]
then
  echo "svc 已存在无需重启!"
else
  kubectl create -f svc-$app_name.yaml
fi

