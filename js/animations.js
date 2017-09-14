function scrollTo(v) {
	console.log(v);
	$('html, body').animate({ scrollTop: $(v).offset().top}, 'slow');
    return false;
}

$(document).ready(function(){
	setupHeader();
	setupEducation();
	$(".arrow-down").click(function(){
		scrollTo("#education");
	});
});
function setupHeader(){
	$(".pages").children("span").each(function () {
    	$(this).click(function(){
    		scrollTo("#"+$(this).text());
    	});
	});
}
function setupEducation() {
	var trigger = new ScrollTrigger({
		toggle: {
        	visible: 'visible',
        	hidden: 'invisible'
		}
	}, document.body, window);
}