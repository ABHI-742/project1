import React, { useState }  from 'react'
import '../styles/logIn.css'
import { Typography } from '@mui/material';
import {Link} from 'react-router-dom'
import axios from 'axios';
function Login() 
{
  const[credentials,setcredentials] = useState({email:"",password:""})

   const handlesubmit=async(e)=>{
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:5000/api/loginUser', credentials);

      // Assuming the response contains a token
      const { token } = response.data;

      // Do something with the token (e.g., store it in localStorage)

      
      setcredentials({ email: '', password: '' });

      // Display a success message or redirect the user
      alert('Logged in successfully');
    } catch (err) {
      console.log('Error logging in:', err);
      alert('Failed to login');
    }
      
   }
   const handleChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
      <div className='container d-flex center-div justify-content-center align-items-center flex-column'>
   
         <div  className='text-white fs-1 mt-5'>
           <Typography variant='h3'>LogIn</Typography>
         </div>
       <form onSubmit={handlesubmit} className='form-1'>

           <div className="form-group mt-5">
             <div className='mb-4'>
              <input type='email'value={credentials.email} placeholder='Email Id' name="email" onChange={handleChange} required size={30} autoComplete='off' className="form-control custom-input"></input>
             </div>
         
             <div className='mb-4'>
               <input type='password' value={credentials.password} placeholder='Password' name="password" onChange={handleChange} required size={30} autoComplete='off' className="form-control custom-input"></input>
             </div>

              <div class="row mb-4">
                <div class="col-sm-6 offset-sm-3">
                  <button type="submit" class="btn btn-primary login-button">Login</button>
                 </div>
              </div>

              <div className='' style={{"marginLeft":"2em"}}>
                <Typography variant='body'>
                  Don't Have An Account ?{' '}
    <                  Link to='/signup' style={{"marginLeft":"0.5em","textDecoration":"none"}}>
                     SignUp Here
                    </Link>
                      </Typography>
           </div>

          </div>
        </form>
      </div>
  )
}

export default Login