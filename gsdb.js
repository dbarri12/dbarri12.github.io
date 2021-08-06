function init() {
    Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9WiNrGjA-Uem8QQ5aRmV1Ea7HAYzfMsBDpPorTLDnP0ZccnYvYLM6b4pdEO-gc902-K4KsgqY19XY/pub?output=csv', {
        download: true,
        header: true,
        complete: function(results) {
            var data = results.data
            console.log(data)
        }
    })
}


function showInfo(data, Papa) {
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
