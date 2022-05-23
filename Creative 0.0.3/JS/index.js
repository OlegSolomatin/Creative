function clock() {
    let date = new Date(),
        hou = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    document.getElementById('clock').innerHTML = hou+':'+min;
}
setInterval(clock, 10000);
clock();