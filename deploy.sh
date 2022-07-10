#!/usr/bin/env sh

set -e

npm run build

cd dist

git init 
git add -A
git commit -m  'Novo deploy'
git push -f git@github.com:PedroAraripe/sites-down-watcher.git master:gh-pages

cd -
