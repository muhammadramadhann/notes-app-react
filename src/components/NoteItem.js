import React from 'react'
import NoteItemContent from './NoteItemContent'
import DeleteButton from './DeleteButton'
import ArchiveButton from './ArchiveButton'

const NoteItem = ({ title, body, createdAt, id, onDelete, onArchive, archived }) => {
    return (
        <>
            <div className="col-md-3 col-12 mb-4">
                <div className="card shadow-sm h-100">
                    <NoteItemContent title={title} body={body} createdAt={createdAt} />
                    <div className="card-footer text-end">
                        <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
                        <DeleteButton id={id} onDelete={onDelete} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem