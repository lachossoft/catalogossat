const { check } = require("express-validator");
const { validateResult } = require("../helpers/validator.helper");

const validateSearchCodigoPostal = [
  check("codigoPostal")
    .exists()
    .notEmpty()
    .withMessage("El campo PersonaMoral es requerido"),
  check("c_pais")
    .exists()
    .notEmpty()
    .withMessage("El campo pais es requerido")
    .isLength({ min: 1, max: 3 })
    .withMessage("El campo pais debe tener una longitud válida"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateSearchCodigoPostal,
};
