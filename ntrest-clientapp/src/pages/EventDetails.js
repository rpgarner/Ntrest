import { GetEventDetails } from "../services/Event"
import { useParams } from "react-router-dom"
import { useEffect } from "react"


const EventDetails = (props) => {
    console.log(props.event, 'event details')

    let {eventId} = useParams()
    eventId = parseInt(eventId)


    const renderEvent = async () => {
        const currentEvent = await GetEventDetails(eventId)
        props.selectedEventHandler(currentEvent)
    }

    useEffect(() => {
       renderEvent()
      }, []);

    return (

        <div>
            <h1>{props.event.title}</h1>
            <img src={props.event.event_img}></img>

        </div>

    )

}

export default EventDetails