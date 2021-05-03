const [...li] = document.querySelectorAll('li[data-time]')

const [...data] = li.map(e => e.getAttribute('data-time'))

const min = data.map(e => parseInt(e.substr(0,2))).reduce((a,b) => a + b)
let sec = data.map(e => parseInt(e.substr(e.length-2,e.length))).reduce((a,b) => a + b)
sec += min * 60


function format(time) {   
  // Hours, minutes and seconds
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = ~~time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";
  if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}

console.log(format(sec));