import React,{useEffect} from 'react';
import Intro from './Intro/Intro';
import './Home.scss';
import Numbers from './Numbers/Numbers';
import TodaysProject from './TodaysProject/TodaysProject';
import OtherProjects from './OtherProjects/OtherProjects'
import Achievements from './Achievements/Achievements';
import Carbon from './Carbon/Carbon';
import Tree from './Tree/Tree';


const Home = (props) => {
  const todayProject = props.otherProjects[1];
  const otherProjects = props.otherProjects.slice(0,3);
  
  return(
    <div className="Home" data-testid="Home">
      <Intro/>
      <Numbers/>
      <TodaysProject project={todayProject} projectsLoading={props.projectsLoading} projectsFailed={props.projectsFailed} user={props.user}/>
      <OtherProjects projects={otherProjects} projectsLoading={props.projectsLoading} projectsFailed={props.projectsFailed} user={props.user}/>
      <Achievements/>
      <Carbon user={props.user}/>
      <Tree />
    </div>
  );
};


export default Home;
