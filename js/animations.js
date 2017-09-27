function scrollTo(v) {
	console.log(v);
	$('html, body').animate({ scrollTop: $(v).offset().top}, 'slow');
    return false;
}

$(document).ready(function(){
	setupHeader();
	$(".fa-angle-double-down").click(function(){
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