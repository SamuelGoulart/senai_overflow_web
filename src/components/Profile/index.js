import {Nav} from "./styles"
import imgLogo from "../../assets/logo.svg";


function Profile () {
    return(
         <Nav>
            <img src={imgLogo} ></img>
            <p>AAAAAAAAA </p>
            <input type="text" placeholder="Pesquisar" ></input>
         </Nav>
    );
}

export default Profile;