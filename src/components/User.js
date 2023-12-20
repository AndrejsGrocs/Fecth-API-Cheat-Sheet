import React from 'react'

export const User = ({id, name, email}) => {
  return (
    <div className='users-list'>
            <p>{name}</p>
            <p>{email}</p>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
           


    </div>
  )
}
