import React from 'react'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

const Ham = () => {

    const [isOpen, setOpen] = useState(false)

  return (
     <Hamburger/>
  )
}

export default Ham
