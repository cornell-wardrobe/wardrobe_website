import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout";
import Landingpage from "./screens/landingpage";
import Events from "./screens/events";
import Team from "./screens/team";
import Media from "./screens/media";
import Apply from "./screens/apply";

function App() {
  return (
    <div>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/media" element={<Media />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
