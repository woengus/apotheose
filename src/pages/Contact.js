import React from "react";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import Mouse from "../components/Mouse";
import ButtonsBottom from "../components/ButtonsBottom";
import CopyToClipboard from "react-copy-to-clipboard"; //permet de copier dans le prese papier en cliquant, ici le numéro de téléphone
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <ContactForm/>
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Prénom, Nom et adresse</h4>
              <p>Olivier Biard</p>
              <p>4Bis Rue de la Charlotte</p>
              <p>44540 Les Vallons de l'Erdre</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0633905845" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 33 90 58 45
                </p>
              </CopyToClipboard>
            </div>
          </div>

          <div className="email">
            <div className="content">
              <h4>E-mail</h4>
              <CopyToClipboard
                text="olivierbiard@woengus.com"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("E-mail copié !");
                  }}
                >
                  olivierbiard@woengus.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
        </div>
        <ButtonsBottom left={"/project-4"} />
      </div>
   
     
    </main>
  );
};

export default Contact;
