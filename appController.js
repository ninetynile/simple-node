const path = require("path");
const fs = require("fs");
const YahooFinance  = require("yahoo-finance2").default;

// Suppress console notices from yahoo-finance2 (common in v2+)
const yahooFinance = new YahooFinance({
  suppressNotices: ["yahooSurvey"], // optional
});

exports.healthCheck = (req, res) => {
	res.json({ message: "Hello World" });
};

exports.downloadResume = (req, res) => {
	// Adjusted path: go up one level from 'controllers' to root, then into 'files'
	const filePath = path.join(__dirname, "files", "Pechdanai_Resume.pdf");

	if (!fs.existsSync(filePath)) {
		return res.status(404).json({ message: "Resume not found" });
	}

	res.setHeader("Content-Type", "application/pdf");
	res.setHeader(
		"Content-Disposition",
		'attachment; filename="Pechdanai_Saepong_Resume.pdf"'
	);

	res.download(filePath);
};

exports.getStockQuote = async (req, res) => {
	const symbol = req.query.symbol;

	if (!symbol) {
		return res.status(400).json({ message: "Stock symbol is required (e.g., ?symbol=AAPL)" });
	}

	try {
		const quote = await yahooFinance.quote(symbol);
        const price = quote.regularMarketPrice;
		res.json({ price });
	} catch (error) {
		res.status(500).json({ message: "Error fetching stock data", error: error.message });
	}
};

exports.getTrendingStocks = async (req, res) => {
	try {
		const result = await yahooFinance.trendingSymbols('US');
		res.json(result);
	} catch (error) {
		res.status(500).json({ message: "Error fetching trending stocks", error: error.message });
	}
};