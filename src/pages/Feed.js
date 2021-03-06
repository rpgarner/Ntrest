import Categories from "../components/Categories";
import { GetAllNtrests } from "../services/Ntrest";
import { useEffect } from "react";
import Events from "../components/Events";
import { GetAllEvents } from "../services/Event";
import { useNavigate } from "react-router-dom";
import CreateNtrest from "../components/CreateNtrest";

const Feed = (props) => {
  let navigate = useNavigate();
  const showNtrests = async () => {
    const ntrests = await GetAllNtrests();
    props.setAllNtrestsHandler(ntrests);
  };

  useEffect(() => {
    showNtrests();
    showRecentEvents();
  }, []);

  const showRecentEvents = async () => {
    const events = await GetAllEvents();
    props.SetAllEventsHandler(events);
  };

  const LinkToNtrestDetail = (ntrest) => {
    navigate(`categories/${ntrest.id}`);
  };

  const linkToEventDetail = (event) => {
    navigate(`/event/${event.id}`);
  };

  return (
    <div>
      <div className="feed">
        <div className="allEvents">
          <h1 className="note">Ntrest</h1>
          <div className="ntrests">
            {props.ntrests.map((ntrest) => {
              return (
                <div
                  className="ntrest"
                  onClick={() => LinkToNtrestDetail(ntrest)}
                >
                  <Categories
                    ntrest={ntrest}
                    user={props.user}
                    setUser={props.setUser}
                    setUserHandler={props.setUserHandler}
                    toggleAuthenticated={props.toggleAuthenticated}
                  />
                </div>
              );
            })}
          </div>
          <CreateNtrest user={props.user} />
        </div>
      </div>
      <div className="feed">
        <div className="allEvents">
          <h1 className="note">All Events</h1>
          <div className="ntrests">
            {props.events.map((event) => (
              <div className="ntrest" onClick={() => linkToEventDetail(event)}>
                <Events
                  event={event}
                  user={props.user}
                  setUser={props.setUser}
                  setUserHandler={props.setUserHandler}
                  toggleAuthenticated={props.toggleAuthenticated}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
