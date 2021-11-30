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
    shortDesc:
      "Application de gestion d'un hopital réalisé avec Symfony 5 et react.js",
    img: Symfony,
    longDesc:
      "Dans le cadre de l'épreuve E4 j'ai réalisé une application de gestion d'hopital. J'ai pu avec mon équipe" +
      "penser à la conception de l'application en utilisant des diagrammes de classe et états-transition ainsi qu'un" +
      "MLD. J'ai développé la partie backend de l'application sous symfony 5 relié à une base de données Mysql hébergé" +
      'sur un vps distant et conteneurisé avec docker.',
    img1:
      'https://images.pexels.com/photos/1061142/pexels-photo-1061142.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    img2:
      'https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    text1: 'lorem texte 1',
    text2: 'lorem texte 2',
    text3: 'lorem texte 3',
  },
  {
    id: uuidv4(),
    name: 'Portfolio react.js',
    shortDesc: "Création d'un portfolio en react.js",
    img: ReactJS,
    longDesc:
      'jbeb ibefihb zlihfbzl fbz kbzfblzb zlijbf lizjb flizsb liuzbfliujzsbfiu ',
    img1:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    img2:
      'https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    text1: 'lorem texte 1',
    text2: 'lorem texte 2',
    text3: 'lorem texte 3',
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    shortDesc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
    longDesc:
      'jbeb ibefihb zlihfbzl fbz kbzfblzb zlijbf lizjb flizsb liuzbfliujzsbfiu ',
    img1:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    img2:
      'https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    text1: 'lorem texte 1',
    text2: 'lorem texte 2',
    text3: 'lorem texte 3',
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    shortDesc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
    longDesc:
      'jbeb ibefihb zlihfbzl fbz kbzfblzb zlijbf lizjb flizsb liuzbfliujzsbfiu ',
    img1:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    img2:
      'https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    text1: 'lorem texte 1',
    text2: 'lorem texte 2',
    text3: 'lorem texte 3',
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    shortDesc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
    longDesc:
      'jbeb ibefihb zlihfbzl fbz kbzfblzb zlijbf lizjb flizsb liuzbfliujzsbfiu ',
    img1:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    img2:
      'https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    text1: 'lorem texte 1',
    text2: 'lorem texte 2',
    text3: 'lorem texte 3',
  },
];

export default projects;
