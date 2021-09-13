import { Container, FormContainer } from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import { useHistory, Link } from "react-router-dom";

function Register() {

    const handleInput = () => {}

    const handleSubmit = () => { }

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit} >
                <h1>Bem-vindo ao</h1>
                <h1>SENAI-Overflow</h1>
                <Input label="Nome" type="email" id="email" handler={handleInput} required />
                <Input label="E-mail" type="email" id="email" handler={handleInput} required />
                <Input label="Senha" type="password" id="senha" handler={handleInput} required />
                <button>Entrar</button>
            </FormContainer>
        </Container>
    );
}

export default Register;