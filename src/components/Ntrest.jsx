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

  let navigate = useNavigate();

  const renderNtrest = async () => {
    const currentntrest = await GetNtrestDetails(ntrestId);
    props.selectedNtrestHandler(currentntrest);
  };

  const renderEventsByPk = async () => {
    const currentEvents = await GetEventsByNtrestPk(ntrestId);
    props.setEventsByPkHandler(currentEvents);
  };

  useEffect(() => {
    renderNtrest();
    renderEventsByPk();
  }, []);

  const navToUpdate = (eventId) => {
    navigate(`/updateNtrest/${ntrestId}`);
  };

  const deleteNtrest = async (eventId) => {
    await DeleteNtrest(eventId);
    navigate("/feed");
  };

  return (
    <div>
      <div className="feed">
        <div className="allEvents">
          <div className="paper">
            <h2 className="detailName">{props.ntrest.name}</h2>
            <div className="paperDetails">
              <div className="ntrest">
                <h1 className="pin">.</h1>
                <h1 className="ntrestName">Fly Fishing</h1>
                <img
                  className="ntrest_img"
                  src={props.ntrest.ntrest_img}
                  alt=""
                />
              </div>
              <div className="dets">
                <p className="p">difficulty: {props.ntrest.difficulty}</p>
                <p className="p">{props.ntrest.category}</p>
                <p className="p">{props.ntrest.description}</p>
              </div>
            </div>
            <div>
              <button
                className="register-btn"
                onClick={() => navToUpdate(ntrestId)}
              >
                Update
              </button>
            </div>
            <div>
              <Link to="feed">
                <button
                  className="register-btn"
                  onClick={() => deleteNtrest(ntrestId)}
                >
                  Delete
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="feed">
        <div className="allEvents">
          <h1 className="note">To Do</h1>
          <div>
            <EventsByNtrest eventsByPk={props.eventsByPk} />

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
      </div>
    </div>
  );
};

export default Ntrest;
