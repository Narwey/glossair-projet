const express = require("express");
const router = express.Router();
const Domaine = require("../models/Domaine");

// Create a new Domaine
router.post("/", async (req, res) => {
  try {
    const Domaine = await Domaine.create(req.body);
    res.json(Domaine);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Domaine." });
  }
});

// Get all Domaines
router.get("/", async (req, res) => {
  try {
    const Domaines = await Domaine.findAll();
    res.json(Domaines);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Domaines." });
  }
});

// Get Domaine by ID
router.get("/:id", async (req, res) => {
  try {
    const Domaine = await Domaine.findByPk(req.params.id);
    if (!Domaine) {
      res.status(404).json({ message: "Domaine not found." });
    } else {
      res.json(Domaine);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Domaine." });
  }
});

// Update Domaine by ID
router.put("/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await Domaine.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRowsCount === 0) {
      res.status(404).json({ message: "Domaine not found." });
    } else {
      const Domaine = await Domaines.findByPk(req.params.id);
      res.json(Domaine);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update Domaine." });
  }
});

// Delete Domaine by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedRowsCount = await Domaine.destroy({
      where: { id: req.params.id },
    });
    if (deletedRowsCount === 0) {
      res.status(404).json({ message: "Domaine not found." });
    } else {
      res.json({ message: "Domaine deleted successfully." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Domaine." });
  }
});

module.exports = router;
