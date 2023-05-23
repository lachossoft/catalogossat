const { app, server } = require('../../../index');
const supertest = require('supertest');

const api = supertest(app)


afterAll(() => {  //hook
  server.close()
})

describe('Prueba que devolvera un status 200 para indicar que las peticiones para el controlador del codigo postal respondieron correctamente', () => {

  test('Validar que el pais coincida con el codigo postal', async () => {
    const CPcountrytocp = await api.get('/api/codigoPostal/20002/ALA');
    expect(CPcountrytocp.statusCode).not.toBe(200);
    expect(CPcountrytocp.statusCode).toBe(404);
    expect(CPcountrytocp.body.message).toEqual('El país no pertenece a este codigo postal');
  });
  test('Validar que el pais exista', async () => {
    const CPbadcountry = await api.get('/api/codigoPostal/20002/CAC');
    expect(CPbadcountry.statusCode).not.toBe(200);
    expect(CPbadcountry.statusCode).toBe(404);
    expect(CPbadcountry.body.message).toEqual('El país no existe');
  });
  test('Validar que el CP exista', async () => {
    const CPbadcp = await api.get('/api/codigoPostal/211112/CAC');
    expect(CPbadcp.statusCode).not.toBe(200);
    expect(CPbadcp.statusCode).toBe(404);
    expect(CPbadcp.body.message).toEqual('No se encontró el código postal solicitado');
  });
  test('Validar que el campo tenga logitud valida', async () => {
    const CPcountryincomplete = await api.get('/api/codigoPostal/20002/ALAa');
    expect(CPcountryincomplete.statusCode).not.toBe(200);
    expect(CPcountryincomplete.statusCode).toBe(500);
    expect(CPcountryincomplete.body.message[0].msg).toEqual('El campo pais debe tener una longitud válida');
  });

  test('Validar que el codigo postal sin municipio y localidad no regrese sus valores vacios', async () => {
    const CPcountrynoMLA = await api.get('/api/codigoPostal/20002/MEX');
    expect(CPcountrynoMLA.statusCode).not.toBe(404);
    expect(CPcountrynoMLA.statusCode).toBe(200);
    expect(CPcountrynoMLA.body.message).toEqual('Código postal encontrado');
    expect(CPcountrynoMLA.body.data.Municipio).toBeUndefined();
    expect(CPcountrynoMLA.body.data.Localidad).toBeUndefined();
    expect(CPcountrynoMLA.body.data.allcolonias).toBeUndefined();
  });

  test('Validar que el codigo postal con municipio y localidad regrese sus valores', async () => {
    const CPcountrywithMLA = await api.get('/api/codigoPostal/77500/MEX');
    expect(CPcountrywithMLA.statusCode).not.toBe(404);
    expect(CPcountrywithMLA.statusCode).toBe(200);
    expect(CPcountrywithMLA.body.message).toEqual('Código postal encontrado');
    expect(CPcountrywithMLA.body.data.Municipio).toBeDefined();
    expect(CPcountrywithMLA.body.data.Municipio).not.toBeNull();
    expect(CPcountrywithMLA.body.data.Localidad).toBeDefined();
    expect(CPcountrywithMLA.body.data.Localidad).not.toBeNull();
    expect(CPcountrywithMLA.body.data.allcolonias).toBeDefined();
    expect(CPcountrywithMLA.body.data.allcolonias).not.toBeNull();
  });

})

