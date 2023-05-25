const { app, server } = require('../../../index');
const supertest = require('supertest');

const { dbConection } = require('../../../database/config')

const api = supertest(app)


afterAll(()=>{  //hook
  server.close()
})


describe('Prueba de conexión a la base de datos.', () => {

  test('Debe de establecer conexión con el servidor de base de datos.', () => {
    
    const Spy = jest.spyOn(console,'log')
    
    dbConection()

    expect(Spy).toHaveBeenCalledWith('Se establecio la conexión con la base de datos')

    Spy.mockRestore()

  })
  
})

