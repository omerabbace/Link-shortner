import React, { useState } from 'react';
import ShortenForm from './components/ShortenForm';
import ShortenedLink from './components/ShortenedLink';

const App = () => {
    const [shortenedLink, setShortenedLink] = useState('');

    return (
        <div className="app">
            <h1>URL Shortener</h1>
            <ShortenForm setShortenedLink={setShortenedLink} />
            <ShortenedLink link={shortenedLink} />
        </div>
    );
};

export default App;
