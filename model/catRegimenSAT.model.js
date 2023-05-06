/*
    Modelo Regimen Fiscal
    
    Modelo para el regimen fiscal

 */

const { Schema, model } = require('mongoose')

const RegimenFiscalSchema = Schema({
    c_RegimenFiscal:{
        type: String,
        require: true,
        unique: true
    },
    Descripcion: {
        type: String,
        require: true,
        unique: false
    },
    Fisica: {
        type: Boolean,
        require: true,
        unique: false
    },
    Moral: {
        type: Boolean,
        require: true,
        unique: false
    },
    FechaInicioVigencia: {
        type: Date,
        require: true,
        unique: false
    },
    VersionCFDI: {
        type: String,
        require: true,
        unique: false
    }
},{
    collection: 'catRegimenSAT'
})

RegimenFiscalSchema.method('toJSON', function(){
    const {__V, _id, ...object } = this.toObject();

    object.id = _id;
    return object;
})

module.exports = model('RegimenFiscal', RegimenFiscalSchema)