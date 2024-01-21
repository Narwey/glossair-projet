const express = require("express");
const router = express.Router();
const Commentaire = require("../models/Commentaire");

// Create a new Commentaire
router.post("/", async (req, res) => {
  try {
    const Commentaire = await Commentaire.create(req.body);
    res.json(Commentaire);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Comment." });
  }
});

// Get all Commentaires
router.get("/", async (req, res) => {
  try {
    const Commentaires = await Commentaire.findAll();
    res.json(Commentaires);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Comments." });
  }
});

// Get Commentaire by ID
router.get("/:id", async (req, res) => {
  try {
    const Commentaire = await Commentaire.findByPk(req.params.id);
    if (!Commentaire) {
      res.status(404).json({ message: "Comment not found." });
    } else {
      res.json(Commentaire);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch Comment." });
  }
});

// Update Commentaire by ID
router.put("/:id", async (req, res) => {
  try {
    const [updatedRowsCount] = await Commentaire.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedRowsCount === 0) {
      res.status(404).json({ message: "Comment not found." });
    } else {
      const Commentaire = await Commentaire.findByPk(req.params.id);
      res.json(Commentaire);
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update Comment." });
  }
});

// Delete Commentaire by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedRowsCount = await Commentaire.destroy({
      where: { id: req.params.id },
    });
    if (deletedRowsCount === 0) {
      res.status(404).json({ message: "Comment not found." });
    } else {
      res.json({ message: "Comment deleted successfully." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Comment." });
  }
});

module.exports = router;
