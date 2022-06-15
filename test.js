const server = require("./index.js");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);
describe("User Endpoints", () => {
  it("GET /user should show all users", async () => {
    const res = await requestWithSupertest.get("/user/all");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("users");
  });
  it("POST /login should login user", async () => {
    const res = await requestWithSupertest
      .post("/user/login")
      .send({ matricule: "73", password: "01161590" });
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("result");
  });
});
describe("Audit Endpoints", () => {
  it("GET /taks should show all audit", async () => {
    const res = await requestWithSupertest.get("/tasks");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("result");
  });
  it("GET /task/details should pull audit details", async () => {
    const res = await requestWithSupertest.get("/tasks/details/1");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("result");
  });
});
describe("Audit Endpoints", () => {
  it("GET /taks should show all audit", async () => {
    const res = await requestWithSupertest.get("/tasks");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("result");
  });
  it("GET /objectif should pull all objectif", async () => {
    const res = await requestWithSupertest.get("/objectif");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toHaveProperty("result");
  });
});
