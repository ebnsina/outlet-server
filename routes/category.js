const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category");
const { authCheck, adminCheck } = require("../middlewares/auth");

router.get("/categories", categoryController.list);
router.post("/categories", authCheck, adminCheck, categoryController.create);
router.get("/categories/:slug", categoryController.read);
router.put(
  "/categories/:slug",
  authCheck,
  adminCheck,
  categoryController.update
);
router.delete(
  "/categories/:slug",
  authCheck,
  adminCheck,
  categoryController.remove
);

module.exports = router;
