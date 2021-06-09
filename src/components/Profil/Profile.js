import Header from './Header/Header';
import {useState} from 'react';
import './Profile.scss';

export const ProfilInfo= () => {
    return(
        <h1>Info</h1>
    );
}
export const ProfilDonation= () => {
    return(
        <h1>Donations</h1>
    );
}
export const ProfilUpdates= () => {
    return(
        <h1>Updates</h1>
    );
}

const Profile = () => {
    const [navItems, setnavItems] = useState({"info":true,"donation":false,"updates":false});
    const [activeClass, setactiveClass] = useState({"info":"active","donation":"","updates":""})
    const toggle = (Event) =>{
        console.log(Event.target.id);
        switch (Event.target.id) {
            case "infos":
                setnavItems({"info":true,"donation":false,"updates":false});
                setactiveClass({"info":"active","donation":"","updates":""});
                break;
            case "donations":
                setnavItems({"info":false,"donation":true,"updates":false});
                setactiveClass({"info":"","donation":"active","updates":""});
                break;
            case "updates":
                setnavItems({"info":false,"donation":false,"updates":true});
                setactiveClass({"info":"","donation":"","updates":"active"});
                break;
        }
    }
    return(
        <div className="Profil">
            <Header/>
            <div className="navigation">
                <ul id="navs" navbar>
                    <li>
                        <a class={"link "+activeClass.info} id="infos" onClick={toggle}>infos</a>
                    </li>
                    <li>
                        <a class={"link "+activeClass.donation} id="donations" onClick={toggle}>donations</a>
                    </li>
                    <li>
                        <a class={"link "+activeClass.updates} id="updates" onClick={toggle}>updates</a>
                    </li>
                </ul>
            </div>
            <div>
                {navItems.info ? <ProfilInfo/>:null}
                {navItems.donation ? <ProfilDonation/>:null}
                {navItems.updates ? <ProfilUpdates/>:null}
            </div>
        </div>
    );
}

export default Profile;