import { GetNtrestDetails } from "../services/Ntrest";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CreateNtrest from "../components/CreateNtrest";
import EventsByNtrest from "./EventsByNtrest";
import { GetEventsByNtrestPk } from "../services/Event";
import AddEvent from "./AddEvent";
import { useNavigate } from "react-router-dom";
import { DeleteNtrest } from "../services/Ntrest";
import { Link } from "react-router-dom";

const Ntrest = (props) => {
  let { ntrestId } = useParams();
  ntrestId = parseInt(ntrestId);

  let navigate = useNavigate()

  const renderNtrest = async () => {
    const currentntrest = await GetNtrestDetails(ntrestId);
    props.selectedNtrestHandler(currentntrest);
  };

  const renderEventsByPk = async () => {
      const currentEvents = await GetEventsByNtrestPk(ntrestId)
      props.setEventsByPkHandler(currentEvents)
  }

  useEffect(() => {
    renderNtrest();
    renderEventsByPk()
  }, []);

  const navToUpdate = (eventId) => {
    navigate(`/updateNtrest/${ntrestId}`)
  }

  const deleteNtrest = async (eventId) => {
    await DeleteNtrest(eventId)
    navigate("/feed")
  }

  return (
    <div >
      <div className="categories">
        <h4>{props.ntrest.name}</h4>
        <img className="detail_img" src={props.ntrest.ntrest_img} alt="" />
        <p>difficulty: {props.ntrest.difficulty}</p>
        <p>{props.ntrest.category}</p>
        <p>{props.ntrest.description}</p>
      
      <div>
      <button className="register-btn" onClick={() => navToUpdate(ntrestId)}>Update</button>
      </div>
      <div >
        <Link to="feed">
          <button className="register-btn" onClick={() => deleteNtrest(ntrestId)}>Delete</button>
        </Link>
      </div>
      </div>
      <div className="categories">
          <h3>things you could do</h3>
            <EventsByNtrest 
                eventsByPk={props.eventsByPk}
                
            /> 
      
     
      <div>
          <AddEvent 
            ntrest={props.ntrest}
            user={props.user}
            setUser={props.setUser}
            setUserHandler={props.setUserHandler}
            toggleAuthenticated={props.toggleAuthenticated}
          /> 
      </div>
      </div>
    </div>
  );
};

export default Ntrest;
