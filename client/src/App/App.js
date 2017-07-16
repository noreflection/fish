import React from 'react';
import { render } from 'react-dom';

class AuthorsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            authors: [],
            loading: true
        };

        fetch("http://localhost:5001/api/test")
            .then(response => response.json())
            .then(data => this.setState({ authors: data, loading: false }))
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderAuthorsTable();
        return <div>{contents}</div>;
    }

    renderAuthorsTable() {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Author's Names</th>

                </tr>
            </thead>
            <tbody>
            {this.state.authors.map(author =>
                <tr key={ author.id }>
                    <td>{ author.authorName }</td>
                </tr>
            )}
            </tbody>
        </table>;
    }
}
export default AuthorsTable;
render(<AuthorsTable />, document.getElementById('root'));

