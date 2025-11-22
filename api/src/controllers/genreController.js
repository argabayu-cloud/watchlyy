const prisma = require("../prisma");

exports.getAllGenres = async (req, res) => {
  try {
    const genres = await prisma.genre.findMany();
    res.status(200).json(genres);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch genres" });
  }
};

exports.createGenre = async (req, res) => {
  try {
    const { name } = req.body;

    const genre = await prisma.genre.create({
      data: { name },
    });

    res.status(201).json(genre);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create genre" });
  }
};
