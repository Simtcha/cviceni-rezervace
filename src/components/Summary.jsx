export const Summary = ({hotel, address, city, rating, roomnum, roomtype, price}) => 
    (

    <div className="summary">
        <h2>Booking Summary</h2>
        <div className="summary__head">
          <img className="summary__photo" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960"/>
          <div className="summary__head-property">
            <h3 className="summary__name">{hotel}</h3>
            <div className="summary__adress">{address}</div>
            <div className="summary__city">{city}</div>
            <div className="summary__rating">Hodnocení: {rating}</div>
          </div>
                  
          <div className="summary__head-room">
            <h3 className="summary__name">Pokoj {roomnum}</h3>
            <div className="summary__room-type">{roomtype}</div>
            <div className="summary__room-price">{price}</div>
          </div>
        </div>
    </div>

    )

