// Ajoute un écouteur d'événement pour s'assurer que le DOM est entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    
    // Sélectionne tous les éléments ayant la classe 'expandable-box'
    const expandableBoxes = document.querySelectorAll('.expandable-box');

    // Parcourt chaque élément avec la classe 'expandable-box'
    expandableBoxes.forEach(box => {
        
        // Ajoute un écouteur d'événement pour l'événement 'mouseenter' (quand la souris entre dans la boîte)
        box.addEventListener('mouseenter', function() {
            
            // Sélectionne l'élément enfant avec la classe 'expandable-content' à l'intérieur de la boîte actuelle
            const content = this.querySelector('.expandable-content');
            
            // Définit la hauteur maximale du contenu pour qu'elle corresponde à sa hauteur de défilement
            // Cela permet d'afficher tout le contenu à l'intérieur de la boîte
            content.style.maxHeight = content.scrollHeight + 'px';
        });

        // Ajoute un écouteur d'événement pour l'événement 'mouseleave' (quand la souris quitte la boîte)
        box.addEventListener('mouseleave', function() {
            
            // Sélectionne l'élément enfant avec la classe 'expandable-content' à l'intérieur de la boîte actuelle
            const content = this.querySelector('.expandable-content');
            
            // Réinitialise la hauteur maximale du contenu à 0, ce qui cache le contenu
            content.style.maxHeight = '0';
        });
    });
});
