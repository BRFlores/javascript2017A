# Comandos docker
## docker ps
Este comando listaba los contenedores que estan corriendo
```
>> docker ps
```
##docker ps -a
Este comando listaba **TODOS** los contenedores que estan **instalados**
```
>> docker ps -a
```
## docker stop 'id' o 'nombre'
Este comando **detiene** los o el conteneedor que este **corriendo**
```
>> docker stop 12mM322 micontenedor
>> docker stop 12
>> docker stop m
>> docker stop 12 mi
```
## docker start 'id' o 'nombre'
Este comando **levanta** los o el conteneedor que este **detenido**
   ```
>> docker start 12mM322 micontenedor
 >> docker start 12
 >> docker start m
 >> docker start 12 mi
```
## docker rm 'id' o 'nombre'
Este comando **elimina** los o el conteneedor que este **detenidos**
   ```
>> docker rm 12mM322 micontenedor
 >> docker rm 12
 >> docker rm m
 >> docker rm 12 mi
```
* No se puede **borrar** los contenedores que esten corriendo
## Mysql
Para utilizar docker con mysql vamos a utilizar el siguiente comando:
```
>> docker run --name harold -e
MYSQL_ROOT_PASSWORD=123456 -e
MYSQL_DATABASE=harold -e MYSQL_USER=harold -e
MYSQL_PASSWORD=123456 -p 3306:3306 -d mysql
```
