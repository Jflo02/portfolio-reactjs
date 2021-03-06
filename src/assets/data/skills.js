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
      nomDomaine: 'G??rer le patrimoine informatique',
      idee: 'G??rer des sauvegardes',
      descriptionCompetence:
        `Pour r??aliser le projet de gestions d'un hopital nous ??tions quatre. Pour travailler efficacement nous ` +
        `avons d??cid?? de versionner le code source ?? l'aide de github et de l'h??berger sur GitHub.`,
      screenCompetence: hopitalSymfonyGithub,
      projectName: 'Gestion hopital Symfony',
      lien: {
        libelle: 'Lien vers le github',
        url: 'https://github.com/Jflo02/SymfonyBtsProject',
      },
    },
    {
      id: uuidv4(),
      nomDomaine: 'G??rer le patrimoine informatique',
      idee: 'G??rer des sauvegardes',
      descriptionCompetence:
        `Nous utilisons une base de donn??es MariaDB pour stocker les informations relatives ` +
        `?? l'application. Nous avons souhait?? sauvegarder r??guli??rement ces donn??es pour palier ?? une ` +
        `corruption ou suppression de celles-ci. Nous avons r??alis?? un script qui extrait toutes les donn??es ` +
        `de la base puis les sauvegarde dans le r??pertoire /var/backups/dbn_hopital. ` +
        `Nous sauvegardons le fichier sous le format TIMESTAMP_hopital.bak. Nous r??alisons ce script gr??ce au CRON tous les jours ?? une ` +
        `heure du matin car le trafic est plus faible.`,
      screenCompetence: hopitalSymfonySaveBdd,
      projectName: 'Gestion hopital Symfony',
    },
    {
      id: uuidv4(),
      nomDomaine: 'G??rer le patrimoine informatique',
      idee:
        'Mettre en place et v??rifier les niveaux d???habilitation associ??s ?? un service',
      descriptionCompetence:
        `Nous avons pr??vu dans le d??veloppement de la base de donn??es qu'un utilisateur puisse avoir diff??rents r??les. ` +
        `Ici un 'User' est l'entit?? qui permet de se connecter ?? l'application gr??ce ?? un couple d'identifiants email / mot de passe. ` +
        `Il sera un infirmier ou un personnel administratif, ce qui lui permettra d'acc??der ?? diff??rentes parties de l'application.`,
      screenCompetence: hpotalSymfonyHabilitation,
      projectName: 'Gestion hopital Symfony',
    },
    {
      id: uuidv4(),
      nomDomaine: 'G??rer le patrimoine informatique',
      idee:
        'Mettre en place et v??rifier les niveaux d???habilitation associ??s ?? un service',
      descriptionCompetence:
        `Dans le cadre du projet transversal 'D??veloppement d'un application Web' ` +
        `nous avons cr???? une distinction entre les comptes utilisateurs et administrateurs. Les utilisateurs peuvent d'inscrire et r??server des s??jours alors que les administrateurs ` +
        `ont acc??s aux CRUD de plusieurs ressources tel que les clients et les chalets`,
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
      nomDomaine: 'G??rer le patrimoine informatique',
      idee:
        'Recenser et identifier les ressources num??riques. ' +
        'V??rifier les conditions de la continuit?? d???un service informatique',
      descriptionCompetence:
        `Lors de notre module de supervision nous avons eu l'occasion de mettre en place un serveur de supervision, nous avons choisi Zabbix, afin de monitorer ` +
        `l'??tat de nos services et de nos diff??rents mat??riels tel qu'un routeur VyOs, un serveur web apache`,
      screenCompetence: Zabbix,
    },
    {
      id: uuidv4(),
      nomDomaine: 'G??rer le patrimoine informatique',
      idee: 'Recenser et identifier les ressources num??riques',
      descriptionCompetence:
        `Dans le cadre du projet transversal 'Installation d'une Infrastructure Syst??me sous l'environnement Linux' ` +
        `nous avons install?? le service d'inventaire OCSInventory et l'avons d??ploy?? sur plusieurs machines. ` +
        `Nous avons ??galement install?? le plugin GLPI.`,
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
      nomDomaine: 'G??rer le patrimoine informatique',
      idee: 'G??rer des sauvegardes',
      descriptionCompetence:
        `Pour d??velopper from scratch un Saas j'ai utilis?? du versionning ?? l'aide de git. ` +
        `J'ai ??galement utilis?? la plateforme GitLab afin de sauvegarder le code source dans un d??p??t priv??.`,
      screenCompetence: gitTailor,
    },
    {
      id: uuidv4(),
      nomDomaine: 'G??rer le patrimoine informatique',
      idee:
        'Mettre en place et v??rifier les niveaux d???habilitation associ??s ?? un service',
      descriptionCompetence:
        `J'ai r??alis?? en base de donn??es une distinction entre les utilisateurs. ` +
        `J'ai d??velopp?? la partie concernant les ??quipes j'ai donc cr???? un 'r??le' manager et un 'r??le' collaborateur. ` +
        `Le manager a beaucoup plus de droits et peut par exemple g??rer son ??quipe (ajouter, retirer des collaborateurs)`,
      screenCompetence: usersTailor,
    },
    {
      id: uuidv4(),
      nomDomaine: 'G??rer le patrimoine informatique',
      idee:
        'Mettre en place et v??rifier les niveaux d???habilitation associ??s ?? un service',
      descriptionCompetence:
        `J'utilisais une api pour communiquer du front vers le back de l'application. ` +
        `Afin d'??viter qu'une personne n'acc??de ?? certaines informations sensibles auxquelles elle n'aurait pas acc??s ` +
        `j'ai mis en place une s??curisation sur l'api. Il faut que la requ??te contienne en en-t??te un jeton de type JWT. ` +
        `Ce jeton est fourni par le serveur quand on se connecte avec un couple d'identifiants corrects. ` +
        `Ce jeton poss??de plusieurs informations comme le r??le de l'utilisateur. Ainsi on peut filtrer certaines ressources en ` +
        `fonction de son statut (administrateur, candidat, manager). Un candidat ne doit pas ??tre autoris?? ?? r??cup??rer ` +
        `la liste des collaborateurs de l'entreprise par exemple.`,
      screenCompetence: tailorJWT,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'G??rer le patrimoine informatique',
      idee: 'G??rer des sauvegardes',
      descriptionCompetence:
        `Lors de mon stage j'ai pu utiliser git afin de verisonner les projets sur lesquels je suis intervenu ` +
        `Nous avons utilis?? Azure DevOps afin de centraliser ce code source versionn??`,
    },
    {
      id: uuidv4(),
      nomDomaine: 'G??rer le patrimoine informatique',
      idee:
        'Exploiter des r??f??rentiels, normes et standards adopt??s par le prestataire informatique. ' +
        'V??rifier le respect des r??gles d???utilisation des ressources num??riques',
      descriptionCompetence:
        `Lors de mon stage la partie front du projet sur lequel je suis intervenu (Matrice de performance) ` +
        `poss??dait un profil de configuration prettier afin d'uniformiser le code. Cependant la partie back n'en disposait pas. ` +
        `Cela cr??ait des incoh??rences de syntaxes et des fautes qui ??taient remont??es par SonarQube. J'ai mis en place ce profil de configuration ` +
        `afin de respecter les normes et standards AXA France.`,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'R??pondre aux incidents et aux demandes d???assistance et d?????volution',
      idee:
        'Collecter, suivre et orienter des demandes. ' +
        'Traiter des demandes concernant les applications',
      descriptionCompetence:
        `Dans le cadre d'un projet de fin de module Symfony ` +
        `nous avons mis en place les issues de la plateforme GitHub. Nous avons sur la capture d'??cran suivante ` +
        `un utilisateur qui n'arrivait pas ?? lancer le projet, faute de fichier readme expliquant la proc??dure. ` +
        `Un des d??veloppeurs lui a indiqu?? la commande ?? r??aliser.` +
        ``,
      screenCompetence: githubIssue,
    },
  ],
  [],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'R??pondre aux incidents et aux demandes d???assistance et d?????volution',
      idee: 'Traiter des demandes concernant les applications',
      descriptionCompetence:
        `Dans le cadre de mon stage de deuxi??me ann??e chez Axa j'ai eu l'occasion de d??velopper ` +
        `de nouvelles fonctionnalit??s concernant l'application 'Matrice de performances'. Dans la  capture d'??cran ` +
        `suivante, le PO m'a demand?? de modifier la mani??re dont l'export csv des matrices de l'application ??tait ` +
        `r??alis??. En g??n??ral nous utilisons la m??thode agile et des cartes sous forme d'user story. Nous ` +
        `avions utilis?? les mails car mes acc??s ?? Azure DevOps n'??taient pas encore op??rationnels. ` +
        `Une fois que j'avais ajout?? l'??volution, mon code ??t?? revu par mes coll??gues gr??ce une pull request. ` +
        `Une fois celle-ci approuv??e la modification ??tait appliqu??e dans un environnement de d??veloppement puis de recette. ` +
        `Les Product Owners et testeurs pouvaient alors tester l'ajout afin de le valider et de l'ajouter en production.`,
      screenCompetence: axaMailMpsaEvolution,
    },
    {
      id: uuidv4(),
      nomDomaine:
        'R??pondre aux incidents et aux demandes d???assistance et d?????volution',
      idee: 'Traiter des demandes concernant les applications',
      descriptionCompetence:
        `Dans le cadre de mon stage de deuxi??me ann??e chez Axa nous avions un processus type pour r??soudre des incidents.` +
        `Lorsque qu'une personne telle qu'un d??veloppeur ou testeur d??couvrait un comportement anormal, un bug, il cr??ait une carte dans le backlog ` +
        `de l'application avec un intitul?? 'Bug'. Il pouvait ??galement assigner ?? ce bug une s??v??rit?? et une criticit??. ` +
        `Une fois ces cartes ajout??es nous pouvions en discuter avec le reste de l'??quipe lors de r??unions ou rituels agiles et ` +
        `planifier leur r??solution.` +
        ``,
      screenCompetence: axaUs,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'D??velopper la pr??sence en ligne de l???organisation',
      idee:
        'Participer ?? l?????volution d???un site Web exploitant les donn??es de l???organisation.',
      descriptionCompetence:
        `Dans le cadre du projet transversal 'D??veloppement d'un application Web' ` +
        `nous avons r??lis?? une maquette de l'application web de type wireframe. ` +
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
      nomDomaine: 'D??velopper la pr??sence en ligne de l???organisation',
      idee:
        'Participer ?? l?????volution d???un site Web exploitant les donn??es de l???organisation.',
      descriptionCompetence:
        `Lors de mon stage de premi??re ann??e j'ai pu cr??er un Saas from scratch. ` +
        `Dans un premier temps j'ai cherch?? ?? compl??ter les besoins de la plateforme sans me focaliser sur son design. ` +
        `Une fois que mon travail correspondait aux attentes en terme de fonctionnalit??s j'ai pu r??aliser une version 2 en ` +
        `me focalisant sur le style du site et en faisant une refonte graphique. Le document suivant montre des captures d'??crans ` +
        `de l'??volution graphique du site web. `,
      screenCompetence: tailorNewCandidate,
      lien: {
        libelle: "Document retra??ant l'??volution graphique de la plateforme",
        url:
          'https://www.dropbox.com/s/23cloapptlru5lt/Evolution%20graphique%20du%20Saas%20Tailor.pdf?dl=0',
      },
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'D??velopper la pr??sence en ligne de l???organisation',
      idee:
        'Participer ?? l?????volution d???un site Web exploitant les donn??es de l???organisation.',
      descriptionCompetence:
        `J'ai eu pour mission de rajouter des bulles d'aide pour faciliter l'utilisation du service. ` +
        `On m'a laiss?? le choix concernant la m??thode d'impl??mentation, parmi les options serieuses il y avait l'affichage de ` +
        `la bulle au survol d'une case mais cela aurait donn?? un effet guirlande de no??l selon moi. ` +
        `J'ai donc opt?? pour l'ajout d'un logo 'i' d'information en dessous du logo d'??dition. Au survol du 'i' la bulle d'aide s'affiche. ` +
        `J'ai respect?? les donn??es de l'organisation en utilisant des couleurs faisant partie de la charte graphique. ` +
        `Ce syst??me a ??t?? valid?? par le PO avant d'??tre ajout?? au code source. Elle respecte donc les standards.`,
      screenCompetence: mpsaWithBubbles,
      lien: {
        libelle: 'Document avant / apr??s ajout',
        url:
          'https://www.dropbox.com/s/6p27by7s2wh243k/EvolutionSiteWebMPSA.pdf?dl=0',
      },
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Travailler en mode projet',
      idee: 'Planifier les activit??s',
      descriptionCompetence:
        `Pour r??aliser le projet de gestions d'un h??pital nous ??tions 4 et avions beaucoup de travail.  ` +
        `Il fallait r??aliser la partie backend de l'application en Symfony dont une api, la base de donn??es et la partie frontend. ` +
        `Pour ce faire nous avons suivi la m??thode kanban et r??alis?? un tableau avec l'outil Trello`,
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
      idee: 'Planifier les activit??s',
      descriptionCompetence:
        `Pour la r??alisation du portfolio dans le cadre de l'??preuve E4 j'ai utilis?? Git. J'ai ??galement h??berg?? le code source  ` +
        `sur Github. ` +
        `J'ai utilis?? deux branches, la premi??re qui est la branche principale, main qui n'h??berge pas le code le plus ?? jour mais ` +
        `qui contient une version stable de l'application qui est par ailleurs celle d??ploy??e en production. ` +
        `J'ai ??galement une branche 'develop' qui elle contient le code et les commits les plus ?? jour. ` +
        `Cela me permet de tester les nouvelles fonctionnalit??s dans un environnement de d??veloppement tout en conservant ` +
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
      idee: 'Planifier les activit??s',
      descriptionCompetence:
        `Dans le cadre du module gestion de projet nous avons choisi un projet fictif  ` +
        `qui consiste ?? la r??alisation d'un festival sur les plus belles plages de France le temps d'un ??t?? ` +
        `dans un bus que nous aurions au pr??alable r??nov??. Pour planifier ce projet nous avons r??alis?? un WBS ?? l'aide du logiciel Xmind ` +
        `ainsi qu'un diagramme de gant avec le logiciel projectLibre. `,
      screenCompetence: projetDiagrammeGant,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Travailler en mode projet',
      idee:
        'Analyser les objectifs et les modalit??s d???organisation d???un projet. Planifier les activit??s',
      descriptionCompetence: `J'ai r??alis?? un diagramme de Gant afin d'organiser mes 9 semaines de stage. `,
      screenCompetence: gantTailor,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Travailler en mode projet',
      idee:
        'Analyser les objectifs et les modalit??s d???organisation d???un projet',
      descriptionCompetence:
        `Lors de mon stage nous utilisions la m??thode agile. De ce fait nous avions un product owner qui avait le r??le ` +
        `de client. Lors de r??unions ce dernier exprimait un besoin. Je devais par la suite analyser les objectifs et les modalit??s du    ` +
        `projet (technologie, d??lais, d??coupage de la t??che, documentation ?? produire) afin de pouvoir r??pondre au besoin. ` +
        `Par la suite je r??alisais un compte-rendu oral lors de r??unions sur l'avancement et les ??ventuelles difficult??s rencontr??es.  `,
      screenCompetence: axaCompetencesPro,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre ?? disposition des utilisateurs un service informatique',
      idee: 'D??ployer un service',
      descriptionCompetence:
        `J'ai d??velopp?? mon portfolio en utilisant git et Github. Afin de le mettre en ligne j'ai choisi ` +
        `d'utiliser le service netlify. Ce service est directement li?? ?? mon d??p??t github et plus ` +
        `pr??cis??ment ?? la branche main. Il est capable de d??tecter une mise ?? jour de celle-ci et de ` +
        `re-compiler et re-d??ployer l'application d??s qu'un changement est r??alis?? et pouss?? sur le repos. ` +
        `Cette m??thode, coupl??e au fait que j'utilise une branche 'develop' et ne merge que les changements ` +
        `que je souhaite d??ployer en production sur la branche 'main' me permettent d'avoir en permanence une version ` +
        `stable de mon application et un d??ploiement automatis??. `,
      screenCompetence: netlifyDeployHistory,
    },
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre ?? disposition des utilisateurs un service informatique',
      idee: 'D??ployer un service',
      descriptionCompetence:
        `Dans le cadre du projet de gestion d'un h??ptial nous avons d??ploy?? la base de donn??es mariaDB sur un VPS. ` +
        `Celui-ci est un serveur Debian 9. La base est d??ploy??e gr??ce ?? Docker. Cela nous permet d'avoir un PRA tr??s court. ` +
        `En cas de probl??me avec la base, nous pouvons la relancer avec une commande docker qui est sp??cifi?? dans le document de MEP d??di??. ` +
        `La capture d'??cran suivante montre le conteneur docker h??bergeant la base sur le serveur accessible au nom de 'lescopains.org'. `,

      screenCompetence: dockerPsBdd,
    },
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre ?? disposition des utilisateurs un service informatique',
      idee:
        'R??aliser les tests d???int??gration et d???acceptation d???un service. Accompagner les utilisateurs dans la mise en place d???un service',
      descriptionCompetence:
        `Dans le cadre du projet de gestion d'un h??pital j'ai r??alis?? un document d??taillant la mise en place de la partie base de donn??es ` +
        `de l'application. ??tant donn?? que cette base est d??ploy??e sur un vps j'ai modifi?? dans le document suivant les informations qui permettraient ?? ` +
        `quelqu'un d'acc??der ?? la base avec l'inscription *confidentiel* tel que les mots de passe. J'ai ??galement d??taill?? un test d'int??gration ?? r??aliser ` +
        `pour s'assurer que la base de donn??es soit fonctionnelle et que la liaison avec l'application soit effective.`,

      screenCompetence: hopitalMepBdd,
      lien: {
        libelle: "Lien vers la MEP et le test d'int??gration",
        url:
          'https://www.dropbox.com/s/ftscmm0bv5pe38f/Procedure%20MEP%20et%20test%20hopital.pdf?dl=0',
      },
    },
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre ?? disposition des utilisateurs un service informatique',
      idee: 'Accompagner les utilisateurs dans la mise en place d???un service',
      descriptionCompetence:
        `Dans le cadre du projet de gestion d'un h??pital nous avons r??alis?? un document ?? destination ` +
        `des d??veloppeurs pour leur permettre de mettre en place les diff??rents services de l'application.`,
      screenCompetence: hopitalReadme,
      lien: {
        libelle: 'Lien vers le github du projet',
        url: 'https://github.com/Jflo02/SymfonyBtsProject',
      },
    },
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre ?? disposition des utilisateurs un service informatique',
      idee: 'Accompagner les utilisateurs dans la mise en place d???un service',
      descriptionCompetence:
        `Dans le cadre du projet transversal 'D??veloppement d'un application Web' nous avons cr???? une ` +
        `note technique permettant ?? une personne de lancer et utiliser l'application. ` +
        `Elle indique les champs ?? modifier pour connecter l'application avec une base de donn??es ainsi ` +
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
        'Mettre ?? disposition des utilisateurs un service informatique',
      idee: 'Accompagner les utilisateurs dans la mise en place d???un service',
      descriptionCompetence:
        `J'ai r??alis?? lors de mon stage de premi??re ann??e un Saas de 0. Pour les personnes qui allaient  ` +
        `travailler sur la plateforme apr??s moi j'ai donc cr???? une documentation technique compl??te de 0.  ` +
        `Dans celle-ci je d??taille la structure globale du projet ainsi que les r??gles ??l??mentaires ?? respecter ` +
        `sur chaque nouvelle page. J'explique certaines ??tapes comment l'ajout d'entit??s Symfony. ` +
        `J'indique les pr??requis pour lancer l'application (technologies + versions).  ` +
        `Enfin j'explique comment lancer le projet, premi??rement en environnement de d??veloppement pour les d??veloppeurs  ` +
        `puis j'indique la proc??dure pour ex??cuter les diff??rentes composantes de l'application en environnement de production.  `,
      screenCompetence: tailorDocSommaire,
      lien: {
        libelle: 'Lien vers la documentation compl??te',
        url: 'https://www.dropbox.com/s/m0jjavctoqbomq0/Doc%20Tailor.pdf?dl=0',
      },
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre ?? disposition des utilisateurs un service informatique',
      idee: 'R??aliser les tests d???int??gration et d???acceptation d???un service',
      descriptionCompetence:
        `J'ai r??alis?? lors de mon stage de deuxi??me ann??e plusieurs tests que ce soit c??t?? backend ou front-end. ` +
        `J'ai utilis?? la m??thode Gherkin et le framework Jest. La m??thode Gherkin permet de r??aliser des tests d'int??grations. ` +
        `Je r??alisais des actions directement sur la partie de l'application en remplissant soumettant un formulaire par exemple. ` +
        `Par la suite j'utilisais le back en faisant une requete POST ce qui enregistrait dans la base de donn??es mock??e les informations.`,
      screenCompetence: axaGherkin,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son d??veloppement professionnel',
      idee: 'Mettre en place son environnement d???apprentissage personnel',
      descriptionCompetence:
        `Sur mon ordinateur personnel j'ai install?? divers outils de d??veloppement. J'utilise premi??rement l'IDE Visual Studio Code. ` +
        `En compl??ment j'ai install?? plusieurs extensions qui me permettent de travailler dans de bonnes conditions. On trouve entre autre ` +
        `Prettier qui permet d'avoir un code uniforme et respectant certains standards, un debugger Javascript comme je d??veloppe beaucoup dans ` +
        `ce langage ou encore jupyter qui me permet d'ouvrir certains types de fichiers directement dans l'IDE (pdf, csv) `,
      screenCompetence: vsCodeExtensions,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son d??veloppement professionnel',
      idee: 'Mettre en place son environnement d???apprentissage personnel',
      descriptionCompetence: `J'ai ??galement install?? un Xamp avec Laragon qui me permet d'avoir un environnement de d??veloppement en local. `,
      screenCompetence: laragon,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son d??veloppement professionnel',
      idee: 'Mettre en place son environnement d???apprentissage personnel',
      descriptionCompetence:
        `Enfin j'ai lou?? avec des camarades un VPS qui nous permet d'avoir un environnement pour nos projets. ` +
        `Nous avons fait ce choix car il est allum?? en permanence et poss??de une bonne bande passante. Cela nous permet de d??ployer ` +
        `nos projets sur un environnement de production et d'explorer les pratiques devops. `,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son d??veloppement professionnel',
      idee:
        'Mettre en ??uvre des outils et strat??gies de veille informationnelle',
      descriptionCompetence:
        `Pour r??aliser ma veille informationnelle j'utilise l'outil feedly. Il me permet de d??couper ma veille par sujets. ` +
        `Je m'informe particuli??rement sur le langage Javascript car je le trouve puissant et agr??able. De plus il est tr??s polyvalent ` +
        `et peut ??tre utilis?? pour faire du front, du back, du web du natif. Je me tiens ??galement inform?? des avanc??es sur Docker. ` +
        `Je suis attir??, en plus du d??veloppement par l'aspect d??ploiement des applications. Docker est une technologie qui permet de  ` +
        `faciliter et d'automatiser le d??ploiement de services et applications. Je l'utilise pour la plupart de mes projets. ` +
        `En plus de ces deux sujets pr??cis j'ai un feed qui regroupe les informations sur la technologie en g??n??ral. ` +
        `Je peux sauvegarder les articles qui me paraissent pertinents dans une planche que j'ai appel??e 'important'.`,
      screenCompetence: feedly,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son d??veloppement professionnel',
      idee:
        'Mettre en ??uvre des outils et strat??gies de veille informationnelle',
      descriptionCompetence:
        `En plus de feedly je suis des comptes twitters qui font r??guli??rement des tweets concernant l'actualit??e dans l'IT ` +
        `comme @LiiorC, @MathisHammel, @UnderscoreTalk. Je suis ??galement des cha??nes youtube comme Fireship, Underscore_, Kalle Hallden. `,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son d??veloppement professionnel',
      idee: 'G??rer son identit?? professionnelle',
      descriptionCompetence:
        `Je poss??de un compte LinkedIn que je tiens ?? jour notamment avec mes experiences professionnelles. ` +
        `Je suis ??galement fort de proposition concernant mon ??cole et les sujets qui me concernent. Par exemple ` +
        `je n'ai pas h??sit?? ?? partager ce post LinkedIn lorsque que nous avons remport?? le workshop qui est un concours national ` +
        `au sein de l'EPSI `,
      screenCompetence: linkedInWorkshop,
      lien: {
        libelle: 'Lien vers mon profil linkedIn',
        url: 'https://www.linkedin.com/in/florimond-jaulin/',
      },
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son d??veloppement professionnel',
      idee: 'D??velopper son projet professionnel',
      descriptionCompetence:
        `Lors de mon cursus et de mes diff??rents stages j'ai rencontr?? des difficult??s par manque de comp??tences techniques. ` +
        `Je me suis alors autoform?? sur internet gr??ce ?? diff??rents supports. J'ai principalement utilis?? openClassroom et Udemy. ` +
        `J'ai ??galement acquis des comp??tences moins techniques concernant le RGPD entre autres. ` +
        `J'ai cr???? une section d??di??e aux certifications et aux comp??tencess que j'ai pu acqu??rir. `,

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
      nomDomaine: 'Organiser son d??veloppement professionnel',
      idee: 'Mettre en place son environnement d???apprentissage personnel',
      descriptionCompetence:
        `Lors de mon stage j'ai utilis?? mon ordinateur personnel. ` +
        `J'ai utilis?? des technologies nouvelles qui ont n??cessit?? l'installation et la configuration de divers programmes. ` +
        `J'ai entres autre install?? PHP 8.0 alors que j'avais PHP 7.4 sur mon poste. J'ai install?? Node car j'ai travaill?? ` +
        `avec React.js et Node.js pour la premi??re fois. J'ai ??galement install?? Docker. ` +
        `Enfin j'ai install?? le logiciel GantProject qui m'a permis d'apprendre ?? r??aliser un ` +
        `diagramme de Gant et de planifier mes t??ches.`,
      screenCompetence: gantTailor,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son d??veloppement professionnel',
      idee: 'Mettre en place son environnement d???apprentissage personnel',
      descriptionCompetence:
        `Lors de mon stage j'ai utilis?? un ordinateur fourni par mon entreprise. ` +
        `Je l'ai r??cup??r?? sans logiciels install??s pour d??velopper. J'ai install?? et configur?? des logiciels et ` +
        `extensions afin de mettre en place mon environnement de d??veloppement. ` +
        `J'ai entre autres install?? node version 14, postMan pour tester des requ??tes api, un ??mulateur ` +
        `CosmosDB pour travailler avec une base de donn??es en local.`,
    },
  ],
];

export default skills;
