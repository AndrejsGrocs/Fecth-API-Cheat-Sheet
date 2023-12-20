import React from 'react'

export const User = ({id, name, email, onDelete}) => {

    const handleDelete = () =>{
    onDelete(id)
    }

  return (
    <div className='users-list'>
            <p>{name}</p>
            <p>{email}</p>
            <div>
                <button>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
           


    </div>
  )
}
