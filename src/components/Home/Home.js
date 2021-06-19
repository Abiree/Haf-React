import React,{Suspense,lazy} from 'react';
import Intro from './Intro/Intro';
import './Home.scss';

const Numbers = lazy(()=>import('./Numbers/Numbers'));
const TodaysProject = lazy(()=>import('./TodaysProject/TodaysProject'));
const OtherProjects = lazy(()=> import('./OtherProjects/OtherProjects'));
const Achievements = lazy(()=>import('./Achievements/Achievements'));
const Carbon = lazy(()=>import('./Carbon/Carbon'));
const Tree = lazy(()=>import('./Tree/Tree'));

const Home = (props) => {
  const todayProject = props.otherProjects[1];
  const otherProjects = props.otherProjects.slice(0,3);
  return(
    <div className="Home" data-testid="Home">
      <Intro/>
      <Suspense fallback={<div>Loading...</div>}>
        <Numbers/>
        <TodaysProject project={todayProject} projectsLoading={props.projectsLoading} projectsFailed={props.projectsFailed}/>
        <OtherProjects projects={otherProjects} projectsLoading={props.projectsLoading} projectsFailed={props.projectsFailed}/>
        <Achievements/>
        <Carbon/>
        <Tree/>
      </Suspense>
    </div>
  );
};


export default Home;
