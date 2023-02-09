import { Paper, Box,TextField, Button } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {Container} from '@mui/material'
import { axiosCreateMeeting } from '../Helper/Axios/axiosCreateMeeting';
// import Room from './Room'






const CreateMeeting = () => {

  const navigate = useNavigate();

  const [errors,setErrors]=useState("");
  const [validated,setValidated]=useState(false);
  const [inputs,setInputs]=useState({
    "meetingName":"",
    "sizeOfMeeting":null,
  })

  const [date,setDate]=useState();


  useEffect(() => {
    
    if (Object.keys(errors).length === 0 && validated) {
        navigate('/createmeeting')
    }
    // eslint-disable-next-line
}, [errors])


  
  const handelInputs = (e) => {
    setInputs((prevstate) => ({
        ...prevstate, [e.target.name]: e.target.value
    }))
}
   
const handelSubmit=async (e)=>{
    // console.log(inputs.scheduleDate,inputs.meetingName,inputs.sizeOfMeeting)
    // console.log(new Date(inputs.scheduleDate));
//    console.log((Date.parse(inputs.scheduleDate)  -  Date.now()))
    e.preventDefault();
    // console.log(errors)
    setErrors(validate(inputs));
    
      
    setValidated(true); 
    // console.log(inputs);
    let milisecDate=Date.parse(date).toString()
    console.log(milisecDate)
    try{
     let response= await axiosCreateMeeting({...inputs,"scheduleDate":milisecDate})
    if(response.status===201){
      alert(response.data.message)
    }
   }catch(error){
    console.log(error)
   }
}


const validate = (inputs) => {
  console.log(inputs.meetingName);
  const req = {}
  if(!inputs.meetingName){
   req.meetingName='Meeting name is required'
  }
  if(inputs.sizeOfMeeting>15){
    req.sizeOfMeeting="Size cannot be greater than 15"
  }
  if(!inputs.scheduleDate){
    req.scheduleDate="Please enter the date and time"
  }

return req;
 
}



  return (
    <Container sx={{mb:10 , display:'flex' , alignItems:'center' , justifyContent:"center"}}  >
      <Paper  elevation={5} sx={{mt:20,padding:6 ,width:500}}>
        <h1 style={{color:"#00A86B", fontSize:"2rem"}}>Create Meeting</h1>
      <TextField variant='standard' required fullWidth autoComplete="off"
       name='meetingName'  onChange={handelInputs} label="Meeting Name" sx={{marginY:"4px",color:"#00A86B"}} />

      <TextField variant='standard' required fullWidth autoComplete="off" type='number' style={{color:"#00A86B"}}
       name='sizeOfMeeting'  onChange={handelInputs} label="Number of Participants" sx={{marginY:"4px",color:"#00A86B"}} />

      <TextField variant='standard' required fullWidth autoComplete="off" type='datetime-local' sx={{marginY:"8px"}}
       name='scheduleDate'  onChange={(e)=>{setDate(e.target.value)}} />
             

   <Box sx={{dispaly:"flex", marginTop:1 }}>
        <Button 
        onClick={handelSubmit} sx={{marginY:"6px",backgroundColor:"#00A86B",border:"2px solid #00A86B",'&:hover': {background: 'none', color:"#00A86B", border:"2px solid #00A86B"}, marginX:2 }} 
        variant="contained">Create Meeting</Button>
        {/* <Button onClick={navigate('/JoinRoom')}>
          Join now
        </Button> */}
        <Button 
        onClick={()=>{
          navigate('/getMeetings')
        }} sx={{marginY:"6px",backgroundColor:"#00A86B",border:"2px solid #00A86B",'&:hover': {background: 'none', color:"#00A86B", border:"2px solid #00A86B"}, }} 
        variant="contained">My Meetings</Button>
   </Box>
      </Paper>
   
    
    </Container>

  )
}

export default CreateMeeting









