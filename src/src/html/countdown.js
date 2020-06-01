function Timer(duration, display) 
{
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt((timer /3600)%24, 10)
        minutes = parseInt((timer / 60)%60, 10)
        seconds = parseInt(timer % 60, 10);

		hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(hours +":"+minutes + ":" + seconds);

				--timer;
    }, 1000);
}

jQuery(function ($) 
{
    var twentyFourHours = 24 * 60 * 60;
    var display = $('#remainingTime');
    Timer(twentyFourHours, display);
});
