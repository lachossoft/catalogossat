const { app, server } = require('../../../index');
const supertest = require('supertest');

const { dbConection } = require('../../../database/config')

const api = supertest(app)


afterAll(()=>{  //hook
  server.close()
})

describe('Prueba que devolvera un status 200 para indicar que el servidor este en linea', () => {
  test('Debe devolver status 200 ', async () => {
     const response = await api.get('/')

    expect(response.statusCode).toBe(200)
  })
  
  test('Validar que funcione la paginación en BusinessEntity', async () =>{
    const pag1 = await api.get('/api/businessentity/getlist/1')
    const pag2 = await api.get('/api/businessentity/getlist/2')
    const pag3 = await api.get('/api/businessentity/getlist/3')

    expect(pag1.statusCode).toBe(200)
    expect(pag2.statusCode).toBe(200)
    expect(pag3.statusCode).not.toBe(200)
    expect(pag3.statusCode).toBe(404)
  } )
})

describe('Prueba de conexión a la base de datos.', () => {

  test('Debe de establecer conexión con el servidor de base de datos.', () => {
    
    const Spy = jest.spyOn(console,'log')
    
    dbConection()

    expect(Spy).toHaveBeenCalledWith('Se establecio la conexión con la base de datos')

    Spy.mockRestore()

  })
  
})

