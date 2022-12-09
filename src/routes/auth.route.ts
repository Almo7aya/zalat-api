import { Router } from 'express';
import { login } from '../modules/auth/auth.controller';

export const authRoute = Router();


authRoute.get('/login', login);
