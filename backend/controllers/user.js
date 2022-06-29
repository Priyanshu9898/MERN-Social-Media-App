const User = require("../models/User");

exports.register = async function (req, res) {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    user = new User({
      name: name,
      email: email,
      password: password,
      avatar: {
        public_id: "",
        url: "sample_url",
      },
    });
    await user.save();
    return res.status(201).json({
      message: "User created successfully",
      success: true,
      user: user,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};
