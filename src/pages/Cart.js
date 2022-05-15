import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { GetEvent_ListByuserPk } from "../services/event_list";
import { useEffect } from "react";
import CreateCart from "../components/CreateCart";


const Cart = (props) => {

    // let { userId } = useParams();
    // userId = parseInt(userId);

    let userId = props.user.id
       userId = parseInt(userId);
  
    let navigate = useNavigate()
  
    const renderCarts = async () => {
      const currentCart = await GetEvent_ListByuserPk(userId);
      props.SetAllCartsHandler(currentCart);
    };
  
    // const renderEventsByPk = async () => {
    //     const currentEvents = await GetEventsByNtrestPk(ntrestId)
    //     props.setEventsByPkHandler(currentEvents)
    // }
  
    useEffect(() => {
      renderCarts();
    //   renderEventsByPk()
    }, []);
  
    // const navToUpdate = (eventId) => {
    //   navigate(`/updateNtrest/${ntrestId}`)
    // }
  
    // const deleteNtrest = async (eventId) => {
    //   await DeleteNtrest(eventId)
    //   navigate("/feed")
    // }

    const LinkToCartDetail = (cart) => {
        navigate(`mycart/events/${cart.id}`);
      };

    return (
        <div className="feed">
            <div className="allEvents">
                <h1 className="note">Trips</h1>
                <div className="ntrests">
        {props.carts.map((cart) => {
          return (
            <div className="ntrest" onClick={() => LinkToCartDetail(cart)}>
                <div> 
        
        <h1 className="pin">.</h1>
        <h1 className="ntrestName" >{cart.trip}</h1>
        <h4 className="ntrest_img" >{cart.when} </h4>
    </div>
              
            </div>
          );
        })}
        </div>
            <CreateCart user={props.user} />
            </div>
      </div>
         
    )

}

export default Cart 