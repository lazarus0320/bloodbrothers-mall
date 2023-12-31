import Image from 'next/image'
import Link from 'next/link'
import { Search, FavoriteBorder, AccountCircle, ShoppingCart, Logout } from '@mui/icons-material'
import { HeaderItem } from './HeaderItems'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className="fixed w-full z-50">
      <nav className="flex justify-between p-3 bg-white border-t-[1px] border-b-[1px] border-darkblue text-darkblue">
        <div className="flex items-center space-x-12">
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <Image src="/logo.png" alt="Logo" className="mr-2" width={200} height={80} />
            </div>
          </Link>

          <Link href="/man" passHref>
            <span className="cursor-pointer font-semibold hover:underline">Man</span>
          </Link>
          <Link href="/woman" passHref>
            <span className="cursor-pointer font-semibold hover:underline">Woman</span>
          </Link>
          <Link href="/sale" passHref>
            <span className="cursor-pointer font-semibold hover:underline">Sale</span>
          </Link>
          <Link href="/collections" passHref>
            <span className="cursor-pointer font-semibold hover:underline">Collections</span>
          </Link>
          <Link href="/store" passHref>
            <span className="cursor-pointer font-semibold hover:underline">Store</span>
          </Link>
        </div>

        <div className="flex justify-end mr-6 items-center">
          <HeaderItem Icon={Search} />
          <HeaderItem Icon={FavoriteBorder} />
          <HeaderItem Icon={AccountCircle} />
          <HeaderItem Icon={ShoppingCart} />
          <HeaderItem Icon={Logout} />
        </div>
      </nav>
      {/* <SearchBar /> */}
    </div>
  )
}

export default Header
