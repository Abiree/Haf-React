/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from './Header/Header';
import { useState } from 'react';
import ProfilInfo from './ProfilInfo/ProfilInfo';
import ProfilDonation from './ProfilDonation/ProfilDonation';
import ProfilUpdates from './ProfilUpdates/ProfilUpdates';
import { Button } from 'reactstrap';
import './Profile.scss';

const Profile = ( props ) => {
  const [navItems, setnavItems] = useState( { "info": true, "donation": false, "updates": false } );
  const [activeClass, setactiveClass] = useState( { "info": "active", "donation": "", "updates": "" } );
  console.log( props )
  const logout = () => {
    props.logout();
  }
  const toggle = ( Event ) => {
    switch ( Event.target.id ) {
      case "infos":
        setnavItems( { "info": true, "donation": false, "updates": false } );
        setactiveClass( { "info": "active", "donation": "", "updates": "" } );
        break;
      case "donations":
        setnavItems( { "info": false, "donation": true, "updates": false } );
        setactiveClass( { "info": "", "donation": "active", "updates": "" } );
        break;
      case "updates":
        setnavItems( { "info": false, "donation": false, "updates": true } );
        setactiveClass( { "info": "", "donation": "", "updates": "active" } );
        break;
      default:
        break;
    }
  }
  return ( <div className="Profil">
    <Header profile={props.profile} profileLoading={props.profileLoading}/>
    <div className="navigation" style={{
        "display" : "flex",
        "justify-content" : "space-between",
        "padding" : "10px"
      }}>
      <ul id="navs" style={{
          "margin" : "0px"
        }}>
        <li>
          <a className={"link " + activeClass.info} id="infos" onClick={toggle}>infos</a>
        </li>
        <li>
          <a className={"link " + activeClass.donation} id="donations" onClick={toggle}>donations</a>
        </li>
        <li>
          <a className={"link " + activeClass.updates} id="updates" onClick={toggle}>updates</a>
        </li>
      </ul>

    </div>
    <div>
      {
        navItems.info
          ? <ProfilInfo profile={props.profile} profileLoading={props.profileLoading} profileFailed={props.profileFailed}/>
          : null
      }
      {
        navItems.donation
          ? <ProfilDonation projects={props.projects} profile={props.profile} profileLoading={props.profileLoading} profileFailed={props.profileFailed}/>
          : null
      }
      {
        navItems.updates
          ? <ProfilUpdates projects={props.projects} profile={props.profile} profileLoading={props.profileLoading} profileFailed={props.profileFailed}/>
          : null
      }
    </div>
  </div> );
}

export default Profile;
