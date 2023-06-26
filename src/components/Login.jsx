import React, { useState }  from 'react'
import '../styles/logIn.css'

function Login() 
{
   const [email,setEmail]=useState('')
   const [pass,setPass]=useState('')

   const handlesubmit=(e)=>{
   
       console.log({email})
       console.log({pass})
   }

  return (
      <div className='container d-flex center-div justify-content-center align-items-center flex-column'>
   
       <form onSubmit={handlesubmit} className='form-1'>
          
          <h2>Login</h2>
         

           <div className="form-group">
            <div className='mb-4'>
            <label>Email</label>
              <input type='email'value={email} placeholder='Enter your email id/username' onChange={(e)=> setEmail(e.target.value)} required size={30}></input>
            </div>
         
           <div className='mb-4'>
            <label>Password</label>
            <input type='password' value={pass} placeholder='Entery your password'onChange={(e)=> setPass(e.target.value)} required size={30}></input>
           </div>

           <div class="row mb-4">
            <div class="col-sm-6 offset-sm-3">
             <button type="submit" class="btn btn-primary login-button">Login</button>
            </div>
           </div>

          </div>
        </form>
      </div>
  )
}

export default Login