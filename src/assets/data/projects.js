import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';
import Symfony from '../images/symfony.png';
import ReactJS from '../images/logo-react-js.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Gestion hopital Symfony',
    desc:
      "Application de gestion d'un hopital réalisé avec Symfony 5 et react.js",
    img: Symfony,
  },
  {
    id: uuidv4(),
    name: 'Portfolio react.js',
    desc: "Création d'un portfolio en react.js",
    img: ReactJS,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
];

export default projects;
