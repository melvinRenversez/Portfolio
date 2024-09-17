@echo off
:: Récupérer la date actuelle dans une variable
set currentDate=%date%
set currentTime=%time%

:: Extraire le jour, le mois, l'année
set day=%currentDate:~0,2%
set month=%currentDate:~3,2%
set year=%currentDate:~-4%

:: Extraire l'heure, les minutes et les secondes
set hour=%currentTime:~0,2%
set minute=%currentTime:~3,2%
set second=%currentTime:~6,2%

:: Supprimer les espaces dans l'heure si nécessaire
if "%hour:~0,1%" == " " set hour=0%hour:~1,1%

:: Afficher le format jj/mm/aaaa hh:mm:ss
echo %day%/%month%/%year%::%hour%:%minute%:%second%
  
pause