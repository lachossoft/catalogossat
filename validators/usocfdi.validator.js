const { check } = require("express-validator");
const { validateResult } = require("../helpers/validator.helper");

const validateSearchUsoCFDI = [
  check("PersonaMoral")
    .exists()
    .notEmpty()
    .withMessage("El campo PersonaMoral es requerido")
    .isBoolean()
    .withMessage(
      "El campo PersonaMoral debe ser un valor booleano (true o false)"
    ),
  check("regimenFiscal")
    .exists()
    .notEmpty()
    .withMessage("El campo regimenFiscal es requerido")
    .isLength({ min: 3, max: 3 })
    .withMessage("El campo regimenFiscal debe tener una longitud válida")
    .isNumeric()
    .withMessage("El campo regimenFiscal debe ser un número"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateSearchUsoCFDI,
};
