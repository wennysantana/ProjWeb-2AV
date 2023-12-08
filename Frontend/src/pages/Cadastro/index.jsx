import Form from "../../components/FormUser";
import style from './cadastro.module.css'
import logo from '../../assets/youfit.svg'

const index = () => {
  return (
    <div className={style.container_login}>
      <div className={style.container_imagem}>
        <div className={style.image_top} alt=""></div>
        <img className={style.logo} src={logo} alt="" />
      </div>
      <Form />
    </div>
  );
};

export default index;
