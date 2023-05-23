const { check } = require("express-validator");
const { validateResult } = require("../helpers/validator.helper");

const validateSearchFormaPago = [
  check("c_formaPago")
    .exists()
    .notEmpty()
    .isLength({ min: 2, max: 2 })
    .withMessage("El campo c_formapago no cumple con la longitud válida")
    .isNumeric()
    .withMessage("El campo c_formapago debe ser un número"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateSearchFormaPago,
};
