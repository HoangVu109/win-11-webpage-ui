
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
    console.log(d.toLocaleTimeString())
},1000)