import { CreateEvent } from "../services/Event";
import { useParams } from "react-router-dom";
import { useState } from "react";

const AddEvent = (props) => {
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
  let userId = parseInt(props.ntrest.userId);
  const handleEvent = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitData = async () => {
    await CreateEvent(userId, ntrestId, {
      title: formValues.title,
      directions: formValues.directions,
      equipment: formValues.equipment,
      location: formValues.location,
      description: formValues.description,
      cost: formValues.cost,
      event_img: formValues.event_img,
      created_by: formValues.created_by,
    });
  };

  return (
    <div>
      <form className="form" onSubmit={submitData}>
        <textarea
          className="textArea"
          type="text"
          value={formValues.title}
          onChange={handleEvent}
          name="title"
          placeholder="title"
          required
        />
        <textarea
          className="textArea"
          type="text"
          value={formValues.directions}
          onChange={handleEvent}
          name="directions"
          placeholder="directions"
          required
        />
         <textarea
          className="textArea"
          type="text"
          value={formValues.equipment}
          onChange={handleEvent}
          name="equipment"
          placeholder="equipment"
          required
        />
         <textarea
          className="textArea"
          type="text"
          value={formValues.location}
          onChange={handleEvent}
          name="location"
          placeholder="location"
          required
        />
         <textarea
          className="textArea"
          type="text"
          value={formValues.description}
          onChange={handleEvent}
          name="description"
          placeholder="description"
          required
        />
         <textarea
          className="textArea"
          type="text"
          value={formValues.cost}
          onChange={handleEvent}
          name="cost"
          placeholder="cost"
          required
        />
         <textarea
          className="textArea"
          type="text"
          value={formValues.event_img}
          onChange={handleEvent}
          name="event_img"
          placeholder="event_img"
          required
        />
         <textarea
          className="textArea"
          type="text"
          value={formValues.created_by}
          onChange={handleEvent}
          name="created_by"
          placeholder="created_by"
          required
        />
        <button className="register-btn">add</button>
      </form>
    </div>
  );
};

export default AddEvent;
