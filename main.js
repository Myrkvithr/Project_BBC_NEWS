//--------- let remain_bv = 15144;
let remain_bv = 20;

function parseTime_bv(timestamp) {
    if (timestamp < 0) timestamp = 0;

    let day = Math.floor((timestamp / 60 / 60) / 24);
    let hour = Math.floor(timestamp / 60 / 60);
    let mins = Math.floor((timestamp - hour * 60 * 60) / 60);
    let secs = Math.floor(timestamp - hour * 60 * 60 - mins * 60);
    let left_hour = Math.floor((timestamp - day * 24 * 60 * 60) / 60 / 60);

    $('span.afss_day_bv').text(day);
    $('span.afss_hours_bv').text(left_hour);

    if (String(hour).length > 1)
        $('span.afss_hour_bv').text(hour);
    else
        $('span.afss_hours_bv').text("0" + hour);

    if (String(mins).length > 1)
        $('span.afss_mins_bv').text(mins);
    else
        $('span.afss_mins_bv').text("0" + mins);
    if (String(secs).length > 1)
        $('span.afss_secs_bv').text(secs);
    else
        $('span.afss_secs_bv').text("0" + secs);

}

$(document).ready(function () {
    setInterval(function () {
        remain_bv = remain_bv - 1;
        parseTime_bv(remain_bv);
        if (remain_bv <= 0) {
            $('.timer__item').css('background', '#B80000');
            $('.timer__item-num').css('color', '#fff');
            $('.timer__item-interval').css('color', '#fff');
        }
    }, 1000);
});
