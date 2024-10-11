let variavel = 0;
let variaveloposta;
addEventListener('DOMContentLoaded',function(){
    let img = document.querySelectorAll('img');
    let colorText = document.getElementById('TextCor')
    
    setInterval(function(){
        img.forEach(function(imgs){
            imgs.style.filter='hue-rotate('+variavel+'deg)';
        });

        colorText.style.color = 'hsl(' + variaveloposta + ', 100%, 50%)';
        colorText.style.opacity = '70%';
        document.querySelector('.botao').style.border = "7px solid hsl(" + variaveloposta + ", 100%, 50%)";
        variaveloposta = 360-variavel;
        if(variavel>=360){
            variavel=0;
        } else {
            variavel++;
        }
        },30);
   
});
