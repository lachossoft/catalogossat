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

#### Obtener un código postal

Este endpoint permite obtener un código postal por su valor y código de país.

Descripción del endpoint:
- Método: GET 
- Ruta: /api/codigopostal/:codigoPostal/:c_pais
- Controlador asociado: codigopostal.controller

        path: 
            http://<<<Servidor:puerto>>>/api/codigopostal/:codigoPostal/:c_pais

        Ejemplo:
            http://localhost:3001/api/codigoPostal/12345/US
##

#### Obtener todas las formas de pago
Obtener todas las formas de pago
Este endpoint permite obtener todas las formas de pago disponibles.

Descripción del endpoint:

- Método: GET

- Ruta: /api/catFormaPago/list

- Controlador asociado: formapago.controller

        path: 
            http://<<<Servidor:puerto>>>/api/catFormaPago/list

        Ejemplo:
            http://localhost:3001/api/catFormaPago/list
##

#### Buscar forma de pago por código
Buscar forma de pago por código de forma de pago
Este endpoint permite buscar una forma de pago por su código de forma de pago.

Descripción del endpoint:

- Método: GET

- Ruta: /api/catFormaPago/search/:c_formaPago

- Controlador asociado: formapago.controller

        path: 
            http://<<<Servidor:puerto>>>/api/catFormaPago/search/:c_formaPago

        Ejemplo:
            http://localhost:3001/api/catFormaPago/01

##

#### Obtener todos los métodos de pago
Este endpoint permite obtener todos los métodos de pago disponibles.

Descripción del endpoint:

- Método: GET

- Ruta: /api/catMetodoPago/list

- Controlador asociado: metodopago.controller

        path: 
            http://<<<Servidor:puerto>>>/api/catMetodoPago/list

        Ejemplo:
            http://localhost:3001/api/catMetodoPago/list
##
#### Obtener todas las periodicidades
Este endpoint permite obtener todas las periodicidades disponibles.

Descripción del endpoint:

- Método: GET

- Ruta: /api/catPeriocidad/list

- Controlador asociado: periocidad.controller

        path: 
            http://<<<Servidor:puerto>>>/api/catPeriocidad/list

        Ejemplo:
            http://localhost:3001/api/catPeriocidad/list
##
#### Obtener todos los tipos de comprobante
Este endpoint permite obtener todos los tipos de comprobante disponibles.

Descripción del endpoint:

- Método: GET

- Ruta: /api/catTipoComprobante/list

- Controlador asociado: tipocomprobante.controller

        path: 
            http://<<<Servidor:puerto>>>/api/catTipoComprobante/list

        Ejemplo:
            http://localhost:3001/api/catTipoComprobante/list
##
#### Obtener todos los CFDI por Persona Moral y Régimen Fiscal
Este endpoint permite obtener todos los CFDI disponibles para una Persona Moral y un Régimen Fiscal específicos.

Donde PersonaMoral es un valor boleano y regimenFiscal un valor numerico

Descripción del endpoint:

- Método: GET

- Ruta: /api/catUsoCFDI/list/:PersonaMoral/:regimenFiscal

- Controlador asociado: usocfdi.controller
 
        path: 
            http://<<<Servidor:puerto>>>/api/catUsoCFDI/list/:PersonaMoral/:regimenFiscal

        Ejemplo:
            http://localhost:3001/api/catUsoCFDI/list/true/601
##
