const express = require("express");
const router = express.Router();
const appController = require("./appController");

router.get("/", appController.healthCheck);
router.get("/api/download/resume", appController.downloadResume);
router.get("/api/stock", appController.getStockQuote);
router.get("/api/stock/trending", appController.getTrendingStocks);

module.exports = router;