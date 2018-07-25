
var timeout = 3; 
function getStats(){
  $.ajax({
    url: "https://radioadmin.asylum.one/status-json.xsl",
    success: function( response ) {
        $('#song-artist').text(response.icestats.source.artist)
        $('#song-title').text(response.icestats.source.title)
//        $('#server-title').text(response.icestats.source.server_name)
        $('#listener_peak').text(response.icestats.source.listener_peak)
        $('#listeners').text(response.icestats.source.listeners)
        document.title = (response.icestats.source.artist || 'Unknown') + ' - ' + (response.icestats.source.title || 'Unknown') 
    }
  });
}
getStats();
setInterval(getStats, timeout * 1000);
