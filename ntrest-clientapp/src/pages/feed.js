import Categories from "../components/Categories"
import { GetAllNtrests } from "../services/Ntrest";
import React, { useEffect } from "react";
import Events from "../components/Events";
import { GetAllEvents } from "../services/Event";
import { Navigate, useNavigate } from "react-router-dom";



const Feed = (props) => {
    let navigate = useNavigate()
    const showNtrests = async () => {
        const ntrests = await GetAllNtrests();
        props.setAllNtrestsHandler(ntrests);
      };

      useEffect(() => {
        showNtrests();
        showRecentEvents()
      }, []);
    
    const showRecentEvents = async () => {
        const events = await GetAllEvents()
        props.SetAllEventsHandler(events)
    }

    const LinkToNtrestDetail = (ntrest) => {
        Navigate(`feed/categories/${ntrest.id}`)
    }

    return (

        <div>
            <div>
                <h1>Categories</h1>
                {props.ntrests.map((ntrest) => (
                  <div 
                    onClick={() => LinkToNtrestDetail(ntrest)}
                  >
                      <Categories ntrest={ntrest} />
            
                  </div>  
                ))}
            </div>
            <div>
                <h1>Recent Events</h1>
                {props.events.map((event) => (
                <div>
                <Events event={event}/>
                </div>
                ))}
            </div>
        </div>

    )
}

export default Feed 