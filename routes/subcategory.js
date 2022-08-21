const express = require("express");
const router = express.Router();

const subcategoryController = require("../controllers/subcategory");
const { authCheck, adminCheck } = require("../middlewares/auth");

router.get("/subcategories", subcategoryController.list);
router.post(
  "/subcategories",
  authCheck,
  adminCheck,
  subcategoryController.create
);
router.get("/subcategories/:slug", subcategoryController.read);
router.put(
  "/subcategories/:slug",
  authCheck,
  adminCheck,
  subcategoryController.update
);
router.delete(
  "/subcategories/:slug",
  authCheck,
  adminCheck,
  subcategoryController.remove
);

module.exports = router;
