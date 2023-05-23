const { app, server } = require("../../../index");
const supertest = require("supertest");

const api = supertest(app);

afterAll(() => {
  //hook
  server.close();
});

describe("Prueba que devolvera un status 200 para indicar que las peticiones para el controlador de las formas de pago respondieron correctamente", () => {
  test("Validar que traiga los valores completos y que no sea nulo", async () => {
    const formapagolist = await api.get("/api/catMetodoPago/list");
    expect(formapagolist.statusCode).not.toBe(500);
    expect(formapagolist.statusCode).toBe(200);
    expect(formapagolist.body.message).toEqual(
      "Se han localizado las formas de pago"
    );
    expect(formapagolist.body.formaPagoList).toBeDefined();
    expect(formapagolist.body.formaPagoList).not.toBeNull();
    expect(formapagolist.body.formaPagoList.length).toBeGreaterThan(0);
    formapagolist.body.formaPagoList.forEach((dato) => {
      expect(dato.c_FormaPago).toBeDefined();
      expect(dato.c_FormaPago).not.toBeNull();
      expect(dato.c_FormaPago).not.toBe("");
      expect(dato.Descripcion).toBeDefined();
      expect(dato.Descripcion).not.toBeNull();
      expect(dato.Descripcion).not.toBe("");
    });
  }, 50000); // Aumenta el tiempo de espera a 50 segundos (50000 milisegundos)

  test("Validar que el codigo sea numero y cumpla con dos digitos", async () => {
    const response = await api.get("/api/catFormaPago/01A");
    expect(response.statusCode).toBe(500);
    expect(response.statusCode).not.toBe(200);
    expect(response.body.status).toEqual("Error");

    const messages = response.body.message;
    expect(messages.length).toBe(2);

    const expectedMessages = [
      "El campo c_formapago no cumple con la longitud válida",
      "El campo c_formapago debe ser un número",
    ];

    messages.forEach((message, index) => {
      expect(message.msg).toEqual(expectedMessages[index]);
    });
  });

  test("Validar que el codigo sea un numero", async () => {
    const response = await api.get("/api/catFormaPago/0A");
    expect(response.statusCode).toBe(500);
    expect(response.body.status).toEqual("Error");
  
    const message = response.body.message;
    expect(message.length).toBe(1);
    expect(message[0].msg).toEqual("El campo c_formapago debe ser un número");
  });
  
});
