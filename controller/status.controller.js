const status = (req, res) =>{
    try{
        return res.status(200).send({
             status: 'Ok',
             message: 'El Servidor esta en linea'
        })

    }catch(error){
        return res.status(500).send({
             status: 'Error',
             message: error.message
        })
    }
}

module.exports={
    status
}