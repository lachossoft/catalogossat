const { check } = require("express-validator");
const { validateResult } = require("../helpers/validator.helper");

const validateSearchClave = [
    check("searchClave")
      .exists()
      .notEmpty()
      .withMessage("El campo searchClave es requerido")
      .matches(/^[a-zA-Z0-9\s\u00C0-\u00FF~]+$/)
      .withMessage("El campo searchClave no debe contener caracteres especiales, excepto '~'"),
    
    (req, res, next) => {
      validateResult(req, res, next);
    },
  ];

module.exports = {
    validateSearchClave,
};
