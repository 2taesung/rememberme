// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import fixtures from '../../fixtures';
import { TPosition } from '../types/Position';

export const handlers = [
  rest.get('/test/position/:id', (req, res, ctx) => {
    const { id } = req.params;
    const filtered = fixtures.positions.filter(
      (position: TPosition) => position.id === Number(id),
    );
    return res(ctx.json({ data: { position: filtered[0] } }));
  }),
];
