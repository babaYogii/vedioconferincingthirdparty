import { Box, TextField, Container,Button } from "@mui/material";
//import{makeStyles} from "@mui/styles"
import React,{useState} from "react";
import {isUrlValid} from '../Helper/Axios/axiosCreateMeeting'


// const useStyles = makeStyles({
    
    //     button: {
        //       backgroundColor: '#00A86B',
        //       color: '#fff',
        //       '&:hover': {
            //         backgroundColor:  '#00A86B',
            //         color: 'white',
            //     },
            //   }})



            
 const JoinRoom = () =>{
                //const classes = useStyles()
                
                const [inputs, setInputs] = useState({
                    meetingUrl: "",
                    userName: "",
                    url:""
                });
                
                const [url,seturl]=useState('http://');
    const [checkvalidurl,setValidurl]=useState(false);
    

    

  console.log(checkvalidurl);

  

const handelChange=(e)=>{
    setInputs((prevstate) => ({
        ...prevstate, [e.target.name]: e.target.value,
    }))
    
    seturl('http://'+inputs.meetingUrl)


   }

  
  console.log(url)

   const handelSubmit=async(e)=>{
    e.preventDefault();
      let response=await isUrlValid(inputs);
  
      
      try{
        if(response.status===200){
            setValidurl(true);
            // url=`http://${inputs.meetingUrl}`
          }
      }catch(error){
        alert("no meetings found");
      }
      
       console.log(inputs);
   }

   console.log(inputs)
    
    console.log(url, " i am url")

    return<>
    <Container maxWidth="sm">
    
     <Box component='form' noValidate id='joinroom'
          sx={{ 
            mt: 20, px:10,mb:10,
            alignItems: 'center',
            boxShadow: 6,
            borderRadius: 2.5,
            }}>
  
      <TextField variant='standard'margin="normal" onChange={handelChange}
       required fullWidth id='username' name='userName' label='Username' sx={{mt:5}}/>
      <TextField variant='standard' margin="normal" onChange={handelChange}
      required fullWidth id='meeting-link' name='meetingUrl' label='Meeting Link'  />
      <TextField variant='standard' margin="normal" onChange={(e)=>{}}
      required fullWidth id='meeting-link' name='meetingUrl' label='Meeting Link'  />
        

{    
      
!checkvalidurl
 ? 
           <Button variant="contained" onClick={handelSubmit} sx={{color:"#00A86B",background:'#00A86B',m:2}}>
           ValidateUrl </Button>:
           
        //    <Link href={url} color="inherit" >
        //    Join Now
        //  </Link>
        <a href={`http://${inputs.meetingUrl}`} target="_blank" rel="noreferrer"> join now</a>
      
      }
      
      </Box>
      </Container>
    </>
}
export default JoinRoom;