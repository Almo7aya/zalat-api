import catchAsync from '../utils/catchAsync';
import { Request, Response } from 'express';
import { generateResponse } from '../../utils/generateResponse';


export const login = catchAsync(async (_req: Request, res: Response) => {
  res.status(200).json(generateResponse('Working!'));
});

