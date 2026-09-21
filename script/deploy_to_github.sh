#!/usr/bin/env bash

date_suffix=$(date "+%Y%m%d_%H%M%S")

rm -rf dist
pnpm build
cd dist || exit
git init
git add .
git commit -m "deploy_${date_suffix}"
git remote add origin git@github.com:xmasuhai/mangosteen-fe-vue-1-publish.git
git push -f origin master:master
cd - || exit
echo "http://xmasuhai.github.io/mangosteen-fe-vue-1-publish/index.html"
