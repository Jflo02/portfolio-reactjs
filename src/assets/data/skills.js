import { v4 as uuidv4 } from 'uuid';
import hopitalSymfonyGithub from '../images/project/symfony-hopital/github.png';
import hopitalSymfonySaveBdd from '../images/project/symfony-hopital/script-sauvegarde.png';
import gitTailor from '../images/project/git-tailor.png';
import hpotalSymfonyHabilitation from '../images/project/symfony-hopital/mld-habilitation-personnel.png';
import Zabbix from '../images/project/zabbix-supervision.png';
import githubIssue from '../images/project/github-issue.png';
import glpi from '../images/project/glpi.png';
import tailorNewCandidate from '../images/project/tailor-new-candidate.png';
import axaMailMpsaEvolution from '../images/project/mail-mpsa-evolution.png';
import axaUs from '../images/project/axa-us.png';
import SymfonyTrello from '../images/project/symfony-hopital/symfony-trello.png';
import portfolioGit from '../images/project/portfolio-git.png';
import projetDiagrammeGant from '../images/project/projet-diagramme-gant.png';
import tailorDocSommaire from '../images/project/tailor-doc-sommaire.png';
import netlifyDeployHistory from '../images/project/netflify-deploy-history.png';
import axaCompetencesPro from '../images/project/axa-competences-pro.png';
import hopitalMepBdd from '../images/project/symfony-hopital/hopital-mep-bdd.png';
import dockerPsBdd from '../images/project/symfony-hopital/docker-ps-bdd.png';
import axaGherkin from '../images/project/axaGherkin.png';
import vsCodeExtensions from '../images/project/vsCodeExtensions.png';
import laragon from '../images/project/laragon.png';
import feedly from '../images/project/feedly.png';
import linkedInWorkshop from '../images/project/linkedInWorkshop.png';
import hopitalReadme from '../images/project/symfony-hopital/hopitalReadme.png';
import mcdCamping from '../images/mcd-camping.png';
import wireFrameCamping from '../images/WireFrameCamping.svg';
import noteCamping from '../images/noteCamping.png';
import gantTailor from '../images/gantTailor.png';
import usersTailor from '../images/usersTailor.png';
import tailorJWT from '../images/tailorJWT.png';
import dockerUdemy from '../images/certifications/dockerUdemy.png';
import mpsaWithBubbles from '../images/mpsaWithBubbles.png';

