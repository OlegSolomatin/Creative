let date = new Date(),
    hou = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

setInterval(function (){
    console.log(hou+':'+min+':'+sec);
}, 1000);