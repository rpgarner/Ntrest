import { GetEventDetails, DeleteEvent } from "../services/Event"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import UpdateEvent from "../components/UpdateEvent"
import { useNavigate, Link } from "react-router-dom"


const EventDetails = (props) => {
    console.log(props.event, 'event details')

    let navigate = useNavigate()

    let {eventId} = useParams()
    eventId = parseInt(eventId)


    const renderEvent = async () => {
        const currentEvent = await GetEventDetails(eventId)
        props.selectedEventHandler(currentEvent)
    }

    useEffect(() => {
       renderEvent()
      }, []);


  const navToUpdate = (eventId) => {
    navigate(`/updateEvent/${eventId}`)
  }

  const deleteEvent = async (eventId) => {
    await DeleteEvent(eventId)
    navigate("/feed")
  }

    return (

        <div>
            <div>
            <h1>{props.event.title}</h1>
            <img src={props.event.event_img}></img>
            </div>
            <div>
            <div>
          <button className="button" onClick={() => navToUpdate(eventId)}>Update</button>
      </div>
      <div >
        <Link to="feed">
          <button className="button" onClick={() => deleteEvent(eventId)}>Delete</button>
        </Link>
      </div>
            </div>
        </div>

    )

}

export default EventDetails