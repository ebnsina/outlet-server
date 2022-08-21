const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");
const { authCheck, adminCheck } = require("../middlewares/auth");

router.post("/auth", authCheck, authController.auth);
router.post("/current-user", authCheck, authController.currentUser);
router.post(
  "/current-admin",
  authCheck,
  adminCheck,
  authController.currentUser
);

module.exports = router;
