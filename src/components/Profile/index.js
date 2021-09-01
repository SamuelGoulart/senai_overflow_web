import {Nav} from "./styles";
import imgLogo from "../../assets/logo.svg";

function Profile () {
    return(
         <Nav>
            <img src={imgLogo} ></img>
         </Nav>
    );
}

export default Profile;