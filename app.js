const express = require('express');
const app = express();
const port = 3001;

// Define the Hello World API endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
