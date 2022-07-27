import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import EditTask from './pages/EditTask';
import Login from './pages/Login';
import Register from './pages/Register';
import NewTask from './pages/NewTask';
import Summary from './pages/Summary';
import { Private } from './components/Private';



function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/summary' element={<Private><Summary/></Private>}/>
        <Route path='/newTask' element={<Private><NewTask/></Private>}/>
        <Route path='/editTask' element={<Private><EditTask/></Private>}/>
      </Routes>
    </div>
  );
}

export default App;
