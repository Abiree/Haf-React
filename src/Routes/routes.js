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
/*-----------------import actions---------------------*/
import {addQuestion} from '../redux/actionCreators/questionCreator';
import {fetchProjects} from '../redux/actionCreators/projectCreator';
import {fetchTrees} from '../redux/actionCreators/treesCreator';
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
    fetchTrees:()=>{dispatch(fetchTrees())}
})

class Routes extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchProjects();
        this.props.fetchTrees();
    }
   render(){
    const homeComponent = () => {
        return(
            <Home/>
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
            <ContactUs questions={this.props.Questions} addQuestion={this.props.addQuestion}/>
        );  
    }
    const profilComponent = () => {
        return(
            <Profile
              profile={this.props.User}
              projects={this.props.Projects.filter(({id})=>{
                return this.props.User.Donations.some(include => include.ProjectId === id)
              })}
            />
        );
    }
    const detailprojectComponent = () => {
        console.log("hehe")
        console.log(this.props)
        console.log(this.props.Projects)
        console.log(this.props.location.pathname.slice(9))
        return(
            <ProjectDetail
              projectid={this.props.Projects.filter((x) => x.id === Number(this.props.location.pathname.slice(9)))
              }
            />
        );
       
    }
    const marketDetailComponent = () => {
        //console.log("hehe")
        //console.log(props)
        //console.log(props.location.pathname.slice(8))
        return(
            <DetailMarket 
            treelist={this.props.Trees.filter((x)=> x.id===0||x.id===1||x.id===2)}
            trees={this.props.Trees.filter((x) => x.id === Number(this.props.location.pathname.slice(8)))}/>
        );
    };
    return(
        <div>
            <HeaderWithRouter cart={this.props.Cart}/>
            <Switch>
                <Route exact path="/" component={homeComponent}/>
                <Route exact path="/project" component={projectComponent}/>
                <Route exact path="/Market" component={marketComponent}/>
                <Route exact path="/Market/:id" component={marketDetailComponent}/>
                <Route exact path="/ContactUs" component ={contactComponent}/>
                <Route exact path="/Profil" component={profilComponent}/>
                <Route path="/project/:id" component={detailprojectComponent} />
                <Redirect to="/"/>
            </Switch>
            <FooterWithRouter/>
        </div>
    );
   }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Routes));