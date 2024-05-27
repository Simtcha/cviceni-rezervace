
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
}