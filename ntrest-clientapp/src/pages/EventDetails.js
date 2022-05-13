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

        <div className="categories">
            <div>
            <h1>{props.event.title}</h1>
            <p>{props.event.location}</p>
            <img className="detail_img" src={props.event.event_img}></img>
            <p>{props.event.directions}</p>
            <p>{props.event.description}</p>
            <p>equipment: {props.event.equipment}</p>
            <p>by: {props.event.created_by}</p>
            </div>
            <div>
            <div>
          <button className="register-btn" onClick={() => navToUpdate(eventId)}>Update</button>
      </div>
      <div >
        <Link to="feed">
          <button className="register-btn" onClick={() => deleteEvent(eventId)}>Delete</button>
        </Link>
      </div>
            </div>
        </div>

    )

}

export default EventDetails