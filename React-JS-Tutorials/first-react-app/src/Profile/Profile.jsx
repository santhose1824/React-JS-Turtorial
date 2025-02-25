import Body from "../components/body/Body";
import  Header  from "../components/header/Header";
import ProfileImage from "../components/profileImage/ProfileImage";
import "./Profile.css";
const Profile = () =>{
    return(
       <div className="profileContainer">
          <Header/>
          <ProfileImage/>
          <Body/>
       </div>
    );
}

export default Profile;