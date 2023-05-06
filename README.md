# Servidor para Catalgos SAT

## Introudcción

Este servidor permite obtener los datos de los catalgos fiscales que proporciona el SAT.

---

## Instrucciones

Para usar el repositorio es necesario usar el siguiente el siguientes comando:

    npm install

Una vez que se descarguen las dependencias se debera de crear y colocar las varibles de sistema en el archivo llamado .env

    Port = <<<numero del puerto>>>
    DB_CN = <<<cadena de conexión>>>

---

## EndPoints


### Regimen Fiscal

En este EndPoints se obtendra los datos del regimen fiscal

---

#### Obtener el regimen fiscal

Este EndPoint permite obtener un regimen fiscal por medio de su clave que se encuentra proporcionada en el catalogo del SAT.

    path: http://<<<Servidor:puerto>>>/api/catSAT_Regimen/get/<<<codigo del regimen fiscal>>>

    Ejemplo:
        http://localhost:3001/api/catSAT_Regimen/get/603

##

#### Obtener la lista de regimen fiscal

En este EndPoint se obtener la lista de regimen fiscal indicando con un valor booleano si es persona moral o fisica.

La lista que proporciona se clasifica por el tipo de persona fisica o moral.

    path: http://<<<Servidor:puerto>>>/api/catSAT_Regimen/list/<<<EsPersonaMoral:valor booleano>>>

    Ejemplo:
        http://localhost:3001/api/catSAT_Regimen/list/true

##