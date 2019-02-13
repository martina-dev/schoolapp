import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('The teachers endpoint');
});

export default router;
