import React from 'react'
import Button from "./Button"

const Contact = ({ username }) => {
  return (
    <>
      <div>Contact</div>
      <input type="text" placeholder='enter email' />
      <Button username={username}>Subscribe to newsletter</Button>
    </>
  )
}

export default Contact