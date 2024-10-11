var e4 = document.getElementById('e4');
var e12 = document.getElementById('e12');
var e17 = document.getElementById('e17');
var elements = [e5, e6, e7, e8, e9, e10, e11];
var elements2 = [e13, e14, e15, e16];
var elements3 = [e18, e19, e20];

e4.addEventListener('mouseenter', function () {
    elements.forEach(function (element) {
        element.classList.add('hoverable', 'new');
        element.classList.remove('reverse');
    });
});

e4.addEventListener('mouseleave', function () {
    elements.forEach(function (element) {
        if (element.classList.contains('hoverable')) {
            element.classList.remove('hoverable', 'new');
            element.classList.add('reverse');
        }
    });
});

e12.addEventListener('mouseenter', function () {
    elements2.forEach(function (element) {
        element.classList.add('hoverable', 'new');
        element.classList.remove('reverse');
    });
});

e12.addEventListener('mouseleave', function () {
    elements2.forEach(function (element22) {
        if (element22.classList.contains('hoverable')) {
            element22.classList.remove('hoverable', 'new');
            element22.classList.add('reverse');
        }
    });
});

e17.addEventListener('mouseenter', function () {
    elements3.forEach(function (element) {
        element.classList.add('hoverable', 'new');
        element.classList.remove('reverse');
    });
});

e17.addEventListener('mouseleave', function () {
    elements3.forEach(function (element22) {
        if (element22.classList.contains('hoverable')) {
            element22.classList.remove('hoverable', 'new');
            element22.classList.add('reverse');
        }
    });
});

/*footer */

const bot = document.querySelector('.botao');
let boolean=false;
const bottext = document.querySelector('.textofooter');
let timeout;

bot.addEventListener('mouseover', function() {
    bot.classList.remove('shrink');
    bot.style.width = '550px';
    bot.style.height = '150px';
    timeout = setTimeout(function() {
        if(bot.matches(':hover')) {
            bottext.classList.add('hidden');
        }
    }, 200);
});

bot.addEventListener('mouseleave', function() {
    clearTimeout(timeout);
    bottext.classList.remove('hidden');
    bot.classList.add('shrink');
    bot.style.width = '60px';
    bot.style.height = '60px';
});