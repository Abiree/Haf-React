import React from 'react';
import Intro from './Intro/Intro';
import Numbers from './Numbers/Numbers';
import TodaysProject from './TodaysProject/TodaysProject';
import './Home.scss';
import OtherProjects from './OtherProjects/OtherProjects';
import Achievements from './Achievements/Achievements';
import Carbon from './Carbon/Carbon';
import Tree from './Tree/Tree';

const Home = () => (
  <div className="Home" data-testid="Home">
    <Intro/>
    <Numbers/>
    <TodaysProject/>
    <OtherProjects/>
    <Achievements/>
    <Carbon/>
    <Tree/>
  </div>
);


export default Home;
