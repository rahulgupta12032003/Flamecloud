import './App.css';
import { Route, Routes } from "react-router-dom"
import ActionsPlans from './Pages/ActionPlans';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={< ActionsPlans />} />
       </Routes>
    </div>
  );
}

export default App;
