const { app, server } = require("../../../index");
const supertest = require("supertest");

const api = supertest(app);

afterAll(() => {
  //hook
  server.close();
});

describe("Prueba que devolvera un status 200 para indicar que las peticiones para que el controlador de paises responda correctamente", () => {
  test("Validar que retorne los valores completos y que no sea nulo", async () => {
    const paiseslist = await api.get("/api/catPaises/list");
    expect(paiseslist.statusCode).toBe(200);
    expect(paiseslist.body.message).toEqual(
      "Países encontrados"
    );
    expect(paiseslist.body.c_Pais).toBeDefined();
    expect(paiseslist.body.c_Pais).not.toBeNull();
    expect(paiseslist.body.c_Pais).not.toBe("");
    expect(paiseslist.body.Descripcion).toBeDefined();
    expect(paiseslist.body.Descripcion).not.toBeNull();
    expect(paiseslist.body.Descripcion).not.toBe("");
  }, 50000); // Aumenta el tiempo de espera a 50 segundos (50000 milisegundos)
});
