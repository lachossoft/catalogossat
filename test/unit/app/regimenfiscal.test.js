const { app, server } = require("../../../index");
const supertest = require("supertest");

const api = supertest(app);

afterAll(() => {
  //hook
  server.close();
});

describe("Prueba que devolvera un status 200 para indicar que las peticiones para el controlador del codigo postal respondieron correctamente", () => {
  test("Validar que devuelva los valores completos", async () => {
    const getRegimenFiscal = await api.get("/api/catSAT_Regimen/get/603");
    expect(getRegimenFiscal.statusCode).not.toBe(404);
    expect(getRegimenFiscal.statusCode).toBe(200);
    expect(getRegimenFiscal.body.message).toEqual(
      "Se han localizado el data solicitado"
    );
    expect(getRegimenFiscal.body.regimenfiscal).toBeDefined();
    expect(getRegimenFiscal.body.regimenfiscal).not.toBeNull();
    expect(getRegimenFiscal.body.regimenfiscal.c_RegimenFiscal).not.toBeNull();
    expect(getRegimenFiscal.body.regimenfiscal.c_RegimenFiscal).toBeDefined();
    expect(getRegimenFiscal.body.regimenfiscal.c_RegimenFiscal).not.toBe("");

    expect(getRegimenFiscal.body.regimenfiscal.Descripcion).not.toBeNull();
    expect(getRegimenFiscal.body.regimenfiscal.Descripcion).toBeDefined();
    expect(getRegimenFiscal.body.regimenfiscal.Descripcion).not.toBe("");

    expect(getRegimenFiscal.body.regimenfiscal.Fisica).toBeBoolean();
    expect(getRegimenFiscal.body.regimenfiscal.Moral).toBeBoolean();
    expect(getRegimenFiscal.body.regimenfiscal.VersionCFDI).not.toBeNull();
    expect(getRegimenFiscal.body.regimenfiscal.VersionCFDI).toBeDefined();
    expect(getRegimenFiscal.body.regimenfiscal.VersionCFDI).not.toBe("");

    expect(
      getRegimenFiscal.body.regimenfiscal.FechaInicioVigencia
    ).not.toBeNull();
    expect(
      getRegimenFiscal.body.regimenfiscal.FechaInicioVigencia
    ).toBeDefined();
    expect(getRegimenFiscal.body.regimenfiscal.FechaInicioVigencia).not.toBe(
      ""
    );
  }, 50000);

  test("Validar que el codigo del regimen sea numerico y sea de 3 numeros", async () => {
    const getRegimenFiscal = await api.get("/api/catSAT_Regimen/get/6A");
    expect(getRegimenFiscal.statusCode).not.toBe(200);
    expect(getRegimenFiscal.statusCode).toBe(500);
    expect(getRegimenFiscal.body.message[0].msg).toEqual(
      "El campo regimenkey debe tener una longitud válida"
    );
    expect(getRegimenFiscal.body.message[1].msg).toEqual(
      "El campo regimenkey debe ser un valor numerico"
    );
  }, 50000);

  test("Validar que el valor ismoralperson sea booleano", async () => {
    const listRegimenFiscal = await api.get("/api/catSAT_Regimen/list/01");
    expect(listRegimenFiscal.statusCode).not.toBe(200);
    expect(listRegimenFiscal.statusCode).toBe(500);
    expect(listRegimenFiscal.body.message[0].msg).toEqual(
      "El campo ismoralperson debe ser un valor booleano (true o false)"
    );
  }, 50000);

  test("Validar que devuelva los valores completos", async () => {
    const listRegimenFiscal = await api.get("/api/catSAT_Regimen/list/true");
    expect(listRegimenFiscal.statusCode).not.toBe(404);
    expect(listRegimenFiscal.statusCode).toBe(200);
    expect(listRegimenFiscal.body.message).toEqual(
      "Se ha encontrado los datos solicitados"
    );
    expect(listRegimenFiscal.body.regimenfiscal).toBeDefined();
    expect(listRegimenFiscal.body.regimenfiscal).not.toBeNull();
    expect(listRegimenFiscal.body.regimenfiscal.length).toBeGreaterThan(0);
    listRegimenFiscal.body.regimenfiscal.forEach((dato) => {
      expect(dato.c_RegimenFiscal).toBeDefined();
      expect(dato.c_RegimenFiscal).not.toBeNull();
      expect(dato.c_RegimenFiscal).not.toBe("");

      expect(dato.Descripcion).not.toBeNull();
      expect(dato.Descripcion).toBeDefined();
      expect(dato.Descripcion).not.toBe("");

      expect(dato.Fisica).toBeBoolean();
      expect(dato.Moral).toBeBoolean();
      expect(dato.VersionCFDI).not.toBeNull();
      expect(dato.VersionCFDI).toBeDefined();
      expect(dato.VersionCFDI).not.toBe("");

      expect(dato.FechaInicioVigencia).not.toBeNull();
      expect(dato.FechaInicioVigencia).toBeDefined();
      expect(dato.FechaInicioVigencia).not.toBe("");
    });
  }, 50000);
});
