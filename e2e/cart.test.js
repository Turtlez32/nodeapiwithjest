const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const apiUrl = "/api/cart";

describe("Cart routes", () => {
  it("display cart", async done => {
    const res = await request.get(`${apiUrl}/`).send({});
    expect(res.status).toEqual(200);
    done();
  });

  it("add to cart", async done => {
    const res = await request.post(`${apiUrl}/add`).send({
      id: "ID00010",
      name: "Stuff",
      description: "A whole load of stuff",
      price: 40
    });

    expect(res.status).toEqual(200);
    done();
  });
});
