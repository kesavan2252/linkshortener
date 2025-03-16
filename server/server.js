const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON

app.post('/shorten', async (req, res) => {
    try {
        const { url } = req.body;
        const response = await axios.post('https://url-shortener-service.p.rapidapi.com/shorten', 
            `url=${encodeURIComponent(url)}`, {
            headers: {
                'x-rapidapi-key': '487682ac94msh6896eb1748311a7p18f58fjsnf7c6be99c395',
                'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        // Log the entire response data to see its structure
        console.log('API Response:', response.data);

        // Check if response.data exists and has the expected property
        const shortenedUrl = response.data.result_url || response.data.shortenedUrl;
        
        if (!shortenedUrl) {
            throw new Error('No shortened URL in response');
        }

        console.log('Shortened URL from backend:', shortenedUrl);
        res.json({ shortenedUrl });
    }   catch (error) {
        console.error('Error shortening URL:', error.response?.data || error.message);
        res.status(500).json({ 
            error: 'Failed to shorten URL',
            details: error.response?.data || error.message
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
