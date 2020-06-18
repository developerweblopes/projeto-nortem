window.onload = function () {
    document.querySelector(".menumobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display=='flex'){
            document.querySelector(".menu nav ul").style.display ='none';
            document.querySelector("#after").style.transform = 'translate(0px,0px) rotate(0deg)';
            document.querySelector("#before").style.transform = 'translate(0px,0px) rotate(0deg)';
            document.querySelector("#check").style.display = 'flex';
            document.querySelector(".menumobile").style.borderRadius = '0px';
            

        } else {
            document.querySelector(".menu nav ul").style.display='flex';
            document.querySelector("#after").style.transform = 'translate(0px,10px) rotate(45deg)';
            document.querySelector("#before").style.transform = 'translate(0px,-10px) rotate(-45deg)';
            document.querySelector("#check").style.display = 'none';
            document.querySelector(".menumobile").style.borderRadius = '50px';
    }
    });
};

function nortem() {
    document.querySelector('#foto').style.display = 'block'
    document.querySelector('#projetos').style.display = 'none'
    document.querySelector('#section-contatos').style.display = 'block'
    document.querySelector('#section-orcamento').style.display = 'none'
}

function projeto() {
    document.querySelector('#foto').style.display = 'none'
    document.querySelector('#projetos').style.display = 'block'
    document.querySelector('#section-contatos').style.display = 'none'
    document.querySelector('#section-orcamento').style.display = 'block'
}

function pro() {
    if (document.querySelector('.menu-rigth').style.background = '#007e45') {
        document.querySelector('.menu-left').style.background = '#109a66'
        document.querySelector('.menu-rigth').style.zIndex = '1'
        document.querySelector('.menu-left').style.zIndex = '0'
        document.querySelector('.menu-rigth').style.transitionDuration = '1s'
    }
}
function nor() {
    if (document.querySelector('.menu-rigth').style.background = '#109a66') {
        document.querySelector('.menu-left').style.background = '#007e45'
        document.querySelector('.menu-left').style.zIndex = '1'
        document.querySelector('.menu-left').style.transitionDuration = '1s'
    }
}
function contatos() {
    document.querySelector('#section-contatos').style.display = 'block'
    document.querySelector('#section-orcamento').style.display = 'none'
}

function orcamento() {
    document.querySelector('#section-contatos').style.display = 'none'
    document.querySelector('#section-orcamento').style.display = 'block'
}

let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal = "";

for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', function () {

        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });

}


btClose.addEventListener('click', function () {
    modal.classList.toggle('modal_active');
});