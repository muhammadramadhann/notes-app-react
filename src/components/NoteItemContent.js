import React from 'react'
import { showFormattedDate } from '../utils'

const NoteItemContent = ({ title, body, createdAt }) => {
    return (
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-subtitle my-2 text-muted small">{showFormattedDate(createdAt)}</p>
            <hr />
            <p className="card-text">{body}</p>
        </div>
    )
}

export default NoteItemContent