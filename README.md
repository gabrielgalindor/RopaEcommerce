# Proyecto final - curso React JS Coder House
## Por: Ing. Gabriel Galindo - dic 2021

Este proyecto tiene la siguiente estructura:
- backend: Contiene archivos hechos en Flask que permiten hacer los servicios Backend de la API Restulf con la que se comunica el proyecto
- node_modules: los modulos de npm para que funcione el proyecto
- public: carpeta de los archivos estáticos del proyecto y allí encontrará las imagenes del mismo
- src: todos los archivos de JS que permiten la correcta ejecución de React Js

Para correr este proyecto se recomiendo correr por medio de un entorno virtual, en el entorno de linux lo puede activar así:

> source activate 

Para iniciar la aplicación:

> python3 app.py

De esta manera ya está corriendo los servicios del Backend del proyecto. Recuerde revisar muy bien la dirección que le desplega Flask, pues tendrá que colocar esa dirección en la ruta './src/constants/index.js' en la variable hostEndpoint.



Para arrancar el proyecto en React Js: 

> 
> npm start
> 

Asegurese de tener instalados los paquetes necesarios para que arranque el proyecto en su servidor.


## Tech

Este tutorial utiliza las siguientes tecnologías:

- [React JS] - Tecnología Frontend!
- [Flask] - Framework de Python
- [Flask_Restful] - Framework de respuestas API Resful
- [SQL Alchemy] - Kit de base de datos flexible para Python



   [React JS]: <https://es.reactjs.org/>
   [Flask]: <https://flask.palletsprojects.com/en/2.0.x/>
   [Flask_Restful]: <https://flask-restful.readthedocs.io/en/latest/>
   [SQL Alchemy]: <https://www.sqlalchemy.org/>
 