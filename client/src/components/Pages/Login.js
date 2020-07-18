import React, {useState, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Link } from "react-router-dom";
import Axios from 'axios';
// import Signup from '../Signup';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    justifyContent: 'center',
    textAlign: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  btns: {
    background: 'linear-gradient(45deg, #3f51b5 30%, #32408f 90%)',
    color: 'black',
    height: 48,
    padding: '0 8px',
    fontSize: 18,
  },
});

export default function LogOut() {
  const classes= useStyles();
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');


  const login = () => { 
    Axios({
    method: "POST",
    data: {
        username: loginUsername,
        password: loginPassword
    },
    withCredentials: true,
    url:"/login"
}).then((res) => console.log(res));};
      
return (
  <Card className={classes.root}>
    <CardContent>
      <Typography className={classes.title} color="textSecondary">
        Login
      </Typography>
      <form>
      <Typography variant="h5" component="h2">
      <FormControl variant="outlined">
      <InputLabel htmlFor="component-outlined">Username</InputLabel>
      <OutlinedInput 
      id="component-outlined" 
       
      onChange={(e) => setLoginUsername(e.target.value)} 
      label="username" />
    </FormControl>
    <FormControl variant="outlined">
      <InputLabel htmlFor="component-outlined">Password</InputLabel>
      <OutlinedInput 
      id="component-outlined" 
      onChange={(e) => setLoginPassword(e.target.value)} label="password" />
       
    </FormControl>     
    <Button className= {classes.btns} onClick={login}>Submit </Button>    
      </Typography>
      </form>
      <div>
            <Typography>
              <div className={classes.body}>
                Not already a member? <Link style={{textDecoration: 'none'}} to= "/Signup"><Button className={classes.btn}>Sign Up</Button></Link>
              </div>
            </Typography>
          </div>
    </CardContent>
  </Card>
);


    }