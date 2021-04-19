import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import { projectsData } from '../data/projectsData';


const Apropos = () => {
    return (
        <main>
            <Mouse/>
            <div className="principal-content">
                <div className="content-paragraphe">
                    <h1>Olivier Biard</h1>
                    <h2>Développeur Web Front React</h2> 
                        <p>
                         Alias: Wo, Woengus
                        </p>
                        <p>
                        Age: né à la fin des années 70 
                        </p>
                        <p>
                            Occupation: apprentissage du développement web et Unity
                        </p>
                        <p>
                            Lieu: quelques part dans l'ouest de la France, entre Angers et Nantes
                        </p>
                        <p>
                            Spécialité: JavaScript, NodeJs, PostregreySQL, HTML, CSS3
                        </p>
                        <p>
                            Compétences secondaires: Unity, C#, ISTQB Fondation
                        </p>     
                </div>
                <div className="content-avatar">
                    <img src={projectsData[4].img} alt="moi" className="avatar"/>    
                </div>    
                
            </div>
                
           
            <Navigation/>     
            <SocialNetwork />
        </main>
    );
};

export default Apropos;