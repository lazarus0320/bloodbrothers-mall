export const HeaderItem = ({ Icon }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-18">
      <Icon className="h-8 w-8 mb-1 group-hover:animate-bounce" />
    </div>
  )
}

export default HeaderItem
