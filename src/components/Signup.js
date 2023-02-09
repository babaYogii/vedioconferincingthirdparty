import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link, useNavigate } from 'react-router-dom';
import signup from "../Helper/Axios/axiossignup"









const Signup = (auth) => {
    console.log(auth);
   const navigate=useNavigate();
    const handelChange = (e) => {
        setInputs((prevState) => ({
            ...prevState, [e.target.name]: e.target.value, isPermenant: e.target.checked
        }))
    }
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        contactNumber: "",
    });

  
  useEffect(()=>{
    let a=localStorage.getItem('token')
    if(a){
     navigate('/createmeeting')
    }
 },[navigate])
 


    const [errors, setErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);

    useEffect(() => {
        console.log(errors)
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(inputs);
        }
        // eslint-disable-next-line
    }, [errors])



    const handelSubmit =async  (e) => {
        e.preventDefault();
        setErrors(validate(inputs));
        console.log(inputs)
        let response= await signup(inputs);
        if(response.status===201 || response.status===404){
            alert(response.data.message);
            if(response.status===201){
                navigate('/signin');
            }
        }
        
        
       
        setisSubmit(true);
     
        setInputs({firstName: "",
        lastName: "",
        email: "",
        password: "",
        contactNumber: "",confirmPassword:""})
        
    }


    const validate = (values) => {
        const notFill = {};
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName) {
            notFill.firstName = "First Name is required"
        } else if (values.firstName.length < 2) {
            notFill.firstName = "Name cannot be less than 2 characters"
        }
        if (!values.lastName) {
            notFill.lastName = "Last Name is required"
        }
        if (!values.email) {
            notFill.email = "Email is required"
        } else if (!regex.test(inputs.email)) {
            notFill.email = "Enter valid email"
        }
        if(!values.password){
            notFill.password="Please enter the password"
        }else if(!regularExpression.test(values.password)){
            notFill.password="1 special character \n Less than 10 character and greater than 6 character \n1 small case "
        }
        if (values.password !== values.confirmPassword) {
            notFill.confirmPassword = "Password and confirm password does not match"
        }
        if (!values.contactNumber) {
            notFill.contactNumber = "Please enter contact number"
        } else if (values.contactNumber.length < 10 || values.contactNumber.length > 10) {
            notFill.contactNumber = "Not a valid mobile number"
        }
        return notFill;
    }



    // const navigate = useNavigate();
    

    const papperStyle = { padding: '20px 40px', maxWidth: '400px' ,margin: '0px auto', marginBottom: '20px',marginTop:"120px" }
    return <>
            <Grid mt={'6vh'} >
                <Paper elevation={20} style={{ ...papperStyle, width: '60%' }}>
                    <Grid align="center">
                        <Avatar sx={{ bgcolor: "#1bbd7e", width: 56, height: 56 }} >
                            <PersonAddIcon />
                        </Avatar>
                        <Typography variant='h4' component='h2'>Sign Up</Typography>
                        <Typography variant='caption'>Registere Here</Typography>
                    </Grid>
                    <form noValidate onSubmit={handelSubmit}>
                        <Box display='flex' gap={0.7} flexDirection='column'  >

                            <TextField variant='standard' value={inputs.firstName} name="firstName" onChange={handelChange}
                                required  autoComplete="off" label="First Name"></TextField>
                            {(errors.firstName && (!inputs.firstName || inputs.firstName.length < 2)) && <Typography variant='caption' color='red'>{errors.firstName}</Typography>}


                            <TextField variant='standard' value={inputs.lastName} name="lastName" onChange={handelChange}
                                required fullWidth autoComplete="off" label="Last Name"></TextField>
                            {(errors.lastName && (!inputs.lastName || inputs.lastName.length < 2)) && <Typography variant='caption' color='red'>{errors.lastName}</Typography>}


                            <TextField variant='standard' value={inputs.email} name="email" onChange={handelChange}
                                required fullWidth autoComplete="off" label="Email"></TextField>
                            {(errors.email ) && <Typography variant='caption' color='red'>{errors.email}</Typography>}



                            <TextField variant='standard' value={inputs.contactNumber} name="contactNumber" onChange={handelChange}
                                type='number' required fullWidth autoComplete="off" label="Contact number"></TextField>
                            {(errors.contactNumber && (!inputs.contactNumber || inputs.contactNumber.length < 10 || inputs.contactNumber.length > 10)) && <Typography variant='caption' color='red'>{errors.contactNumber}</Typography>}

                            <TextField variant='standard' value={inputs.password} name="password" onChange={handelChange}
                                required fullWidth autoComplete="off" type='password' label="Password"></TextField>
                            {/* {errors.password  && <Typography variant='caption' color='red'> {errors.password}</Typography>} */}
                            {(errors.password || (!inputs.password)) && <Typography variant='caption' color='red'>{errors.password}</Typography>}


                            <TextField variant='standard' value={inputs.confirmPassword} name="confirmPassword" onChange={handelChange}
                                required fullWidth autoComplete="off" type='password' label="Confrim Password"></TextField>
                            {(errors.confirmPassword && (!inputs.confirmPassword || inputs.confirmPassword!==inputs.password)) && <Typography variant='caption' color='red'>{errors.confirmPassword}</Typography>}



                            <Button type='submit' variant='contained' >Sign Up</Button>



                            <Box display='flex' textAlign='center' flexDirection='column'>
                                <Typography variant='body2' color='primary'>Already have account ?<Link to='/signin' style={{ textDecoration: 'none' }}>Login here</Link></Typography>
                            </Box>


                        </Box>
                    </form>
                </Paper>
            </Grid>

    </>
}



export default Signup;