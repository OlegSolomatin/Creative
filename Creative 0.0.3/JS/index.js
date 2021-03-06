function clock() {
    let date = new Date(),
        hou = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    document.getElementById('clock').innerHTML = hou+':'+min;
}
setInterval(clock, 10000);
clock();

function date() {
    let date = new Date(),
        dayOfTheWeek = date.getDay(),
        number = date.getDate();
    switch (dayOfTheWeek){
        case 1: document.getElementById('dayOfTheWeek').innerHTML = 'Пон';
        break;
        case 2: document.getElementById('dayOfTheWeek').innerHTML = 'Вт';
        break;
        case 3: document.getElementById('dayOfTheWeek').innerHTML = 'Ср';
        break;
        case 4: document.getElementById('dayOfTheWeek').innerHTML = 'Чт';
        break;
        case 5: document.getElementById('dayOfTheWeek').innerHTML = 'Пт';
        break;
        case 6: document.getElementById('dayOfTheWeek').innerHTML = 'Суб';
        break;
        default : document.getElementById('dayOfTheWeek').innerHTML = 'Вс';
    }
    document.getElementById('numberDay').innerHTML = number;
}
setInterval(date, 1000000)
date();

const getLevel = document.querySelector('#get-level');
const level = document.querySelector('#levelChange');

/*getLevel.addEventListener('click', async () => {
    if (!navigator.getBattery) {
        output.textContent = 'Battery manager is unsupported';
    } else {
        const manager = await navigator.getBattery();
        const level = Math.round(manager.level * 100);
        output.textContent = `Battery level: ${level} %`;
    }
});*/

function levelChange() {
    if (!navigator.getBattery) {
        level.textContent = '78';
    } else {
        battery.onlevelchange = () => {
            let getLevel = Math.round(manager.level * 100);
            document.querySelector('#levelChange').textContent = `${getLevel}`;
        }
    }
}
levelChange();

/*getLevel.addEventListener('click', async () => {
    if (!navigator.getBattery) {
        level.textContent = '78%';
    } else {
        battery.onlevelchange = () => {
            let getLevel = Math.round(manager.level * 100);
            document.querySelector('#levelChange').textContent = `${getLevel} %`;

            /!*if(battery.charging) {
                document.querySelector('#stateBattery').textContent =
                    "Charging time: " + (battery.chargingTime / 60);
            }
            else {
                document.querySelector('#stateBattery').textContent =
                    "Discharging time: " + (battery.dischargingTime / 60);
            }*!/
        };
    }

});*/

