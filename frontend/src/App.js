import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Landingpage from "./screens/landingpage";
import Events from "./screens/events";
import Team from "./screens/team";
import Media from "./screens/media";
import Apply from "./screens/apply";
import Rent from "./screens/rent";
import Sizing from "./screens/sizing";
import DressCode from "./screens/dressCode";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Landingpage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/media" element={<Media />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/sizing" element={<Sizing />} />
            <Route path="/dress-code" element={<DressCode />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
