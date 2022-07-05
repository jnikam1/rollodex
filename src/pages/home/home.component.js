import React from 'react';
import CardList from '../../components/card-list';
import SearchBox from '../../components/search-box';
import './home.style.css'

class Home extends React.Component {
    // To load the properties i.e. this.state
    constructor() {
        super()
        this.state = {
            // Empty Array to store the data
            users: [],
            // Created empty string with key as searchField
            searchField: ''
        }

    }

    // Step 1 Create a funtion to get the event from input field
    onSearchChange = (event)=>{
        // console.log(event.target.value)
        // Step 4 Updating the searchField with input field 
        this.setState({searchField:event.target.value})
    }

    
    componentDidMount() {

        // To get the data from API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => this.setState({ users: result }))
    }

    render() {
        // Step 5 Filtering the users array with the searchField 
        // By using filter funtion and converting it to lowercase
        let filterUsers = this.state.users.filter((user)=>
            user.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        )
        return (
            <div className='app'>
                <h1>Monster rollodex</h1>
                {/* <p>
                    {this.state.searchField}
                </p> */}

                
                {/* Step 2 onSearchChange passing it as a property to a property change */}
                <SearchBox change = {this.onSearchChange} />

                {/* Step 6 Provided filteredUsers to cardList 
                Whenever empty it will display all the users */}
                <CardList list={filterUsers}/>
                
                
            </div>

        )
    }

}
export default Home;