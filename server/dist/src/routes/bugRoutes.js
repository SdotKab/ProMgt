"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bugController_1 = require("../controllers/bugController");
const router = (0, express_1.Router)();
router.get("/", bugController_1.getBugs);
router.post("/", bugController_1.createBug);
router.patch("/:bugId/status", bugController_1.updateBugStatus);
router.patch("/:bugId/priority", bugController_1.updateBugPriority);
router.get("/user/:userId", bugController_1.getUserBugs);
router.get("/:bugId", bugController_1.getOneBug);
exports.default = router;
