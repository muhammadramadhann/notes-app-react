import React from 'react'
import { Link } from 'react-router-dom'

const NoteHeader = ({ keyword, onKeywordChange }) => {
    return (
        <nav className="navbar bg-white border-bottom fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand fw-bold fs-3">Notes App</Link>
                <form className="mt-md-0 mt-2" role="search">
                    <input className="form-control" type="text" placeholder="Cari catatan ..." aria-label="Search" value={keyword} onChange={onKeywordChange} />
                </form>
            </div>
        </nav>
    )
}

export default NoteHeader