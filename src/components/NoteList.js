import React from 'react'
import NoteItem from './NoteItem'

const NoteList = ({ notes, onDelete, onArchive, archived }) => {
    const splitNotes = notes.filter((note) => note.archived === archived);

    return (
        <div className="justify-content-start my-4">
            {splitNotes.length !== 0
                ? <div className="row">{splitNotes.map((note) => (<NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} archived={archived} {...note} />))}</div>
                : <em className="text-muted">Tidak ada catatan</em>
            }
        </div>
    )
}

export default NoteList