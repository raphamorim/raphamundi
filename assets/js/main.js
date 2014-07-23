$(document).ready(function() {
    rmtrue = false;

	var logoStart = setInterval(function() {
    if (document.readyState === "complete") {
    	  $("#loaderContent").animate({ opacity: '0' }, 500);
    	  rmtrue = true;
	   	  clearInterval(logoStart);
    	}
	}, 10);

	var rmStart = setInterval(function menu(){
    if(rmtrue == true){
        $("#loadContent").fadeIn(500);
        clearInterval(rmtrue);
        }
    }, 800);

});
