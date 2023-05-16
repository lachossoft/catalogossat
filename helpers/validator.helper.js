

const { validationResult } = require('express-validator')

const validateResult = ( req, res, next ) => {
    try{
        const error = validationResult(req).throw()
        return next()
    }catch( error ){
        console.log(error.message)
        return res.status(500).send({
             status: 'Error',
             message: error.array()
        })
    }
}

module.exports = {
    validateResult
}