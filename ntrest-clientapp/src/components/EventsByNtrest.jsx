


const EventsByNtrest = (props) => {
    console.log(props.eventsByPk, 'yuy')

    return ( 

        <div>
            {props.eventsByPk.map((event) => {
                return (
                    <div>
                    <h4>{event.title}</h4>
                    <img src={event.event_img} alt="" />
                    </div>
                )
            })}
        </div>

    )

}

export default EventsByNtrest