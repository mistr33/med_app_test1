function redirectPage() { window.location = linkLocation; }

$(document).ready(function(){
	
	$("body").fadeIn(600);

	$('a').click(function(event) {
    if (this.href == "" || this.href == null) {
      event.preventDefault();
      return;
    }
    if ((this.href.indexOf("#") == -1) && (this.href.indexOf("mailto:") == -1) && (this.href.indexOf("javascript:") == -1) && (this.target != "_blank") && (this.href.indexOf("tel:"))) {
      event.preventDefault();
      linkLocation = this.href;
      $("body").fadeOut(400, redirectPage);
    }
  	});
	
	document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() { document.addEventListener("backbutton", onBackKeyDown, false); }
    function onBackKeyDown() { navigator.app.exitApp();}
	
	$('.reservation_alert').hide();
	$('.mail_alert').hide();

	menu_small();
		
	$('.menu_ico').hide().delay(500).show(900);
	
	$('#menu1, #menu2, #menu3, #menu4, #menu5, #menu6, #menu7').hide();
	$('.hide-navigation').hide();
	
	$('.deploy-navigation').click(function(){
		$('#menu1').delay(100).show(200);
		$('#menu2').delay(200).show(200);
		$('#menu3').delay(300).show(200);
		$('#menu4').delay(400).show(200);
		$('#menu5').delay(500).show(200);
		$('#menu6').delay(600).show(200);
		$('#menu7').delay(700).show(200);
		$('.deploy-navigation').hide();
		$('.hide-navigation').show();
	});
	
	$('.hide-navigation').click(function(){
		$('#menu1').delay(700).hide(200);
		$('#menu2').delay(600).hide(200);
		$('#menu3').delay(500).hide(200);
		$('#menu4').delay(400).hide(200);
		$('#menu5').delay(300).hide(200);
		$('#menu6').delay(200).hide(200);
		$('#menu7').delay(100).hide(200);	
		$('.deploy-navigation').show();
		$('.hide-navigation').hide();
		
	});
			
function menu_small() {
    
	$('.deployed-navigation').html('<a href="index.html" id="menu1" class="navigation-icon" data-transition="flip">HOME</a><a href="reservation.html" id="menu2" class="navigation-icon" data-transition="flip">Reservation</a><a href="news.html" id="menu3" class="navigation-icon" data-transition="flip">News</a><a href="about_us.html" id="menu4" class="navigation-icon" data-transition="flip">About us</a><a href="contact.html" id="menu5" class="navigation-icon" data-transition="flip">Contact</a><a href="#" onclick="navigator.app.loadUrl(\'http://goo.gl/maps/pMjt7\', {openExternal : true});" target="_blank" id="menu6" class="navigation-icon" data-transition="flip">Map</a><a href="tel:+11-111-111-111" id="menu7" class="navigation-icon" data-transition="flip">Call us</a>');
}			
});