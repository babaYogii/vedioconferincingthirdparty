import { Box, Button, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import React,{useEffect} from 'react'
import { useState } from 'react'
import { getMeetings } from '../Helper/Axios/axiosCreateMeeting'








const MyMeetings = () => {
 
    const [meetings,setMeetings]=useState([]);


  

    useEffect(() => {
    
        async function getdata(){  

            let result=await getMeetings();  
            console.log(result.data)
            alert('Data received')
            setMeetings(result.data);
        }
        getdata();
        
    }, [])


// console.log(meetings && parseInt(meetings[2].meetingEndTime)- parseInt(Date.now()));
    
   

//    console.log(meetings && typeof parseInt(meetings[0].scheduleDate))

  return (
    <Container maxWidth="md">
     {meetings ? <Grid container
  direction="row"
  justifyContent="center"
  alignItems="center"
        spacing={4} sx={{mt:10}}>
                { meetings && meetings.map(elem => (
                    <Grid item xs={4} key={meetings.indexOf(elem)}>
                        <Box sx={{boxShadow: "2px 4px 8px 0px #00A86B",
            borderRadius: 2.5}}>
                            
                            <CardContent>
                                <Typography variant="body" gutterBottom color='#00A86B'>
                                <CardHeader
                                title={` ${(elem.meetingName).toUpperCase()}`}
                                subheader={`Schedule Date : ${new Date(parseInt( elem.scheduleDate))}`}
                            />
                                </Typography>

                            </CardContent>
                        </Box>
                     </Grid>
                ))}
            </Grid>:
            "No meetings Found"
    }     

        
           

        </Container>
  )
}

export default MyMeetings





