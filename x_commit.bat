@echo off
REM Ajoute toutes les modifications au suivi
git add .

REM Effectue un commit avec un message
git commit -m "a"

REM Pousse les modifications vers le référentiel distant
git push origin main

REM Optionnel : affiche un message de confirmation
echo Modifications commitées et poussées vers GitHub avec succès!
