import React, { useState } from 'react';
import axios from 'axios';

const ShortenForm = ({ setShortenedLink }) => {
    const [url, setUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/links/shorten', { originalUrl: url });
            setShortenedLink(`http://localhost:5000/${response.data.shortUrl}`);
            setUrl('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="shorten-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    placeholder="Enter URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <button type="submit">Shorten</button>
            </form>
        </div>
    );
};

export default ShortenForm;
