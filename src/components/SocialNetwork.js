import React from 'react';

const SocialNetwork = () => {
    //fonction pour attirer l'icone des réseaux sociaux au hover de la souris
    const anim = () => {
       let navLinks = document.querySelectorAll('.social-network a');
       navLinks.forEach(link => {
           link.addEventListener('mouseover', (e) => {
               let attrX = e.offsetX - 20;
               let attrY = e.offsetY - 15;
               link.style.transform = `translate(${attrX}px, ${attrY}px)`;
           })
           link.addEventListener('mouseleave', () => {
               link.style.transform = ''; //reset du déplacement des icones quand la souris n'est plus en hover
           })
       })
    }
    return (
        <div className="social-network">
            <ul className="content">
            <a href="https://www.linkedin.com/in/olivier-biard/" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li>
                        <i className="fab fa-linkedin"></i>
                    </li>
                </a>
                <a href="https://www.twitch.tv/woengus" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li>
                        <i className="fab fa-twitch"></i>
                    </li>
                </a>
                <a href="https://twitter.com/O_Biard" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li>
                        <i className="fab fa-twitter"></i>
                    </li>
                </a>
            </ul> 
        </div>
    );
};

export default SocialNetwork;