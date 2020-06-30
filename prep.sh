#! /bin/bash
yarn build
rm -rf unitcircle
rm unitcircle.zip
mv build unitcircle
zip -r unitcircle.zip unitcircle