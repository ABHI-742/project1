import React, { useState }  from 'react'
import HelmetExport, {Helmet} from "react-helmet"

function Login() 
{
   const [email,setEmail]=useState('')
   const [pass,setPass]=useState('')

   const handlesubmit=(e)=>{
   
       console.log({email})
       console.log({pass})
   }

  return (
      <div className='div-1'>
      <Helmet>
             <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
        <form onSubmit={handlesubmit} className='form-1'>
          <h2>Login</h2>
          <label>email </label>
          <input type='email'value={email} placeholder='enter your email id/username' onChange={(e)=> setEmail(e.target.value)} required></input>
  
          <label>password </label>
          <input type='password' value={pass} placeholder='entery your password'onChange={(e)=> setPass(e.target.value)} required></input>
          <button type='sumbit'>Submit</button>
        </form>
      </div>
  )
}

export default Login