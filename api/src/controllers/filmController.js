const prisma = require("../prisma");

exports.getAllFilms = async (req, res) => {
  try {
    const films = await prisma.film.findMany({
      include: {
        genre: true,
        ratings: true,
      },
    });

    res.json({
      status: "success",
      data: films,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// GET /films/recommend - simple placeholder: return a small set of films
exports.getRecommendedFilms = async (req, res) => {
  try {
    const films = await prisma.film.findMany({
      take: 5,
      include: {
        genre: true,
        ratings: true,
      },
    });

    res.json({
      status: "success",
      data: films,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// GET /films/:id - return film by ID
exports.getFilmById = async (req, res) => {
  try {
    const { id } = req.params;
    const film = await prisma.film.findUnique({
      where: { id: Number(id) },
      include: { genre: true, ratings: true },
    });

    if (!film) {
      return res
        .status(404)
        .json({ status: "error", message: "Film not found" });
    }

    res.json({ status: "success", data: film });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
