import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomID" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
