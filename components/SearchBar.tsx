import React from 'react'
import { Search } from '@mui/icons-material'

export const SearchBar = () => {
  return (
    <div className="flex items-center m-1">
      <div className="ml-8">
        <Search fontSize="large" />
      </div>
      <input
        className="ml-3 mr-10 pl-4 pr-4 pt-2 pb-2 w-full outline-none focus:ring-2 focus:ring-offset-1 focus:ring-darkblue rounded-sm text-sm"
        type="text"
        placeholder="검색어를 입력하세요."
      />
    </div>
  )
}

export default SearchBar
