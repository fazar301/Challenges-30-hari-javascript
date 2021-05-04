const defTime = document.querySelectorAll('.timer__button')

const ElementTimeLeft = document.querySelector('.display__time-left')
const ElementTimeEnd = document.querySelector('.display__end-time')
const form = document.getElementById('custom')
const input = document.querySelector('input')

form.addEventListener('submit', function(e){
  e.preventDefault()
  setCountDown(parseInt(input.value * 60))
  input.value = ''
})

defTime.forEach(e => e.addEventListener('click', () => setCountDown(parseInt(e.getAttribute('data-time')))))
let count;
function setCountDown(e){
  
  // menghapus seluruh interval sebelumnya
  clearInterval(count)
  
  const targetDate = new Date()
  const monthTarget = targetDate.toLocaleString('en-us', {month: 'short'})
  const countDownDate = new Date(`${monthTarget} ${targetDate.getDate()}, ${targetDate.getFullYear()} ${targetDate.getHours()}:${targetDate.getMinutes()}:${targetDate.getSeconds() + e + 2}`).getTime()
  const timeEnd = new Date(countDownDate)
  ElementTimeEnd.innerHTML = `Be back at ${timeEnd.getHours()}:${timeEnd.getMinutes()}`
  count = setInterval(() => countDown(countDownDate),1000)
}

function countDown(date) {
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = date - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + hours * 60;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    ElementTimeLeft.innerHTML = minutes + ":" + seconds;
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(count);
      ElementTimeLeft.innerHTML = "0:0";
      return
    }
}