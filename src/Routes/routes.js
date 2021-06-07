import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Home from '.././components/Home/Home';
import Projects from '.././components/Projects/Projects'
import HeaderWithRouter from '.././components/UpBar/UpBar';
import FooterWithRouter from '../components/Footer/Footer';
const Routes =()=>{
    return(
        <BrowserRouter>
            <HeaderWithRouter/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/project" component={Projects}/>
            </Switch>
            <FooterWithRouter/>
        </BrowserRouter>
    );
}

export default Routes;