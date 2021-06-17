import React from 'react';
import Intro from './Intro/Intro';
import Numbers from './Numbers/Numbers';
import TodaysProject from './TodaysProject/TodaysProject';
import './Home.scss';
import OtherProjects from './OtherProjects/OtherProjects';
import Achievements from './Achievements/Achievements';
import Carbon from './Carbon/Carbon';
import Tree from './Tree/Tree';

const Home = (props) => {
  const index = props.otherProjects.findIndex (element=>element.isTodayProject);
  const todayProject = props.otherProjects[index];
  const otherProjects = props.otherProjects.filter(element=>!element.isTodayProject).slice(-3);
  console.log(otherProjects);
  return(
    <div className="Home" data-testid="Home">
      <Intro/>
      <Numbers/>
      <TodaysProject project={todayProject} projectsLoading={props.projectsLoading} projectsFailed={props.projectsFailed}/>
      <OtherProjects projects={otherProjects} projectsLoading={props.projectsLoading} projectsFailed={props.projectsFailed}/>
      <Achievements/>
      <Carbon/>
      <Tree/>
    </div>
  );
};


export default Home;
