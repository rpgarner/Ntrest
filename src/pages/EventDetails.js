import { GetEventDetails, DeleteEvent } from "../services/Event";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import UpdateEvent from "../components/UpdateEvent";
import { useNavigate, Link } from "react-router-dom";

const EventDetails = (props) => {
  console.log(props.event, "event details");

  let navigate = useNavigate();

  let { eventId } = useParams();
  eventId = parseInt(eventId);

  const renderEvent = async () => {
    const currentEvent = await GetEventDetails(eventId);
    props.selectedEventHandler(currentEvent);
  };

  useEffect(() => {
    renderEvent();
  }, []);

  const navToUpdate = (eventId) => {
    navigate(`/updateEvent/${eventId}`);
  };

  const deleteEvent = async (eventId) => {
    await DeleteEvent(eventId);
    navigate("/feed");
  };

  return (
    <div className="feed">
      <div className="allEvents">
        <div className="paper">
          <h1>{props.event.title}</h1>
          <div className="paperDetails">
            <div className="ntrest">
              <h1 className="pin">.</h1>
              <h1>{props.event.title}</h1>
              <img className="ntrest_img" src={props.event.event_img}></img>
            </div>
            <div className="dets">
              <p className="p">{props.event.location}</p>
              <p className="p">{props.event.directions}</p>
              <p className="p">{props.event.description}</p>
              <p className="p">equipment: {props.event.equipment}</p>
              <p className="p">by: {props.event.created_by}</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <button
              className="register-btn"
              onClick={() => navToUpdate(eventId)}
            >
              Update
            </button>
          </div>
          <div>
            <Link to="feed">
              <button
                className="register-btn"
                onClick={() => deleteEvent(eventId)}
              >
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
