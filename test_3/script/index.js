var background = [
	'bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg'
];
var background_prefix = 'img/';
var bg_change_interval = 1 * 60; // 10 minutes
var bg_selector = '#background';
var track_info_update_interval = 3; // 3 seconds
var track_info_url = 'https://radioadmin.asylum.one/status-json.xsl';

function get_background() {
	return background_prefix + background[Math.floor(Math.random() * background.length)];
};
function update_background() {
	$(bg_selector)[0].style.background='url(\'' + get_background() + '\')';
}

function update_track_info() {
  $.ajax({
    'url': "http://radioadmin.asylum.one/status-json.xsl",
    success: function( response ) {
        $('#song-artist').text(response.icestats.source.artist);
        $('#song-title').text(response.icestats.source.title);
        $('#listener_peak').text(response.icestats.source.listener_peak);
        $('#listeners').text(response.icestats.source.listeners);
        document.title = (response.icestats.source.artist || 'Unknown') + ' - ' + (response.icestats.source.title || 'Unknown');
    }});
};


var last_bg_update = null;
var last_info_update = null;
function mainloop() {
	if(!last_bg_update) {
		last_bg_update = new Date().getTime();
	}
	if(last_bg_update <= new Date().getTime()) {
		update_background();
		last_bg_update += bg_change_interval * 1000;
	}
	if(!last_info_update) {
		last_info_update = new Date().getTime();
	}
	if(last_info_update <= new Date().getTime()) {
		update_background();
		last_info_update += track_info_update_interval * 1000;
	}
}
