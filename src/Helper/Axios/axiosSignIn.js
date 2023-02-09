import axios from 'axios';
// 'http://localhost:2002/register'
const url='http://localhost:8080/signin'

console.log(url)

const axiosSignin=async({email,password})=>{  
    console.log(email)  
    let response=await axios.post(url,{email,password})
        
        return response;
    
    
}


export default axiosSignin;


    





