import React from 'react';
import CardList from '../../components/card-list';
import SearchBox from '../../components/search-box';
import './home.style.css'

class Home extends React.Component {
    render() {
        return (
            <div className='app'>
                <h1>Monster rollodex</h1>
                <SearchBox />
                <CardList />
            </div>

        )
    }

}
export default Home;