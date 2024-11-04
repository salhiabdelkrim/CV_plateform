
    /* Affichage de la présentation de l'équipe (accueil)  
    et affichage du cv après le clique */
    const element1=document.querySelectorAll('li.sousmenu-item');
    for (let j =0 ; j <5 ; j++){
        element1[j].addEventListener('click', () => {
            const iframeAbdel = document.querySelectorAll('iframe')[j];
            iframeAbdel.style.display = 'block';
            for (let i in document.querySelectorAll('iframe')) {
                if (document.querySelectorAll('iframe')[i].style != undefined && i != j) {
                    document.querySelectorAll('iframe')[i].style.display = 'none';
                }
            }
/*--------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------- BONUS : ----------------------------------------------------------------
Changement de couleur de fond et déplacement vers chaque section du cv si on passe le curseur sur le titre qui lui correspond dans 
le menu à gauche -----------------------------------------------------------------------------------------------------------------
!!!!!!!!! NB : vous devez lancer le projet sur un serveur local pour que la propriété contentDocument soit débloquée !!!!!!!!!!!!!!!
----------------------------------------------------------------------------------------------------------------------------------
*/
           
                /* const iframeDocument = iframeAbdel.contentDocument ;
                const etudiant1sections = iframeDocument.querySelectorAll('#info, #profil, #exp_pro, #educ, #lois');
                
                etudiant1sections.forEach(section =>{
                let nodeVariable =document.querySelectorAll("."+section.id);
                console.log(nodeVariable);
                
                nodeVariable.forEach(h => {
                    h.addEventListener('mouseover', ()=>{
                    console.log(document.querySelector("."+section.id));
                    section.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                    
                    section.scrollIntoView({ behavior: 'smooth' });
                });  
                    h.addEventListener('mouseout', ()=>{
                    section.style.backgroundColor = 'transparent';
                });
            });
                });  */
            });
    }

        

    
function reagir(){
    const element=document.querySelectorAll('.sousmenu li');
    for (let j =0 ; j <5 ; j++){
        element[j].addEventListener('mouseover',() =>{
            const iframeAbdel1 = document.querySelectorAll('iframe')[j];
            const iframeDocument = iframeAbdel1.contentDocument ;
                const etudiant1sections = iframeDocument.querySelectorAll('#info, #profil, #exp_pro, #educ, #lois');
                
                etudiant1sections.forEach(section =>{
                let nodeVariable =document.querySelectorAll("."+section.id);
                console.log(nodeVariable);
                
                nodeVariable.forEach(h => {
                    h.addEventListener('mouseover', ()=>{
                    console.log(document.querySelector("."+section.id));
                    section.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                    
                    section.scrollIntoView({ behavior: 'smooth' });
                });  
                    h.addEventListener('mouseout', ()=>{
                    section.style.backgroundColor = 'transparent';
                });
            });
                }); 
        });
    }
} 
           






















