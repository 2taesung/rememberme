// import { rest } from 'msw';
// import { ProductType } from '../types';
// import fixtures from '../../fixtures';

// export const handlers = [
//   rest.get('/products/:id', (req, res, ctx) => {
//     const { id } = req.params;
//     const filtered = fixtures.products.filter(
//       (product: ProductType) => product.id === Number(id),
//     );
//     return res(ctx.status(200), ctx.json({ data: { product: filtered[0] } }));
//   }),
// ];
