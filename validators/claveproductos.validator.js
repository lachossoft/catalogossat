const { check } = require("express-validator");
const { validateResult } = require("../helpers/validator.helper");

const validateSearchClave = [
  check("searchClave")
    .exists()
    .notEmpty()
    .withMessage("El campo searchClave es requerido")
    .matches(/^[a-zA-Z0-9~\s]*[a-zA-Z0-9~][a-zA-Z0-9~\s]*$/)
    .withMessage("El campo searchClave no debe contener caracteres especiales")
    .custom((value) => {
      const trimmedValue = value.trim();
      if (trimmedValue === "") {
        throw new Error("El campo searchClave no debe contener solo espacios en blanco");
      }
      if (trimmedValue !== value) {
        throw new Error("El campo searchClave no debe contener espacios al inicio o al final");
      }
      return true;
    }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = {
  validateSearchClave,
};
