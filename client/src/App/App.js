import React from 'react';
import { render } from 'react-dom';

class AuthorsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            authors: [],
            value:'',
            loading: true
        };

        this.getAuthors = this.getAuthors.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addRandomAuthor = this.addRandomAuthor.bind(this);
    }

    render() {
        let contents = this.state.loading
            ? <p><em></em></p>
            : this.renderAuthorsTable();

        return (
            <div>
                <p>
                    Author Name: <input
                        type='text'
                        id="author-name-input"
                        placeholder='Author Name Placeholder'
                        value={this.state.value}
                        onChange={this.handleInputChange}>
                    </input>
                </p>
                {/* <p>
                    Status: <label>Status Placeholder</label>
                </p> */}
                <button id='add-author' onClick={this.addRandomAuthor}>ADD AUTHOR</button>
                <button id='delete-author' onClick={this.deleteAuthor}>DELETE AUTHOR</button>
                <button id='get-authors-list' onClick={this.getAuthors}>GET AUTHORS</button>
                <p>{contents}</p>
            </div>);
    }
    sendPost() {

    }
    renderAuthorsTable() {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Author's id</th>
                    <th>Author's Name</th>
                </tr>
            </thead>
            <tbody>
                {this.state.authors.map(author =>
                    <tr key={author.authorId}>
                        <td>{author.authorId}</td>
                        <td>{author.authorName}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
    handleInputChange(event) {
        this.setState({ value: event.target.value });
    }

    getAuthors() {
        fetch("http://localhost:5001/api/test")
            .then(response => response.json())
            .then(data => this.setState({ authors: data, loading: false }))
    }

    addRandomAuthor() {
        fetch("http://localhost:5001/api/test",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ authorName: this.state.value, booksCount: 2 })
            });

        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
    }
}
export default AuthorsTable;

render(<AuthorsTable />, document.getElementById('root'));

