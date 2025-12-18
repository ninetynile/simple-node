const express = require('express');
const cors = require('cors');
const apicache = require('apicache');
const app = express();
const cache = apicache.middleware;
app.use(cors());
const port = 3001;

// Define the Hello World API endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
