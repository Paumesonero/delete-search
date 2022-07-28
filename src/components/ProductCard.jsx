import React from 'react'

export default function (props) {
    const { card: { name, _id }, onDelete } = props

    return (
        <div>
            <p>{name}</p>
            <button onClick={() => onDelete(_id)}>Delete</button>
        </div>
    )
}
