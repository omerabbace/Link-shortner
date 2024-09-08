import React from 'react';

const ShortenedLink = ({ link }) => {
    return (
        link ? (
            <div className="shortened-link">
                <p>Shortened URL:</p>
                <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </div>
        ) : null
    );
};

export default ShortenedLink;
