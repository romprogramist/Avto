#!/bin/bash

# rename all <your_project_name> entries and put this file on server
  
sudo service avto stop
sudo unzip -o avto.zip -d /var/www/avto # your project folder on server
sudo rm avto.zip
sudo service avto start