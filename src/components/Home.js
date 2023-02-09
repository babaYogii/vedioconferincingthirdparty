import {  Box, Typography, Button, Container } from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  
  const navigate=useNavigate();

  return (
    <div className=" ">
      <Navbar />
      <Container>

        <Box sx={{ display: "flex", alignItems:"center",height:"100vh"}} >
          <Box sx={{ display: "flex", flexDirection: "column" }}>

            <Typography variant="h1" component="h2" fontWeight={600} color="#00A86B" >
              Tech Teams
            </Typography>
            <Typography variant="h3" component='h2'>
              Safe. Secure. Free
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center' }} >
              <Button variant="contained" sx={{
                minWidth: "20rem", maxWidth: "20rem", backgroundColor: "#00A86B",
                m: '2rem', padding: "10px", border: "3px solid #00A86B", "&:hover": { backgroundColor: "#00A86B", color: "white" }
              }}
              onClick={()=>{navigate('/signIn')}}
              >
                Sign In
              </Button>
              <Button variant="contained"
                sx={{
                  minWidth: "20rem", maxWidth: "20rem", 
                  backgroundColor: "white", color: "#00A86B", ml: '2rem', mb: '2rem', padding: "10px",
                  border: "3px solid #00A86B", "&:hover": { backgroundColor: "white" }
                }}
                onClick={()=>{navigate('/signup')}}     
                >
                SignUp for free
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      
        {/* <Container sx={{display:'flex',alignItems:'center',flexDirection:"column" }}>
        <Typography variant="h3" component='h2' width="70rem">
            Collaborate without compromising privacy and security
        </Typography>
        <Box sx={{width:"75rem"}}>
        <Typography variant="h5" component='span' >
          Now more than ever, people need to know their virtual conversations are private and secure.
          At TechTeams, privacy and security are never an afterthought. It's our commitment to you not only during this challenging time, but always. Here's how we're working to earn your trust every day with Tech Teams.  
        </Typography>
        </Box>
        </Container> */}

    </div>
  );
};

export default Home;
