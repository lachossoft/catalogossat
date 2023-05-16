const ThereIs = async ( data, model, filter ) =>{

    try{

        if( model.schema.paths.hasOwnProperty( filter ) ){

            const modelfilter = {}

            modelfilter[filter] = data

            let findData = await model.findOne( { ...modelfilter } ).exec()

            console.log(findData)
        
            if( !findData ){
                console.log('variable no definida')
                return false
        
            }

            return true
        
        }else{
            return true
        }
        
    }catch(error){
        console.log(error.message)
        return true
    }

}

module.exports = {
    ThereIs
}