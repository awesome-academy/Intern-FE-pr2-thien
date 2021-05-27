const express = require("express");
const router = express.Router();

// Constrollers
const {
  getAll,
  deleteUser,
  updateUser,
} = require("../../controllers/admin/user.controller");

router.post("/updateInfo/:userId", updateUser);

router.get("/delete/:userId", deleteUser);

router.get("/getAll", getAll);

module.exports = router;
