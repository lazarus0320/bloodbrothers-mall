import { Product } from '@/types'
import { rest } from 'msw'

const generateProduct = (id: number, category: string): Product => {
  const colors = ['red', 'blue', 'green', 'black']

  return {
    id: id,
    name: `Product ${id}`,
    price: Math.floor(Math.random() * 100),
    brand: `Brand ${id}`,
    discountPer: Math.floor(Math.random() * 50),
    discountedPrice: Math.floor(Math.random() * 50),
    color: colors[Math.floor(Math.random() * 4)],
    img: `/clothes/${id}.jpg`,
    category: category,
  }
}

export const handlers = [
  rest.get('https://bloodbrothers.com/new', (req, res, ctx) => {
    const products = ['남성', '여성', '잡화/슈즈', '키즈'].reduce(
      (acc: any[], curr: string, idx: number) => {
        for (let i = 0; i < 5; i++) {
          acc.push(generateProduct(idx * 5 + i + 1, curr))
        }
        return acc
      },
      [],
    )

    return res(ctx.status(200), ctx.json(products))
  }),
]
