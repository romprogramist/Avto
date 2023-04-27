#!/bin/bash

cd /Users/zolotoy/Documents/Avto/Avto/bin/Release/net7.0/publish || exit
zip -r avto.zip ./
scp avto.zip roman@95.163.236.186:~
rm avto.zip