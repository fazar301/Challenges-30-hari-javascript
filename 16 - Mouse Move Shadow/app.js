const h1 = document.querySelector('h1')
let x,y
window.addEventListener('mousemove', function(e){
    x = Math.floor((h1.offsetLeft + h1.offsetWidth / 2) - e.clientX)
    y = Math.floor((h1.offsetTop + h1.offsetHeight / 2) -  e.clientY)
    

    h1.style.textShadow = `rgba(255, 0, 255, 0.7) ${-x > 250 ? 250 : -x && -x < -250 ? -250 : -x }px ${-y}px 0px, 
                           rgba(0, 255, 255, 0.7) ${x > 250 ? 250 : x && x < -250 ? -250 : x }px ${-y}px 0px, 
                           rgba(0, 255, 0, 0.7) ${-y}px ${x > 250 ? 250 : x && x < -250 ? -250 : x}px 0px, 
                           rgba(0, 0, 255, 0.7) ${y}px ${-x > 250 ? 250 : -x && -x < -250 ? -250 : -x }px 0px`
})