import { useState } from 'react'

export const NewArrival = () => {
  const [activeTab, setActiveTab] = useState('전체')
  const tabs = ['전체', '남성', '여성', '잡화/슈즈', '키즈']

  return (
    <div className="flex flex-col items-center my-6">
      <h1 className="text-2xl font-bold mb-4 text-darkblue">New Arrival</h1>
      <div className="flex justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 mx-2 text-center ${
              activeTab === tab ? 'border-b-[3px] border-darkblue' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}

export default NewArrival
