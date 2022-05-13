import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UpdatedNtrest } from "../services/Ntrest"

const UpdateNtrest= (props) => {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    title: "",
    directions: "",
    equipment: "",
    location: "",
    description: "",
    cost: 0,
    event_img: "",
    created_by: "",
  });

  let { ntrestId } = useParams();
  ntrestId = parseInt(ntrestId);


  const handleEvent = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    await UpdatedNtrest(ntrestId, {
        title: formValues.title,
        directions: formValues.directions,
        equipment: formValues.equipment,
        location: formValues.location,
        description: formValues.description,
        cost: formValues.cost,
        event_img: formValues.event_img,
        created_by: formValues.created_by,
    });
    navigate("/feed");
  };

  return (
  <div>
         <form className="form" onSubmit={submitData}>
        <textarea
          className="EventInputtitle"
          type="text"
          value={formValues.title}
          onChange={handleEvent}
          name="title"
          placeholder="title"
       
        />
        <textarea
          className="EventInput"
          type="text"
          value={formValues.directions}
          onChange={handleEvent}
          name="directions"
          placeholder="directions"
       
        />
         <textarea
          className="EventInput"
          type="text"
          value={formValues.equipment}
          onChange={handleEvent}
          name="equipment"
          placeholder="equipment"
         
        />
         <textarea
          className="EventInput"
          type="text"
          value={formValues.location}
          onChange={handleEvent}
          name="location"
          placeholder="location"
         
        />
         <textarea
          className="EventInput"
          type="text"
          value={formValues.description}
          onChange={handleEvent}
          name="description"
          placeholder="description"
       
        />
         <textarea
          className="EventInput"
          type="text"
          value={formValues.cost}
          onChange={handleEvent}
          name="cost"
          placeholder="cost"
        
        />
         <textarea
          className="EventInput"
          type="text"
          value={formValues.event_img}
          onChange={handleEvent}
          name="event_img"
          placeholder="event_img"
        />
         <textarea
          className="EventInput"
          type="text"
          value={formValues.created_by}
          onChange={handleEvent}
          name="created_by"
          placeholder="created_by"
          
        />
        <button className="button">Update Event</button>
      </form>
      <button onClick={() => navigate('/feed')}>back</button>
  </div>
  )
};

export default UpdateNtrest;