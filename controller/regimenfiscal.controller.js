

const RegimenFiscal = require('../model/catRegimenSAT.model')

const getRegimenFiscal = async (req, res) =>{

    const { regimenkey } = req.params

    try{

        const rfiscal = await RegimenFiscal.findOne( { $and: [ { c_RegimenFiscal: regimenkey } ] })

        if ( rfiscal.length === 0){
            return res.status(404).send({
                 status: 'Erro',
                 message: 'No se encontro el Regimen Fiscal solicitado'
            })
        }

        return res.status(200).send({
             status: 'Ok',
             message: 'Se han localizado el data solicitado',
             regimenfiscal: rfiscal
        })

    }catch(error){
        return res.status(500).send({
             status: 'Error',
             message: error.message
        })
    }



}

const getRegimenFiscalList = async (req, res)=>{
     const { ismoralperson} = req.params
     
     try{
         //Aquí se escribe el código
         
         const rfiscallist = await RegimenFiscal.find( { Moral: ismoralperson } )

         console.log(rfiscallist)

         if( !rfiscallist){
            return res.status(404).send({
                 status: 'Error',
                 message: 'No se encontraron los datos solicitados'
            })
         }

         return res.status(200).send({
             status: 'Ok',
             message: 'Se ha encontrado los datos solicitados',
             regimenfiscal: rfiscallist
         })
         
    }catch(error){
         console.log(error)
         res.status(500).send({
             stauts: 'Error',
             message: error.message
         })
     }
}

module.exports ={
    getRegimenFiscal,
    getRegimenFiscalList
}