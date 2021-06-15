import './App.css';
import Navi from './layouts/Navi';
// import Dashboard from './layouts/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider, Container } from '@material-ui/core';
import Home from './pages/Home';

const useStyles = makeStyles({
  appBackground: {
    backgroundColor: "#f9f7f7",
    backgroundImage: "linear-gradient(to left top, #12001e, #150728, #150e32, #14133d, #101849, #0f194d, #0f1951, #0e1a55, #151652, #1b124e, #1f0d4a, #230746)",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f5f5f5",
    },
    secondary:{
      main: "#000e5c"
    }
  },
  typography:{
    h1:{
      fontFamily: "Fredoka One",
      fontWeight: "bold",
      fontSize: 48,
      color: "#ffffff"
    },
    h6:{
      fontFamily: "Nunito",
      color: "#e3e3e3",
    },
  },
  overrides:{
    MuiIconButton: {
      colorPrimary:{
        color : "#7981b0",
      }
    },
    MuiToolbar:{
      root:{
        justifyContent:"space-between",
      }
    },
    MuiContainer:{
      root:{
        paddingLeft: 0,
        paddingRight: 0
      }
    }
  },
  props:{
    
  }
})

export default function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.appBackground}>
        <Container fixed>
      <Navi />
          <Home />
          {/* <Dashboard/> */}
        </Container>
      </div>
    </MuiThemeProvider>
  );
}