import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import CreateMedicine from './pages/CreateMedicine';
import Mymed from './pages/Mymed';
import Info from './pages/Info';
export default function App(){
  
  return (<BrowserRouter>
    <Routes>
      <Route path ="/dashboard" element ={<Home/>}></Route>
      <Route path ="/signup" element ={<Signup/>}></Route>
      <Route path ="/signin" element ={<Signin/>}></Route>
      <Route path ="/create" element ={<CreateMedicine/>}></Route>
      <Route path ="/mymed" element ={<Mymed/>}></Route>
      <Route path ="/info" element ={<Info/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}