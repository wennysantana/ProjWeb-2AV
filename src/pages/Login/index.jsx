import Form from "../../components/Form";
import style from './login.module.css'
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
