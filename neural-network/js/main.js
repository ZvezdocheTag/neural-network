

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('head-anim'), {
    dotColor: '#2b2b2b',
    lineColor: '#2b2b2b'
  });
  var intro = document.getElementById('head-anim__inner');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('footer'), {
    dotColor: '#2b2b2b',
    lineColor: '#2b2b2b'
  });
  var intro = document.getElementById('head-anim__inner');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

