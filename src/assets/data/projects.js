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
    miniature: Symfony,
    img1: Symfony,
    img2: Symfony,
  },
  {
    id: uuidv4(),
    name: 'Portfolio react.js',
    desc: "Création d'un portfolio en react.js",
    miniature: ReactJS,
    img1: ReactJS,
    img2: ReactJS,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    miniature: CoinTrackerImg,
    img1: CoinTrackerImg,
    img2: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    miniature: CavinImg,
    img1: CavinImg,
    img2: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    miniature: ProjectImg,
    img1: ProjectImg,
    img2: ProjectImg,
  },
];

export default projects;
