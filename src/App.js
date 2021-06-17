import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, Container } from '@material-ui/core';
import Home from './pages/Home';
import AddJobAdvert from './pages/AddJobAdvert';
import { defaultTheme } from './themes/defaultTheme';
import { Route } from 'react-router-dom';

const useStyles = makeStyles({
  appBackground: {
    backgroundColor: "#f9f7f7",
    backgroundImage: "linear-gradient(to left top, #12001e, #150728, #150e32, #14133d, #101849, #0f194d, #0f1951, #0e1a55, #151652, #1b124e, #1f0d4a, #230746)",
    height: 1080
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={defaultTheme} >
      <div className={classes.appBackground} >
        <Container fixed >
          <Navi />
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route exact path="/add/jobadvert" component={AddJobAdvert}/>
        </Container>
      </div>
    </MuiThemeProvider>
  );
}