const express = require("express");
const router = express.Router();

/* Album routes */
router.get("/album", (req, res, next) => {
  res.status(404).json({
    message: "No Albums Found"
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
router.post("/image", (req, res, next) => {});
router.get("/image/:id", (req, res, next) => {});
router.put("/image", (req, res, next) => {});

/* Categroy routes*/
router.post("/category", (req, res, next) => {});
router.get("/category", (req, res, next) => {});
router.put("/category", (req, res, next) => {});

module.exports = router;
