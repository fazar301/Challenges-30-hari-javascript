const [...tanah] = document.querySelectorAll('.hole')
const [...tikus] = document.querySelectorAll('.mole')
const papanSkor = document.querySelector('.score')


let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah){
    
    const t = Math.floor(Math.random() * tanah.length)
    const tRandom = tanah[t]
    if(tRandom == tanahSebelumnya){
        randomTanah(tanah)
    }
    tanahSebelumnya = tRandom
    return tRandom
}

function randomWaktu(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function munculkanTikus(){
    const tRandom = randomTanah(tanah)
    const wRandom = randomWaktu(300,1000)
    tRandom.classList.add('up')

    setTimeout(() => {
        tRandom.classList.remove('up')
        if(!selesai){
            munculkanTikus()
        }
    }, wRandom);
}


function startGame(){
    selesai = false;
    skor = 0;
    papanSkor.innerHTML = 0
    munculkanTikus();
    setTimeout(() => {
        selesai = true
    }, 10000);
}


function pukul(){
    skor++
    this.parentNode.classList.remove('up')
    papanSkor.innerHTML = skor
}

tikus.forEach(t => {
    t.addEventListener('click', pukul)
});