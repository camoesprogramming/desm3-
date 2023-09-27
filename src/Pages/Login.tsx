import styled from "styled-components"
import LoginForm from "../Components/LoginForm"

export default function Login() {
  return (
    <Container>
      <h1>Desafio Módulo 3 </h1>
      <h2>BootCamp React XP - Educação</h2>
      <LoginForm />
    </Container>
  )
}

const Container = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 10%;
  text-align: center;
  font-family: 'Roboto';
 
`