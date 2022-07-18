import Home from './routes/Home.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import { Button } from 'reactstrap';

function App() {
  return (
    <BrowserRouter>
    <div className='d-flex flex-column align-items-center'>
      <div className='w-100 bg-info'>
    <NavLink to={'/'} ><Button color='danger' className=''>Home</Button></NavLink>
    </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
