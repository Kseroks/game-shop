import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

import HomePage from "./pages/home-pages/home-page";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
