import React from 'react'

const Container = ({className ,children }) => {
  return (
    <div className={`max-w-[1600px] mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container