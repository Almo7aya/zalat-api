import { Request, Response } from 'express';
import { generateResponse } from '../utils/generateResponse';

export function notfound(_req: Request, res: Response) {
  return res.status(404).json(
    generateResponse('NOT FOUND BABY!', 404)
  );
}
