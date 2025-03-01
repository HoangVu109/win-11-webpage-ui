//document.addEventListener('contextmenu', event => {event.preventDefault(); console.log('Right mouse blocked')});

var time = document.getElementById('current-time')
var date = document.getElementById('current-date')
setInterval(()=>{
    var d = new Date();
    time.innerHTML = d.toLocaleTimeString()
    date.innerHTML = new Intl.DateTimeFormat('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
  }).format(d);
},1000)

const modal = document.getElementById("start-form");
const m = document.getElementById('startModal')
const startButton = document.getElementById('startButton')
// Lắng nghe sự kiện click trên cửa sổ (window)
window.onclick = function (event) {
    console.log(modal.contains(event.target));
    if(event.target == startButton || startButton.contains(event.target)) return;
    else if (event.target != modal && !modal.contains(event.target)) {
        m.style.setProperty('display','none')
    }

}

function showStart() {
  value = m.style.getPropertyValue('display')
  console.log(value + (value == 'flex'));
  
  if(value === 'flex') {
    m.style.setProperty('display','none')
  } else {
    m.style.setProperty('display','flex')
  }
   
}

function openUrl(url) {
  window.open(url, '_blank');
}