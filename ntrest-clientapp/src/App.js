import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Ntrest from "./components/Ntrest";
import { useState, useEffect } from "react";
import { CheckSession } from "./services/Auth";

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [ntrests, setNtrests] = useState([]);
  const [ntrest, setNtrest] = useState([]);
  const [events, setEvents] = useState([])
  const [event, setEvent] = useState([])

  let userId = user.id;

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  const setUserProfileHandler = (user) => {
    setUserProfile(user);
  };

  const setUserHandler = (aUser) => {
    setUser(aUser);
  };

  const setAllNtrestsHandler = (allNtrests) => {
    setNtrests(allNtrests);
  };

  const SetAllEventsHandler = (allEvents) => {
    setEvents(allEvents)
  }


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <div>
          <Routes>
            <Route index element={<Welcome />} />
            <Route
              path="register"
              element={
                <Register
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                  setUserProfileHandler={setUserProfileHandler}
                />
              }
            />
            <Route
              path="Feed"
              element={
                <Feed
                  user={user}
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                  setUserHandler={setUserHandler}
                  ntrests={ntrests}
                  setAllNtrestsHandler={setAllNtrestsHandler}
                  events={events}
                  SetAllEventsHandler={SetAllEventsHandler}
                />
              }
            />
            <Route 
              path="feed/categories/:ntrestId"
              element={
                <Ntrest 
                ntrests={ntrests}
                setAllNtrestsHandler={setAllNtrestsHandler}
                />
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
