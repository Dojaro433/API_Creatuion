
import './App.css';
import Mytable from './component/Mytable';

import{Routes, Route} from "react-router-dom";
import Myform from "./component/Myform";

import Home from './component/Home';

import Addivic from './component/Addivic';



function App() {
  return (
    <div className="App">
       



       <Routes>
        
       <Route path="/" element={<Home></Home>}/>
      <Route path="/Myform" element={<Myform></Myform>}/>
      <Route path="/Addvic" element={<Addivic></Addivic>}></Route>

       </Routes>
    </div>
  );
}

export default App;
