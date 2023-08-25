import './App.css';
import Resources from './components/Resources';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from './components/Update';
import Add from './components/Add';
import MoreDetails from './components/MoreDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Resources />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/more/:id" element={<MoreDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
