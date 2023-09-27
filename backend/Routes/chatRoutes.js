const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessChat } = require("../controllers/chatControllers");
const router = express.Router();

router.route("/").post(protect, accessChat);
// router.route("/").get(protect, fetchChat);
// router.route('/group').post(protect, createGroupChat);
// router.route('/rename').put(protect, renameGroupChat);
// router.route('/groupremove').delete(protect, removeFromGroup);
// router.route('/groupadd').put(protect, addToGroup);

module.exports = router;