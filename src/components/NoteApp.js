import React from 'react'
import NoteHeader from './NoteHeader'
import NoteInput from './NoteInput';
import NoteList from './NoteList'
import autoBind from 'auto-bind';
import { getInitialData } from '../utils/index';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            keyword: '',
        };
        autoBind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                note.archived = !note.archived
            }
            return note;
        });
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prev) => {
            return {
                notes: [
                    ...prev.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: +new Date(),
                    }
                ]
            }
        });
    }

    onKeywordChangeHandler(e) {
        this.setState({ keyword: e.target.value });
    }

    render() {
        const filterData = this.state.notes.filter((note) => {
            if (this.state.keyword !== '') {
                return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
            } else {
                return note;
            }
        });

        return (
            <>
                <NoteHeader keyword={this.state.keyword} onKeywordChange={this.onKeywordChangeHandler} />
                <div className="container my-5 py-5">
                    <NoteInput addNotes={this.onAddNoteHandler} />
                    <h4>Catatan Aktif</h4>
                    <NoteList notes={filterData} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} archived={false} />
                    <hr className="mt-0 mb-4" />
                    <h4>Arsip</h4>
                    <NoteList notes={filterData} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} archived={true} />
                </div>
            </>
        )
    }
}

export default NoteApp