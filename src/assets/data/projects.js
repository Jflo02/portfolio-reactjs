import { v4 as uuidv4 } from 'uuid';
import Symfony from '../images/symfony.png';
import ReactJS from '../images/logo-react-js.png';
import test from '../images/test.jpg';
import symfonyPatientsPage from '../images/project/symfony-hopital/patient-page.png';
import portfolio1 from '../images/project/portfolio1.png';
import portfolio2 from '../images/project/portfolio2.png';
import medilabReseau from '../images/project/medilab/reseau.png';
import medilabZabbix from '../images/project/medilab/zabbix-global-view.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Gestion hopital Symfony',
    shortDesc:
      "Application de gestion d'un hopital réalisé avec Symfony 5 et react.js",
    img: Symfony,
    longDesc:
      "Dans le cadre de l'épreuve E5 j'ai réalisé une application de gestion d'hopital. J'ai pu avec mon équipe " +
      "penser à la conception de l'application en utilisant des diagrammes de classe et états-transition ainsi qu'un " +
      "MLD. J'ai développé la partie backend de l'application sous symfony 5 relié à une base de données Mysql hébergé " +
      'sur un vps distant et conteneurisé avec docker.',
    img1: symfonyPatientsPage,
    img2: Symfony,
    text1:
      "Nous avons réaliser la partie de frontend de l'aplicaiton avec le framework React.js",
    text2: '',
    text3: '',
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
      "Dans le cadre de l'épreuve E4 j'ai développé mon portfolio en utilisant le framework React.js. J'ai choisi de le développer " +
      " moi même en utilisant cette technologie afin de renforcer les compétences que j'ai pu développer pendant mon satge de preminère année",
    img1: portfolio1,
    img2: portfolio2,
    text1: '',
    text2: '',
    text3: '',
    btsSkills: [],
  },
  {
    id: uuidv4(),
    name: 'Reseau Medilab',
    shortDesc:
      "Nous avons du refaire l'infrastructure réseau du complexe hospitalier Medilab",
    img: medilabReseau,
    longDesc:
      'La société EPSIMediLab, fait partie des leaders européens sur les prélèvements médicaux pour les ' +
      'particuliers. ' +
      ' Fondé en 1987 avec l’ouverture de trois laboratoires diagnostiques en Suisse, le groupe EPSIMediLab ' +
      's’est rapidement développé en appliquant une stratégie d’acquisition de laboratoires partenaires de  ' +
      'qualité sur l’ensemble du continent européen.',
    img1: medilabReseau,
    img2: medilabZabbix,

    text1: 'lorem texte 1',
    text2: 'lorem texte 2',
    text3: 'lorem texte 3',
    btsSkills: [],
  },
];

export default projects;
