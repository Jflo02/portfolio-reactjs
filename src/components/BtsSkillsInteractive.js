import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import skillsInfo from '../assets/data/skills';

const BtsSkillsInteractiveStyle = styled.div`
  .container {
  }
  .BtsSection__allItems {
    width: 100%;
    display: flex;
    align-items: center;
    .tableaugauche {
      border: 3px solid var(--gray-2);
      width: 150px;
      border-radius: 8px;
      margin-right: 10px;

      .titre {
        border-bottom: 3px solid var(--gray-2);
        h1 {
          margin: 2rem 0;
          text-align: center;
          font-size: 1.5rem;
        }
      }
      .contenant {
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: stretch;
        //border: 1px solid grey;

        .items {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          width: 20rem;
          padding: 0 0.5rem;

          .skill {
            display: flex;
            text-align: center;
            justify-content: center;
            height: 100%;
            //border: 1px solid yellow;

            //border: 1px solid grey;
            span {
              margin: auto;
              align-items: center;
              width: 100%;
              font-size: 1.5rem;
              //border: 1px solid blue;
            }

            p {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          .cours {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 15rem;
            border-top: 3px solid var(--gray-2);
            font-size: 1.5rem;
          }

          .stageun {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 15rem;
            border-top: 3px solid var(--gray-2);
            font-size: 1.5rem;
            text-align: center;
          }

          .stagedeux {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 15rem;
            border-top: 3px solid var(--gray-2);
            font-size: 1.5rem;
            text-align: center;
          }
        }
      }
    }
    .tableau {
      display: flex;
      width: 100%;
      border: 3px solid var(--gray-2);
      border-radius: 8px;

      .colonne {
        width: 16.6%;
        border-left: 3px solid var(--gray-2);

        .titre {
          h1 {
            display: flex;
            align-items: center;
            text-align: center;
            height: 55px;
            font-size: 1rem;
          }
        }

        .contenant {
          height: 600px;
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: stretch;

          .items {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 0 0.5rem;
            border-top: 3px solid var(--gray-2);

            .skillList {
              height: 100%;
              text-align: center;
              font-size: 1rem;
              display: flex;
              align-items: center;
            }
            .green {
              background-color: green;
              border-bottom: 3px solid var(--gray-2);
              &:hover {
                border: 1px solid gray;
                filter: brightness(130%);
                -webkit-filter: brightness(130%);
                -moz-filter: brightness(130%);
                -o-filter: brightness(130%);
                -ms-filter: brightness(130%);
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
              }
            }
            .grey {
              background-color: grey;
              border-bottom: 3px solid var(--gray-2);
            }
            a,
            .case {
              height: 15rem;
              background-color: black;
            }
          }
        }
      }
    }
  }
`;
function BtsSkillsInteractive() {
  return (
    <BtsSkillsInteractiveStyle>
      <div className="BtsSection__allItems">
        <div className="tableaugauche">
          <div className="titre">
            <h1>Comp??tence</h1>
          </div>
          <div className="contenant">
            <div className="items">
              <div className="skill">
                <span>R??alisation professionnelle</span>
              </div>
              <div className="cours">
                <span>Formation</span>
              </div>
              <div className="stageun">
                <span>Stage 1??re ann??e</span>
              </div>
              <div className="stagedeux">
                <span>Stage 2??me ann??e</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tableau">
          <div className="colonne">
            <div className="titre">
              <h1>G??rer le patrimoine informatique</h1>
            </div>
            <div className="contenant">
              <div className="items">
                <p className="skillList">
                  ??? Recenser et identifier les ressources num??riques <br />
                  ??? Exploiter des r??f??rentiels, normes et standards adopt??s par
                  le prestataire informatique <br />
                  ??? Mettre en place et v??rifier les niveaux d???habilitation
                  associ??s ?? un service
                  <br />
                  ??? V??rifier les conditions de la continuit?? d???un service
                  informatique <br />??? G??rer des sauvegardes V??rifier le respect
                  des r??gles d???utilisation des ressources num??riques
                </p>
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[0],
                  }}
                  key="lal"
                  className="green"
                />
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[1],
                  }}
                  key="lal"
                  className="green"
                />
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[2],
                  }}
                  key="lal"
                  className="green"
                />
              </div>
            </div>
          </div>

          <div className="colonne">
            <div className="titre">
              <h1>
                R??pondre aux incidents et aux demandes d???assistance et
                d?????volution
              </h1>
            </div>
            <div className="contenant">
              <div className="items">
                <p className="skillList">
                  ??? Collecter, suivre et orienter des demandes <br />
                  ??? Traiter des demandes concernant les applications <br />
                  ??? Traiter des demandes concernant les services r??seau et
                  syst??me, applicatifs
                  <br />
                </p>
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[3],
                  }}
                  key="lal"
                  className="green"
                />
                <a className="grey">
                  <div className="stagedeux" />
                </a>
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[5],
                  }}
                  key="lal"
                  className="green"
                />
              </div>
            </div>
          </div>

          <div className="colonne">
            <div className="titre">
              <h1>D??velopper la pr??sence en ligne de l???organisation</h1>
            </div>
            <div className="contenant">
              <div className="items">
                <p className="skillList">
                  ??? Participer ?? la valorisation de l???image de l???organisation
                  sur les m??dias num??riques en tenant compte du cadre juridique
                  et des enjeux ??conomiques <br />
                  ??? R??f??rencer les services en ligne de l???organisation et
                  mesurer leur visibilit??. <br />
                  ??? Participer ?? l?????volution d???un site Web exploitant les
                  donn??es de l???organisation.
                  <br />
                </p>
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[6],
                  }}
                  key="lal"
                  className="green"
                />
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[7],
                  }}
                  key="lal"
                  className="green"
                />
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[8],
                  }}
                  key="lal"
                  className="green"
                />
              </div>
            </div>
          </div>

          <div className="colonne">
            <div className="titre">
              <h1>Travailler en mode projet</h1>
            </div>
            <div className="contenant">
              <div className="items">
                <p className="skillList">
                  ??? Analyser les objectifs et les modalit??s d???organisation d???un
                  projet <br />
                  ??? Planifier les activit??s <br />
                  ??? ??valuer les indicateurs de suivi d???un projet et analyser les
                  ??carts
                  <br />
                </p>
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[9],
                  }}
                  key="lal"
                  className="green"
                />
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[10],
                  }}
                  key="lal"
                  className="green"
                />
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[11],
                  }}
                  key="lal"
                  className="green"
                />
              </div>
            </div>
          </div>

          <div className="colonne">
            <div className="titre">
              <h1>
                Mettre ?? disposition des utilisateurs un service informatique
              </h1>
            </div>
            <div className="contenant">
              <div className="items">
                <p className="skillList">
                  ??? R??aliser les tests d???int??gration et d???acceptation d???un
                  service <br />
                  ??? D??ployer un service <br />
                  ??? Accompagner les utilisateurs dans la mise en place d???un
                  service
                  <br />
                </p>
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[12],
                  }}
                  key="lal"
                  className="green"
                />
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[13],
                  }}
                  key="lal"
                  className="green"
                />
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[14],
                  }}
                  key="lal"
                  className="green"
                />
              </div>
            </div>
          </div>

          <div className="colonne">
            <div className="titre">
              <h1>Organiser son d??veloppement professionnel</h1>
            </div>
            <div className="contenant">
              <div className="items">
                <p className="skillList">
                  ??? Mettre en place son environnement d???apprentissage personnel
                  <br />
                  ??? Mettre en ??uvre des outils et strat??gies de veille
                  informationnelle <br />
                  ??? G??rer son identit?? professionnelle
                  <br />??? D??velopper son projet professionnel
                </p>
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[15],
                  }}
                  key="lal"
                  className="green"
                />
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[16],
                  }}
                  key="lal"
                  className="green"
                />
                <Link
                  to={{
                    pathname: '/skill',
                    state: skillsInfo[17],
                  }}
                  key="lal"
                  className="green"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BtsSkillsInteractiveStyle>
  );
}

export default BtsSkillsInteractive;
