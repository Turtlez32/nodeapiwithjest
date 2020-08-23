const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const apiUrl = "/api/admin";

describe("Test Admin Album Routing", () => {
  it("check get passess", async done => {
    const res = await request.get(`${apiUrl}/album`).send({});
    expect(res.status).toEqual(200);
    done();
  });

  it("check post errors", async done => {
    const res = await request.post(`${apiUrl}/album`).send({});
    expect(res.status).toEqual(404);
    done();
  });

  it("check put errors", async done => {
    const res = await request.put(`${apiUrl}/album`).send({});
    expect(res.status).toEqual(404);
    done();
  });
});

describe("Test Admin Image Routing", () => {
  it("check image id passes", async done => {
    const id = "fsdfsdgsdg";
    const res = await request.get(`${apiUrl}/image/${id}`).send({});
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

    const res = await request.post(`${apiUrl}/image/`).send({
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
    const res = await request.put(`${apiUrl}/image/${id}`).send({ image });
    expect(res.status).toEqual(200);
    done();
  });
});

describe("Test Admin Category Routing", () => {
  it("check get passess", async done => {
    const res = await request.get(`${apiUrl}/category/`).send({});
    expect(res.status).toEqual(200);
    done();
  });

  it("check post passess", async done => {
    const category = {
      id: "ID060606",
      name: "Rugby Photos",
      description: "Local Rugby photos"
    };
    const res = await request.post(`${apiUrl}/category/`).send({
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
      .put(`${apiUrl}/category/${id}`)
      .send({ category });
    expect(res.status).toEqual(200);
    done();
  });
});
