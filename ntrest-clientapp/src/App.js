import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import Ntrest from "./components/Ntrest";
import { useState, useEffect } from "react";
import { CheckSession } from "./services/Auth";
import EventDetails from "./pages/EventDetails";

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [ntrests, setNtrests] = useState([]);
  const [ntrest, setNtrest] = useState([]);
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);
  const [eventsByPk, setEventsByPk] = useState([])

  console.log(userProfile, "userProfile");
  console.log(user, 'user')

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
    setEvents(allEvents);
  };

  const selectedNtrestHandler = (selectedNtrest) => {
    setNtrest(selectedNtrest);
  };

  const selectedEventHandler = (selectedEvent) => {
    setEvent(selectedEvent)
  }

  const setEventsByPkHandler = (eventsPk) => {
    setEventsByPk(eventsPk)
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      <Navbar userProfile={userProfile}
      user={user} />
      <main>
        <div>
          <Routes>
            <Route
              index
              element={
                <Welcome
                  user={user}
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                  setUserProfileHandler={setUserProfileHandler}
                />
              }
            />
            <Route
              path="register"
              element={
                <Register
                  user={user}
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
                  ntrest={ntrest}
                  setAllNtrestsHandler={setAllNtrestsHandler}
                  selectedNtrestHandler={selectedNtrestHandler}
                  user={user}
                  toggleAuthenticated={toggleAuthenticated}
                  setUserHandler={setUserHandler}
                  eventsByPk={eventsByPk}
                  setEventsByPk={setEventsByPk}
                  setEventsByPkHandler={setEventsByPkHandler}
                />
              }
            />
            <Route 
            path="event/:eventId"
            element={
              <EventDetails 
                event={event}
                selectedEventHandler={selectedEventHandler}
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
