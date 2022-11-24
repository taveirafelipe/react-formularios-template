import React, { useState } from "react";
import { MainContainer, Form, Input } from "./styles";
import { useForm } from "../../hooks/useForm";

function MainPage() {
  // const [nome, setNome] = useState("")
  // const [idade, setIdade] = useState("")
  // const [email, setEmail] = useState("")
  // const [formulario, setFormulario] =useState({nome: "", idade:"", email: ""})

  // const onChange = (event) => {
  //   const { name, value } = event.target
  //   setFormulario({...formulario, [name]: value})
  // }

  // const onChangeNome = (event) => {
  //   setNome(event.target.value)
  // }

  // const onChangeIdade = (event) => {
  //   setIdade(event.target.value)
  // }

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value)
  // }

  const [formulario, onChange] = useForm({ nome: "", idade: "", profissao: "", email: "" });

  const handleClick = (event) => {
    event.preventDefault();

    console.log(formulario);
  };

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input
          name="nome"
          id="nome"
          type="text"
          value={formulario.nome}
          onChange={onChange}
          required
        />

        <label htmlFor="idade">Idade:</label>
        <Input
          name="idade"
          id="idade"
          type="number"
          value={formulario.idade}
          onChange={onChange}
        />

        <label htmlFor="profissao">Profissão:</label>
        <Input
          name="profissao"
          id="profissao"
          type="text"
          value={formulario.profissao}
          onChange={onChange}
          required
        />

        <label htmlFor="email">E-mail:</label>
        <Input
          name="email"
          id="email"
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={formulario.email}
          onChange={onChange}
          required
        />

        <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
