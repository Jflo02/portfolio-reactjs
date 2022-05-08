import { v4 as uuidv4 } from 'uuid';
import symfonyLinkedin from '../images/certifications/symfonyLinkedin.png';
import dockerUdemy from '../images/certifications/dockerUdemy.png';
import gitUdemy from '../images/certifications/gitUdemy.png';
import openClassroom from '../images/certifications/openClassroom.png';
import attestationCnil from '../images/project/attestationCnil.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Symfony 4',
    img: symfonyLinkedin,
    longDesc:
      'Dans le cadre de mon stage de première année dans la start-up Pelops je devais maîtriser Symfony. ' +
      "Nous n'avions pas eu de cours sur ce framework, je me suis donc formé sur LinkedIn Learning.",
    img1: symfonyLinkedin,
    text1: 'Diplôme attestant ma formation',
  },
  {
    id: uuidv4(),
    name: 'Docker',
    img: dockerUdemy,
    longDesc:
      "En dehors de mon cursus de développeur je suis attiré par la partie déploiement d'applications. " +
      'Je souhaite maîtriser cette partie afin de devenir développeur fullstack devOps et être capable ' +
      "d'intervenir sur tous le cycle de vie de l'application de sa conception à sa mise en production. " +
      "C'est dans cette optique que je me suis formé à la technologie docker. Je l'utilise aujourd'hui sur " +
      "plusieurs projets. J'ai conteneurisé une base de données MariaDB sur un VPS pour le projet de gestion " +
      "d'un hopital. J'ai également sur ce même VPS un serveur web Nginx conteneurisé.",
    img1: dockerUdemy,
    text1: 'Diplôme attestant ma formation',
  },
  {
    id: uuidv4(),
    name: 'Git/Github',
    img: gitUdemy,
    longDesc:
      'En première année nous avions plusieurs projets à réaliser en groupe. ' +
      'Le premier projet que nous devions faire était un blog de voyage en html/css. Ne connaissant pas git ' +
      'nous utilisions google drive en téléchargeant les fichiers à chaque fois que nous les modifions. ' +
      "Cette technique n'est évidemment pas optimale ni efficiente. Elle ne permet pas non plus de versionner " +
      'le code mais uniquement de le sauvegarder sur un serveur distant. ' +
      "Lorsque nous avons eu de nouveau des travaux de groupe j'ai eu connaissance de git et j'ai " +
      "souhaité maîtriser l'outil car il allait nous permettre de travailler beaucoup plus efficacement. " +
      "J'ai d'abord réalisé le début de la formation Git sur openClassroom puis j'ai réalisé une formation udemy Git/GitHub complète.",
    img1: gitUdemy,
    text1: 'Diplôme attestant ma formation',
  },
  {
    id: uuidv4(),
    name: 'RGPD',
    img: attestationCnil,
    longDesc: "J'ai suivi le mooc de la CNIL concernant le RGPD ",

    img1: attestationCnil,
    text1: 'Diplôme attestant ma formation',
  },
  {
    id: uuidv4(),
    name: 'Autres',
    img: openClassroom,
    longDesc:
      "En complément de ma formation j'ai réalisé plusieurs formations." +
      "J'ai pris de l'avance sur le poste que j'ai occupé lors de mon stage de deuxième " +
      "année (développeur fullstack javascript), j'ai vu des concepts pour mon stage de première année ou " +
      "alors je me suis simplement formé sur des technologies qui m'intéressaient.",
    img1: openClassroom,
    text1: 'Différentes formations réalisées sur openClassroom',
  },
];

export default projects;
