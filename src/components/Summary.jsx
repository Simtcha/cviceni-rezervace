export const Summary = (props) => {
    return (

    <div className="summary">
        <h2>Booking Summary</h2>
        <div className="summary__head">
          <img className="summary__photo" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960"/>
          <div className="summary__head-property">
            <h3 className="summary__name">{props.hotel}</h3>
            <div className="summary__adress">{props.address}</div>
            <div className="summary__city">{props.city}</div>
            <div className="summary__rating">Hodnocení: {props.rating}</div>
          </div>
                  
          <div className="summary__head-room">
            <h3 className="summary__name">Pokoj {props.roomnum}</h3>
            <div className="summary__room-type">{props.roomtype}</div>
            <div className="summary__room-price">{props.price}</div>
          </div>
        </div>
    </div>

    )
}
