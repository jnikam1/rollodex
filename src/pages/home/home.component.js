import React from 'react';
import CardList from '../../components/card-list';
import SearchBox from '../../components/search-box';
import './home.style.css'

class Home extends React.Component {
    
    constructor() {
        super()
        this.state = {
            users: []
        }

    }
    componentDidMount() {

        // To get the data from API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => this.setState({ users: result }))
    }

    render() {
        return (
            <div className='app'>
                <h1>Monster rollodex</h1>
                
                <SearchBox />
                <CardList list={this.state.users}/>
                
                
            </div>

        )
    }

}
export default Home;