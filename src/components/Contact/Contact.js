import React, { useState } from "react";

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    company: "",
    email: "",
    tel: "",
  });

  const changeInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    const data = {
      name: inputs.name,
      company: inputs.company,
      email: inputs.email,
      tel: inputs.tel,
    };
    alert(`
        Olá ${data.name}! Por favor confirme seus dados: 
        Nome: ${data.name}
        Empresa: ${data.company}
        Email: ${data.email}
        Telefone: ${data.tel}
        `);

    window.location.reload();
  };

  return (
    <section
      id="contact"
      className="bg-DarkBlue flex flex-col items-center text-center p-12"
    >
      <h2 className="font-dyna font-bold text-white text-xl md:text-3xl text-center">
        Ficou com dúvida?
      </h2>
      <h2 className="font-dyna font-bold text-white text-xl md:text-3xl text-center">
        Nós entramos em contato com você
      </h2>

      <form
        onSubmit={submit}
        className="flex flex-col m-8 gap-3 items-center w-80"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Como gostaria de ser chamado?"
          onChange={changeInputs}
          className="input-field"
          required
        />
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Em qual empresa você trabalha??"
          onChange={changeInputs}
          className="input-field"
          required
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite aqui o seu email."
          onChange={changeInputs}
          className="input-field"
          required
        />

        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="Qual o seu telefone?"
          onChange={changeInputs}
          className="input-field"
          required
        />

        <button
          type="submit"
          className="p-1 w-44 rounded-lg bg-LightBlue text-white text-xl font-bold uppercase mt-6 hover:bg-gray-600"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
