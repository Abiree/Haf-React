import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Home from '.././components/Home/Home';

const Routes =()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;