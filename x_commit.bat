@echo off
git add .

set currentDate=%date%

set day=%currentDate:~0,2%
set month=%currentDate:~3,2%
set year=%currentDate:~-4%

git commit -m %day%/%month%/%year%

git push origin main

echo Modifications commitées et poussées vers GitHub avec succès!
