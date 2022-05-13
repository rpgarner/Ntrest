


const Events = (props) => {

return (
    <div >
        <h4>{props.event.title}</h4>
        <img className='ntrest_img' src={props.event.event_img} alt="" />
    </div>
)

}

export default Events