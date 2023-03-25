// src/server/index.ts

import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, '../client/public')));

// Send index.html for all other requests
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
