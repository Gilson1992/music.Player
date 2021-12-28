let musicas = [
    {titulo:'Before you go' , artista: 'Lewis Capaldi', src: 'musicas/Before You Go.mp3', img:'imagens/before.jpg'},
    {titulo:'Beggin' , artista: 'Maneskin', src: 'musicas/Beggin.mp3', img:'imagens/beggin.jfif'},
    {titulo:'Alive -  IT FEELS LIKE' , artista: 'Alok', src: 'musicas/Alive.mp3', img:'imagens/alive.jpg'},
    {titulo:'Descanso' , artista: 'Mauro Henrique', src: 'musicas/Descanso.mp3', img:'imagens/descanso.jfif'},
    {titulo:'Grenade' , artista: 'Bruno Mars', src: 'musicas/Grenade.mp3', img:'imagens/grenade.jpg'},
];


let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector ('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeDoArtista = document.querySelector ('.descricao i');
let indexMusica = 0;

renderizarMusica(indexMusica);

document.querySelector('.botao-play'). addEventListener('click', tocarMusica);

document.querySelector('.botao-pause'). addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate' , atualizarBarra);  

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 5;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 5){
        indexMusica = 0;
    }

    renderizarMusica(indexMusica);
});



//Funções

function renderizarMusica (index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeDoArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos (Math.floor(musica.duration)); 

    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDeCorrido = document.querySelector ('.inicio');
    tempoDeCorrido.textContent = segundosParaMinutos (Math.floor (musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor (segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+ ':' +campoSegundos;
}

