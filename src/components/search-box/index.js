import './index.css'

function SearchBox(props) {
    // const filteredUser = this.state.users.filter(user => user.name=="Ervin Howell")
    return (
        <div>
            {/* Step 3 Here calling it as property onChange */}
            <input onChange={props.change} type="text" className="search-box" placeholder='Search Monster'/>
             
        </div>
    )
}

export default SearchBox