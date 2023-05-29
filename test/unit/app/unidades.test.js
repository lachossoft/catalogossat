const { app, server } = require("../../../index");
const supertest = require("supertest");
const Unidad = require("../../../model/catUnidades.model");
const api = supertest(app);

afterAll(() => {
  // hook
  server.close();
});

describe("Pruebas para el controlador de unidades", () => {
  describe("Obtener todas las unidades", () => {
    test("Debería devolver un status 200 y todas las unidades", async () => {
      const response = await api.get("/api/catUnidades/list");
      expect(response.statusCode).toBe(200);
      expect(response.body.status).toEqual("Ok");
      expect(response.body.message).toEqual("Unidades encontradas");
      expect(response.body.data).toBeDefined();
      expect(response.body.data.length).toBeGreaterThan(0);
    });

    test("Debería devolver un status 500 si hay un error al obtener las unidades", async () => {
      // Simular un error al obtener las unidades
      jest.spyOn(Unidad, "find").mockRejectedValue(new Error("Error al obtener las unidades"));

      const response = await api.get("/api/catUnidades/list");
      expect(response.statusCode).toBe(500);
      expect(response.body.status).toEqual("Error");
      expect(response.body.message).toEqual("Error al obtener las unidades");
      expect(response.body.error).toBeDefined();
    });
  });

  describe("Obtener unidades por clave de unidad", () => {
    test("Debería devolver un status 200 y la unidad solicitada", async () => {
    
      const response = await api.get("/api/catUnidades/18");
      expect(response.statusCode).toBe(200);
      expect(response.body.status).toEqual("Ok");
      expect(response.body.message).toEqual("Unidad encontrada");
      expect(response.body.data).toBeDefined();
      expect(response.body.data).not.toBeNull();
    });

    test("Debería devolver un status 404 si no se encuentra la unidad solicitada", async () => {

      const response = await api.get("/api/catUnidades/97899");
      expect(response.statusCode).toBe(404);
      expect(response.body.status).toEqual("Error");
      expect(response.body.message).toEqual("No se encontró la unidad solicitada");
    });

    test("Debería devolver un status 500 si hay un error al obtener la unidad", async () => {
      // Simular un error al obtener la unidad
      jest.spyOn(Unidad, "findOne").mockRejectedValue(new Error("Error al obtener la unidad"));

      const response = await api.get("/api/catUnidades/clave-unidad");
      expect(response.statusCode).toBe(500);
      expect(response.body.status).toEqual("Error");
      expect(response.body.message).toEqual("Error al obtener la unidad");
      expect(response.body.error).toBeDefined();
    });
  });
});
