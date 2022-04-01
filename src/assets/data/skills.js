import { v4 as uuidv4 } from 'uuid';
import hopitalSymfonyGithub from '../images/project/symfony-hopital/github.png';
import hopitalSymfonySaveBdd from '../images/project/symfony-hopital/script-sauvegarde.png';

const skills = [
  [
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee:
        'Procédure d’utilisation d’une solution de gestion de version paramétrée côté client et/ou côté' +
        'serveur à partir d’outils comme gitlab',
      descriptionCompetence:
        `Pour réaliser le projet de gestions d'un hoptial nous étions quatre. Pour travailler efficacement nous` +
        `avons décidé de versionner le code source à l'aide de github et de l'héberger sur GitHub https://github.com/Jflo02/SymfonyBtsProject.`,
      screenCompetence: hopitalSymfonyGithub,
      projectName: 'Gestion hopital Symfony',
    },
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee: ' Plan de sauvegarde réalisé',
      descriptionCompetence:
        `Nous utilison une base de données MariaDB pour stocker les informations relatives ` +
        `à l'application. Nous avons souhaité sauvegarder régulièrement ces données pour palier à une ` +
        `corruption ou suppression de celles-ci. Nous avons réalisé un script qui extrait toutes les données` +
        `de la base puis les sauvegarde dans le repertoire /var/backups/dbn_hopital. ` +
        `Nous sauvegardons le fichier sous le format TIMESTAMP_hopital.bak. Nous réalisons ce script grâce au CRON tous les jours à une ` +
        `heure du matin car le traffic est plus faible.`,
      screenCompetence: hopitalSymfonySaveBdd,
      projectName: 'Gestion hopital Symfony',
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee:
        'Procédure d’utilisation d’une solution de gestion de version paramétrée côté client et/ou côté' +
        'serveur à partir d’outils comme gitlab',
      descriptionCompetence:
        `Pour réaliser le projet de gestions d'un hoptial nous étions quatre. Pour travailler efficacement nous` +
        `avons décidé de versionner le code source à l'aide de github et de l'héberger sur GitHub https://github.com/Jflo02/SymfonyBtsProject.`,
      screenCompetence: hopitalSymfonyGithub,
      projectName: 'Gestion hopital Symfony',
    },
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee: ' Plan de sauvegarde réalisé',
      descriptionCompetence:
        `Nous utilison une base de données MariaDB pour stocker les informations relatives ` +
        `à l'application. Nous avons souhaité sauvegarder régulièrement ces données pour palier à une ` +
        `corruption ou suppression de celles-ci. Nous avons réalisé un script qui extrait toutes les données` +
        `de la base puis les sauvegarde dans le repertoire /var/backups/db_hopital.` +
        `Nous sauvegardons le fichier sous le format TIMESTAMP_hopital.bak.`,
      screenCompetence: hopitalSymfonySaveBdd,
      projectName: 'Gestion hopital Symfony',
    },
  ],
];

export default skills;
