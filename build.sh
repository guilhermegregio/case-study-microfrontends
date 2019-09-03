#!/bin/sh

set -e 

rm -rf ./build

mkdir -p ./build ./build/header ./build/inspection ./build/processing ./build/simulations

cp -R ./packages/my-loan/build/* ./build
#cp -R ./packages/header/build/* ./build/header 
cp -R ./packages/inspection/build/* ./build/inspection 
cp -R ./packages/processing/build/* ./build/processing 
cp -R ./packages/simulations/build/* ./build/simulations 

cp ./_redirects ./build/_redirects

echo "Finish"
