import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import { MuiThemeProvider, Container } from '@material-ui/core';
import Home from './pages/Home';
import AddJobAdvert from './pages/AddJobAdvert';
import { defaultTheme } from './themes/defaultTheme';
import { Route } from 'react-router-dom';
import JobAdvertList from './pages/JobAdvertList';
import { ToastContainer } from 'react-toastify';
import ConfirmDashboard from './layouts/ConfirmDashboard';
import Footer from './layouts/Footer';
import Favorites from './pages/Favorites';

export default function App() {
  return (
    <MuiThemeProvider theme={defaultTheme} >
      <div id="rootdiv" style={{backgroundImage:"linear-gradient(to left top, #12001e, #150728, #150e32, #14133d, #101849, #0f194d, #0f1951, #0e1a55, #151652, #1b124e, #1f0d4a, #230746)", height:635}} >
        <ToastContainer position="bottom-right" />
        <Container fixed >
          <Navi />
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/add/jobadvert" component={AddJobAdvert} />
          <Route exact path="/jobadverts" component={JobAdvertList} />
          <Route path="/confirm-dashboard" component={ConfirmDashboard} />
          <Footer/>
        </Container>
      </div>
    </MuiThemeProvider>
  );
}