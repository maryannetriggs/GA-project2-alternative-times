import React from 'react'

// For displaying current date
const today = new Date()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const date = today.toLocaleDateString('en-GB', options)

const Header = () => (
  <>
    <h1>The Alternative Times</h1>
    <div className="dateBar">
      <p>Volume: MDXXV</p>
      <p>{date}</p>
      <p>£2.50</p>
    </div>
  </>
)

export default Header