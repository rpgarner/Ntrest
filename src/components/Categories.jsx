import { GetNtrestDetails } from "../services/Ntrest"



const Categories = (props) => {

return (
    <div> 
        <h1 className="pin">.</h1>
        <h1 className="ntrestName" >{props.ntrest.name}</h1>
        <img className="ntrest_img" src={props.ntrest.ntrest_img} alt="" />
    </div>
)

}

export default Categories