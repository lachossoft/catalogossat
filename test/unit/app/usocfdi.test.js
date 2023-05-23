const { app, server } = require('../../../index');
const supertest = require('supertest');

const api = supertest(app)


afterAll(() => {  //hook
    server.close()
})

describe('Prueba que devolvera un status 200 para indicar que las peticiones para el controlador del cfdi respondieron correctamente', () => {

    test('Validar que el valor de la persona sea booleano ', async () => {
        const ispersonbool = await api.get('/api/catUsoCFDI/list/hola/610');
        expect(ispersonbool.statusCode).not.toBe(200);
        expect(ispersonbool.statusCode).toBe(500);
        expect(ispersonbool.body.message[0].msg).toEqual('El campo PersonaMoral debe ser un valor booleano (true o false)');
    });
    test('Validar que el regimen sea numero y su longitud sea 3', async () => {
        const Isnumhaslength = await api.get('/api/catUsoCFDI/list/true/2f');
        expect(Isnumhaslength.statusCode).not.toBe(200);
        expect(Isnumhaslength.statusCode).toBe(500);
        expect(Isnumhaslength.body.message[0].msg).toEqual('El campo regimenFiscal debe tener una longitud válida');
        expect(Isnumhaslength.body.message[1].msg).toEqual('El campo regimenFiscal debe ser un número');
    });

    test('Validar que su longitud sea 3', async () => {
        const haslength = await api.get('/api/catUsoCFDI/list/true/2111');
        expect(haslength.statusCode).not.toBe(200);
        expect(haslength.statusCode).toBe(500);
        expect(haslength.body.message[0].msg).toEqual('El campo regimenFiscal debe tener una longitud válida');
    });
    test('Validar que el regimen exista', async () => {
        const regimenexist = await api.get('/api/catUsoCFDI/list/true/211');
        expect(regimenexist.statusCode).not.toBe(200);
        expect(regimenexist.statusCode).toBe(404);
        expect(regimenexist.body.message).toEqual('El regimen fiscal no existe');
    });
    test('Validar que el regimen concuerde con el tipo de persona', async () => {
        const regimentoperson = await api.get('/api/catUsoCFDI/list/false/610');
        expect(regimentoperson.statusCode).not.toBe(200);
        expect(regimentoperson.statusCode).toBe(404);
        expect(regimentoperson.body.message).toEqual('Este regimen no aplica para la persona especificada');
    });

    test('Validar que el codigo postal con municipio y localidad regrese sus valores', async () => {
        const cfdifound = await api.get('/api/catUsoCFDI/list/false/610');
        expect(cfdifound.statusCode).not.toBe(404);
        expect(cfdifound.statusCode).toBe(200);
        expect(cfdifound.body.message).toEqual('Código postal encontrado');
        expect(cfdifound.body.data).toBeDefined();
        expect(cfdifound.body.data).not.toBeNull();
        expect(cfdifound.body.data.length).toBeGreaterThan(0);
        cfdifound.body.data.forEach((dato) => {
            expect(dato.c_UsoCFDI).toBeDefined();
            expect(dato.c_UsoCFDI).not.toBeNull();
            expect(dato.c_UsoCFDI).not.toBe('');
            expect(dato.Descripcion).toBeDefined();
            expect(dato.Descripcion).not.toBeNull();
            expect(dato.Descripcion).not.toBe('');
          });
      });

})

