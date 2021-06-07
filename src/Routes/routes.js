import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Home from '.././components/Home/Home';
import Projects from '.././components/Projects/Projects';
import Market from '.././components/Market/Market';
import HeaderWithRouter from '.././components/Home/UpBar/UpBar';
const Routes =()=>{
    return(
        <BrowserRouter>
            <HeaderWithRouter/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/project" component={Projects}/>
                <Route exact path="/Market" component={Market}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;