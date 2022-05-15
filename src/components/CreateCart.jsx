import { useState } from "react";
import { CreateEvent_List } from "../services/event_list";


const CreateCart = (props) => {
 
    const [formValues, setFormValues] = useState({
        trip: "",
        when: "",
    });
    
    let userId = props.user.id;
    console.log(userId, 'userId')
    
    const handleCart = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    
    const submitData = async (e) => {
        await CreateEvent_List(userId, {
            trip: formValues.trip,
            when: formValues.when,
    })
}
 
    return (
    <div>
     
      <form className="createForm" onSubmit={submitData}>
        <h1 className="note" >+</h1>
        <textarea
          className="textArea"
          type="text"
          value={formValues.trip}
          onChange={handleCart}
          name={"trip"}
          placeholder={"trip"}
        />
        <textarea
          className="textArea"
          type="text"
          value={formValues.when}
          onChange={handleCart}
          name={"when"}
          placeholder={"when"}
        />
        <button className="register-btn">add trip</button>
      </form>
    </div>
  );
};

export default CreateCart;
