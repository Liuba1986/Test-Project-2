import React from 'react'

export default function UserCard({ image, firstName, lastName }) {
  return (
    <div>
        <img src={image} alt={`${firstName} ${lastName}`} />
        <p>{ `${firstName} ${lastName} `}</p>
    </div>
  )
}
