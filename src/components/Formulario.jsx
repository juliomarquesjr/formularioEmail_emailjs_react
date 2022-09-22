import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import useTextos from "../hooks/useTextos";

const Formulario = () => {
  const textos = useTextos();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const sendEmail = (e) => {
    e.preventDefault(); //Não executa o Reaload na pagina.

    const template = {
      from_name: nome,
      message: mensagem,
      email: email,
    };
    emailjs
      .send(
        "service_xm77jfs",
        "template_aasmm7s",
        template,
        "3hL20wd8mz5QDWZOd"
      )
      .then(
        (response) => {
          console.log("Email enviado: ", response.status, response.text);
          setNome("");
          setEmail("");
          setMensagem("");

          alert(textos.alertmsg);
        },
        (error) => {
          console.log("Erro: ", error);
        }
      );
  };

  return (
    <React.Fragment>
      <div className="box_formulario">
        <form className="formulario" onSubmit={sendEmail}>
          <label className="label">{textos.nome}</label>
          <input
            className="input"
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            required
          />

          <label className="label">{textos.email}</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            required
          />

          <label className="label">{textos.msg}</label>
          <textarea
            className="input"
            value={mensagem}
            onChange={(evento) => setMensagem(evento.target.value)}
            rows={6}
            required
          />

          <button>{textos.botao}</button>
        </form>
      </div>
    </React.Fragment>
  );
};
export default Formulario;
