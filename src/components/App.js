import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
//https://create-react-app.dev/docs/deployment/
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid, makeStyles } from '@material-ui/core'
import PrivateRoute from './privateRoute'


const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    width: '100%',
  },
}));

function App() {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Router basename="/storygram">
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/UpdateProfile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </Grid>
  )
}

export default App;
