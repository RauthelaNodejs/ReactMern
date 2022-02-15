import './Login.css';
import React,{useState} from 'react';
import axios from 'axios';
function Login (props){
    const [email ,setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(){
        console.warn(email,password)
        let loginData = {email,password};
        console.warn(loginData)
        axios.post(`http://localhost:5002/login`, { loginData })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
    return(
        <div className="temp-1">
            <h1 >hello userLogin</h1>
            <input type="text" placeholder='please enter Email' className='temp-2'onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='please enter password' className='temp-2' onChange={(e)=>setPassword (e.target.value)} />
            <button  onClick={login}   className='btn'>Login</button>
        </div>
    )
}


export default Login;