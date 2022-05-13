import { GetNtrestDetails } from "../services/Ntrest"



const Categories = (props) => {

return (
    <div> 
        <h1>{props.ntrest.name}</h1>
        <img className="ntrest_img" src={props.ntrest.ntrest_img} alt="" />
    </div>
)

}

export default Categories