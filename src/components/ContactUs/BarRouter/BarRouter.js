import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Contact from '../ContactUs';
import BarWithRouter from '../Bar/Bar';
import QA from '../../QA/QA';
const BarRouter = (props) => {
    return(
        <BrowserRouter>
            <BarWithRouter/>
            <Switch>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/qa" component={QA}/>
            </Switch>
        </BrowserRouter>
    );
};

export default BarRouter;