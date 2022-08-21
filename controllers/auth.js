const User = require("../models/User");

exports.auth = async (req, res) => {
  const { name, email, picture } = req.user;

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { name: email.split("@")[0], picture },
      { new: true }
    );
    if (user) {
      res.json(user);
    }

    const newuser = new User({ name: email.split("@")[0], email, picture });
    await newuser.save();
    res.json(newuser);
  } catch (error) {
    console.log(error);
  }
};

exports.currentUser = async (req, res) => {
  const { email } = req.user;

  try {
    const user = await User.findOne({ email });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
