window.onload = clock();
function clock() {
  let toDigit = function(num) {
    let digit;
    if (num < 10) {
      digit = '0' + num;
    } else {
      digit = num;
    }
    return digit;
  };

  let months = new Array(
      'JUN.', 'FEB.', 'MAR.', 'APR.', 'MAY.', 'JUN.', 'JUL.', 'AUG.', 'SEP.',
      'OCT.', 'NOV.', 'DEC.');
  let weeks = new Array('SUN.', 'MON.', 'TUE.', 'WED.', 'THU.', 'FRI.', 'SAT.');
  let meridians = new Array('a.m.', 'p.m.');
  let timeZone = 'JST';

  let now = new Date();

  let year = now.getFullYear();
  let month = months[now.getMonth()];
  let date = toDigit(now.getDate());
  let day = weeks[now.getDay()];
  let meridian = meridians[Math.floor(now.getHours() / 12)];
  let h = now.getHours();
  let hours = toDigit(h < 12 ? h : h - 12);
  let miniutes = toDigit(now.getMinutes());
  let seconds = toDigit(now.getSeconds());

  document.getElementById('clock_date').innerHTML =
      day + ', ' + month + ' ' + date + ', ' + year;

  document.getElementById('clock_time').innerHTML = 'at ' + hours + ':' +
      miniutes + ':' + seconds + ' ' + meridian + ' ' + timeZone;
}

setInterval(clock, 1000);
