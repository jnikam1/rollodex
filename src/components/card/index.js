import './index.css'

function Card(props) {
    return (
        <div className="card">
            <img src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`} alt="Rollodex_image" />
            <h2>{props.user.name}</h2>
            <p>{props.user.email}</p>

        </div>
    )
}

export default Card