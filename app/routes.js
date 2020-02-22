import hashtagRouter from './modules/hashtag/controllers/hashtag-route'
import express from 'express';

let router = express.Router();

router.use('/api/hashtag', hashtagRouter);

export default router;





