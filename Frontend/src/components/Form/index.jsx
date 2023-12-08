import style from "./Form.module.css";
import Button from "../../components/Button";
import styleButton from "../../components/Button/button.module.css";
import axios from "axios";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dataJson, setDataJson] = useState({});
  const [data, setData] = useState({});

  const CreateNewStudent = async (data) => {
    // Implemente a lógica para criar um novo estudante utilizando axios ou outra forma
  };

  const RegisterNewStudent = async (event) => {
    event.preventDefault();

    const jsonReturn = {
      "email": "jvcnf43@gmail.com",
      "password": "vanildo12teste",
      "obj_description": "",
      "peopleModel": {
        "name": "vanildo1",
        "cpf": "123459875181",
        "birth_date": "2003-08-24",
        "phone": "81996183216"
      }
    };

    setDataJson(jsonReturn);

    try {
      const datauser = await CreateNewStudent(dataJson);
      console.log(datauser);
      // Faça algo com a resposta, se necessário
    } catch (error) {
      console.error('Erro ao registrar novo estudante:', error);
      // Trate o erro conforme necessário
    }
  };

  return (
    <div className={style.container_form_login}>
      <div className={style.container_input}>
        <h2 className={style.title}>Login</h2>
        <form className={style.form_login} action="" onSubmit={RegisterNewStudent}>
          <label className={style.labelEmail} htmlFor="email">Email:</label>
          <input
            className={style.inputEmail}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <label className={style.labelSenha} htmlFor="senha">Senha:</label>
          <input
            type="password"
            className={style.inputSenha}
            name="senha"
            id="senha"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <div className={style.container_footer_card}>
            <div className={style.container_remember}>
              <input type="checkbox" className={style.pointer} name="remember" id="remember" />
              <label className={style.labelRemenber} htmlFor="remember" href="#">
                Salvar login
              </label>
            </div>
            <a className={style.forgetPassword} href="#">Esqueceu a senha?</a>
          </div>
          <div className={style.button_login}>
            <Button texto={"login"} classExport={"btn btn-danger " + style.btn_login} />
            </div>
            <div>
            <a className={style.signUp} href="#">Não possui uma conta? Faça já seu cadastro!</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;