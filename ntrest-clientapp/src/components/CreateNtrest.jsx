import { useState } from "react";
import { AddNtrest } from "../services/Ntrest";


const CreateNtrest = (props) => {
 
    const [formValues, setFormValues] = useState({
        name: "",
        category: "",
        description: "",
        difficulty: "",
        ntrest_img: ""
    });
    
    let userId = props.user.id;
    console.log(userId, 'userId')
    
    const handleNtrest = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    
    const submitData = async (e) => {
        await AddNtrest(userId, {
            name: formValues.name,
            category: formValues.category,
            description: formValues.description,
            difficulty: formValues.difficulty,
            ntrest_img: formValues.ntrest_img
        });
    };
 
    return (
    <div>
      <form className="createForm" onSubmit={submitData}>
        <h1 className="add">+</h1>
        <textarea
          className="textArea"
          type="text"
          value={formValues.name}
          onChange={handleNtrest}
          name={"name"}
          placeholder={"name"}
        />
        <textarea
          className="textArea"
          type="text"
          value={formValues.category}
          onChange={handleNtrest}
          name={"category"}
          placeholder={"category"}
        />
        <textarea
          className="description"
          type="text"
          value={formValues.description}
          onChange={handleNtrest}
          name={"description"}
          placeholder={"description"}
        />
        <textarea
          className="textArea"
          type="text"
          value={formValues.difficulty}
          onChange={handleNtrest}
          name={"difficulty"}
          placeholder={"difficulty"}
        />
         <textarea
          className="textArea"
          type="text"
          value={formValues.ntrest_img}
          onChange={handleNtrest}
          name={"ntrest_img"}
          placeholder={"ntrest_img"}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default CreateNtrest;
