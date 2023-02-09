import axios from 'axios';
import { Navigate } from 'react-router-dom';

// 'http://localhost:2002/register'
const url='http://localhost:8080/signup'

console.log(url)

const Signup=async({firstName,lastName,email,password,contactNumber})=>{    
    console.log(firstName,lastName,email,password,contactNumber)
    let response=await axios.post(url,{firstName,lastName,email,password,contactNumber})
        
        return response; 
}


export default Signup;


    





