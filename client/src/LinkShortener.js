import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const LinkShortener = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShortenedUrl('');
        setError('');

        if (!inputUrl) {
            setError('Please enter a URL');
            return;
        }

        try {
            console.log('Sending URL to backend:', inputUrl);

            const response = await axios.post('http://localhost:5000/shorten', { url: inputUrl });

            console.log('Full Response from backend:', response);

            if (response.data && response.data.shortenedUrl) {
                const fullShortenedUrl = `http://localhost:5000/${response.data.shortenedUrl}`;
                setShortenedUrl(fullShortenedUrl);
                console.log('Shortened URL:', fullShortenedUrl);
            } else {
                setError('No shortened URL returned. Please try again.');
                console.log('No shortened URL returned.');
            }
        } catch (err) {
            console.error('Error shortening URL:', err);
            setError('Failed to shorten URL. Please try again.');
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
            {error && <p className="error">{error}</p>}
            {shortenedUrl && (
                <div className="result">
                    <p>
                        <strong>Shortened URL:</strong> 
                        <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default LinkShortener;
