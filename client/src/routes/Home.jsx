import React, {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <div className='d-flex justify-content-around gap-5 w-100 bg-info'>
        <div>
        <NavLink to={'/signin'} ><Button color='danger' > Sign In</Button></NavLink>
        </div>
        <div>
        <NavLink to={'/signup'} > <Button color='danger'> Sign Up</Button></NavLink>
        </div>
    </div>
  )
}
