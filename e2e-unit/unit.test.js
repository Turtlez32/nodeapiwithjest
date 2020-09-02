const app = require("../server");
const supertest = require("supertest");
let request = supertest(app);
const apiAdminUrl = "/api/admin";
const apiCartUrl = "/api/cart";
const apiPaymentUrl = "/api/pay";
const apiAuthUrl = "/api/auth";
const apiUserUrl = "/api/user";
describe("Test Admin Album Routing", () => {
  it("check get passess", async done => {
    const res = await request.get(`${apiAdminUrl}/album`).send({});
    expect(res.status).toEqual(200);
    done();
  });

  it("check post errors", async done => {
    const res = await request.post(`${apiAdminUrl}/album`).send({});
    expect(res.status).toEqual(404);
    done();
  });

  it("check put errors", async done => {
    const res = await request.put(`${apiAdminUrl}/album`).send({});
    expect(res.status).toEqual(404);
    done();
  });
});

describe("Test Admin Image Routing", () => {
  it("check image id passes", async done => {
    const id = "fsdfsdgsdg";
    const res = await request.get(`${apiAdminUrl}/image/${id}`).send({});
    expect(res.status).toEqual(200);
    expect(res.body.data.id).toEqual(id);
    done();
  });

  it("check image store works", async done => {
    const image = {
      id: "ID00101",
      albumid: "ID00505",
      imagepath: "D:/Image/Image.png"
    };

    const res = await request.post(`${apiAdminUrl}/image/`).send({
      image
    });

    expect(res.status).toEqual(201);
    expect(res.body.data.image.id).toEqual(image.id);
    done();
  });

  it("check image update works", async done => {
    const image = {
      id: "id0098",
      albumid: "ID00505",
      imagepath: "D:/Image/image.png"
    };
    const id = "id0098";
    const res = await request.put(`${apiAdminUrl}/image/${id}`).send({ image });
    expect(res.status).toEqual(200);
    done();
  });
});

describe("Test Admin Category Routing", () => {
  it("check get passess", async done => {
    const res = await request.get(`${apiAdminUrl}/category/`).send({});
    expect(res.status).toEqual(200);
    done();
  });

  it("check post passess", async done => {
    const category = {
      id: "ID060606",
      name: "Rugby Photos",
      description: "Local Rugby photos"
    };
    const res = await request.post(`${apiAdminUrl}/category/`).send({
      category
    });

    expect(res.status).toEqual(201);
    expect(res.body.data.category.id).toEqual(category.id);
    done();
  });

  it("check put passess", async done => {
    const category = {
      id: "ID07776",
      name: "Rugby Photos",
      description: "Update Text"
    };
    const id = category.id;
    const res = await request
      .put(`${apiAdminUrl}/category/${id}`)
      .send({ category });
    expect(res.status).toEqual(200);
    done();
  });
});

describe("Cart Routes", () => {
  it("display cart", async done => {
    const res = await request.get(`${apiCartUrl}/`).send({});
    expect(res.status).toEqual(200);
    done();
  });

  it("add to cart", async done => {
    const res = await request.post(`${apiCartUrl}/add`).send({
      id: "ID00010",
      name: "Stuff",
      description: "A whole load of stuff",
      price: 40
    });

    expect(res.status).toEqual(200);
    done();
  });
});

describe("Payment Routes", () => {
  it("Test Payment route", async done => {
    const res = await request.get(`${apiPaymentUrl}/`);
    expect(res.status).toEqual(200);
    done();
  });

  it("Test post new payment succeeds", async done => {
    const payment = {
      id: "ID00055",
      user: "US0091",
      total: 100
    };
    const res = await request.post(`${apiPaymentUrl}/ID00055`).send({
      payment
    });

    expect(res.status).toEqual(200);
    done();
  });

  it("Test post new payment fails", async done => {
    const res = await request.post(`${apiPaymentUrl}/ID00055`).send({});

    expect(res.status).toEqual(500);
    done();
  });
});

describe("Auth Routes", () => {
  it("Login Succcess", async done => {
    const res = await request.post(`${apiAuthUrl}/login`).send({
      username: "zyther44",
      password: "PAssword"
    });

    expect(res.status).toEqual(200);
    done();
  });

  it("Login Failed", async done => {
    const res = await request.post(`${apiAuthUrl}/login`).send({
      username: "X_X_X",
      password: "PAssword"
    });

    expect(res.status).toEqual(200);

    done();
  });

  it("Singup Succeeded", async done => {
    const res = await request.post(`${apiAuthUrl}/signup`).send({
      username: "zyther44",
      password: "Password"
    });

    expect(res.status).toEqual(200);

    done();
  });

  it("Singup Fails", async done => {
    const res = await request.post(`${apiAuthUrl}/signup`).send({});

    expect(res.status).toEqual(500);
    done();
  });
});

describe("User Routes", () => {
  it("Check if user is logged in", async done => {
    const res = await request.get(`${apiUserUrl}/check`).send({
      username: "zyther44",
      id: "ID00434"
    });

    expect(res.status).toEqual(200);

    done();
  });

  it("Check if user is admin", async done => {
    const res = await request.get(`${apiUserUrl}/admin`).send({
      username: "zyther44",
      id: "ID00043"
    });

    expect(res.status).toEqual(200);
    done();
  });
});
