import { GetNtrestDetails } from "../services/Ntrest";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CreateNtrest from "../components/CreateNtrest";
import EventsByNtrest from "./EventsByNtrest";
import { GetEventsByNtrestPk } from "../services/Event";

const Ntrest = (props) => {
  let { ntrestId } = useParams();
  ntrestId = parseInt(ntrestId);

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

  return (
    <div>
      <div>
        <h4>{props.ntrest.name}</h4>
        <img src={props.ntrest.ntrest_img} alt="" />
        <p>difficulty: {props.ntrest.difficulty}</p>
        <p>{props.ntrest.category}</p>
        <p>{props.ntrest.description}</p>
      </div>
      <div>
        <CreateNtrest user={props.user} />
      </div>
      <div>
          <h3>things you could do</h3>
            <EventsByNtrest 
                eventsByPk={props.eventsByPk}

            /> 
      </div>
    </div>
  );
};

export default Ntrest;
