import React from 'react'

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(e) {
        const titleLength = e.target.value.length;

        if (titleLength <= 50) {
            this.setState((prev) => {
                return {
                    ...prev,
                    title: e.target.value,
                }
            });
        }
    }

    onBodyChangeHandler(e) {
        this.setState((prev) => {
            return {
                ...prev,
                body: e.target.value,
            }
        });
    }

    onSubmitHandler(e) {
        e.preventDefault();

        if (!this.state.title || !this.state.body) {
            alert('Field input tidak boleh kosong!');
            return;
        }

        this.props.addNotes(this.state);

        this.setState({
            title: '',
            body: '',
        });
    }

    render() {
        return (
            <div className="row pt-4 mb-5">
                <div className="col-md-6 col-12 mx-auto">
                    <h4>Tambah Catatan</h4>
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="my-3">
                            <p className="mb-2 text-muted text-end small">Sisa karakter: {50 - this.state.title.length}</p>
                            <input className="form-control" type="text" placeholder="Berikan judul ..." value={this.state.title} onChange={this.onTitleChangeHandler} />
                        </div>
                        <div className="mb-4">
                            <textarea className="form-control" cols="30" rows="5" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary px-3">Tambah</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NoteInput