const skills = [
  [
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee: 'Gérer des sauvegardes',
      descriptionCompetence:
        `Pour réaliser le projet de gestions d'un hopital nous étions quatre. Pour travailler efficacement nous ` +
        `avons décidé de versionner le code source à l'aide de github et de l'héberger sur GitHub.`,
      screenCompetence: hopitalSymfonyGithub,
      projectName: 'Gestion hopital Symfony',
      lien: {
        libelle: 'Lien vers le github',
        url: 'https://github.com/Jflo02/SymfonyBtsProject',
      },
    },
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee: 'Gérer des sauvegardes',
      descriptionCompetence:
        `Nous utilisons une base de données MariaDB pour stocker les informations relatives ` +
        `à l'application. Nous avons souhaité sauvegarder régulièrement ces données pour palier à une ` +
        `corruption ou suppression de celles-ci. Nous avons réalisé un script qui extrait toutes les données ` +
        `de la base puis les sauvegarde dans le répertoire /var/backups/dbn_hopital. ` +
        `Nous sauvegardons le fichier sous le format TIMESTAMP_hopital.bak. Nous réalisons ce script grâce au CRON tous les jours à une ` +
        `heure du matin car le trafic est plus faible.`,
      screenCompetence: hopitalSymfonySaveBdd,
      projectName: 'Gestion hopital Symfony',
    },
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee:
        'Mettre en place et vérifier les niveaux d’habilitation associés à un service',
      descriptionCompetence:
        `Nous avons prévu dans le développement de la base de données qu'un utilisateur puisse avoir différents rôles. ` +
        `Ici un 'User' est l'entité qui permet de se connecter à l'application grâce à un couple d'identifiants email / mot de passe. ` +
        `Il sera un infirmier ou un personnel administratif, ce qui lui permettra d'accéder à différentes parties de l'application.`,
      screenCompetence: hpotalSymfonyHabilitation,
      projectName: 'Gestion hopital Symfony',
    },
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee:
        'Mettre en place et vérifier les niveaux d’habilitation associés à un service',
      descriptionCompetence:
        `Dans le cadre du projet transversal 'Développement d'un application Web' ` +
        `nous avons créé une distinction entre les comptes utilisateurs et administrateurs. Les utilisateurs peuvent d'inscrire et réserver des séjours alors que les administrateurs ` +
        `ont accès aux CRUD de plusieurs ressources tel que les clients et les chalets`,
      screenCompetence: mcdCamping,
      projectName: "Gestion d'un camping en php",
      lien: {
        libelle: 'Compte rendu du projet',
        url:
          'https://www.dropbox.com/s/kpf4771vsrgvdso/projet_camping.pdf?dl=0',
      },
    },
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee:
        'Recenser et identifier les ressources numériques. ' +
        'Vérifier les conditions de la continuité d’un service informatique',
      descriptionCompetence:
        `Lors de notre module de supervision nous avons eu l'occasion de mettre en place un serveur de supervision, nous avons choisi Zabbix, afin de monitorer ` +
        `l'état de nos services et de nos différents matériels tel qu'un routeur VyOs, un serveur web apache`,
      screenCompetence: Zabbix,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee: 'Recenser et identifier les ressources numériques',
      descriptionCompetence:
        `Dans le cadre du projet transversal 'Installation d'une Infrastructure Système sous l'environnement Linux' ` +
        `nous avons installé le service d'inventaire OCSInventory et l'avons déployé sur plusieurs machines. ` +
        `Nous avons également installé le plugin GLPI.`,
      screenCompetence: glpi,
      lien: {
        libelle: 'Compte rendu du projet',
        url: 'https://www.dropbox.com/s/h2uwfzexsv6ubit/renduOcsGlpi.pdf?dl=0',
      },
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee: 'Gérer des sauvegardes',
      descriptionCompetence:
        `Pour développer from scratch un Saas j'ai utilisé du versionning à l'aide de git. ` +
        `J'ai également utilisé la plateforme GitLab afin de sauvegarder le code source dans un dépôt privé.`,
      screenCompetence: gitTailor,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee:
        'Mettre en place et vérifier les niveaux d’habilitation associés à un service',
      descriptionCompetence:
        `J'ai réalisé en base de données une distinction entre les utilisateurs. ` +
        `J'ai développé la partie concernant les équipes j'ai donc créé un 'rôle' manager et un 'rôle' collaborateur. ` +
        `Le manager a beaucoup plus de droits et peut par exemple gérer son équipe (ajouter, retirer des collaborateurs)`,
      screenCompetence: usersTailor,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee:
        'Mettre en place et vérifier les niveaux d’habilitation associés à un service',
      descriptionCompetence:
        `J'utilisais une api pour communiquer du front vers le back de l'application. ` +
        `Afin d'éviter qu'une personne n'accède à certaines informations sensibles auxquelles elle n'aurait pas accès ` +
        `j'ai mis en place une sécurisation sur l'api. Il faut que la requête contienne en en-tête un jeton de type JWT. ` +
        `Ce jeton est fourni par le serveur quand on se connecte avec un couple d'identifiants corrects. ` +
        `Ce jeton possède plusieurs informations comme le rôle de l'utilisateur. Ainsi on peut filtrer certaines ressources en ` +
        `fonction de son statut (administrateur, candidat, manager). Un candidat ne doit pas être autorisé à récupérer ` +
        `la liste des collaborateurs de l'entreprise par exemple.`,
      screenCompetence: tailorJWT,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee: 'Gérer des sauvegardes',
      descriptionCompetence:
        `Lors de mon stage j'ai pu utiliser git afin de verisonner les projets sur lesquels je suis intervenu ` +
        `Nous avons utilisé Azure DevOps afin de centraliser ce code source versionné`,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee:
        'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique. ' +
        'Vérifier le respect des règles d’utilisation des ressources numériques',
      descriptionCompetence:
        `Lors de mon stage la partie front du projet sur lequel je suis intervenu (Matrice de performance) ` +
        `possédait un profil de configuration prettier afin d'uniformiser le code. Cependant la partie back n'en disposait pas. ` +
        `Cela créait des incohérences de syntaxes et des fautes qui étaient remontées par SonarQube. J'ai mis en place ce profil de configuration ` +
        `afin de respecter les normes et standards AXA France.`,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'Répondre aux incidents et aux demandes d’assistance et d’évolution',
      idee:
        'Collecter, suivre et orienter des demandes. ' +
        'Traiter des demandes concernant les applications',
      descriptionCompetence:
        `Dans le cadre d'un projet de fin de module Symfony ` +
        `nous avons mis en place les issues de la plateforme GitHub. Nous avons sur la capture d'écran suivante ` +
        `un utilisateur qui n'arrivait pas à lancer le projet, faute de fichier readme expliquant la procédure. ` +
        `Un des développeurs lui a indiqué la commande à réaliser.` +
        ``,
      screenCompetence: githubIssue,
    },
  ],
  [],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'Répondre aux incidents et aux demandes d’assistance et d’évolution',
      idee: 'Traiter des demandes concernant les applications',
      descriptionCompetence:
        `Dans le cadre de mon stage de deuxième année chez Axa j'ai eu l'occasion de développer ` +
        `de nouvelles fonctionnalités concernant l'application 'Matrice de performances'. Dans la  capture d'écran ` +
        `suivante, le PO m'a demandé de modifier la manière dont l'export csv des matrices de l'application était ` +
        `réalisé. En général nous utilisons la méthode agile et des cartes sous forme d'user story. Nous ` +
        `avions utilisé les mails car mes accès à Azure DevOps n'étaient pas encore opérationnels. ` +
        `Une fois que j'avais ajouté l'évolution, mon code été revu par mes collègues grâce une pull request. ` +
        `Une fois celle-ci approuvée la modification était appliquée dans un environnement de développement puis de recette. ` +
        `Les Product Owners et testeurs pouvaient alors tester l'ajout afin de le valider et de l'ajouter en production.`,
      screenCompetence: axaMailMpsaEvolution,
    },
    {
      id: uuidv4(),
      nomDomaine:
        'Répondre aux incidents et aux demandes d’assistance et d’évolution',
      idee: 'Traiter des demandes concernant les applications',
      descriptionCompetence:
        `Dans le cadre de mon stage de deuxième année chez Axa nous avions un processus type pour résoudre des incidents.` +
        `Lorsque qu'une personne telle qu'un développeur ou testeur découvrait un comportement anormal, un bug, il créait une carte dans le backlog ` +
        `de l'application avec un intitulé 'Bug'. Il pouvait également assigner à ce bug une sévérité et une criticité. ` +
        `Une fois ces cartes ajoutées nous pouvions en discuter avec le reste de l'équipe lors de réunions ou rituels agiles et ` +
        `planifier leur résolution.` +
        ``,
      screenCompetence: axaUs,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Développer la présence en ligne de l’organisation',
      idee:
        'Participer à l’évolution d’un site Web exploitant les données de l’organisation.',
      descriptionCompetence:
        `Dans le cadre du projet transversal 'Développement d'un application Web' ` +
        `nous avons rélisé une maquette de l'application web de type wireframe. ` +
        `Cela nous a permis de concevoir l'architecture de l'application et le design du site. ` +
        `Toutes les parties vertes sont accessibles et visibles uniquement par un administrateur.  `,
      screenCompetence: wireFrameCamping,
      projectName: "Gestion d'un camping en php",
      lien: {
        libelle: 'Lien vers le compte rendu du projet',
        url:
          'https://www.dropbox.com/s/kpf4771vsrgvdso/projet_camping.pdf?dl=0',
      },
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Développer la présence en ligne de l’organisation',
      idee:
        'Participer à l’évolution d’un site Web exploitant les données de l’organisation.',
      descriptionCompetence:
        `Lors de mon stage de première année j'ai pu créer un Saas from scratch. ` +
        `Dans un premier temps j'ai cherché à compléter les besoins de la plateforme sans me focaliser sur son design. ` +
        `Une fois que mon travail correspondait aux attentes en terme de fonctionnalités j'ai pu réaliser une version 2 en ` +
        `me focalisant sur le style du site et en faisant une refonte graphique. Le document suivant montre des captures d'écrans ` +
        `de l'évolution graphique du site web. `,
      screenCompetence: tailorNewCandidate,
      lien: {
        libelle: "Document retraçant l'évolution graphique de la plateforme",
        url:
          'https://www.dropbox.com/s/23cloapptlru5lt/Evolution%20graphique%20du%20Saas%20Tailor.pdf?dl=0',
      },
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Développer la présence en ligne de l’organisation',
      idee:
        'Participer à l’évolution d’un site Web exploitant les données de l’organisation.',
      descriptionCompetence:
        `J'ai eu pour mission de rajouter des bulles d'aide pour faciliter l'utilisation du service. ` +
        `On m'a laissé le choix concernant la méthode d'implémentation, parmi les options serieuses il y avait l'affichage de ` +
        `la bulle au survol d'une case mais cela aurait donné un effet guirlande de noël selon moi. ` +
        `J'ai donc opté pour l'ajout d'un logo 'i' d'information en dessous du logo d'édition. Au survol du 'i' la bulle d'aide s'affiche. ` +
        `J'ai respecté les données de l'organisation en utilisant des couleurs faisant partie de la charte graphique. ` +
        `Ce système a été validé par le PO avant d'être ajouté au code source. Elle respecte donc les standards.`,
      screenCompetence: mpsaWithBubbles,
      lien: {
        libelle: 'Document avant / après ajout',
        url:
          'https://www.dropbox.com/s/6p27by7s2wh243k/EvolutionSiteWebMPSA.pdf?dl=0',
      },
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Travailler en mode projet',
      idee: 'Planifier les activités',
      descriptionCompetence:
        `Pour réaliser le projet de gestions d'un hôpital nous étions 4 et avions beaucoup de travail.  ` +
        `Il fallait réaliser la partie backend de l'application en Symfony dont une api, la base de données et la partie frontend. ` +
        `Pour ce faire nous avons suivi la méthode kanban et réalisé un tableau avec l'outil Trello`,
      screenCompetence: SymfonyTrello,
      projectName: 'Gestion hopital Symfony',
      lien: {
        libelle: 'Lien vers le rendu du projet',
        url:
          'https://www.dropbox.com/s/3jpx7zi22laevuv/DossierSymfonyBts.pdf?dl=0',
      },
    },
    {
      id: uuidv4(),
      nomDomaine: 'Travailler en mode projet',
      idee: 'Planifier les activités',
      descriptionCompetence:
        `Pour la réalisation du portfolio dans le cadre de l'épreuve E4 j'ai utilisé Git. J'ai également hébergé le code source  ` +
        `sur Github. ` +
        `J'ai utilisé deux branches, la première qui est la branche principale, main qui n'héberge pas le code le plus à jour mais ` +
        `qui contient une version stable de l'application qui est par ailleurs celle déployée en production. ` +
        `J'ai également une branche 'develop' qui elle contient le code et les commits les plus à jour. ` +
        `Cela me permet de tester les nouvelles fonctionnalités dans un environnement de développement tout en conservant ` +
        `un site en production stable. Lorsque je  souhaite faire une mise en production je merge les changements ` +
        `de la develop vers la branche main.`,
      screenCompetence: portfolioGit,
      projectName: 'Portfolio react.js',
      lien: {
        libelle: 'Lien vers le github',
        url: 'https://github.com/Jflo02/portfolio-reactjs',
      },
    },
    {
      id: uuidv4(),
      nomDomaine: 'Travailler en mode projet',
      idee: 'Planifier les activités',
      descriptionCompetence:
        `Dans le cadre du module gestion de projet nous avons choisi un projet fictif  ` +
        `qui consiste à la réalisation d'un festival sur les plus belles plages de France le temps d'un été ` +
        `dans un bus que nous aurions au préalable rénové. Pour planifier ce projet nous avons réalisé un WBS à l'aide du logiciel Xmind ` +
        `ainsi qu'un diagramme de gant avec le logiciel projectLibre. `,
      screenCompetence: projetDiagrammeGant,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Travailler en mode projet',
      idee:
        'Analyser les objectifs et les modalités d’organisation d’un projet. Planifier les activités',
      descriptionCompetence: `J'ai réalisé un diagramme de Gant afin d'organiser mes 9 semaines de stage. `,
      screenCompetence: gantTailor,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Travailler en mode projet',
      idee:
        'Analyser les objectifs et les modalités d’organisation d’un projet',
      descriptionCompetence:
        `Lors de mon stage nous utilisions la méthode agile. De ce fait nous avions un product owner qui avait le rôle ` +
        `de client. Lors de réunions ce dernier exprimait un besoin. Je devais par la suite analyser les objectifs et les modalités du    ` +
        `projet (technologie, délais, découpage de la tâche, documentation à produire) afin de pouvoir répondre au besoin. ` +
        `Par la suite je réalisais un compte-rendu oral lors de réunions sur l'avancement et les éventuelles difficultés rencontrées.  `,
      screenCompetence: axaCompetencesPro,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre à disposition des utilisateurs un service informatique',
      idee: 'Déployer un service',
      descriptionCompetence:
        `J'ai développé mon portfolio en utilisant git et Github. Afin de le mettre en ligne j'ai choisi ` +
        `d'utiliser le service netlify. Ce service est directement lié à mon dépôt github et plus ` +
        `précisément à la branche main. Il est capable de détecter une mise à jour de celle-ci et de ` +
        `re-compiler et re-déployer l'application dès qu'un changement est réalisé et poussé sur le repos. ` +
        `Cette méthode, couplée au fait que j'utilise une branche 'develop' et ne merge que les changements ` +
        `que je souhaite déployer en production sur la branche 'main' me permettent d'avoir en permanence une version ` +
        `stable de mon application et un déploiement automatisé. `,
      screenCompetence: netlifyDeployHistory,
    },
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre à disposition des utilisateurs un service informatique',
      idee: 'Déployer un service',
      descriptionCompetence:
        `Dans le cadre du projet de gestion d'un hôptial nous avons déployé la base de données mariaDB sur un VPS. ` +
        `Celui-ci est un serveur Debian 9. La base est déployée grâce à Docker. Cela nous permet d'avoir un PRA très court. ` +
        `En cas de problème avec la base, nous pouvons la relancer avec une commande docker qui est spécifié dans le document de MEP dédié. ` +
        `La capture d'écran suivante montre le conteneur docker hébergeant la base sur le serveur accessible au nom de 'lescopains.org'. `,

      screenCompetence: dockerPsBdd,
    },
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre à disposition des utilisateurs un service informatique',
      idee:
        'Réaliser les tests d’intégration et d’acceptation d’un service. Accompagner les utilisateurs dans la mise en place d’un service',
      descriptionCompetence:
        `Dans le cadre du projet de gestion d'un hôpital j'ai réalisé un document détaillant la mise en place de la partie base de données ` +
        `de l'application. Étant donné que cette base est déployée sur un vps j'ai modifié dans le document suivant les informations qui permettraient à ` +
        `quelqu'un d'accéder à la base avec l'inscription *confidentiel* tel que les mots de passe. J'ai également détaillé un test d'intégration à réaliser ` +
        `pour s'assurer que la base de données soit fonctionnelle et que la liaison avec l'application soit effective.`,

      screenCompetence: hopitalMepBdd,
      lien: {
        libelle: "Lien vers la MEP et le test d'intégration",
        url:
          'https://www.dropbox.com/s/ftscmm0bv5pe38f/Procedure%20MEP%20et%20test%20hopital.pdf?dl=0',
      },
    },
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre à disposition des utilisateurs un service informatique',
      idee: 'Accompagner les utilisateurs dans la mise en place d’un service',
      descriptionCompetence:
        `Dans le cadre du projet de gestion d'un hôpital nous avons réalisé un document à destination ` +
        `des développeurs pour leur permettre de mettre en place les différents services de l'application.`,
      screenCompetence: hopitalReadme,
      lien: {
        libelle: 'Lien vers le github du projet',
        url: 'https://github.com/Jflo02/SymfonyBtsProject',
      },
    },
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre à disposition des utilisateurs un service informatique',
      idee: 'Accompagner les utilisateurs dans la mise en place d’un service',
      descriptionCompetence:
        `Dans le cadre du projet transversal 'Développement d'un application Web' nous avons créé une ` +
        `note technique permettant à une personne de lancer et utiliser l'application. ` +
        `Elle indique les champs à modifier pour connecter l'application avec une base de données ainsi ` +
        `que les identifiants du compte administrateur.`,
      screenCompetence: noteCamping,
      projectName: "Gestion d'un camping en php",
      lien: {
        libelle: 'Lien vers le compte rendu du projet',
        url:
          'https://www.dropbox.com/s/kpf4771vsrgvdso/projet_camping.pdf?dl=0',
      },
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre à disposition des utilisateurs un service informatique',
      idee: 'Accompagner les utilisateurs dans la mise en place d’un service',
      descriptionCompetence:
        `J'ai réalisé lors de mon stage de première année un Saas de 0. Pour les personnes qui allaient  ` +
        `travailler sur la plateforme après moi j'ai donc créé une documentation technique complète de 0.  ` +
        `Dans celle-ci je détaille la structure globale du projet ainsi que les règles élémentaires à respecter ` +
        `sur chaque nouvelle page. J'explique certaines étapes comment l'ajout d'entités Symfony. ` +
        `J'indique les prérequis pour lancer l'application (technologies + versions).  ` +
        `Enfin j'explique comment lancer le projet, premièrement en environnement de développement pour les développeurs  ` +
        `puis j'indique la procédure pour exécuter les différentes composantes de l'application en environnement de production.  `,
      screenCompetence: tailorDocSommaire,
      lien: {
        libelle: 'Lien vers la documentation complète',
        url: 'https://www.dropbox.com/s/m0jjavctoqbomq0/Doc%20Tailor.pdf?dl=0',
      },
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre à disposition des utilisateurs un service informatique',
      idee: 'Réaliser les tests d’intégration et d’acceptation d’un service',
      descriptionCompetence:
        `J'ai réalisé lors de mon stage de deuxième année plusieurs tests que ce soit côté backend ou front-end. ` +
        `J'ai utilisé la méthode Gherkin et le framework Jest. La méthode Gherkin permet de réaliser des tests d'intégrations. ` +
        `Je réalisais des actions directement sur la partie de l'application en remplissant soumettant un formulaire par exemple. ` +
        `Par la suite j'utilisais le back en faisant une requete POST ce qui enregistrait dans la base de données mockée les informations.`,
      screenCompetence: axaGherkin,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee: 'Mettre en place son environnement d’apprentissage personnel',
      descriptionCompetence:
        `Sur mon ordinateur personnel j'ai installé divers outils de développement. J'utilise premièrement l'IDE Visual Studio Code. ` +
        `En complément j'ai installé plusieurs extensions qui me permettent de travailler dans de bonnes conditions. On trouve entre autre ` +
        `Prettier qui permet d'avoir un code uniforme et respectant certains standards, un debugger Javascript comme je développe beaucoup dans ` +
        `ce langage ou encore jupyter qui me permet d'ouvrir certains types de fichiers directement dans l'IDE (pdf, csv) `,
      screenCompetence: vsCodeExtensions,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee: 'Mettre en place son environnement d’apprentissage personnel',
      descriptionCompetence: `J'ai également installé un Xamp avec Laragon qui me permet d'avoir un environnement de développement en local. `,
      screenCompetence: laragon,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee: 'Mettre en place son environnement d’apprentissage personnel',
      descriptionCompetence:
        `Enfin j'ai loué avec des camarades un VPS qui nous permet d'avoir un environnement pour nos projets. ` +
        `Nous avons fait ce choix car il est allumé en permanence et possède une bonne bande passante. Cela nous permet de déployer ` +
        `nos projets sur un environnement de production et d'explorer les pratiques devops. `,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee:
        'Mettre en œuvre des outils et stratégies de veille informationnelle',
      descriptionCompetence:
        `Pour réaliser ma veille informationnelle j'utilise l'outil feedly. Il me permet de découper ma veille par sujets. ` +
        `Je m'informe particulièrement sur le langage Javascript car je le trouve puissant et agréable. De plus il est très polyvalent ` +
        `et peut être utilisé pour faire du front, du back, du web du natif. Je me tiens également informé des avancées sur Docker. ` +
        `Je suis attiré, en plus du développement par l'aspect déploiement des applications. Docker est une technologie qui permet de  ` +
        `faciliter et d'automatiser le déploiement de services et applications. Je l'utilise pour la plupart de mes projets. ` +
        `En plus de ces deux sujets précis j'ai un feed qui regroupe les informations sur la technologie en général. ` +
        `Je peux sauvegarder les articles qui me paraissent pertinents dans une planche que j'ai appelée 'important'.`,
      screenCompetence: feedly,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee:
        'Mettre en œuvre des outils et stratégies de veille informationnelle',
      descriptionCompetence:
        `En plus de feedly je suis des comptes twitters qui font régulièrement des tweets concernant l'actualitée dans l'IT ` +
        `comme @LiiorC, @MathisHammel, @UnderscoreTalk. Je suis également des chaînes youtube comme Fireship, Underscore_, Kalle Hallden. `,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee: 'Gérer son identité professionnelle',
      descriptionCompetence:
        `Je possède un compte LinkedIn que je tiens à jour notamment avec mes experiences professionnelles. ` +
        `Je suis également fort de proposition concernant mon école et les sujets qui me concernent. Par exemple ` +
        `je n'ai pas hésité à partager ce post LinkedIn lorsque que nous avons remporté le workshop qui est un concours national ` +
        `au sein de l'EPSI `,
      screenCompetence: linkedInWorkshop,
      lien: {
        libelle: 'Lien vers mon profil linkedIn',
        url: 'https://www.linkedin.com/in/florimond-jaulin/',
      },
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee: 'Développer son projet professionnel',
      descriptionCompetence:
        `Lors de mon cursus et de mes différents stages j'ai rencontré des difficultés par manque de compétences techniques. ` +
        `Je me suis alors autoformé sur internet grâce à différents supports. J'ai principalement utilisé openClassroom et Udemy. ` +
        `J'ai également acquis des compétences moins techniques concernant le RGPD entre autres. ` +
        `J'ai créé une section dédiée aux certifications et aux compétencess que j'ai pu acquérir. `,

      screenCompetence: dockerUdemy,
      lien: {
        libelle: 'Lien vers mon parcours de certifications',
        url: '/certifications',
      },
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee: 'Mettre en place son environnement d’apprentissage personnel',
      descriptionCompetence:
        `Lors de mon stage j'ai utilisé mon ordinateur personnel. ` +
        `J'ai utilisé des technologies nouvelles qui ont nécessité l'installation et la configuration de divers programmes. ` +
        `J'ai entres autre installé PHP 8.0 alors que j'avais PHP 7.4 sur mon poste. J'ai installé Node car j'ai travaillé ` +
        `avec React.js et Node.js pour la première fois. J'ai également installé Docker. ` +
        `Enfin j'ai installé le logiciel GantProject qui m'a permis d'apprendre à réaliser un ` +
        `diagramme de Gant et de planifier mes tâches.`,
      screenCompetence: gantTailor,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee: 'Mettre en place son environnement d’apprentissage personnel',
      descriptionCompetence:
        `Lors de mon stage j'ai utilisé un ordinateur fourni par mon entreprise. ` +
        `Je l'ai récupéré sans logiciels installés pour développer. J'ai installé et configuré des logiciels et ` +
        `extensions afin de mettre en place mon environnement de développement. ` +
        `J'ai entre autres installé node version 14, postMan pour tester des requêtes api, un émulateur ` +
        `CosmosDB pour travailler avec une base de données en local.`,
    },
  ],
];

export default skills;
