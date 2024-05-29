
export const DoplnkoveSluzby = ({ parking, breakfast, wellness, wifi }) => 
    (
<div className="summary__services">
    <h3>Doplňkové služby</h3>
    <div className="summary__service">{parking}</div>
    <div className="summary__service">{breakfast}</div>
    <div className="summary__service">{wellness}</div>
    <div className="summary__service">{wifi}</div>
</div>
    )


/*
export const DoplnkoveSluzby = (props) => {
    return (

<div className="summary__services">
    <h3>Doplňkové služby</h3>
    <div className="summary__service">{props.parking}</div>
    <div className="summary__service">{props.breakfast}</div>
    <div className="summary__service">{props.wellness}</div>
    <div className="summary__service">{props.wifi}</div>
</div>
    )
} */