const request = require("supertest");
const app = require("./app");

describe("API Empresas", () => {
  test("status code 200", done => {
    request(app)
      .get("/api/empresa")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  test("Success must be true", done => {
    request(app)
      .get("/api/empresa")
      .then(response => {
        expect(response.body.success).toBe(true)
        done();
      });
  });
  test("Data must be present in body", done => {
    request(app)
      .get("/api/empresa")
      .then(response => {
        const data = response.body.data
        if(!data) throw new Error("Data must be present")
        done();
      });
  });
});