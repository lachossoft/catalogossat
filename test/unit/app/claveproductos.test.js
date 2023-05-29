const { app, server } = require("../../../index");
const supertest = require("supertest");

const api = supertest(app);

afterAll(() => {
  // hook
  server.close();
});

describe("Pruebas para el controlador y validador de las claves de productos", () => {
  describe("Controlador: getClavesProductos", () => {
    test("Debería devolver un status 200 y las claves de productos", async () => {
      const response = await api.post("/api/clavesProductos")
        .send({ searchClave: "perro" });
      expect(response.statusCode).toBe(200);
      expect(response.body.status).toEqual("Ok");
      expect(response.body.message).toEqual("Se encontraron claves de productos");
      expect(response.body.clavesProductos).toBeDefined();
      expect(response.body.clavesProductos.length).toBeGreaterThan(0);
    });

    test("Debería devolver un status 404 si no se encuentran claves de productos", async () => {
      const response = await api.post("/api/clavesProductos")
        .send({ searchClave: "noexiste" });
      expect(response.statusCode).toBe(404);
      expect(response.body.status).toEqual("Error");
      expect(response.body.message).toEqual("No se encontraron claves de productos");
    });

    test("Debería devolver un status 404 si no se proporciona una búsqueda válida", async () => {
      const response = await api.post("/api/clavesProductos")
        .send({ searchClave: "" });
      expect(response.statusCode).toBe(404);
      expect(response.body.status).toEqual("Error");
      expect(response.body.message).toEqual("No se encontraron claves de productos");
    });
  });

  describe("Validador: validateSearchClave", () => {
    test("Debería retornar un error si no se proporciona el campo searchClave", async () => {
      const response = await api.post("/api/clavesProductos")
        .send({});
      expect(response.statusCode).toBe(500);
      expect(response.body.message.length).toBe(1);
      expect(response.body.message[0].msg).toEqual("El campo searchClave es requerido");
    });

    test("Debería retornar un error si el campo searchClave contiene caracteres especiales", async () => {
      const response = await api.post("/api/clavesProductos")
        .send({ searchClave: "clave#" });
      expect(response.statusCode).toBe(500);
      expect(response.body.message.length).toBe(1);
      expect(response.body.message[0].msg).toEqual("El campo searchClave no debe contener caracteres especiales");
    });

    test("Debería retornar un error si el campo searchClave contiene solo espacios en blanco", async () => {
      const response = await api.post("/api/clavesProductos")
        .send({ searchClave: "    " });
      expect(response.statusCode).toBe(500);
      expect(response.body.message.length).toBe(1);
      expect(response.body.message[1].msg).toEqual("El campo searchClave no debe contener solo espacios en blanco");
    });

    test("Debería retornar un error si el campo searchClave contiene espacios al inicio o al final", async () => {
      const response = await api.post("/api/clavesProductos")
        .send({ searchClave: " clave " });
      expect(response.statusCode).toBe(500);
      expect(response.body.message.length).toBe(1);
      expect(response.body.message[0].msg).toEqual("El campo searchClave no debe contener espacios al inicio o al final");
    });
  });
});
