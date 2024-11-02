import React from 'react'
import Button from './button'
import Header from './header'


const navbarr = () => {
  return (
    <>
        <nav className="flex items-center justify-between ml-[90px] mr-[68px] relative">
          <Header />
          <div>
        <Button purpose="Creator" />
        </div>
        </nav>
        <hr className="border-slate-500" />
      </>
  )
}

export default navbarr