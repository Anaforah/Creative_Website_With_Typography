document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('mousemove', (event) => {
        let x = event.pageX + "px";
        let y = event.pageY + "px";

 
        frente.style.maskImage = `radial-gradient(circle at ${x} ${y}, transparent 5%, transparent 10%, black 20%, black 50%)`;
    });

    
    function resetScrollPosition() {
        window.scrollTo(0, 0);
    }
    
    window.addEventListener('beforeunload', resetScrollPosition);

    var container = document.querySelector('.container');
    let frente = document.getElementById("frente");

    document.addEventListener('wheel', function () {
        let text = document.querySelector('.h2inicio');
        text.style.display="none";
        container.style.opacity = 0;

        setTimeout(function () {
var container = document.querySelector('.container');

if (container && container.parentNode) {
    container.parentNode.removeChild(container);
}
            document.body.style.overflow = 'auto';
        }, 1000);

    });

    document.addEventListener('click', function () {
        let text = document.querySelector('.h2inicio');
        text.style.display="none";
        container.style.opacity = 0;

        setTimeout(function () {
            var container = document.querySelector('.container');

if (container && container.parentNode) {
    container.parentNode.removeChild(container);
}
            document.body.style.overflow = 'auto';
        }, 1000);

    });

});
