/* eslint-disable no-useless-constructor */
import { Switch , Route, Redirect , withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {Component} from 'react';
/*------------- importing components ------------------*/
import Home from '.././components/Home/Home';
import Market from '.././components/Market/Market';
import Projects from '.././components/Projects/Projects';
import ContactUs from '../components/ContactUs/ContactUs';
import HeaderWithRouter from '.././components/UpBar/UpBar';
import FooterWithRouter from '../components/Footer/Footer';
import ProjectDetail from '../components/DetailProject/DetailProject';
import Profile from '../components/Profil/Profile';
import DetailMarket from '../components/DetailMarket/DetailMarket';
import Donate from '../components/Donate/Donate';
/*-----------------import actions---------------------*/
import {addQuestion} from '../redux/actionCreators/questionCreator';
import {fetchProjects} from '../redux/actionCreators/projectCreator';
import {fetchTrees} from '../redux/actionCreators/treesCreator';
import {fetchUser,Login} from '../redux/actionCreators/LoginRegisterCreator';

const mapStateToProps = state =>{
    return{
        User: state.User,
        Questions: state.Questions,
        Projects: state.Projects,
        Trees: state.Trees,
        Cart : state.Cart
    }
}
const mapDispatchToProps = dispatch =>({
    addQuestion: (Name,Email,Subject,Message)=>dispatch(addQuestion(Name,Email,Subject,Message)),
    fetchProjects:() => {dispatch(fetchProjects())},
    fetchTrees:()=>{dispatch(fetchTrees())},
    fetchUser:()=>{dispatch(fetchUser())},
    Login:()=>{dispatch(Login())}
});

class Routes extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUser();
        this.props.fetchProjects();
        this.props.fetchTrees();
    }

   render(){
    const homeComponent = () => {
        return(
            <Home
                otherProjects = {this.props.Projects.projectsList}
                projectsLoading={this.props.Projects.isLoading}
                projectsFailed={this.props.Projects.errMess}
            />
        );
    };

    const projectComponent = () => {
        return(
            <Projects
                projects={this.props.Projects.projectsList}
                projectsLoading={this.props.Projects.isLoading}
                projectsFailed={this.props.Projects.errMess}
            />
        );
    };
    const marketComponent = () => {
        return(
            <Market 
                trees={this.props.Trees.treesList}
                treesLoading={this.props.Trees.isLoading}
                treesFailed={this.props.Trees.errMess}
            />
        );
    };
    const contactComponent = () => {
        return(
            <ContactUs 
                questions={this.props.Questions} 
                addQuestion={this.props.addQuestion}
            />
        );  
    }
    const profilComponent = () => {
        console.log(this.props);
        return(
            <Profile
              profile={this.props.User.userDetail}
              profileLoading={this.props.User.isLoading}
              profileFailed={this.props.User.errMess}
              projectsLoading={this.props.Projects.isLoading}
              projectsFailed={this.props.Projects.errMess}
              projects={this.props.Projects.projectsList}
            />
        );
    }
    const detailprojectComponent = () => {
        return(
            <ProjectDetail
                projectid={this.props.Projects}
                idproject={this.props.location.pathname.slice(9)}
                projectsLoading={this.props.Projects.isLoading}
            />
        );
       
    }
    const marketDetailComponent = () => {
        //console.log("hehe")
        //console.log(props)
        //console.log(props.location.pathname.slice(8))
        return(
            <DetailMarket 
                trees={this.props.Trees.treesList}
                treesLoading={this.props.Trees.isLoading}
                idtree={this.props.location.pathname.slice(8)}
            />
        );
    };
    return(
        <div>
            <HeaderWithRouter 
                cart={this.props.Cart}
                user={this.props.User}    
            />
            <Switch>
                <Route exact path="/" component={homeComponent}/>
                <Route exact path="/project" component={projectComponent}/>
                <Route exact path="/Market" component={marketComponent}/>
                <Route exact path="/Market/:id" component={marketDetailComponent}/>
                <Route exact path="/ContactUs" component ={contactComponent}/>
                <Route exact path="/Profil" component={profilComponent}/>
                <Route path="/project/:id" component={detailprojectComponent} />
                <Route path="/donate" component={Donate}/>
                <Redirect to="/"/>
            </Switch>
            <FooterWithRouter/>
        </div>
    );
   }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Routes));