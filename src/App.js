import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import ProctetedRoutes from "./Helper/ProtectedRoutes"
import Home from "./components/Home";
import CreateMeeting from "./components/CreateMeeting";
import Room from "./components/Room";
import { useState } from "react";
import Logout from "./components/Logout";
import Navbar from './components/Navbar'
import MyMeetings from "./components/MyMeetings";
import JoinRoom from "./components/JoinRoom";
import Profile from "./components/Profile";



function App() {
  

  return (
    <div>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route element={<ProctetedRoutes />}>
            <Route element={<Profile/>} exact path="/profile" />
            <Route element={<CreateMeeting />} exact path="/createmeeting" />
            <Route element={<MyMeetings />} exact path="/getMeetings" />
            <Route element={<Logout/>} exact path="/logout"/>
          </Route>

            <Route element={<Home  />} exact path="/" />
            <Route element={<JoinRoom  />} exact path="/joinnow" />

             <Route element={<Room  />} path="/room/:meetingUrl"/>
            
            <Route element={<Signup  />} exact path="/signup" /> 
            <Route element={<Signin  />} exact path="/signin" />
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
