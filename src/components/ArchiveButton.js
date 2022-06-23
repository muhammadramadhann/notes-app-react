import React from 'react'

const ArchiveButton = ({ id, onArchive, archived }) => {
    return (
        <button className="btn btn-secondary me-2" onClick={() => onArchive(id)}>{archived ? 'Unarchive' : 'Archive'}</button>
    )
}

export default ArchiveButton