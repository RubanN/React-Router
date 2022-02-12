import React, { useState } from 'react';
import { makeStyles, Avatar, Divider, Typography, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";
import "./styles.css";
import TextField from '../Texfield';


const useStyles = makeStyles(theme => ({
   root:{
    flexGrow: 1,
    minHeight: '100%',
    height: '100%',
    maxHeight: '100%',
    overflowY: 'auto'
   }
}))
const Login = () => {
	const classes = useStyles()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

  const handleEmail=(e)=>{
      console.log("handleSubmit------------->",e)
      setEmail(e.target.value);
      e.preventDefault();
  }
  const handlePassword =()=>{
       
  }

    return (
        <>
            <Card className={classes.root}
                style={{
                    background: "white",
                    width: "396px",
                    boxShadow: "2px 2px 2px 2px #aaaaaa",
                    margin: "auto",
                    marginTop: "100px",
                    height: '456px'
                }}
            >
                <form >
                  <TextField type="text"
                   placeholder="Enter your email" 
                   value={email}
                   onChange={handleEmail}
                   
                   
                   />
                  <TextField type={password ? "text":'password'}
                   placeholder="Enter your password" 
                   
                   />

                </form>

            </Card>

        </>
    )
}
export default Login
