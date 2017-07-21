import React from 'react';
import { render } from 'react-dom';
import { Button, Header, Icon, Modal, Input, Label, Menu, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import AuthorsTable from './AuthorsTable';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            authors: [],
            value: '',
            loading: true,
            modalWindowMessage: '',
        };

        this.getAuthors = this.getAuthors.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addRandomAuthor = this.addRandomAuthor.bind(this);
        this.deleteAuthor = this.deleteAuthor.bind(this);
        this.handleAddAuthor = this.handleAddAuthor.bind(this);
        this.handleDeleteAuthor = this.handleDeleteAuthor.bind(this);
    }

    handleOpen = (e) => this.setState({
        modalOpen: true,

    });

    handleAddAuthor = (e) => this.setState({
        modalOpen: true,
        modalWindowMessage: 'Author has been succesfully added'

    });

    handleDeleteAuthor = (e) => this.setState({
        modalOpen: true,
        modalWindowMessage: 'Author has been succesfully deleted'

    })

    handleClose = (e) => this.setState({
        modalOpen: false,
    });

    render() {
        let contents = this.state.loading
            ? <p><em></em></p>
            : this.renderAuthorsTable();

        return (
            <Modal
                trigger={
                    <div><br />
                        <Input placeholder='Search...' /><br /> <br />
                        <Button primary onClick={this.handleAddAuthor}>Add Author</Button>
                        <Button secondary onClick={this.handleDeleteAuthor}>Delete Author</Button>
                        <Button inverted color='blue' onClick={this.renderAuthorsTable}>Get Authors List</Button>

                        <AuthorsTable />

                    </div>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Header icon='browser' content='Authors' />
                <Modal.Content>
                    <h3>{this.state.modalWindowMessage}</h3>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> Got it
                    </Button>
                </Modal.Actions>
            </Modal>
            // <div>
            //     <p>
            //         Author Name: <input
            //             type='text'
            //             id="author-name-input"
            //             placeholder='Author Name Placeholder'
            //             //ref={input => this.setState({value: input})}
            //             value={this.state.value}
            //             onChange={this.handleInputChange}>
            //         </input>
            //     </p>
            //     {/* <p>
            //         Status: <label>Status Placeholder</label>
            //     </p> */}
            //     <button id='add-author' onClick={this.addRandomAuthor}>ADD AUTHOR</button>
            //     <button id='delete-author' onClick={this.deleteAuthor}>DELETE AUTHOR</button>
            //     <button id='get-authors-list' onClick={this.getAuthors}>GET AUTHORS</button>
            //     <p>{contents}</p>
            // </div>
        );
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

    deleteAuthor(name) {
        fetch("http://localhost:5001/api/test",
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify({ authorId: 90, booksCount: 2 })
            });
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

        function makeAuthorId() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
    }
}
export default AuthorsTable;

render(<App />, document.getElementById('root'));

