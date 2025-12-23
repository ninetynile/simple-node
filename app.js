const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(express.json()); 
app.use(cors());

const port = 3001;

app.use("/", routes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
