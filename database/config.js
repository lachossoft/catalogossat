const mongose = require('mongoose');

// funcion de conexión

const dbConection = async() =>{
    try{
        console.log(process.env.DB_CN)
        mongose.connect(process.env.DB_CN,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useUnifiedTopology: true,
            // useCreateIndex : true 
        });
        console.log("Se establecio la conexión con la base de datos");
    }catch (error) {
        console.log(error);
        throw new Error('Error al establecer conexión con la base de datos.');
    }
}

module.exports ={ 
    dbConection
}