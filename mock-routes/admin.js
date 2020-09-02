const express = require("express");
const router = express.Router();

/* Album routes */
router.get("/album", (req, res, next) => {
  const album = {
    id: "AFGASDASD",
    name: "Album 1",
    description: "Album Description 1",
    images: [{ id: "ASASFAF" }, { id: "ASASFAF" }, { id: "ASASFAF" }]
  };

  if (!album) {
    res.status(404).json({
      message: "No Albums Found"
    });
  }

  res.status(200).json({
    message: "Albums Found",
    data: album
  });
});

router.post("/album", (req, res, next) => {
  res.status(404).json({
    message: "Album Not Created"
  });
});

router.put("/album", (req, res, next) => {
  res.status(404).json({
    message: "Album not updated"
  });
});

/* Image routes */
router.post("/image", (req, res, next) => {
  const image = req.body;

  if (!image) {
    res.status(500).json({
      message: "Image data not provided correctly"
    });
  }

  res.status(201).json({
    message: "Image Saved successfully",
    data: image
  });
});

router.get("/image/:id", (req, res, next) => {
  /* Check image param is set */
  if (!req.params.id) {
    res.status(500).json({
      message: "Id not supplied"
    });
  }

  /* Add in call to image store */
  const imageId = req.params.id;

  /* send successful json response */
  res.status(200).json({
    message: "Image Found",
    data: {
      id: imageId,
      albumid: "LASKDASOPD",
      imagepath: "D:Imagesimage.png"
    }
  });
});

router.put("/image/:id", (req, res, next) => {
  /* Check image param is set */
  if (!req.params.id) {
    res.status(500).json({
      message: "Id not supplied"
    });
  }

  const image = req.body;

  if (!image) {
    res.status(500).json({
      message: "image provided is not valid"
    });
  }

  res.status(200).json({
    message: "Image updated successfully",
    data: image
  });
});

/* Categroy routes*/
router.post("/category", (req, res, next) => {
  const category = req.body;

  if (!category) {
    res.status(500).json({
      message: "Category data not provided"
    });
  }

  res.status(201).json({
    message: "Category saved successfully",
    data: category
  });
});

router.get("/category", (req, res, next) => {
  const category = {
    id: "AFGASDASD",
    name: "Category 1",
    description: "Category Description 1"
  };

  if (!category) {
    res.status(404).json({
      message: "No Albums Found"
    });
  }

  res.status(200).json({
    message: "Categorys Found",
    data: category
  });
});

router.put("/category/:id", (req, res, next) => {
  if (!req.params.id) {
    res.status(500).json({
      message: "category id not provided"
    });
  }

  const category = req.body;

  if (!category) {
    res.status(500).json({
      message: "Category provided is not valid"
    });
  }

  res.status(200).json({
    message: "Category updated successfully",
    data: category
  });
});

module.exports = router;
