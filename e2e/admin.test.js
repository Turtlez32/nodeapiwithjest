const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

describe("Test Admin Album Routing", () => {
  it("check get errors", async done => {
    const res = await await request.get("/api/admin/album").send({});
    expect(res.status).toEqual(404);
    done();
  });

  it("check post errors", async done => {
    const res = await request.post("/api/admin/album").send({});
    expect(res.status).toEqual(404);
    done();
  });

  it("check put errors", async done => {
    const res = await request.put("/api/admin/album").send({});
    expect(res.status).toEqual(404);
    done();
  });
});
