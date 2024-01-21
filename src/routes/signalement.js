const express = require("express");
const router = express.Router();
const Signalement = require("../models/Signalement");

// Create a new Signalement
router.post("/", async (req, res) => {
  try {
    const Signalement = await Signalement.create(req.body);
    res.json(Signalement);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Signalement." });
  }
});

// Get all Signalements
router.get("/", async (req, res) => {
  try {
    const Signalements = await Signalement.findAll();
    res.json(Signalements);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Signalements." });
  }
});

// Get Signalement by ID
router.get("/:id", async (req, res) => {
  try {
    const Signalement = await Signalement.findByPk(req.params.id);
    if (!Signalement) {
      res.status(404).json({ message: "Signalement not found." });
    } else {
      res.json(Signalement);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Signalement." });
  }
});

// Update Signalement by ID
router.put("/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await Signalement.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRowsCount === 0) {
      res.status(404).json({ message: "Signalement not found." });
    } else {
      const Signalement = await Signalements.findByPk(req.params.id);
      res.json(Signalement);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update Signalement." });
  }
});

// Delete Signalement by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedRowsCount = await Signalement.destroy({
      where: { id: req.params.id },
    });
    if (deletedRowsCount === 0) {
      res.status(404).json({ message: "Signalement not found." });
    } else {
      res.json({ message: "Signalement deleted successfully." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Signalement." });
  }
});

module.exports = router;
