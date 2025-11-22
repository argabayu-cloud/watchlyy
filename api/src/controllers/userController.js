const prisma = require("../prisma");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        ratings: true,
      },
    });

    res.json({
      status: "success",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password, // nanti kita ganti hash
      },
    });

    res.json({
      status: "success",
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
