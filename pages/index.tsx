import axios from 'axios'
import { GetServerSideProps } from 'next'
import { server } from '../mocks/server'
import 'tailwindcss/tailwind.css'
import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
import NewArrival from '@/components/NewArrival'

interface Product {
  id: number
  name: string
  price: number
  comment: number
  like: boolean
}

interface IndexPageProps {
  product: Product[]
}

const IndexPage = ({ product }: IndexPageProps) => {
  if (!product) return <div>Loading...</div>

  return (
    <div>
      <Header />
      <Carousel />
      <div className="w-full h-[100px]" />
      <NewArrival />
      <div className="w-full h-[100px]" />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  if (process.env.NODE_ENV === 'development') {
    server.listen() // Start the mock server
  }

  try {
    const response = await axios.get<Product[]>('https://bloodbrothers.com/product/list')
    return { props: { product: response.data } }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      server.close() // Stop the mock server in case of an error
    }
    console.error(error)
    return { props: {} }
  }
}

export default IndexPage
