cd C:/Users/roman/RiderProjects/Avto/Avto/bin/Release/net7.0/publish
Compress-Archive -Path ./* -DestinationPath ./avto.zip
scp avto.zip roman@95.163.236.186:~
rm avto.zip