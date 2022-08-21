const User = require("../models/User");
const admin = require("../utils/firebase");

exports.authCheck = async (req, res, next) => {
  try {
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid or Expired token." });
  }
};

exports.adminCheck = async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });

  if (adminUser.role !== "admin") {
    res.status(403).json({ error: "Access denied." });
  } else {
    next();
  }
};
