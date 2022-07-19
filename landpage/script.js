

let letters = document.getElementById('uau');
        let img = document.getElementById('krakon');

        window.addEventListener('scroll', function() {
        let value = window.scrollY;
        letters.style.marginLeft = value * -1.075 + 'px';
        img.style.marginLeft = value * -1.075 + 'px';

 })