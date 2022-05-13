


const Events = (props) => {

return (
    <div >
        <h1 className="pin">.</h1>
        <h1 className="ntrestName">{props.event.title}</h1>
        <img className='ntrest_img' src={props.event.event_img} alt="" />
    </div>
)

}

export default Events