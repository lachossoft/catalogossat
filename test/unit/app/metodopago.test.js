const { app, server } = require("../../../index");
const supertest = require("supertest");

const api = supertest(app);

afterAll(() => {
  //hook
  server.close();
});

describe("Prueba que devolvera un status 200 para indicar que las peticiones para el controlador de los metodos de pago respondieron correctamente", () => {
  test("Validar que retorne los valores completos y que no sea nulo", async () => {
    const metodopago = await api.get("/api/catMetodoPago/list");
    expect(metodopago.statusCode).toBe(200);
    expect(metodopago.body.message).toEqual(
      "Se han localizado los registros de método de pago"
    );
    expect(metodopago.body.metodoPagoList).toBeDefined();
    expect(metodopago.body.metodoPagoList).not.toBeNull();
    expect(metodopago.body.metodoPagoList.length).toBeGreaterThan(0);
    metodopago.body.metodoPagoList.forEach((dato) => {
      expect(dato.c_MetodoPago).toBeDefined();
      expect(dato.c_MetodoPago).not.toBeNull();
      expect(dato.c_MetodoPago).not.toBe("");
      expect(dato.Descripcion).toBeDefined();
      expect(dato.Descripcion).not.toBeNull();
      expect(dato.Descripcion).not.toBe("");
    });
  }, 50000); // Aumenta el tiempo de espera a 50 segundos (50000 milisegundos)
});
