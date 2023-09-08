import { rest } from 'msw'

export const handlers = [
  rest.get('https://bloodbrothers.com/product/list', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: '슬림핏 스트레치 8W 코듀로이 팬츠 (미디엄 브라운)',
          price: 149000,
          comment: 0,
          like: false,
        },
        {
          id: 2,
          name: '슬림핏 스트레치 8W 코듀로이 팬츠 (네이비)',
          price: 149000,
          comment: 0,
          like: false,
        },
      ]),
    )
  }),
]
