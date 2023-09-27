import styled from "styled-components";
import React, { FormEvent, useState } from "react";
import axios from "axios";

type BodyType = {
  email: string,
  senha: string
}


export default function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleUserInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body: BodyType = {
      email: username,
      senha: password
    }
    console.log(body)
    const promise = axios.post("http://localhost:3001/sessao/criar", body)

    promise.then(response => console.log(response)).catch(error => console.log(error))
    
  }

  return (
    <StyledForm onSubmit={handleLogin}>
      <label htmlFor="user">Informe Usuário:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={handleUserInput}
      />
      <label htmlFor="user">Informe sua senha:</label>
      <input
        type="password"
        name="username"
        value={password}
        onChange={handlePassword}
      />
      <button>Fazer Login!</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  font-family: 'Roboto';
  
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    height: 40px;
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      background-color: #45a049 ;
      cursor: pointer;
    }
  }
`;
