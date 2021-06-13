import {BrowserRouter , Switch , Route, Redirect} from 'react-router-dom';
import Home from '.././components/Home/Home';
import Market from '.././components/Market/Market';
import Projects from '.././components/Projects/Projects';
import ContactUs from '../components/ContactUs/ContactUs';
import QA from '.././components/QA/QA';
import HeaderWithRouter from '.././components/UpBar/UpBar';
import FooterWithRouter from '../components/Footer/Footer';
import ProjectDetail from '../components/DetailProject/DetailProject';
import Profile,{ProfilInfo,ProfilUpdates,ProfilDonation} from '../components/Profil/Profile';

const Routes =()=>{
    return(
        <BrowserRouter>
            <HeaderWithRouter/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/project" component={Projects}/>
                <Route exact path="/Market" component={Market}/>
                <Route exact path="/ContactUs" component ={ContactUs}/>
                <Route exact path="/Profil" component={Profile}/>
                <Route path="/project/:id" component={ProjectDetail} />
               
                <Redirect to={Home}/>
            </Switch>
            <FooterWithRouter/>
        </BrowserRouter>
    );
}

export default Routes;