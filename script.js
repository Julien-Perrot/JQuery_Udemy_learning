$(document).ready(function() {

    // LA VIRGULE APRÉS AVOIR DÉCLARER MA VARIABLE PERMET DE DÉCLARER D'AUTRE VARIABLE SANS À AVOIR ET ÉCRIRE A NOUVEAU 'LET'.
    let $mainMenuItems = $('#main-menu ul').children('li'),
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex = 2,

        // Je déclare ma fonction init (pour l'ouverture) --> :
        init = function() {
            bindEvents();
                if(validIndex(openedIndex)) {
                    animateItem($mainMenuItems.eq(openedIndex), true, 700);
                }
        },

        bindEvents = function() {
            $mainMenuItems.children('.images').click(function() {
                let = newIndex = $(this).parent().index(),
                checkAndAnimateItem(newIndex);
            });

            $('.button').hover(
                function() {
                    $(this).addClass('hovered');
                },
                function() {
                    $(this).removeClass('hovered');
                }
            );

            $('.button').on('click', function() {
                let newIndex = $(this).index();
                checkAndAnimateItem(newIndex);
            });
        },

        validIndex = function(indexToCheck){
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
        },

        // Fonction pour l'animation : 
        animateItem = function($item, toOpen, speed) {
            let $colorImage = $item.find('.color-bg'),
            itemParam = toOpen ? {width: '420px'} : {width: '140px'},
            $colorImageParam = toOpen ? {left: '0px'} : {left: '140px'};
            $colorImage.animate($colorImageParam, speed);
            $item.animate(itemParam, speed);
        },

        checkAndAnimateItem = function(indexToCheckAndAnimate) {
            if(openedIndex === indexToCheckAndAnimate) {
                animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                openedIndex = -1;
            } else {
                if(validIndex(indexToCheckAndAnimate)) {
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = indexToCheckAndAnimate;
                    animateItem($mainMenuItems.eq(openedIndex), true, 250);
                }
            }
        };

        // J'exécute ma fonction init(); <-- comme ceci
        init();

});