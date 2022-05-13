import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UpdatedNtrest } from "../services/Ntrest"

const UpdateNtrest= (props) => {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    category: "",
    description: "",
    difficulty: "",
    ntrest_img: ""
  });

  let { ntrestId } = useParams();
  ntrestId = parseInt(ntrestId);


  const handleNtrest = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    await UpdatedNtrest(ntrestId, {
        name: formValues.name,
        category: formValues.category,
        description: formValues.description,
        difficulty: formValues.difficulty,
        ntrest_img: formValues.ntrest_img
    });
    navigate("/feed");
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
          className="description textArea"
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
        <button className="register-btn">add</button>
      </form>
      <button className="register-btn" onClick={() => navigate('/feed')}>back</button>
  </div>
  )
};

export default UpdateNtrest;