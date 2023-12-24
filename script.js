function updateClock () {

    //Analog Clock

    const now = new Date();

    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");

    const hourDeg = (hour % 12) *30 + (minute /2);
    const minuteDeg = minute * 6 + (second/10);
    const secondDeg = second *6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    //Digital Clock

    let hours = now.getHours();
    let minutes = now.getMinutes();

    const ampm = hours >=12 ? 'PM' : 'AM';

    const timeContainer = document.getElementById('time-container');

    hours = hours % 12;

    hours = hours ? hours : 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;

    const currentTime = `${hours}:${minutes} ${ampm}`;

    timeContainer.textContent = currentTime;

}

setInterval(updateClock, 1000);
updateClock();