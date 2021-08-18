import { Container, IconSignOut } from "./styles";

import imgLogo from "../../assets/logo.svg";

function Header() {
    // Retorna um JSX 
    return (
        <Container>
            <img src={imgLogo} ></img>
            <input type="text" placeholder="Pesquisar" ></input>
            <div>
                <IconSignOut/>
            </div>
        </Container>
    );
}

export default Header;