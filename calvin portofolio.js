function changeColor() {
    let textElement = document.getElementById('text');

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  

    textElement.style.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  }
  
  alert ('Halo,Saya Calvin. Selamat Datang Di Website Sederhana Saya!')