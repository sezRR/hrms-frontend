import './App.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
// import Home from './pages/Home';

const useStyles = makeStyles({
  appBackground: {
    backgroundColor: "#f9f7f7",
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.appBackground}>
      <Container>
        <Navi/>
        {/* <Home/> */}
        <Dashboard/>
      </Container>
    </div>
  );
}