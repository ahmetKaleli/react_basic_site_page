import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Back to HomePage</Link>
    </div>
  )
}
