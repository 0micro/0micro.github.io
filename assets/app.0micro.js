/*var container = document.getElementById('wrapper');var bar = new ProgressBar.Line(container, {strokeWidth: 4,easing: 'easeInOut',duration: 1400,color: '#FFEA82',trailColor: '#eee',trailWidth: 1,svgStyle: {width: '100%', height: '100%'},text: {style: {color: '#999',position: 'absolute',right: '0',top: '30px',padding: 0,margin: 0,transform: null},autoStyleContainer: false},from: {color: '#FFEA82'},to: {color: '#ED6A5A'},step: (state,bar) => {bar.setText(Math.round(bar.value() * 100) + ' %');}});*/


window.onload = function() {
  //bar.animate(1.0);
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
};
function faviconSetting() {
  var item = $('a');
  item.each(function() {
    var faviconUrl = $(this).attr('href');
    $(this).prepend('<img src="http://www.google.com/s2/favicons?domain=' + faviconUrl + '">')
  });
}
faviconSetting();
