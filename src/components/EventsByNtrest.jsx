import { useNavigate } from "react-router-dom"


const EventsByNtrest = (props) => {
    console.log(props.eventsByPk, 'yuy')

    let navigate = useNavigate()

    const linkToEventDetail = (event) => {
        navigate(`/event/${event.id}`)
    }

    return ( 

        <div className="ntrests">
            {props.eventsByPk.map((event) => {
                return (
                    <div className="ntrest" onClick={() => linkToEventDetail(event)}>
                       <h1 className="pin">.</h1> 
                    <h1 className="ntrestName">{event.title}</h1>
                    <img className='ntrest_img' src={event.event_img} alt="" />
                    </div>
                )
            })}
        </div>

    )

}

export default EventsByNtrest