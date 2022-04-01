import { v4 as uuidv4 } from 'uuid';
import Symfony from '../images/symfony.png';
import ReactJS from '../images/logo-react-js.png';
import test from '../images/test.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Gestion hopital Symfony',
    shortDesc:
      "Application de gestion d'un hopital réalisé avec Symfony 5 et react.js",
    img: Symfony,
    longDesc:
      "Dans le cadre de l'épreuve E4 j'ai réalisé une application de gestion d'hopital. J'ai pu avec mon équipe " +
      "penser à la conception de l'application en utilisant des diagrammes de classe et états-transition ainsi qu'un " +
      "MLD. J'ai développé la partie backend de l'application sous symfony 5 relié à une base de données Mysql hébergé " +
      'sur un vps distant et conteneurisé avec docker.',
    img1: test,
    img2: Symfony,
    text1: 'lorem texte 1',
    text2: 'lorem texte 2',
    text3: 'lorem texte 3',
    btsSkills: [
      {
        id: uuidv4(),
        name:
          'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
        mission: 'Exploitation du cahier des charges du client fictif',
      },
      {
        id: uuidv4(),
        name:
          'Mettre en place et vérifier les niveaux d’habilitation associés à un service\n',
        mission:
          "Mise en place d'une sécurisation d'api en utilisant un token JWT",
      },
      {
        id: uuidv4(),
        name: 'Planier les activités',
        mission: 'Utilisation de la méthode agile grâce à la plateforme trello',
      },
    ],
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
    btsSkills: [],
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    shortDesc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: test,
    longDesc:
      'jbeb ibefihb zlihfbzl fbz kbzfblzb zlijbf lizjb flizsb liuzbfliujzsbfiu ',
    img1:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    img2:
      'https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    text1: 'lorem texte 1',
    text2: 'lorem texte 2',
    text3: 'lorem texte 3',
    btsSkills: [],
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    shortDesc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: test,
    longDesc:
      'jbeb ibefihb zlihfbzl fbz kbzfblzb zlijbf lizjb flizsb liuzbfliujzsbfiu ',
    img1:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    img2:
      'https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    text1: 'lorem texte 1',
    text2: 'lorem texte 2',
    text3: 'lorem texte 3',
    btsSkills: [],
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    shortDesc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: test,
    longDesc:
      'jbeb ibefihb zlihfbzl fbz kbzfblzb zlijbf lizjb flizsb liuzbfliujzsbfiu ',
    img1:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    img2:
      'https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    text1: 'lorem texte 1',
    text2: 'lorem texte 2',
    text3: 'lorem texte 3',
    btsSkills: [],
  },
];

export default projects;
