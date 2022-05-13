import { useNavigate } from "react-router-dom"


const EventsByNtrest = (props) => {
    console.log(props.eventsByPk, 'yuy')

    let navigate = useNavigate()

    const linkToEventDetail = (event) => {
        navigate(`/event/${event.id}`)
    }

    return ( 

        <div className="event">
            {props.eventsByPk.map((event) => {
                return (
                    <div onClick={() => linkToEventDetail(event)}>
                        
                    <h4>{event.title}</h4>
                    <img className='ntrest_img' src={event.event_img} alt="" />
                    </div>
                )
            })}
        </div>

    )

}

export default EventsByNtrest