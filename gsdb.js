
function init() {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/10oZNROHZCMIqLiNhrMR-oS7W7NGVID8OtpXShc1OYxQ/edit?usp=sharing',
                    callback: function(data, tabletop) { 
                      console.log(data)
                    },
                    simpleSheet: true } )

function showInfo(data, tabletop) {
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    $('.post').append( 
        '<div class="text">' 
        + '<h1>' + data[i].player-Name 
        + '<h1>' + data[i].low-ask-24
        + '<h1>' + data[i].circulation 
        + '<h1>' + data[i].percent-circulation
        + '<h1>' + data[i].low-ask 
        + '<h1>' + data[i].percent-change-4
        + '<h1>' + data[i].percent-change-24
        + '<h1>' + data[i].percent-change-7
        + '<h1>' + data[i].number-of-listings 
        + '<h1>' + data[i].percent-listed
        + '<h1>' + data[i].collector-score
        + '</div>');
    }
}

window.addEventListener('DOMContentLoaded', init)
