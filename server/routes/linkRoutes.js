const express = require('express');
const router = express.Router();
const Link = require('../models/Link');
const shortid = require('shortid');

// Route to shorten a URL
router.post('/shorten', async (req, res) => {
    const { originalUrl } = req.body;
    const shortUrl = shortid.generate();

    try {
        const link = new Link({ originalUrl, shortUrl });
        await link.save();
        res.json({ shortUrl });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Route to get the original URL using short URL
router.get('/:shortUrl', async (req, res) => {
    const { shortUrl } = req.params;

    try {
        const link = await Link.findOne({ shortUrl });
        if (link) {
            res.redirect(link.originalUrl);
        } else {
            res.status(404).json({ error: 'No URL found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
