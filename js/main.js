window.onload = function () {

    function changeBackgroundColor() {
        let hero = document.querySelector('body > section');
        // change background color to white.
        hero.classList.replace('is-black', 'is-white');
    };

    setTimeout(function () {
        let contentOne = document.querySelector('#contentOne');
        let contentTwo = document.querySelector('#contentTwo');
        changeBackgroundColor();

        contentTwo.style.display = 'none';
        contentOne.style.display = 'flex';
    }, 2000);

    function fadeOutImage() {
        let heroImage = document.querySelector('#hero-image');
        // fade image to 0.2 opacity.
        heroImage.style.opacity = '0.2';
    }

    setTimeout(function () {
        fadeOutImage();
    }, 3000);

    function fadeInTitle() {
        let fashion = document.getElementById('fashion');
        // fade in title text over image.
        fashion.style.opacity = '1';
    }
    
    setTimeout(function() {
        fadeInTitle();
    }, 5000);
    
    function fadeInBodyText() {
        let studioBrief = document.getElementById('studio-brief');
        // fade in body text over image.
        studioBrief.style.opacity = '1';
    }

    setTimeout(function() {
        fadeInBodyText();
    }, 7000);
    
    function shrinkImage() {
        let fashion = document.getElementById('hero-image');
        // shrink image width
        fashion.classList.toggle('is-500x500');

    }

    function dislayNextSections() {
        let hero = document.querySelector('body > section');
        let sectionTwo = document.getElementById('sectionTwo');

        // add bottom border
        hero.style.borderBottom = '50px solid';

        // display section two
        sectionTwo.style.display = 'block';
    }


    setTimeout(function() {
        shrinkImage();
        dislayNextSections();
    }, 7500);
}