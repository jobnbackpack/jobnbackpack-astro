import React from 'react'

function LinkRow() {
  return (
    <ul className='text-2xl gap-2 flex'>
      <Link href="#" icontype="hello" />
      <Link href="#" icontype="aosenuth" />
    </ul>
  )
}

const Link = ({ href, icontype }) => {
  return (
    <li>
      <a href={href}>{icontype}</a>
    </li>
  )
}

export default LinkRow
