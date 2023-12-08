import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Importe o componente DatePicker corretamente
import 'react-datepicker/dist/react-datepicker.css';
import InputMask from 'react-input-mask';
import Button from '../../components/Button'; // Verifique o caminho correto do componente Button e os estilos

import style from './FormUser.module.css'; // Certifique-se de que o caminho do arquivo de estilos está correto

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birth_date, setBirthdate] = useState(new Date()); // Adicione um estado para a data de nascimento
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('');

  const handleDateChange = (date) => {
    setBirthdate(date); // Função para atualizar a data de nascimento
  };

  const RegisterNewStudent = async (event) => {
    event.preventDefault();
    console.log('Dados enviados:', { name, email, password, birth_date, cpf, phone, goal });
    // Adicione aqui a lógica para enviar os dados para o servidor usando axios, se necessário
  };

  return (
    <div className={style.container_form_login}>
      <div className={style.container_input}>
        <h2 className={style.title}>Faça já o seu cadastro!</h2>
        <form className={style.form_login} action="" onSubmit={RegisterNewStudent}>
          <label className={style.labelName} htmlFor="name">Seu nome:</label>
          <input
            className={style.inputName}
            type="text" // Corrija o tipo de input para "text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className={style.labelEmail} htmlFor="email">Email:</label>
          <input
            className={style.inputEmail}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={style.labelSenha} htmlFor="senha">Senha:</label>
          <input
            type="password"
            className={style.inputSenha}
            name="password" // Corrija o atributo "name"
            id="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className={style.labelBirth} htmlFor="dateOfBirth">Data de Nascimento:</label>
          <DatePicker
            className={style.inputBirth}
            selected={birth_date}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={15}
          />
          <label className={style.labelCpf} htmlFor="cpf">CPF:</label>
          <InputMask
            className={style.inputCpf}
            mask="999.999.999-99"
            maskPlaceholder=""
            id="cpf"
            name="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <label className={style.labelPhone} htmlFor="telefone">Telefone:</label>
          <InputMask
            className={style.inputPhone}
            mask="(99) 99999-9999"
            maskPlaceholder=""
            id="telefone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className={style.labelGoal} htmlFor="goal">Qual é o seu objetivo?:</label>
          <select name="goal" className={style.inputCpf} value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="">Selecione</option>
            <option value="1">Emagrecer</option>
            <option value="2">Ganho de massa muscular</option>
            <option value="3">Melhoria da Saúde Geral</option>
            <option value="4">Flexibilidade e Mobilidade</option>
          </select>
          <div className={style.button_login}>
            <Button texto="Cadastre-se" classExport={`btn btn-danger ${style.btn_login}`} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
