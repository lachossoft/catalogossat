const { app, server } = require("../../../index");
const supertest = require("supertest");

const api = supertest(app);

afterAll(() => {
  //hook
  server.close();
});

describe("Prueba que devolvera un status 200 para indicar que las peticiones para el controlador de la periocidad respondiera correctamente", () => {
  test("Validar los datos devueltos esten completos", async () => {
    const periodicidad = await api.get("/api/catPeriocidad/list");
    expect(periodicidad.statusCode).toBe(200);
    expect(periodicidad.body.message).toEqual(
      "Se han localizado las periocidades"
    );

    expect(periodicidad.body.periodicidadList).toBeDefined();
    expect(periodicidad.body.periodicidadList).not.toBeNull();
    expect(periodicidad.body.periodicidadList.length).toBeGreaterThan(0);
    periodicidad.body.periodicidadList.forEach((periodicidad) => {
      expect(periodicidad.c_Periodicidad).toBeDefined();
      expect(periodicidad.c_Periodicidad).not.toBeNull();
      expect(periodicidad.c_Periodicidad).not.toBe("");
      expect(periodicidad.Descripcion).toBeDefined();
      expect(periodicidad.Descripcion).not.toBeNull();
      expect(periodicidad.Descripcion).not.toBe("");
    });
  }, 50000);
});
