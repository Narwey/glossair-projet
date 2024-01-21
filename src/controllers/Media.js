const express = require("express");
const router = express.Router();
const Media = require("../models/Media");

// Create a new Media
router.post("/", async (req, res) => {
  try {
    const Media = await Media.create(req.body);
    res.json(Media);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Media." });
  }
});

// Get all Medias
router.get("/", async (req, res) => {
  try {
    const Medias = await Media.findAll();
    res.json(Medias);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Medias." });
  }
});

// Get Media by ID
router.get("/:id", async (req, res) => {
  try {
    const Media = await Media.findByPk(req.params.id);
    if (!Media) {
      res.status(404).json({ message: "Media not found." });
    } else {
      res.json(Media);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Media." });
  }
});

// Update Media by ID
router.put("/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await Media.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRowsCount === 0) {
      res.status(404).json({ message: "Media not found." });
    } else {
      const Media = await Medias.findByPk(req.params.id);
      res.json(Media);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update Media." });
  }
});

// Delete Media by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedRowsCount = await Media.destroy({
      where: { id: req.params.id },
    });
    if (deletedRowsCount === 0) {
      res.status(404).json({ message: "Media not found." });
    } else {
      res.json({ message: "Media deleted successfully." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Media." });
  }
});

module.exports = router;
