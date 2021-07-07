/* eslint-disable no-useless-constructor */
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { PureComponent } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
/* ------------- importing components ------------------ */
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
import Buy from '../components/Buy/Buy';
/* -----------------import actions--------------------- */
import { addQuestion, fetchQuestions } from '../redux/actionCreators/questionCreator';
import { fetchProjects, fetchPagination, fetchAllProjects,AddDonation } from '../redux/actionCreators/projectCreator';
import { fetchTrees,removeFromCart, addToCart } from '../redux/actionCreators/treesCreator';
import { fetchUser, Login, logout, IndividuRegister, OrganisationRegister,getUser } from '../redux/actionCreators/LoginRegisterCreator';

const mapStateToProps = state => {
  return { User: state.User, Questions: state.Questions, Projects: state.Projects, Trees: state.Trees }
}
const mapDispatchToProps = dispatch => ( {
  addQuestion: ( question ) => {
    dispatch( addQuestion( question ) )
  },
  fetchQuestions: () => {
    dispatch( fetchQuestions() )
  },
  fetchProjects: () => {
    dispatch( fetchProjects() )
  },
  fetchAllProjects: () => {
    dispatch( fetchAllProjects() )
  },
  AddDonation: (projectId,donorId,amount) => {
    dispatch( AddDonation(projectId,donorId,amount) )
  },
  fetchTrees: () => {
    dispatch( fetchTrees() )
  },
  addToCart:(id, quantity,userId) =>{
    dispatch(addToCart(id,quantity,userId))
  },
  removeFromCart: (userId,id) => {
    dispatch(removeFromCart(userId,id))
  },
  fetchUser: () => {
    dispatch( fetchUser() )
  },
  Login: ( Email, Password ) => {
    dispatch( Login( Email, Password ) )
  },
  fetchPagination: ( Number , query) => {
    dispatch( fetchPagination( Number , query ) )
  },
  logout: () => {
    dispatch( logout() )
  },
  IndividuRegister: ( FirstName, LastName, Email, Password ) => {
    dispatch( IndividuRegister( FirstName, LastName, Email, Password ) )
  },
  OrganisationRegister: ( OrganisationName, Adresse, Phone, Email, Password ) => {
    dispatch( OrganisationRegister( OrganisationName, Adresse, Phone, Email, Password ) )
  },
  getUser : (user) => { dispatch(getUser(user))}
 } );

class Routes extends PureComponent {

  constructor( props ) {
    super( props );
  }

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchProjects();
    this.props.fetchTrees();
    this.props.fetchQuestions();
    this.props.fetchAllProjects();
  }

  render() {
    const homeComponent = () => {
      return ( <Home otherProjects={this.props.Projects.projectsList} projectsLoading={this.props.Projects.isLoading} projectsFailed={this.props.Projects.errMess} user={this.props.User}/> );
    };
    const projectComponent = () => {

      return ( <Projects user={this.props.User} projects={this.props.Projects.projectsList} projectsLoading={this.props.Projects.isLoading} projectsFailed={this.props.Projects.errMess} fetchPagination={this.props.fetchPagination} pagination={this.props.Projects.pagination} query = {this.props.Projects.query}/> );
    };
    const marketComponent = () => {
      return ( <Market trees={this.props.Trees.treesList} treesLoading={this.props.Trees.isLoading} treesFailed={this.props.Trees.errMess} addToCart={this.props.addToCart} user={this.props.User} profile={this.props.User.userDetail}/> );
    };
    const contactComponent = () => {
      return ( <ContactUs questions={this.props.Questions.questions} addQuestion={this.props.addQuestion}/> );
    }
    const profilComponent = () => {
      //console.log( this.props );
      return ( <Profile projects={this.props.Projects.allProjects} profile={this.props.User.userDetail} profileLoading={this.props.User.isLoading} profileFailed={this.props.User.errMess} logout={this.props.logout}/> );
    }
    const detailprojectComponent = () => {
      //console.log( this.props )
      return ( <ProjectDetail Login={this.props.Login} IndividuRegister={this.props.IndividuRegister} OrganisationRegister={this.props.OrganisationRegister} projectid={this.props.Projects} idproject={this.props.location.pathname.slice( 9 )} projectsLoading={this.props.Projects.isLoading} profile={this.props.User.userDetail}/> );

    }
    const marketDetailComponent = () => {
      //console.log("hehe")
      //console.log(props)
      //console.log(props.location.pathname.slice(8))
      return ( <DetailMarket trees={this.props.Trees.treesList} treesLoading={this.props.Trees.isLoading} idtree={this.props.location.pathname.slice( 8 )}/> );
    }
    
    

    return ( <div>
      <HeaderWithRouter removeFromCart={this.props.removeFromCart} trees={this.props.Trees.treesList} user={this.props.User} Login={this.props.Login} logout={this.props.logout} IndividuRegister={this.props.IndividuRegister} OrganisationRegister={this.props.OrganisationRegister} getUser={this.props.getUser}/>
      <TransitionGroup>
        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
          <Switch>
            <Route exact="exact" path="/home" component={homeComponent}/>
            <Route exact="exact" path="/project" component={projectComponent}/>
            <Route exact="exact" path="/Market" component={marketComponent}/>
            <Route exact="exact" path="/Market/:id" component={marketDetailComponent}/>
            <Route exact="exact" path="/ContactUs" component={contactComponent}/>
            <Route exact="exact" path="/Profil" component={profilComponent}/>
            <Route path="/project/:id" component={detailprojectComponent}/>
            <Route path="/buy"  render={(props) => <Buy {...props} profile={this.props.User.userDetail} />}/>


            <Route path="/donate"  render={(props) => <Donate {...props} profile={this.props.User.userDetail} AddDonation={this.props.AddDonation}/>}/>
            <Redirect to="/home"/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <FooterWithRouter/>
    </div> );
  }
}

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Routes ) );
