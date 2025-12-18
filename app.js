const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(cors());

const port = 3001;

// Health check
app.get("/", (req, res) => {
	res.json({ message: "Hello World" });
});

// Resume download API
app.get("/api/download/resume", (req, res) => {
	const filePath = path.join(
		__dirname,
		"files",
		"Pechdanai_Resume.pdf"
	);

	if (!fs.existsSync(filePath)) {
		return res.status(404).json({ message: "Resume not found" });
	}

	res.setHeader("Content-Type", "application/pdf");
	res.setHeader(
		"Content-Disposition",
		'attachment; filename="Pechdanai_Saepong_Resume.pdf"'
	);

	res.download(filePath);
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
