const video = document.querySelector('video')

const buttonPlay = document.querySelector('[title="Toggle Play"]')
const skip = document.querySelectorAll('.player__button[data-skip]')

const speed = document.querySelector('input[name="playbackRate"]')
const volumes = document.querySelector('input[name="volume"]')

const progress = document.querySelector('.progress')
const progFill = document.querySelector('.progress__filled')

skip.forEach(e => e.addEventListener('click', function(){
    video.currentTime += parseInt(e.getAttribute('data-skip'))
}))

buttonPlay.addEventListener('click',function(){
    if(this.textContent === '❚ ❚'){
        video.pause()
        this.textContent = '►'
    }else{
        video.play()
        this.textContent = '❚ ❚'
    }
})

speed.addEventListener('input', speedVid)
function speedVid(){
    video.playbackRate = speed.value
}

volumes.addEventListener('input',setVol)

function setVol(){
    video.volume = volumes.value
}

progress.addEventListener('click',progrest)
video.addEventListener('timeupdate', progrest)

function progrest(e){
    const persen = (video.currentTime / video.duration) * 100
    progFill.style.flexBasis = persen + '%'
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration
}