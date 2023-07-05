require("dotenv").config();

const express = require("express");

const cors = require("cors");

const { dbConection } = require("./database/config");

const app = express();
app.use(cors());
app.use(express.json());

//zona de rutas

//estatus
app.use("/", require("./routes/status.routes"));

//regimen fiscal
app.use("/api/catSAT_Regimen", require("./routes/regimenfiscal.routes"));

//metodo de pago
app.use("/api/catMetodoPago", require("./routes/metodopago.routes"));

//tipo de comprobante
app.use("/api/catTipoComprobante", require("./routes/tipocomprobante.routes"));

//forma de pago
app.use("/api/catFormaPago", require("./routes/formapago.routes"));

//Periocidad
app.use("/api/catPeriocidad", require("./routes/periocidad.routes"));

//usoCFDI
app.use("/api/catUsoCFDI", require("./routes/usocfdi.routes"));

//codigoPostal
app.use("/api/catCodigoPostal", require("./routes/codigopostal.routes"));

//paises
app.use("/api/catPaises", require("./routes/pais.routes"));

//claves
app.use("/api/catClaves", require("./routes/claveproductos.routes"));

//unidades
app.use("/api/catUnidades", require("./routes/unidades.routes"));

dbConection();

const server = app.listen(process.env.PORT || "3001", () =>
  console.log(`Servidor en linea por el puerto ${process.env.PORT}`)
);

module.exports = { app, server };
