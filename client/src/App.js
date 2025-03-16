import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const LinkShortener = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // New state to show loading spinner
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setShortenedUrl('');
        setError('');
        setLoading(true); // Start loading

        if (!inputUrl) {
            setError('Please enter a URL');
            setLoading(false); // Stop loading if no URL is provided
            return;
        }

        try {
            // Log the input URL being sent to the backend (for debugging)
            console.log('Sending URL to backend:', inputUrl);

            // API call to the backend
            const response = await axios.post('http://localhost:5000/shorten', { url: inputUrl });

            // Log the full response object from the backend (for debugging)
            console.log('Full Response from backend:', response);

            // Check if shortened URL exists in response
            if (response.data && response.data.shortenedUrl) {
                setShortenedUrl(response.data.shortenedUrl);  // Update state with shortened URL
            } else {
                setError('No shortened URL returned. Please try again.');
            }
        } catch (err) {
            console.error('Error shortening URL:', err);
            setError('Failed to shorten URL. Please try again.');
        } finally {
            setLoading(false); // Stop loading after the API call finishes
        }
    };

    return (
        <div className="container">
            <h1>Link Shortener</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="Enter URL to shorten"
                />
                <button type="submit">Shorten</button>
            </form>

            {loading && <p>Loading...</p>}  {/* Show loading message while waiting for response */}

            {error && <p className="error">{error}</p>}

            {shortenedUrl && (
                <div className="result">
                    <p>
                        <strong>Shortened URL:</strong>
                        <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                            {shortenedUrl}
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default LinkShortener;
