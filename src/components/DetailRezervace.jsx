
export const DetailRezervace = ({ bookingnum, dates, guests, food, totalprice, checkin, checkout}) => 
     (

<div className="summary__detail">
    <h3>Detail rezervace</h3>
        <div className="summary__number">{bookingnum}</div>
        <div className="summary__dates">Pobyt: {dates}</div>
        <div className="summary__guests">{guests}</div>
        <div className="summary__services">Stravovávní: {food}</div>
        <div className="summary__room-total">Cena: {totalprice}</div>
        <div className="summary__check-in">Check-in: {checkin}</div>
        <div className="summary__check-out">Check-out: {checkout}</div>
</div>
    )



/*
export const DetailRezervace = (props) => {
    return (

<div className="summary__detail">
    <h3>Detail rezervace</h3>
        <div className="summary__number">{props.bookingnum}</div>
        <div className="summary__dates">Pobyt: {props.dates}</div>
        <div className="summary__guests">{props.guests}</div>
        <div className="summary__services">Stravovávní: {props.food}</div>
        <div className="summary__room-total">Cena: {props.totalprice}</div>
        <div className="summary__check-in">Check-in: {props.checkin}</div>
        <div className="summary__check-out">Check-out: {props.checkout}</div>
</div>
    )
} */