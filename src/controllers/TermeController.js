const express = require("express");
const router = express.Router();
const Terme = require("../models/Terme");

// Create a new Terme
router.post("/", async (req, res) => {
  try {
    const Terme = await Terme.create(req.body);
    res.json(Terme);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Terme." });
  }
});

// Get all Termes
router.get("/", async (req, res) => {
  try {
    const Termes = await Terme.findAll();
    res.json(Termes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Termes." });
  }
});

// Get Terme by ID
router.get("/:id", async (req, res) => {
  try {
    const Terme = await Terme.findByPk(req.params.id);
    if (!Terme) {
      res.status(404).json({ message: "Terme not found." });
    } else {
      res.json(Terme);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Terme." });
  }
});

// Update Terme by ID
router.put("/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await Terme.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRowsCount === 0) {
      res.status(404).json({ message: "Terme not found." });
    } else {
      const Terme = await Termes.findByPk(req.params.id);
      res.json(Terme);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update Terme." });
  }
});

// Delete Terme by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedRowsCount = await Terme.destroy({
      where: { id: req.params.id },
    });
    if (deletedRowsCount === 0) {
      res.status(404).json({ message: "Terme not found." });
    } else {
      res.json({ message: "Terme deleted successfully." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Terme." });
  }
});

module.exports = router;
