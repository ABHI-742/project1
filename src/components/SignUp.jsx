import React , {useState} from 'react'
import { Typography } from '@mui/material';
import {Link} from 'react-router-dom'
import '../styles/signup.css'
import axios from 'axios';
export default function SignUp() {

  const[credentials,setcredentials] = useState({username:"",email:"",password:"",confirmPassword:""})

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/createUser', credentials);
  
      // Reset the form
      setcredentials({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
  
      // Display a success message or redirect the user
      alert('User created successfully');
    } catch (err) {
      console.log('Error creating User ', err);
      alert('Failed to create User');
    }
  };

    const onChange = (event) =>{
      setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (

  <div className='container d-flex center-div justify-content-center align-items-center flex-column'>
     <div  className='text-white fs-1 mt-5'>
      <Typography variant='h3'>SignUp</Typography>
      </div>
      <form onSubmit={handleSubmit} className='mt-5'>
      <div className="form-group">
       <div className='mb-4'>
      <input type="text" id="customInput" class="form-control custom-input" size={30} name='username' placeholder='Username' value={credentials.username} onChange={onChange} autoComplete='off'/>
      </div>
      <div className='mb-4'>
      <input type="email" id="customInput1" class="form-control custom-input" size={30} name='email' placeholder='Email Id' value={credentials.email} onChange={onChange} autoComplete='off'/>
      </div>
      <div className='mb-4'>
      <input type="password" id="customInput2" class="form-control custom-input" size={30} name='password' placeholder='Password' value={credentials.password} onChange={onChange}/>
      </div>
      <div className='mb-5'>
      <input type="password" id="customInput3" class="form-control custom-input" size={30} name='confirmPassword' placeholder='Confirm Password' value={credentials.confirmPassword} onChange={onChange}/>
      </div>
      <div class="row mb-4">
        <div class="col-sm-6 offset-sm-3">
          <button type="submit" class="btn btn-primary signup-btn">Create Account</button>
        </div>
      </div>
      <div className='' style={{"marginLeft":"2em"}}>
      <Typography variant='body'>
    Already Have An Account ?{' '}
    <Link to='/login' style={{"marginLeft":"0.5em","textDecoration":"none"}}>
      Login Here
    </Link>
  </Typography>
           </div>

    </div>
      </form>
  </div>
  )
}

