import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChartBar, faDumbbell, faClipboardList, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './home.module.css'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sidebar = ({ expanded, toggleSidebar }) => {
  const sidebarClasses = `${styles.sidebar} ${expanded ? styles.expanded : ''}`;
  const iconClassName = expanded ? styles.icon : styles.hideIcon;
  const textClassName = expanded ? styles.showText : styles.hideText;

  const menuItems = [
    { icon: faChartBar, text: 'Dashboard' },
    { icon: faClipboardList, text: 'Planos de Treino' },
    { icon: faDumbbell, text: 'Exercícios' },
    { icon: faUser, text: 'Perfil' },
    { icon: faSignOutAlt, text: 'Sair', onClick: () => console.log('Logout') },
  ];

  return (
    <div className={sidebarClasses}>
      <h2>YouFit</h2>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li key={index} onClick={item.onClick} className={item.onClick ? styles.logout : ''}>
            <FontAwesomeIcon icon={item.icon} className={iconClassName} />
            <span className={textClassName}>{item.text}</span>
          </li>
        ))}
      </ul>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

const Homepage = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 imagens por slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    'https://via.placeholder.com/300',
  ];

  const trainings = [
    { name: 'Treino de Peito', date: '12/12/2023', link: 'https://link-treino-peito.com' },
    { name: 'Treino de Pernas', date: '10/12/2023', link: 'https://link-treino-pernas.com' },
    { name: 'Treino de Costas', date: '08/12/2023', link: 'https://link-treino-costas.com' },
  ];

  return (
    <div className={styles.homepage}>
      <Sidebar expanded={sidebarExpanded} toggleSidebar={toggleSidebar} />
      <div className={styles.content}> 
        <h1>Bem-vindo à sua área!</h1>
        <p>Este é o seu aplicativo de monitoramento físico. Aqui você pode acompanhar seu progresso, registrar treinos e avaliações, bem como verificar seus planos de treino personalizados.</p>
        <br />
        <Slider {...settings}>
          {images.map((imageUrl, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={imageUrl} alt={`Imagem ${index + 1}`} className={styles.image} />
            </div>
          ))}
        </Slider>
         <h2>Seus Últimos Treinos</h2>
        <ul>
          {trainings.map((training, index) => (
            <li key={index}>
              <a href={training.link} target="_blank" rel="noopener noreferrer">
                {training.name} - {training.date}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Homepage;