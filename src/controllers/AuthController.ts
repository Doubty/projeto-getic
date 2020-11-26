import { Router } from 'express';
import User from '../models/User';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.json({ user });
  } catch (error) {
    return res
      .status(400)
      .send({ Error: 'Erro ao realizar cadastro de usuário!' });
  }
});

export default router;
