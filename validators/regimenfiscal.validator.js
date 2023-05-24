const { check } = require("express-validator");
const { validateResult } = require("../helpers/validator.helper");

const validateSearchKey = [
  check("regimenkey")
    .exists()
    .notEmpty()
    .withMessage("El campo regimenkey es requerido")
    .isLength({ min: 3, max: 3 })
    .withMessage("El campo regimenkey debe tener una longitud válida")
    .isNumeric()
    .withMessage("El campo regimenkey debe ser un valor numerico"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
const validateSearchMoral = [
  check("ismoralperson")
    .exists()
    .notEmpty()
    .withMessage("El campo ismoralperson es requerido")
    .isBoolean()
    .withMessage(
      "El campo ismoralperson debe ser un valor booleano (true o false)"
    ),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateSearchKey,
  validateSearchMoral,
};
