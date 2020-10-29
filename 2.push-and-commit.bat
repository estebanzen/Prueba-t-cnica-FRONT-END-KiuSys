@echo off

REM git fetch
REM git pull

@echo off
git add .

cls
set /p Input1=Ingrese el titulo del commit:
cls
set /p Input2=Ingrese la descripcion del commit:
cls
git commit -m "%Input1%" -m "%Input2%"
git push

pause 
exit