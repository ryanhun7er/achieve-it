import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Axios from 'axios';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    justifyContent: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    fontweight: 'bold',
    fontsyle: 'italic'
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
    
  }
});

export default function Signup() {

  const classes = useStyles();

  const [signupUsername, setsignupUsername] = useState('');
  const [signupPassword, setsignupPassword] = useState('');
 
  
  const signup = () => {
      Axios({
          method: "POST",
          data: {
              username: signupUsername,
              password: signupPassword
          },
          withCredentials: true,
          url:"/signup"
      }).then((res) => console.log(res));
      
  };
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Signup
        </Typography>
        <form>
        <Typography variant="h5" component="h2">
        <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Username</InputLabel>
        <OutlinedInput
          id="component-outlined"
         
          onChange={(e) => setsignupUsername(e.target.value)}
          label="username"
        />
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Password</InputLabel>
        <OutlinedInput
          id="component-outlined"
         
          onChange={(e) => setsignupPassword(e.target.value)}
          label="password"
        />
      </FormControl>
            <Button className= {classes.btns} onClick={signup}>Submit </Button>
        </Typography>
        </form>
      </CardContent>
    </Card>
  );
}