import { Router } from 'express';

const router = Router();

router.get('/ping', (_, response) => {
  response.send('Pong');
});

export default router;
