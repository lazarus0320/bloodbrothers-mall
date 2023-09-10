import Header from '@/components/Header'
import React from 'react'

export default function page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <h1>This is the Man page</h1>
      <div>{children}</div>
    </div>
  )
}
