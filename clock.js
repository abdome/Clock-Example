setInterval(setClock,100);
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
function setClock()
{
    // get full date
    const currentDate = new Date();
    // divide by 60 to get ration for rotate
    const second =currentDate.getSeconds()/60;
    const minute =(second+currentDate.getMinutes())/60;
    const hour = (minute + currentDate.getHours())/12;
    setRotation(hourHand,hour);
    setRotation(minuteHand,minute);
    setRotation(secondHand,second);
}
function setRotation(elem,rotationRatio)
{
    elem.style.setProperty('--rotation',rotationRatio*360);
}

// call it for refresh to be  exactly
setClock();