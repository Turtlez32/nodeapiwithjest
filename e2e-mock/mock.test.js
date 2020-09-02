const app = require("../mock");
const supertest = require("supertest");
let request = supertest(app);
const fs = require("fs");

const apiAdminUrl = "/api/admin";
const apiCartUrl = "/api/cart";
const apiPaymentUrl = "/api/pay";
const apiAuthUrl = "/api/auth";
const apiUserUrl = "/api/user";

describe("Check user account type", () => {
  it("Check User is logged in", async done => {
    const user = JSON.parse(fs.readFileSync("./mock/U-ID0001.json"));

    const res = await request.get(`${apiUserUrl}/check`).send({
      user
    });

    expect(res.status).toEqual(200);
    done();
  });

  it("Check User has admin priveledges", async done => {
    const user = JSON.parse(fs.readFileSync("./mock/U-ID0002.json"));

    const res = await request.get(`${apiUserUrl}/admin`).send({
      user
    });

    expect(res.status).toEqual(200);
    done();
  });
});

describe("Login Test", () => {
  it("Login Pass", async done => {
    const user = JSON.parse(fs.readFileSync("./mock/login-pass.json"));
    const res = await request.post(`${apiAuthUrl}/login`).send({
      user
    });

    expect(res.status).toEqual(200);
    expect(res.body.message).toEqual("User Successfully Logged In");
    done();
  });

  it("Login Fail", async done => {
    const user = JSON.parse(fs.readFileSync("./mock/login-fail.json"));
    const res = await request.post(`${apiAuthUrl}/login`).send({
      user
    });

    expect(res.status).toEqual(200);
    expect(res.body.message).toEqual(
      "Unable to login due to incorrect details"
    );

    done();
  });
});
