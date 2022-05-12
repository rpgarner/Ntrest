import { GetNtrestDetails } from "../services/Ntrest"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import CreateNtrest  from "../components/CreateNtrest"



const Ntrest = (props) => {

    let {ntrestId} = useParams()
    ntrestId = parseInt(ntrestId)

    const renderNtrest = async () => {
        const currentntrest = await GetNtrestDetails(ntrestId)
        props.selectedNtrestHandler(currentntrest)
    }

    useEffect(() => {
        renderNtrest();
      
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
            <CreateNtrest user={props.user}/>
        </div>
    </div>
)

}

export default Ntrest