const { app, server } = require("../../../index");
const supertest = require("supertest");

const api = supertest(app);

afterAll(() => {
    //hook
    server.close();
});

describe("Prueba que devolvera un status 200 para indicar que las peticiones para el controlador del tipo de comprobante respondiera correctamente", () => {
    test("Validar la respuesta de la ruta /api/catPeriocidad/list", async () => {
        const comprobanteslist = await api.get("/api/catTipoComprobante/list");
        expect(comprobanteslist.statusCode).toBe(200);
        expect(comprobanteslist.body.message).toEqual(
            "Se han localizado los tipos de comprobante"
        );

        expect(comprobanteslist.body.tipoComprobanteList).toBeDefined();
        expect(comprobanteslist.body.tipoComprobanteList).not.toBeNull();
        expect(comprobanteslist.body.tipoComprobanteList.length).toBeGreaterThan(0);
        comprobanteslist.body.tipoComprobanteList.forEach((comprobante) => {
            expect(comprobante.c_TipoDeComprobante).toBeDefined();
            expect(comprobante.c_TipoDeComprobante).not.toBeNull();
            expect(comprobante.c_TipoDeComprobante).not.toBe("");
            expect(comprobante.Descripcion).toBeDefined();
            expect(comprobante.Descripcion).not.toBeNull();
            expect(comprobante.Descripcion).not.toBe("");
        });
    }, 50000);
});
