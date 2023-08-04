// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { positions, times } from '../../fixtures';
import { TPosition } from '../types';

export const handlers = [
  rest.get('/test/positions', (req, res, ctx) => {
    return res(ctx.json({ data: positions }));
  }),

  rest.get('/test/times', (req, res, ctx) => {
    return res(ctx.json({ data: times }));
  }),

  rest.get('/test/position/:id', (req, res, ctx) => {
    const { id } = req.params;
    const filtered = positions.filter(
      (position: TPosition) => position.id === Number(id),
    );
    return res(ctx.json({ data: { position: filtered[0] } }));
  }),
];
