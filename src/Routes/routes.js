import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Home from '.././components/Home/Home';
import Market from '.././components/Market/Market';
import Projects from '.././components/Projects/Projects';
import ContactUs from '.././components/ContactUs/ContactUs';
import QA from '.././components/QA/QA';
import HeaderWithRouter from '.././components/UpBar/UpBar';
import FooterWithRouter from '../components/Footer/Footer';

const Routes =()=>{
    return(
        <BrowserRouter>
            <HeaderWithRouter/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/project" component={Projects}/>
                <Route exact path="/Market" component={Market}/>
                <Route exact path="/ContactUs" component ={ContactUs}/>
                <Route exact path="/QA" component ={QA}/>
            </Switch>
            <FooterWithRouter/>
        </BrowserRouter>
    );
}

export default Routes;