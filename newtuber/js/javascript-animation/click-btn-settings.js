var setting = $(".settings-show-menu");
let settingsBtn = $(".settings-button");
let show = false;



settingsBtn.click(function(){

	if(!show){ 
		setting.show(200); show = true; 
		settingsBtn.css("background", "#ff2225");
		document.body.style.overflow = 'hidden';
	}
	else { 
		setting.hide(200); show = false; 
		settingsBtn.css("background", "rgba(174, 30, 41, 0.8)");
		document.body.style.overflow = 'auto';
	}
	
});