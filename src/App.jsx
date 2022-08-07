import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import EditTask from './pages/EditTask';
import Login from './pages/Login';
import Register from './pages/Register';
import NewTask from './pages/NewTask';
import Summary from './pages/Summary';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/newTask' element={<NewTask/>}/>
        <Route path='/editTask' element={<EditTask/>}/>
      </Routes>
    </div>
  );
}

export default App;
