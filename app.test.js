const request = require("supertest");
const app = require("./app");

describe("API Empresas Get All Empresas By User Id", () => {
  const path = "/api/empresa"
  test("status code 200", done => {
    request(app).get(path)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  test("Success must be true", done => {
    request(app).get(path)
      .then(response => {
        expect(response.body.success).toBe(true)
        done();
      });
  });
  test("Data must be present in body", done => {
    request(app).get(path)
      .then(response => {
        expect(response.body.data).not.toBe(null)
        done();
      });
  });
});

describe("API Empresas Get One Empresa by User Id", () => {
  const empresa = 1
  const path = `/api/empresa/${empresa}`
  test("Status Code must be 200", done => {
    request(app).get(path)
    .then(response => {
      expect(response.statusCode).toBe(200)
      done();
    })
  })
  test("Data must be present in response", done => {
    request(app).get(path)
    .then(response => {
      expect(response.body.data).not.toBe(null)
      done();
    })
  })
  test("Data must be present in empty response", done => {
    request(app).get("/api/empresa/7d")
    .then(response => {
      expect(response.body.data).not.toBe(null)
      done();
    })
  })
})