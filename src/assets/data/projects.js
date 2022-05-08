import { v4 as uuidv4 } from 'uuid';
import Symfony from '../images/symfony.png';
import ReactJS from '../images/logo-react-js.png';
import symfonyPatientsPage from '../images/project/symfony-hopital/patient-page.png';
import portfolio1 from '../images/project/portfolio1.png';
import portfolio2 from '../images/project/portfolio2.png';
import medilabReseau from '../images/project/medilab/reseau.png';
import medilabZabbix from '../images/project/medilab/zabbix-global-view.png';
import campingLogo from '../images/camping-logo.png';
import campingHomepage from '../images/camping-homepage.png';
import mcdCamping from '../images/mcd-camping.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Gestion hopital Symfony',
    shortDesc:
      "Application de gestion d'un hopital réalisé avec Symfony 5 et react.js",
    img: Symfony,
    longDesc:
      "Dans le cadre de l'épreuve E5 j'ai réalisé une application de gestion d'hôpital. J'ai pu avec mon équipe " +
      "penser à la conception de l'application en utilisant des diagrammes de classe et états-transition ainsi qu'un " +
      "MLD. J'ai développé la partie backend de l'application sous symfony 5 relié à une base de données Mysql hébergée " +
      'sur un vps distant et conteneurisé avec docker.',
    img1: symfonyPatientsPage,
    img2: Symfony,
    text1:
      "Nous avons réalisé la partie de frontend de l'application avec le framework React.js",
    text2: '',
    text3: '',
  },
  {
    id: uuidv4(),
    name: 'Portfolio react.js',
    shortDesc: "Création d'un portfolio en react.js",
    img: ReactJS,
    longDesc:
      "Dans le cadre de l'épreuve E4 j'ai développé mon portfolio en utilisant le framework React.js. J'ai choisi de le développer " +
      "moi-même en utilisant cette technologie afin de renforcer les compétences que j'ai pu acquérir pendant mon stage de première année",
    img1: portfolio1,
    img2: portfolio2,
    text1: '',
    text2: '',
    text3: '',
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

    text1: '',
    text2: '',
    text3: '',
  },
  {
    id: uuidv4(),
    name: "Gestion d'un camping en php",
    shortDesc: '',
    img: campingLogo,
    longDesc:
      "Dans le cadre d'un projet transversal de première " +
      ' année nous avons créé une application web permettant de gérer un camping. ' +
      'Nous avons utilisé php, mysql html et css. Nous avons réalisé une maquette de type Wireframe pour ' +
      "concevoir l'interface du site ainsi qu'un MCD pour concevoir la base de données. " +
      "L'application possède deux types de comptes, les clients qui peuvent d'inscrire et réserver des séjours et les administrateurs. " +
      'Les administrateurs ont accès aux CRUD de plusieurs ressources tel que les clients et les chalets.' +
      '',
    img1: campingHomepage,
    img2: mcdCamping,

    text1: "Page d'accueil du site",
    text2: '',
    text3: 'MCD',
  },
];

export default projects;
